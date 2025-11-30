---
title: first()
description: Retrieves the first record from the database.
category: "CRUD: Reading Data"
signature: "first(): Promise<Data | null>"
returnValue: "Promise<Data | null> - The first record or null"
relatedMethods: ["last", "getOne"]
---

# db.first()

Retrieves the first record from the database.

## Signature

```typescript
first(): Promise<Data | null>
```

## Examples

### Get First Record

```javascript
const firstUser = await db.first();
console.log(firstUser);
```

### Check if Database is Empty

```javascript
const first = await db.first();
if (!first) {
  console.log('Database is empty');
}
```

### Get Oldest Record

```javascript
// Assuming records are ordered by creation time
const oldest = await db.first();
console.log('Oldest record:', oldest.createdAt);
```

## Return Value

Returns a `Promise<Data | null>`:
- The first record in the database
- `null` if the database is empty
