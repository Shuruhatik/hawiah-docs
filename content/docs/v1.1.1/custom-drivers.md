---
title: Custom Drivers
description: Learn how to create your own custom database drivers for Hawiah.
category: Advanced
---

# Custom Drivers

Hawiah's modular architecture allows you to create custom drivers for any database or storage system.

## Driver Interface

All drivers <mark>must implement</mark> the `IDriver` interface:

```typescript
/**
 * Query interface for filtering data
 */
export interface Query {
  [key: string]: any;
}

/**
 * Data interface for storing information
 */
export interface Data {
  [key: string]: any;
}

/**
 * Driver interface that all database drivers must implement
 */
export interface IDriver {
  /**
   * Connect to the database
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  disconnect(): Promise<void>;

  /**
   * Set/Insert data into the database
   * @param data - The data to store
   * @returns The stored data with any additional fields (like auto-generated IDs)
   */
  set(data: Data): Promise<Data>;

  /**
   * Get data from the database based on query
   * @param query - The query to filter data
   * @returns Array of matching records
   */
  get(query: Query): Promise<Data[]>;

  /**
   * Update data in the database
   * @param query - The query to find records to update
   * @param data - The new data to set
   * @returns Number of updated records
   */
  update(query: Query, data: Data): Promise<number>;

  /**
   * Delete data from the database
   * @param query - The query to find records to delete
   * @returns Number of deleted records
   */
  delete(query: Query): Promise<number>;

  /**
   * Get a single record from the database
   * @param query - The query to filter data
   * @returns A single matching record or null
   */
  getOne(query: Query): Promise<Data | null>;

  /**
   * Check if a record exists
   * @param query - The query to check
   * @returns True if exists, false otherwise
   */
  exists(query: Query): Promise<boolean>;

  /**
   * Count records matching the query
   * @param query - The query to filter data
   * @returns Number of matching records
   */
  count(query: Query): Promise<number>;

  /**
   * Database type (sql or nosql)
   * Used to determine schema behavior
   */
  dbType?: 'sql' | 'nosql';

  /**
   * Optional: Set schema for the driver to use (e.g. for creating SQL tables)
   */
  setSchema?(schema: any): void;
}
```

## Creating a Custom Driver

### Example: Redis Driver

```javascript
import { IDriver } from 'hawiah';
import redis from 'redis';

class RedisDriver {
  constructor(config) {
    this.config = config;
    this.client = null;
    this.prefix = config.prefix || 'hawiah:';
  }

  async connect() {
    this.client = redis.createClient(this.config);
    await this.client.connect();
  }

  async disconnect() {
    if (this.client) {
      await this.client.quit();
    }
  }

  async set(data) {
    const id = data._id || Date.now().toString();
    const key = `${this.prefix}${id}`;
    const record = { ...data, _id: id };
    
    await this.client.set(key, JSON.stringify(record));
    return record;
  }

  async get(query) {
    const keys = await this.client.keys(`${this.prefix}*`);
    const records = [];
    
    for (const key of keys) {
      const data = await this.client.get(key);
      const record = JSON.parse(data);
      
      if (this.matchesQuery(record, query)) {
        records.push(record);
      }
    }
    
    return records;
  }

  async getOne(query) {
    const records = await this.get(query);
    return records.length > 0 ? records[0] : null;
  }

  async update(query, data) {
    const records = await this.get(query);
    let count = 0;
    
    for (const record of records) {
      const updated = { ...record, ...data };
      const key = `${this.prefix}${record._id}`;
      await this.client.set(key, JSON.stringify(updated));
      count++;
    }
    
    return count;
  }

  async delete(query) {
    const records = await this.get(query);
    let count = 0;
    
    for (const record of records) {
      const key = `${this.prefix}${record._id}`;
      await this.client.del(key);
      count++;
    }
    
    return count;
  }

  async exists(query) {
    const record = await this.getOne(query);
    return record !== null;
  }

  async count(query) {
    const records = await this.get(query);
    return records.length;
  }

  matchesQuery(record, query) {
    for (const key in query) {
      if (record[key] !== query[key]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = { RedisDriver };
```

### Using Your Custom Driver

```javascript
import { Hawiah } from 'hawiah';
import { RedisDriver } from './RedisDriver';

const driver = new RedisDriver({
  host: 'localhost',
  port: 6379,
  prefix: 'myapp:'
});

const db = new Hawiah({ driver });

await db.connect();
await db.insert({ name: 'Ahmed', role: 'Admin' });
const users = await db.get({});
await db.disconnect();
```

## Example: LocalStorage Driver (Browser)

```javascript
class LocalStorageDriver {
  constructor(storageKey = 'hawiah_db') {
    this.storageKey = storageKey;
    this.data = [];
  }

  async connect() {
    const stored = localStorage.getItem(this.storageKey);
    this.data = stored ? JSON.parse(stored) : [];
  }

  async disconnect() {
    this.save();
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  async set(data) {
    const id = data._id || Date.now();
    const record = { ...data, _id: id };
    this.data.push(record);
    this.save();
    return record;
  }

  async get(query) {
    return this.data.filter(record => 
      this.matchesQuery(record, query)
    );
  }

  async getOne(query) {
    return this.data.find(record => 
      this.matchesQuery(record, query)
    ) || null;
  }

  async update(query, data) {
    let count = 0;
    this.data = this.data.map(record => {
      if (this.matchesQuery(record, query)) {
        count++;
        return { ...record, ...data };
      }
      return record;
    });
    this.save();
    return count;
  }

  async delete(query) {
    const before = this.data.length;
    this.data = this.data.filter(record => 
      !this.matchesQuery(record, query)
    );
    this.save();
    return before - this.data.length;
  }

  async exists(query) {
    return this.data.some(record => 
      this.matchesQuery(record, query)
    );
  }

  async count(query) {
    return this.data.filter(record => 
      this.matchesQuery(record, query)
    ).length;
  }

  matchesQuery(record, query) {
    for (const key in query) {
      if (record[key] !== query[key]) {
        return false;
      }
    }
    return true;
  }
}
```

## Example: REST API Driver

```javascript
class RestAPIDriver {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async connect() {
    // Test connection
    const response = await fetch(`${this.baseURL}/health`);
    if (!response.ok) {
      throw new Error('API connection failed');
    }
  }

  async disconnect() {
    // Nothing to do for REST API
  }

  async set(data) {
    const response = await fetch(`${this.baseURL}/records`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

  async get(query) {
    const params = new URLSearchParams(query);
    const response = await fetch(`${this.baseURL}/records?${params}`);
    return await response.json();
  }

  async getOne(query) {
    const records = await this.get(query);
    return records.length > 0 ? records[0] : null;
  }

  async update(query, data) {
    const response = await fetch(`${this.baseURL}/records`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, data })
    });
    const result = await response.json();
    return result.count;
  }

  async delete(query) {
    const params = new URLSearchParams(query);
    const response = await fetch(`${this.baseURL}/records?${params}`, {
      method: 'DELETE'
    });
    const result = await response.json();
    return result.count;
  }

  async exists(query) {
    const count = await this.count(query);
    return count > 0;
  }

  async count(query) {
    const params = new URLSearchParams(query);
    const response = await fetch(`${this.baseURL}/records/count?${params}`);
    const result = await response.json();
    return result.count;
  }
}
```

## Driver Best Practices

### 1. Error Handling

```javascript
async connect() {
  try {
    this.client = await createConnection(this.config);
  } catch (error) {
    throw new Error(`Connection failed: ${error.message}`);
  }
}
```

### 2. Connection Pooling

```javascript
constructor(config) {
  this.pool = createPool({
    min: config.minConnections || 2,
    max: config.maxConnections || 10
  });
}
```

### 3. Query Optimization

```javascript
async get(query) {
  // Use indexes when available
  if (query._id) {
    return this.getById(query._id);
  }
  
  // Optimize common queries
  if (Object.keys(query).length === 0) {
    return this.getAll();
  }
  
  // General query
  return this.executeQuery(query);
}
```

### 4. Transaction Support

```javascript
async update(query, data) {
  const transaction = await this.beginTransaction();
  
  try {
    const count = await this.executeUpdate(query, data, transaction);
    await transaction.commit();
    return count;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}
```

## Testing Your Driver

```javascript
import { Hawiah } from 'hawiah';
import { MyCustomDriver } from './MyCustomDriver';

describe('MyCustomDriver', () => {
  let db;

  beforeEach(async () => {
    const driver = new MyCustomDriver(config);
    db = new Hawiah({ driver });
    await db.connect();
  });

  afterEach(async () => {
    await db.clear();
    await db.disconnect();
  });

  test('should insert and retrieve data', async () => {
    await db.insert({ name: 'Test' });
    const records = await db.get({});
    expect(records).toHaveLength(1);
    expect(records[0].name).toBe('Test');
  });

  test('should update data', async () => {
    await db.insert({ name: 'Test', status: 'pending' });
    await db.update({ name: 'Test' }, { status: 'active' });
    const record = await db.getOne({ name: 'Test' });
    expect(record.status).toBe('active');
  });

  test('should delete data', async () => {
    await db.insert({ name: 'Test' });
    await db.remove({ name: 'Test' });
    const records = await db.get({});
    expect(records).toHaveLength(0);
  });
});
```

## Publishing Your Driver

### Package Structure

```
my-hawiah-driver/
├── src/
│   └── index.js
├── test/
│   └── driver.test.js
├── package.json
├── README.md
└── LICENSE
```

### package.json

```json
{
  "name": "@hawiah/my-driver",
  "version": "1.0.0",
  "description": "My custom driver for Hawiah",
  "main": "src/index.js",
  "keywords": ["hawiah", "database", "driver"],
  "peerDependencies": {
    "hawiah": "^1.0.0"
  }
}
```

## Community Drivers

Share your custom drivers with the community:

1. Publish to npm with `@hawiah/` prefix (if approved)
2. Add to [Hawiah Drivers Registry](https://github.com/Shuruhatik/hawiah-drivers)
3. Include comprehensive documentation
4. Add tests and examples

## Related Topics

- [Database Drivers](/docs#drivers) - Official drivers
- [API Reference](/docs#api-reference) - Complete API
- [Quick Start](/docs#quick-start) - Getting started guide
