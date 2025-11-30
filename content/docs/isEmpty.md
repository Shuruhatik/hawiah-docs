---
title: isEmpty()
description: Checks if the database contains no records.
category: Utility Methods
signature: "isEmpty(): Promise<boolean>"
returnValue: "Promise<boolean> - True if database is empty"
relatedMethods: ["count", "getAll", "clear"]
---

# db.isEmpty()

Checks if the database contains no records.

## Signature

```typescript
isEmpty(): Promise<boolean>
```

## Examples

### Check if database is empty

```javascript
const empty = await db.isEmpty();

if (empty) {
  console.log('Database is empty');
  // Initialize with default data
  await db.insertMany(defaultData);
}
```

### Conditional initialization

```javascript
if (await db.isEmpty()) {
  await db.insert({
    key: 'settings',
    theme: 'light',
    language: 'en'
  });
}
```

### Before clearing

```javascript
if (!await db.isEmpty()) {
  const confirm = await askUser('Clear all data?');
  if (confirm) {
    await db.clear();
  }
}
```

## Return Value

Returns a `Promise<boolean>`:
- `true` if database has no records
- `false` if database has at least one record

## Notes

- More efficient than checking `(await db.count({})) === 0`
- Useful for initialization logic
- Fast operation on most drivers

## Related Methods

- [count()](/docs/count) - Count records
- [getAll()](/docs/getAll) - Get all records
- [clear()](/docs/clear) - Remove all records
- [first()](/docs/first) - Get first record
