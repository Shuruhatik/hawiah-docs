---
title: pull()
description: Removes a value from an array field in matching records.
category: Array Operations
signature: "pull(query: Query, field: string, value: any): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["push", "pop"]
---

# db.pull()

Removes a value from an array field in matching records.

## Signature

```typescript
pull(query: Query, field: string, value: any): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Array field name |
| `value` | `any` | Value to remove |

## Examples

### Remove Tag

```javascript
await db.pull(
  { _id: userId },
  'tags',
  'trial'
);
```

### Remove from Cart

```javascript
await db.pull(
  { userId: currentUser },
  'cart',
  { productId: '123' }
);
```

### Remove Permission

```javascript
await db.pull(
  { role: 'User' },
  'permissions',
  'admin_access'
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
