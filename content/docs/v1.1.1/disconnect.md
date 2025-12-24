---
title: disconnect()
description: Closes the active database connection and releases resources.
category: Connection
signature: "disconnect(): Promise<void>"
returnValue: "Promise<void>"
relatedMethods: ["connect", "isActive"]
---

# db.disconnect()

Closes the active database connection and releases resources.

## Signature

```typescript
disconnect(): Promise<void>
```

## Description

The `disconnect()` method safely closes the database connection and releases all associated resources. This should be called when your application is shutting down or when you no longer need the database connection.

## Examples

### Basic Usage

```javascript
await db.disconnect();
console.log('Disconnected from database');
```

### With Error Handling

```javascript
try {
  await db.disconnect();
  console.log('Successfully disconnected');
} catch (error) {
  console.error('Disconnect failed:', error);
}
```

### Graceful Shutdown

```javascript
process.on('SIGINT', async () => {
  await db.disconnect();
  console.log('Database connection closed');
  process.exit(0);
});
```

## Return Value

Returns a `Promise<void>` that resolves when the connection is closed.

## Best Practices

- Always disconnect when your application shuts down
- Use in cleanup handlers (SIGINT, SIGTERM)
- Wait for pending operations before disconnecting
