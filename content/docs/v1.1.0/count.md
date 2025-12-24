---
title: count()
description: Counts the number of records matching the query criteria.
category: Utility Methods
signature: "count(query?: Query): Promise<number>"
returnValue: "Promise<number> - Number of matching records"
relatedMethods: ["has", "getAll"]
---

# db.count()

Counts the number of records matching the query criteria.

## Signature

```typescript
count(query?: Query): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria (optional) |

## Examples

### Count All Records

```javascript
const total = await db.count();
console.log(`Total records: ${total}`);
```

### Count with Query

```javascript
const activeUsers = await db.count({ active: true });
console.log(`Active users: ${activeUsers}`);
```

### Count by Role

```javascript
const admins = await db.count({ role: 'Admin' });
const users = await db.count({ role: 'User' });

console.log(`Admins: ${admins}, Users: ${users}`);
```

### Statistics

```javascript
const stats = {
  total: await db.count(),
  active: await db.count({ active: true }),
  verified: await db.count({ verified: true })
};
```

## Return Value

Returns a `Promise<number>` indicating the number of matching records.

## Performance

`count()` is optimized and faster than loading all records and checking length.
