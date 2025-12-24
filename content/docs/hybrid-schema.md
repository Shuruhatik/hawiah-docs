---
title: The Hybrid Schema System
description: Learn about Hawiah's revolutionary Hybrid Schema engine that bridges SQL and NoSQL.
category: Core Concepts
---

# The Hybrid Schema System

Hawiah v1.1 introduces a game-changing **Hybrid Schema**.

## Virtual vs. Real Schemas

How Hawiah handles your schema depends on the driver:

| Feature | SQL Drivers (Postgres, SQLite, MySQL) | NoSQL Drivers (Mongo, Firebase, Local) |
| :--- | :--- | :--- |
| **Logic** | **Real Schema (Physical columns)** | **Virtual Schema (Validator)** |
| **Storage** | Columns for defined fields + JSON for extras. | Full JSON Document. |
| **Benefit** | Native SQL performance & indexing. | Maximum flexibility & speed. |

## Schema Definition

You can define schemas using the `Schema` class and `DataTypes`. This ensures data integrity and provides default values.

```javascript
const { Schema, DataTypes } = require('hawiah');

const userSchema = new Schema({
    // Basic Types
    username: { type: DataTypes.STRING, required: true },
    age:      { type: DataTypes.INTEGER, min: 18 },
    
    // Advanced Types
    email:    { type: DataTypes.EMAIL, unique: true },
    website:  { type: DataTypes.URL },
    uuid:     { type: DataTypes.UUID },
    
    // Complex Types
    tags:     { type: DataTypes.ARRAY },
    settings: { type: DataTypes.JSON },
    
    // Default Values
    isActive: { type: DataTypes.BOOLEAN, default: true },
    created:  { type: DataTypes.DATE, default: () => new Date() }
});
```

## Data Types

Hawiah supports a rich set of data types to cover most use cases:

- `STRING`: Text strings
- `INTEGER`: Whole numbers
- `BOOLEAN`: true/false
- `DATE`: Date objects
- `EMAIL`: Validated email addresses
- `URL`: Validated URLs
- `UUID`: Universally Unique Identifiers
- `ARRAY`: Lists of items
- `JSON`: Complex objects

## Validation Rules

Schemas enforce validation rules automatically:
- `required`: Field must be present
- `min`: Minimum value (for numbers)
- `unique`: Field must be unique in the collection/table
- `default`: Default value if not provided

This system allows you to have the structure of SQL with the flexibility of NoSQL, adapting automatically to the underlying driver.
