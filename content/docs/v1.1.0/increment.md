---
title: increment()
description: Increments a numeric field by a specified amount.
category: Math Operations
signature: "increment(query: Query, field: string, amount?: number): Promise<number>"
returnValue: "Promise<number> - The new value after incrementing"
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
| `query` | `Query` | Query to find the record |
| `field` | `string` | Numeric field name |
| `amount` | `number` | Amount to increment (default: 1) |

## Examples

### Increment views counter

```javascript
const newViews = await db.increment(
  { _id: postId },
  'views',
  1
);

console.log(`New view count: ${newViews}`);
```

### Increment user points

```javascript
const newPoints = await db.increment(
  { _id: userId },
  'points',
  50
);

console.log(`User now has ${newPoints} points`);
```

### Increment login count

```javascript
await db.increment(
  { email: 'ahmed@example.com' },
  'loginCount'
);
```

### Add to balance

```javascript
const newBalance = await db.increment(
  { userId: currentUser },
  'balance',
  100
);
```

## Return Value

Returns a `Promise<number>` - The new value after incrementing.

## Error Handling

```javascript
try {
  const newValue = await db.increment({ _id: 123 }, 'count', 1);
} catch (error) {
  console.error('Record not found');
}
```

## Notes

- Throws error if record is not found
- Field must be numeric or will be treated as 0
- Use negative amount to decrement, or use `decrement()` method
- Returns the new value after incrementing

## Related Methods

- [decrement()](/docs#decrement) - Decrease a numeric field
- [sum()](/docs#sum) - Calculate sum of a field
- [update()](/docs#update) - Update fields directly
