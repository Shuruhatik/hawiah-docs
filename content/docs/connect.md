---
title: connect()
description: Establishes a connection to the database using the configured driver.
category: Connection
signature: "connect(): Promise<void>"
returnValue: "Promise<void>"
relatedMethods: ["disconnect", "isActive"]
---

# db.connect()

Establishes a connection to the database using the configured driver.

## Signature

```typescript
connect(): Promise<void>
```

## Description

The `connect()` method initializes and establishes a connection to your database. This must be called before performing any database operations.

## Example

```javascript
const db = new Hawiah({ driver: 'mongodb', connection: {...} });
await db.connect();
console.log('Connected to database');
```

## Error Handling

```javascript
try {
  await db.connect();
  console.log('Successfully connected');
} catch (error) {
  console.error('Connection failed:', error);
}
```

## Return Value

Returns a `Promise<void>` that resolves when the connection is established.

## Related Methods

- [disconnect()](#disconnect) - Close the database connection
- [isActive()](#isActive) - Check connection status
