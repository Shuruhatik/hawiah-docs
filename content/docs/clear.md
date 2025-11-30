---
title: clear()
description: Removes all records from the database. Use with caution!
category: CRUD: Deleting Data
signature: "clear(): Promise<number>"
returnValue: "Promise<number> - Number of records deleted"
relatedMethods: ["remove"]
---

# db.clear()

Removes all records from the database. Use with extreme caution!

## Signature

```typescript
clear(): Promise<number>
```

## Examples

### Clear All Records

```javascript
const count = await db.clear();
console.log(`Cleared ${count} records`);
```

### Reset Database

```javascript
// Clear all data
await db.clear();

// Insert fresh data
await db.insertMany(initialData);
console.log('Database reset complete');
```

### Testing

```javascript
// Clear database before each test
beforeEach(async () => {
  await db.clear();
});
```

## Return Value

Returns a `Promise<number>` indicating the number of records deleted.

## ⚠️ Warning

This method deletes ALL records from the database. This operation cannot be undone!

## Best Practices

- Use only in development/testing
- Always confirm before clearing in production
- Consider backup before clearing
- Use `remove()` with specific criteria instead when possible
