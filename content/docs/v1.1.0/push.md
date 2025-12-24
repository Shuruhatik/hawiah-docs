---
title: push()
description: Appends a value to an array field in matching records.
category: Array Operations
signature: "push(query: Query, field: string, value: any): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["pull", "unshift"]
---

# db.push()

Appends a value to an array field in matching records.

## Signature

```typescript
push(query: Query, field: string, value: any): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Array field name |
| `value` | `any` | Value to append |

## Examples

### Add Tag to User

```javascript
await db.push(
  { _id: userId },
  'tags',
  'premium'
);
```

### Add Item to Cart

```javascript
await db.push(
  { userId: currentUser },
  'cart',
  { productId: '123', quantity: 1 }
);
```

### Add Permission

```javascript
await db.push(
  { role: 'Admin' },
  'permissions',
  'delete_users'
);
```

### Add to History

```javascript
await db.push(
  { _id: userId },
  'loginHistory',
  { timestamp: new Date(), ip: req.ip }
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
