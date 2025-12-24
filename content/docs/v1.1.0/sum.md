---
title: sum()
description: Calculates the sum of a numeric field across matching records.
category: Math Operations
signature: "sum(query: Query, field: string): Promise<number>"
returnValue: "Promise<number> - Sum of the field values"
relatedMethods: ["count", "increment"]
---

# db.sum()

Calculates the sum of a numeric field across matching records.

## Signature

```typescript
sum(query: Query, field: string): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Numeric field to sum |

## Examples

### Calculate Total Revenue

```javascript
const totalRevenue = await db.sum(
  { status: 'completed' },
  'amount'
);

console.log(`Total: $${totalRevenue}`);
```

### Sum User Points

```javascript
const totalPoints = await db.sum(
  { team: 'A' },
  'points'
);
```

### Calculate Total Stock

```javascript
const totalStock = await db.sum({}, 'quantity');
console.log(`Total items in stock: ${totalStock}`);
```

## Return Value

Returns a `Promise<number>` containing the sum of all values in the specified field.
