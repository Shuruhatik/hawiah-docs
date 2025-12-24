---
title: sort()
description: Retrieves records sorted by a specific field.
category: Utility Methods
signature: "sort(field: string, order?: 'asc' | 'desc'): Promise<Data[]>"
returnValue: "Promise<Data[]> - Sorted array of records"
relatedMethods: ["get", "select"]
---

# db.sort()

Retrieves records sorted by a specific field.

## Signature

```typescript
sort(field: string, order?: 'asc' | 'desc'): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | `string` | Field name to sort by |
| `order` | `'asc' \| 'desc'` | Sort order (default: 'asc') |

## Examples

### Sort Ascending

```javascript
const users = await db.sort('name');
// Users sorted A-Z by name
```

### Sort Descending

```javascript
const recentUsers = await db.sort('createdAt', 'desc');
// Newest users first
```

### Sort by Price

```javascript
const cheapest = await db.sort('price', 'asc');
const expensive = await db.sort('price', 'desc');
```

### Sort by Multiple Criteria

```javascript
// Sort by priority, then by date
const sorted = await db.sort('priority', 'desc');
```

## Return Value

Returns a `Promise<Data[]>` containing all records sorted by the specified field.
