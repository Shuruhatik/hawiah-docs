---
title: getBy()
description: Retrieves records by a specific field and value.
category: CRUD: Reading Data
signature: "getBy(field: string, value: any): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of matching records"
relatedMethods: ["get", "getOne"]
---

# db.getBy()

Retrieves records by a specific field and value.

## Signature

```typescript
getBy(field: string, value: any): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | `string` | The field name to query |
| `value` | `any` | The value to match |

## Examples

### Get by Role

```javascript
const admins = await db.getBy('role', 'Admin');
console.log(`Found ${admins.length} admins`);
```

### Get by Status

```javascript
const activeUsers = await db.getBy('active', true);
const inactiveUsers = await db.getBy('active', false);
```

### Get by Category

```javascript
const techPosts = await db.getBy('category', 'Technology');
const newsPosts = await db.getBy('category', 'News');
```

### Get by Numeric Value

```javascript
const premiumUsers = await db.getBy('tier', 'premium');
const freeUsers = await db.getBy('tier', 'free');
```

## Return Value

Returns a `Promise<Data[]>` containing all records where the specified field matches the value.

## Comparison with get()

```javascript
// These are equivalent:
const result1 = await db.getBy('role', 'Admin');
const result2 = await db.get({ role: 'Admin' });

// But getBy() is more concise for single-field queries
```
