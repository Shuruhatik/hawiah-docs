---
title: Installation
description: Get started with Hawiah by installing the core package and your preferred database driver.
category: Getting Started
---

# Installation

Hawiah uses a modular architecture. You need to install the core package and at least one driver.

## Key Features

- **Modular Drivers** - JSON, YAML, SQLite, MongoDB, Firebase, PostgreSQL, MySQL
- **Virtual Relationships** - Create relationships between instances with DataLoader batching
- **50+ Methods** - Complete CRUD and advanced operations
- **TypeScript Ready** - Full type safety

## Main Package (Required)

```install
hawiah
```

## Database Drivers (Choose One or More)

### Local File Drivers

```install
@hawiah/local
```

### SQLite

```install
@hawiah/sqlite
```

### MongoDB

```install
@hawiah/mongo
```

### Firebase Firestore

```install
@hawiah/firebase
```

### PostgreSQL

```install
@hawiah/postgres
```

### MySQL

```install
@hawiah/mysql
```

## Complete Installation Example

```install
hawiah @hawiah/local
```

## Requirements

- Node.js 14.x or higher
- Choose at least one database driver based on your needs

## Next Steps

After installation, check out the [Quick Start](/docs#quick-start) guide to begin using Hawiah in your project.
