---
title: last()
description: Retrieves the last record from the database.
category: "CRUD: Reading Data"
signature: "last(): Promise<Data | null>"
returnValue: "Promise<Data | null> - The last record or null"
relatedMethods: ["first", "getOne"]
---

# db.last()

Retrieves the last record from the database.

## Signature

```typescript
last(): Promise<Data | null>
```

## Examples

### Get Last Record

```javascript
const lastUser = await db.last();
console.log(lastUser);
```

### Get Most Recent Record

```javascript
// Assuming records are ordered by creation time
const newest = await db.last();
console.log('Newest record:', newest.createdAt);
```

### Check Latest Entry

```javascript
const latest = await db.last();
if (latest) {
  console.log('Last entry was:', latest.name);
}
```

## Return Value

Returns a `Promise<Data | null>`:
- The last record in the database
- `null` if the database is empty
