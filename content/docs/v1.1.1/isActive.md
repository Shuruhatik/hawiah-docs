---
title: isActive()
description: Checks whether the database connection is currently active.
category: Connection
signature: "isActive(): boolean"
returnValue: "boolean"
relatedMethods: ["connect", "disconnect"]
---

# db.isActive()

Checks whether the database connection is currently active.

## Signature

```typescript
isActive(): boolean
```

## Description

The `isActive()` method returns a boolean indicating whether the database connection is currently open and ready to accept queries.

## Examples

### Check Connection Status

```javascript
if (db.isActive()) {
  console.log('Database is connected');
} else {
  await db.connect();
}
```

### Conditional Operations

```javascript
async function ensureConnection() {
  if (!db.isActive()) {
    console.log('Reconnecting to database...');
    await db.connect();
  }
}

// Use before critical operations
await ensureConnection();
const users = await db.get({ active: true });
```

### Health Check

```javascript
app.get('/health', (req, res) => {
  res.json({
    status: db.isActive() ? 'healthy' : 'unhealthy',
    database: db.isActive() ? 'connected' : 'disconnected'
  });
});
```

## Return Value

Returns `true` if the connection is active, `false` otherwise.
