---
title: shift()
description: Removes and returns the first element from an array field.
category: Array Operations
signature: "shift(query: Query, field: string): Promise<any>"
returnValue: "Promise<any> - The removed element"
relatedMethods: ["unshift", "pop", "push"]
---

# db.shift()

Removes and returns the first element from an array field.

## Signature

```typescript
shift(query: Query, field: string): Promise<any>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Array field name |

## Examples

### Remove First Item from Queue

```javascript
const firstItem = await db.shift(
  { _id: queueId },
  'items'
);

console.log('Processing:', firstItem);
```

### FIFO Queue

```javascript
// Process first item in queue
const task = await db.shift({ queueName: 'tasks' }, 'items');
if (task) {
  await processTask(task);
}
```

## Return Value

Returns a `Promise<any>` containing the removed element.
