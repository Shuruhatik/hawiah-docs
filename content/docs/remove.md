---
title: remove()
description: Deletes all records matching the query criteria.
category: "CRUD: Deleting Data"
signature: "remove(query: Query): Promise<number>"
returnValue: "Promise<number> - Number of records deleted"
relatedMethods: ["removeOne", "removeById", "clear"]
---

# db.remove()

Deletes all records matching the query criteria.

## Signature

```typescript
remove(query: Query): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria to match records |

## Examples

### Delete Inactive Users

```javascript
const count = await db.remove({ active: false });
console.log(`Deleted ${count} records`);
```

### Delete by Status

```javascript
const deleted = await db.remove({ status: 'expired' });
console.log(`Removed ${deleted} expired items`);
```

### Delete Old Records

```javascript
const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

const count = await db.remove({
  createdAt: { $lt: oneYearAgo }
});

console.log(`Deleted ${count} old records`);
```

### Conditional Delete

```javascript
const count = await db.remove({
  role: 'Guest',
  lastLogin: { $lt: thirtyDaysAgo }
});
```

## Return Value

Returns a `Promise<number>` indicating the number of records deleted.

## Warning

This method deletes ALL matching records. Use with caution!
