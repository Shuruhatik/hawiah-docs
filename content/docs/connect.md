---
title: connect()
description: Establishes a connection to the database using the configured driver.
category: Connection
signature: "connect(): Promise<void>"
returnValue: "Promise<void>"
relatedMethods: ["disconnect", "isActive"]
---

# db.connect()

Establishes a connection to the database using the configured driver.

## Signature

```typescript
connect(): Promise<void>
```

## Description

The `connect()` method initializes and establishes a connection to your database. This must be called before performing any database operations.

## Examples

### JSONDriver

```javascript
const { Hawiah } = require('@hawiah/core');
const { JSONDriver } = require('@hawiah/local');

const driver = new JSONDriver('./data/users.json');
const db = new Hawiah({ driver });

await db.connect();
console.log('Connected to JSON file');
```

### SQLiteDriver

```javascript
const { Hawiah } = require('@hawiah/core');
const { SQLiteDriver } = require('@hawiah/sqlite');

const driver = new SQLiteDriver('./app.db', 'users');
const db = new Hawiah({ driver });

await db.connect();
console.log('Connected to SQLite database');
```

### MongoDriver

```javascript
const { Hawiah } = require('@hawiah/core');
const { MongoDriver } = require('@hawiah/mongo');

const driver = new MongoDriver({
  uri: 'mongodb://localhost:27017',
  databaseName: 'myapp',
  collectionName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
console.log('Connected to MongoDB');
```

### MySQLDriver

```javascript
const { Hawiah } = require('@hawiah/core');
const { MySQLDriver } = require('@hawiah/mysql');

const driver = new MySQLDriver({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb'
}, 'users');
const db = new Hawiah({ driver });

await db.connect();
console.log('Connected to MySQL');
```

## Error Handling

```javascript
try {
  await db.connect();
  console.log('Successfully connected');
} catch (error) {
  console.error('Connection failed:', error);
}
```

## Notes

- Must be called before any database operations
- Can be called multiple times safely (will not reconnect if already connected)
- Different drivers may have different connection requirements

## Return Value

Returns a `Promise<void>` that resolves when the connection is established.

## Related Methods

- [disconnect()](/docs/disconnect) - Close the database connection
- [isActive()](/docs/isActive) - Check connection status
