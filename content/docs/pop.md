---
title: pop()
description: Removes and returns the last element from an array field.
category: Array Operations
signature: "pop(query: Query, field: string): Promise<any>"
returnValue: "Promise<any> - The removed element"
relatedMethods: ["push", "shift"]
---

# db.pop()

Removes and returns the last element from an array field.

## Signature

```typescript
pop(query: Query, field: string): Promise<any>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Array field name |

## Examples

### Remove Last Item from Stack

```javascript
const lastItem = await db.pop(
  { _id: stackId },
  'items'
);

console.log('Removed:', lastItem);
```

### LIFO Stack

```javascript
// Process last item in stack
const task = await db.pop({ stackName: 'tasks' }, 'items');
if (task) {
  await processTask(task);
}
```

## Return Value

Returns a `Promise<any>` containing the removed element.
