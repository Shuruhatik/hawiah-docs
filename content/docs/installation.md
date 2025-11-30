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

## Core Package (Required)

```bash
npm install @hawiah/core
```

## Database Drivers (Choose One or More)

### Local File Drivers

```bash
# JSON & YAML support
npm install @hawiah/local
```

### SQLite

```bash
npm install @hawiah/sqlite
```

### MongoDB

```bash
npm install @hawiah/mongo
```

### Firebase Firestore

```bash
npm install @hawiah/firebase
```

### PostgreSQL

```bash
npm install @hawiah/postgres
```

### MySQL

```bash
npm install @hawiah/mysql
```

## Complete Installation Example

```bash
# Install core + JSON driver for development
npm install @hawiah/core @hawiah/local

# Or install core + MongoDB for production
npm install @hawiah/core @hawiah/mongo
```

## Package Managers

### NPM

```bash
npm install @hawiah/core @hawiah/local
```

### Yarn

```bash
yarn add @hawiah/core @hawiah/local
```

### PNPM

```bash
pnpm add @hawiah/core @hawiah/local
```

## Requirements

- Node.js 14.x or higher
- Choose at least one database driver based on your needs

## Next Steps

After installation, check out the [Quick Start](/docs/quick-start) guide to begin using Hawiah in your project.
