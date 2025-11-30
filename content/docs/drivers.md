---
title: Database Drivers
description: Complete guide to all available Hawiah database drivers and when to use them.
category: Getting Started
---

# Database Drivers

Hawiah supports multiple database drivers through a modular architecture. Install only what you need.

## Available Drivers

### JSONDriver - Local JSON Files

**Package:** `@hawiah/local`

Perfect for development, testing, and small applications.

```javascript
import { Hawiah } from 'hawiah';
import { JSONDriver } from '@hawiah/local';

const driver = new JSONDriver('./data/users.json');
const db = new Hawiah({ driver });

await db.connect();
```

**Features:**
- ✅ Easy to use
- ✅ No server required
- ✅ Perfect for development and testing
- ✅ Supports search and filtering

**Use Cases:**
- Small applications
- Rapid prototyping
- Configuration storage
- Local cache

---

### YAMLDriver - Local YAML Files

**Package:** `@hawiah/local`

Great for configuration files and structured content.

```javascript
import { Hawiah } from 'hawiah';
import { YAMLDriver } from '@hawiah/local';

const driver = new YAMLDriver('./data/config.yaml');
const db = new Hawiah({ driver });

await db.connect();
```

**Features:**
- ✅ Human-readable format
- ✅ Perfect for configuration
- ✅ Supports comments
- ✅ Clear structure

**Use Cases:**
- Configuration files
- Settings management
- Documentation data
- Structured content

---

### SQLiteDriver - SQLite Database

**Package:** `@hawiah/sqlite`

Ideal for desktop applications and embedded systems.

```javascript
import { Hawiah } from 'hawiah';
import { SQLiteDriver } from '@hawiah/sqlite';

// First parameter: database file path
// Second parameter: table name
const driver = new SQLiteDriver('./data/app.db', 'users');
const db = new Hawiah({ driver });

await db.connect();
```

**Features:**
- ✅ Real database engine
- ✅ Fast and efficient
- ✅ No server required
- ✅ Supports transactions
- ✅ Perfect for local applications

**Use Cases:**
- Desktop applications
- Mobile apps
- Embedded systems
- Electron applications

---

### MongoDriver - MongoDB

**Package:** `@hawiah/mongo`

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
```

**Features:**
- ✅ Flexible NoSQL
- ✅ Highly scalable
- ✅ Supports complex data
- ✅ Cloud-ready
- ✅ Popular and well-supported

**Use Cases:**
- Large web applications
- Big Data
- Real-time applications
- Microservices

---

### FirebaseDriver - Firebase Firestore

**Package:** `@hawiah/firebase`

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
```

**Features:**
- ✅ Real-time synchronization
- ✅ Built-in authentication
- ✅ Free hosting
- ✅ Offline support
- ✅ Easy integration

**Use Cases:**
- Real-time applications
- Mobile apps
- Chat applications
- Collaborative tools

---

### PostgreSQLDriver - PostgreSQL

**Package:** `@hawiah/postgres`

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
```

**Features:**
- ✅ Powerful database engine
- ✅ ACID compliant
- ✅ Supports JSON
- ✅ Advanced features
- ✅ Open source

**Use Cases:**
- Enterprise applications
- Complex queries
- Data integrity critical
- Analytics

---

### MySQLDriver - MySQL

**Package:** `@hawiah/mysql`

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
```

**Features:**
- ✅ Very popular
- ✅ Fast
- ✅ Reliable
- ✅ Widely supported
- ✅ Easy to host

**Use Cases:**
- Web applications
- WordPress/CMS
- E-commerce
- Traditional apps

---

## Driver Comparison

| Driver | Type | Server? | Speed | Complexity | Best For |
|--------|------|---------|-------|------------|----------|
| **JSON** | File | ❌ | ⭐⭐⭐ | ⭐ | Dev/Test |
| **YAML** | File | ❌ | ⭐⭐⭐ | ⭐ | Config |
| **SQLite** | SQL | ❌ | ⭐⭐⭐⭐ | ⭐⭐ | Desktop |
| **MongoDB** | NoSQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Web/Cloud |
| **Firebase** | NoSQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐ | Mobile/RT |
| **PostgreSQL** | SQL | ✅ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Enterprise |
| **MySQL** | SQL | ✅ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Web |

## Switching Drivers

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

## Installation Guide

1. Install core package:
```bash
npm install hawiah
```

2. Install your chosen driver(s):
```bash
# For local development
npm install @hawiah/local

# For production
npm install @hawiah/mongo
# or
npm install @hawiah/postgres
# or
npm install @hawiah/mysql
```

3. Start using:
```javascript
import { Hawiah } from 'hawiah';
import { JSONDriver } from '@hawiah/local';

const driver = new JSONDriver('./data.json');
const db = new Hawiah({ driver });

await db.connect();
// Start using the API!
```
