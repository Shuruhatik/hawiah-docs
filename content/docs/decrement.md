---
title: decrement()
description: Decrements a numeric field by a specified amount.
category: Math Operations
signature: "decrement(query: Query, field: string, amount?: number): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["increment", "sum"]
---

# db.decrement()

Decrements a numeric field by a specified amount.

## Signature

```typescript
decrement(query: Query, field: string, amount?: number): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Numeric field name |
| `amount` | `number` | Amount to decrement (default: 1) |

## Examples

### Decrease Stock

```javascript
await db.decrement(
  { sku: 'PROD-123' },
  'stock',
  5
);
```

### Decrement Counter

```javascript
await db.decrement({ _id: userId }, 'credits');
```

### Reduce Balance

```javascript
await db.decrement(
  { userId: currentUser },
  'balance',
  50
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
