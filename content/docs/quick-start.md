---
title: Quick Start
description: Learn the basics of Hawiah in under 5 minutes with practical examples.
category: Getting Started
---

# Quick Start

Learn the basics of Hawiah in under 5 minutes.

## What Makes Hawiah Special?

Hawiah is not just another ORM. It offers:

- **Modular Architecture** - Install only what you need
- **Multiple Drivers** - JSON, YAML, SQLite, MongoDB, Firebase, PostgreSQL, MySQL
- **Virtual Relationships** - Create relationships between instances with DataLoader batching
- **50+ Methods** - Complete CRUD and advanced operations
- **TypeScript Ready** - Full type safety

## Installation

```bash
# Install core package
npm install hawiah

# Install a driver (example: JSON)
npm install @hawiah/local

# For relationships (optional)
npm install dataloader
```

## Basic Usage

### 1. JSONDriver - Local JSON Files

Perfect for development, testing, and small applications.

```javascript
import { Hawiah } from 'hawiah';
import { JSONDriver } from '@hawiah/local';

// Create driver
const driver = new JSONDriver('./data/users.json');

// Create Hawiah instance
const db = new Hawiah({ driver });

// Connect
await db.connect();

// Insert data
await db.insert({ id: 1, name: 'Ahmed', age: 25 });

// Query data
const users = await db.get({});
console.log(users);

// Disconnect
await db.disconnect();
```

### 2. YAMLDriver - Local YAML Files

Great for configuration files and structured content.

```javascript
import { Hawiah } from 'hawiah';
import { YAMLDriver } from '@hawiah/local';

const driver = new YAMLDriver('./data/config.yaml');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, setting: 'theme', value: 'dark' });
const settings = await db.get({});
await db.disconnect();
```

### 3. SQLiteDriver - SQLite Database

Ideal for desktop applications and embedded systems.

```javascript
import { Hawiah } from 'hawiah';
import { SQLiteDriver } from '@hawiah/sqlite';

// First parameter: database file path
// Second parameter: table name
const driver = new SQLiteDriver('./data/app.db', 'users');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, username: 'ahmed', email: 'ahmed@test.com' });
const users = await db.get({});
await db.disconnect();
```

### 4. MongoDriver - MongoDB

Perfect for web applications and scalable systems.

```javascript
import { Hawiah } from 'hawiah';
import { MongoDriver } from '@hawiah/mongo';

const driver = new MongoDriver({
  uri: 'mongodb+srv://user:pass@cluster.mongodb.net/',
  databaseName: 'myDatabase',
  collectionName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, name: 'Ahmed', email: 'ahmed@test.com' });
const users = await db.get({});
await db.disconnect();
```

### 5. FirebaseDriver - Firebase Firestore

Great for real-time applications and mobile apps.

```javascript
import { Hawiah } from 'hawiah';
import { FirebaseDriver } from '@hawiah/firebase';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const driver = new FirebaseDriver({
  firebaseConfig: firebaseConfig,
  collectionName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, name: 'Ahmed' });
const users = await db.get({});
await db.disconnect();
```

### 6. PostgreSQLDriver - PostgreSQL

Enterprise-grade database for complex applications.

```javascript
import { Hawiah } from 'hawiah';
import { PostgreSQLDriver } from '@hawiah/postgres';

const driver = new PostgreSQLDriver({
  connectionString: 'postgresql://user:pass@host:5432/database',
  tableName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, name: 'Ahmed', email: 'ahmed@test.com' });
const users = await db.get({});
await db.disconnect();
```

### 7. MySQLDriver - MySQL

Popular choice for web applications and CMS.

```javascript
import { Hawiah } from 'hawiah';
import { MySQLDriver } from '@hawiah/mysql';

// First parameter: connection config
// Second parameter: table name
const driver = new MySQLDriver({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  port: 3306
}, 'users');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, name: 'Ahmed', email: 'ahmed@test.com' });
const users = await db.get({});
await db.disconnect();
```

## CRUD Operations

### Insert Data

```javascript
// Insert single record
await db.insert({ id: 1, name: 'Ahmed', age: 25 });

// Insert multiple records
await db.insertMany([
  { id: 1, name: 'Ahmed', age: 25 },
  { id: 2, name: 'Fatima', age: 30 }
]);

// Save (insert or update)
await db.save({ id: 1 }, { name: 'Ahmed', age: 26 });
```

### Read Data

```javascript
// Get all records
const all = await db.get({});

// Get with filter
const filtered = await db.get({ age: 25 });

// Get one record
const one = await db.getOne({ id: 1 });

// Get by ID
const byId = await db.getById(1);

// Get by field
const byField = await db.getBy('city', 'Riyadh');

// Get all records
const all2 = await db.getAll();

// First record
const first = await db.first();

// Last record
const last = await db.last();

// Random record
const random = await db.random(1);
```

### Update Data

```javascript
// Update records
await db.update({ age: 25 }, { age: 26 });

// Update one record
await db.updateOne({ id: 1 }, { age: 26 });

// Update by ID
await db.updateById(1, { age: 26 });

// Increment value
await db.increment({ id: 1 }, 'age', 1);

// Decrement value
await db.decrement({ id: 1 }, 'age', 1);
```

### Delete Data

```javascript
// Remove records
await db.remove({ age: 25 });

// Remove one record
await db.removeOne({ id: 1 });

// Remove by ID
await db.removeById(1);

// Clear all
await db.clear();
```

## Advanced Operations

### Search and Filter

```javascript
// Check existence
const exists = await db.has({ id: 1 });

// Check by field
const hasField = await db.hasBy('email', 'test@test.com');

// Check by ID
const hasId = await db.hasId(1);

// Count records
const count = await db.count({});

// Count with filter
const countFiltered = await db.count({ age: 25 });

// Count by field
const countBy = await db.countBy('city', 'Riyadh');

// Check if empty
const empty = await db.isEmpty();
```

### Sorting and Filtering

```javascript
// Sort
const sorted = await db.sort({}, 'age', 'asc');

// Select specific fields
const selected = await db.select({}, ['name', 'age']);

// Get unique values
const unique = await db.unique('city');

// Group by field
const grouped = await db.group('city');

// Paginate
const page = await db.paginate({}, 1, 10);
// Returns: { data: [...], page: 1, pageSize: 10, total: 50, totalPages: 5 }

// Sum
const sum = await db.sum('salary');
```

### Array Operations

```javascript
// Push to array
await db.push({ id: 1 }, 'tags', 'javascript');

// Pull from array
await db.pull({ id: 1 }, 'tags', 'javascript');

// Unshift (add to beginning)
await db.unshift({ id: 1 }, 'tags', 'nodejs');

// Shift (remove first)
await db.shift({ id: 1 }, 'tags');

// Pop (remove last)
await db.pop({ id: 1 }, 'tags');
```

### Field Operations

```javascript
// Remove field
await db.unset({ id: 1 }, 'oldField');

// Rename field
await db.rename({ id: 1 }, 'oldName', 'newName');
```

## Driver Comparison

| Driver | Type | Server? | Speed | Complexity | Use Case |
|--------|------|---------|-------|------------|----------|
| **JSON** | File | ❌ | ⭐⭐⭐ | ⭐ | Dev/Test |
| **YAML** | File | ❌ | ⭐⭐⭐ | ⭐ | Config |
| **SQLite** | SQL | ❌ | ⭐⭐⭐⭐ | ⭐⭐ | Desktop |
| **MongoDB** | NoSQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Web/Cloud |
| **Firebase** | NoSQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐ | Mobile/RT |
| **PostgreSQL** | SQL | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Enterprise |
| **MySQL** | SQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Web |

## Virtual Relationships

Create relationships between different Hawiah instances:

```javascript
const Users = new Hawiah({ driver: new JSONDriver('./users.json') });
const Posts = new Hawiah({ driver: new JSONDriver('./posts.json') });

await Users.connect();
await Posts.connect();

// Define relationships
Users.relation('posts', Posts, '_id', 'userId', 'many');
Posts.relation('user', Users, 'userId', '_id', 'one');

// Fetch with relationships
const user = await Users.getOneWith({ _id: 1 }, 'posts');
console.log(user.posts); // Array of user's posts

const posts = await Posts.getWith({}, 'user');
posts.forEach(post => console.log(post.user.name));
```

Learn more: [Virtual Relationships](/docs#virtual-relationships)

## What's Next?

Explore the full API documentation:

- **Connection**: [connect()](/docs=connect), [disconnect()](/docs=disconnect), [isActive()](/docs=isActive)
- **Insert**: [insert()](/docs=insert), [insertMany()](/docs=insertMany), [save()](/docs=save)
- **Query**: [get()](/docs=get), [getOne()](/docs=getOne), [getAll()](/docs=getAll), [getById()](/docs=getById), [getBy()](/docs=getBy)
- **Update**: [update()](/docs=update), [updateOne()](/docs=updateOne), [updateById()](/docs=updateById)
- **Remove**: [remove()](/docs=remove), [removeOne()](/docs=removeOne), [removeById()](/docs=removeById), [clear()](/docs=clear)
- **Advanced**: [paginate()](/docs=paginate), [sort()](/docs=sort), [group()](/docs=group), [select()](/docs=select), [unique()](/docs=unique)
- **Arrays**: [push()](/docs=push), [pull()](/docs=pull), [shift()](/docs=shift), [unshift()](/docs=unshift), [pop()](/docs=pop)
- **Numeric**: [increment()](/docs=increment), [decrement()](/docs=decrement), [sum()](/docs=sum)
- **Fields**: [unset()](/docs=unset), [rename()](/docs=rename)
- **Utility**: [first()](/docs=first), [last()](/docs=last), [isEmpty()](/docs=isEmpty), [random()](/docs=random), [count()](/docs=count), [has()](/docs=has)

