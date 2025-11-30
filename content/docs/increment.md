---
title: increment()
description: Increments a numeric field by a specified amount.
category: Math Operations
signature: "increment(query: Query, field: string, amount?: number): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["decrement", "sum"]
---

# db.increment()

Increments a numeric field by a specified amount.

## Signature

```typescript
increment(query: Query, field: string, amount?: number): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Numeric field name |
| `amount` | `number` | Amount to increment (default: 1) |

## Examples

### Increment by 1

```javascript
await db.increment({ _id: userId }, 'loginCount');
```

### Increment by Custom Amount

```javascript
await db.increment({ _id: userId }, 'points', 50);
```

### Increment Views

```javascript
await db.increment({ _id: postId }, 'views');
```

### Add to Balance

```javascript
await db.increment(
  { userId: currentUser },
  'balance',
  100
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
