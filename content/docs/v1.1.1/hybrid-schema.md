---
title: The Hybrid Schema System
description: Learn about Hawiah's revolutionary Hybrid Schema engine that bridges SQL and NoSQL.
category: Core Concepts
---

# The Hybrid Schema System

Hawiah v1.1 introduces a game-changing **Hybrid Schema**.

## 1. SQL Mode: The "Real" Schema
When using SQL drivers (SQLite, Postgres, MySQL) with a defined schema, Hawiah creates a **physical table structure**.

### Example Code:
```javascript
const { Hawiah, Schema, DataTypes } = require('hawiah');
const { SQLiteDriver } = require('@hawiah/sqlite');

const userSchema = new Schema({
    username: DataTypes.STRING,
    age:      DataTypes.INTEGER
});

const db = new Hawiah({ 
    driver: new SQLiteDriver('data.db', 'users'),
    schema: userSchema 
});

await db.connect();

// 1. Inserting Data
await db.insert({ 
    username: 'mohammed', 
    age: 25, 
    country: 'Palestine' // Extra field (not in schema)
});
```

### Physical Storage (Inside SQLite/Postgres):
Hawiah creates columns for `username` and `age`. The `country` field goes to `_extras`.

| _id (TEXT) | username (TEXT) | age (INTEGER) | _extras (JSON) |
| :--- | :--- | :--- | :--- |
| `172...` | `mohammed` | `25` | `{"country": "Palestine"}` |

### Retrieved Object (What you get back):
When you call `db.get()`, Hawiah merges the columns and the JSON extras back into a flat object for you.
```javascript
{
  "_id": "172...",
  "username": "mohammed",
  "age": 25,
  "country": "Palestine"
}
```

---

## 2. Virtual Mode: The "Schema-less" Style
When using SQLite (or any SQL driver) **without** a schema, Hawiah treats the table like a document store.

### Example Code:
```javascript
const { Hawiah } = require('hawiah');
const { SQLiteDriver } = require('@hawiah/sqlite');

// Notice: No schema is provided here
const db = new Hawiah({ 
    driver: new SQLiteDriver('noschema.db', 'logs') 
});

await db.connect();

// 1. Inserting Data (Any fields you want)
await db.insert({ 
    level: 'info', 
    message: 'System started',
    details: { uptime: 3600, nodes: 5 }
});
```

### Physical Storage (Inside SQLite):
Since there is no schema, Hawiah stores everything in a single `_data` column as a JSON string.

| _id (TEXT) | _data (TEXT / JSON) |
| :--- | :--- |
| `185...` | `{"level":"info","message":"System started","details":{...}}` |

### Retrieved Object:
Hawiah automatically parses the JSON and returns a clean object:
```javascript
{
  "_id": "185...",
  "level": "info",
  "message": "System started",
  "details": { "uptime": 3600, "nodes": 5 }
}
```

---

## Feature Comparison

| Feature | SQL Mode (With Schema) | Virtual Mode (No Schema) |
| :--- | :--- | :--- |
| **Logic** | **Native Performance** | **Maximum Flexibility** |
| **Storage** | Real columns + JSON fallback | Full JSON object |
| **Indexing** | Native database indexes | Search-based or key-based |
| **Data Types** | Enforced by DB and Hawiah | Flexible object structure |

## Why use Hybrid Schema?
1. **Migrations are optional**: You don't need to run `ALTER TABLE` every time you add a field. Just add it to your object and it goes to `_extras`.
2. **Switch Drivers Easily**: Your code remains the same whether you use small JSON files for testing or massive PostgreSQL for production.
3. **Optimized Lookups**: Define your most queried fields in the schema for physical indexing, and keep the rest dynamic.

