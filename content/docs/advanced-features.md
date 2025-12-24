---
title: Advanced Features
description: Explore advanced capabilities of Hawiah including Events, Fuzzy Search, and Caching.
category: Advanced
---

# Advanced Features

Hawiah comes packed with powerful features to handle complex application requirements.

## Events

You can listen to lifecycle events to hook into the database operations. This is useful for logging, validation, or triggering side effects.

```javascript
// Triggered before inserting data
db.on('beforeInsert', (data) => {
    console.log('Inserting:', data);
});

// Triggered after an update operation
db.on('afterUpdate', (query, data) => {
    console.log('Updated records matching:', query);
});
```

Common events include:
- `beforeInsert`, `afterInsert`
- `beforeUpdate`, `afterUpdate`
- `beforeDelete`, `afterDelete`

## Fuzzy Search

For drivers that support it (especially local/memory drivers), Hawiah provides a simple fuzzy search mechanism.

```javascript
// Finds users with names like "Apple", "App", "Application"
const results = await db.search('name', 'app'); 
```

This is particularly useful for building quick search interfaces without setting up a full-text search engine.

## Caching

Hawiah includes built-in caching for read operations to reduce database load and improve response times.

```javascript
const db = new Hawiah({ 
    driver, 
    cache: true, 
    ttl: 60000 // Cache Time-To-Live in milliseconds (e.g., 60 seconds)
});

// The first call hits the database
const users = await db.get({});

// The second call (within TTL) returns data from cache instantly
const usersCached = await db.get({});

// Clear cache manually if needed (e.g., after external update)
db.clearCache(); 
```

Caching is highly recommended for read-heavy applications.
