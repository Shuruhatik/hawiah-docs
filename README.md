# 🚀 Hawiah - Modular Database Abstraction Layer

A lightweight, modular database abstraction layer with unified API. Support for JSON, YAML, SQLite, MongoDB, Firebase, PostgreSQL, and MySQL.

## ✨ Features

- 🔌 **Modular Architecture** - Install only what you need
- 🎯 **Unified API** - Same code, different databases
- 📦 **Multiple Drivers** - JSON, YAML, SQLite, MongoDB, Firebase, PostgreSQL, MySQL
- 🔄 **Easy Switching** - Change drivers without changing code
- 💪 **TypeScript Support** - Full type safety
- 🚀 **50+ Methods** - Complete CRUD and advanced operations

## 📦 Installation

```bash
# Install core package (required)
npm install @hawiah/core

# Install a driver (choose one or more)
npm install @hawiah/local      # JSON & YAML
npm install @hawiah/sqlite     # SQLite
npm install @hawiah/mongo      # MongoDB
npm install @hawiah/firebase   # Firebase Firestore
npm install @hawiah/postgres   # PostgreSQL
npm install @hawiah/mysql      # MySQL
```

## 🚀 Quick Start

### JSONDriver - Local JSON Files

```javascript
const { Hawiah } = require('@hawiah/core');
const { JSONDriver } = require('@hawiah/local');

const driver = new JSONDriver('./data/users.json');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ id: 1, name: 'Ahmed', age: 25 });
const users = await db.get({});
await db.disconnect();
```

### MongoDriver - MongoDB

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
await db.insert({ name: 'Ahmed', email: 'ahmed@test.com' });
const users = await db.get({});
await db.disconnect();
```

### SQLiteDriver - SQLite

```javascript
const { Hawiah } = require('@hawiah/core');
const { SQLiteDriver } = require('@hawiah/sqlite');

const driver = new SQLiteDriver('./app.db', 'users');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ username: 'ahmed', email: 'ahmed@test.com' });
const users = await db.get({});
await db.disconnect();
```

## 📚 API Methods

### CRUD Operations

```javascript
// Insert
await db.insert({ name: 'Ahmed', age: 25 });
await db.insertMany([{ name: 'Sara' }, { name: 'Ali' }]);

// Read
const all = await db.getAll();
const filtered = await db.get({ age: 25 });
const one = await db.getOne({ id: 1 });
const byId = await db.getById(1);

// Update
await db.update({ age: 25 }, { age: 26 });
await db.updateById(1, { age: 26 });
await db.save({ id: 1 }, { name: 'Ahmed', age: 26 });

// Delete
await db.remove({ age: 25 });
await db.removeById(1);
await db.clear();
```

### Advanced Operations

```javascript
// Pagination
const page = await db.paginate({}, 1, 10);

// Sorting
const sorted = await db.sort({}, 'age', 'asc');

// Grouping
const groups = await db.group('role');

// Counting
const count = await db.count({ role: 'Admin' });

// Unique values
const roles = await db.unique('role');
```

### Array Operations

```javascript
await db.push({ id: 1 }, 'tags', 'javascript');
await db.pull({ id: 1 }, 'tags', 'javascript');
await db.shift({ id: 1 }, 'items');
await db.pop({ id: 1 }, 'items');
await db.unshift({ id: 1 }, 'items', 'new-item');
```

### Numeric Operations

```javascript
await db.increment({ id: 1 }, 'views', 1);
await db.decrement({ id: 1 }, 'stock', 5);
const total = await db.sum('salary');
```

## 🔄 Switching Drivers

One of Hawiah's key features is the ability to switch drivers without changing your application code:

```javascript
// Development - use JSON
const devDriver = new JSONDriver('./dev-data.json');
const devDb = new Hawiah({ driver: devDriver });

// Production - use MongoDB
const prodDriver = new MongoDriver({
  uri: process.env.MONGO_URI,
  databaseName: 'production',
  collectionName: 'users'
});
const prodDb = new Hawiah({ driver: prodDriver });

// Same API for both!
await devDb.insert({ name: 'Ahmed' });
await prodDb.insert({ name: 'Ahmed' });
```

## 📊 Driver Comparison

| Driver | Type | Server? | Speed | Complexity | Best For |
|--------|------|---------|-------|------------|----------|
| **JSON** | File | ❌ | ⭐⭐⭐ | ⭐ | Dev/Test |
| **YAML** | File | ❌ | ⭐⭐⭐ | ⭐ | Config |
| **SQLite** | SQL | ❌ | ⭐⭐⭐⭐ | ⭐⭐ | Desktop |
| **MongoDB** | NoSQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Web/Cloud |
| **Firebase** | NoSQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐ | Mobile/RT |
| **PostgreSQL** | SQL | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Enterprise |
| **MySQL** | SQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Web |

## 📖 Documentation

Visit [https://hawiah.vercel.app/docs](https://hawiah.vercel.app/docs) for complete documentation.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- [Documentation](https://hawiah.vercel.app/docs)
- [GitHub](https://github.com/Shuruhatik/hawiah)
- [NPM](https://www.npmjs.com/package/@hawiah/core)

## 🔗 Virtual Relationships

Create relationships between different Hawiah instances:

```javascript
const Users = new Hawiah(new JSONDriver('./users.json'));
const Posts = new Hawiah(new JSONDriver('./posts.json'));

// Define relationships
Users.relation('posts', Posts, '_id', 'userId', 'many');
Posts.relation('user', Users, 'userId', '_id', 'one');

// Fetch with relationships
const user = await Users.getOneWith({ _id: 1 }, 'posts');
console.log(user.posts); // Array of posts

const posts = await Posts.getWith({}, 'user');
posts.forEach(post => console.log(post.user.name));
```

**Benefits:**
- Avoid N+1 query problems
- DataLoader batching for performance
- Works across different drivers
- One-to-one, one-to-many, many-to-many support

## 💡 Why Hawiah?

- **Start Simple**: Begin with JSON files for development
- **Scale Easily**: Switch to MongoDB or PostgreSQL for production
- **One API**: Learn once, use everywhere
- **Modular**: Install only what you need
- **Virtual Relationships**: Powerful data modeling
- **TypeScript**: Full type safety and autocomplete
- **Open Source**: Free and community-driven

---
Made with ❤️ by [Shuruhatik](https://github.com/Shuruhatik)
