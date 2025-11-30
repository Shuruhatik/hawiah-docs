---
title: Quick Start
description: Learn the basics of Hawiah in under 5 minutes.
category: Getting Started
---

# Quick Start

Learn the basics of Hawiah in under 5 minutes.

## Initialize

```javascript
import { Hawiah } from 'hawiah';

// Initialize with your preferred driver
const db = new Hawiah({
  driver: 'mongodb', // or 'mysql', 'postgres', 'sqlite', etc.
  connection: {
    host: 'localhost',
    port: 27017,
    database: 'myapp'
  }
});

// Connect to database
await db.connect();
```

## Basic Usage

```javascript
// Insert a record
await db.insert({ name: 'Ahmed', role: 'Admin' });

// Query records
const users = await db.get({ role: 'Admin' });

// Update records
await db.update({ name: 'Ahmed' }, { active: true });

// Delete records
await db.remove({ active: false });
```

## What's Next?

Explore the full API documentation to learn about all available methods:

- **Connection**: [connect()](#connect), [disconnect()](#disconnect), [isActive()](#isActive)
- **CRUD Operations**: [insert()](#insert), [get()](#get), [update()](#update), [remove()](#remove)
- **Advanced Features**: [paginate()](#paginate), [group()](#group), [aggregate operations](#array-operations)
