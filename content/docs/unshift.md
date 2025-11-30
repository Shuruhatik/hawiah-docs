---
title: unshift()
description: Prepends a value to the beginning of an array field.
category: Array Operations
signature: "unshift(query: Query, field: string, value: any): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["shift", "push"]
---

# db.unshift()

Prepends a value to the beginning of an array field.

## Signature

```typescript
unshift(query: Query, field: string, value: any): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Array field name |
| `value` | `any` | Value to prepend |

## Examples

### Add to Beginning of Queue

```javascript
await db.unshift(
  { _id: queueId },
  'items',
  { priority: 'high', task: 'urgent' }
);
```

### Add Recent Activity

```javascript
await db.unshift(
  { userId: currentUser },
  'recentActivity',
  { action: 'login', timestamp: new Date() }
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
