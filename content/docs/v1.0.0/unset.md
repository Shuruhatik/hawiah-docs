---
title: unset()
description: Removes a field from matching records.
category: Field Operations
signature: "unset(query: Query, field: string): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["rename"]
---

# db.unset()

Removes a field from matching records.

## Signature

```typescript
unset(query: Query, field: string): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `field` | `string` | Field name to remove |

## Examples

### Remove Temporary Field

```javascript
await db.unset(
  { status: 'completed' },
  'tempData'
);
```

### Clean Up Fields

```javascript
// Remove deprecated field
await db.unset({}, 'oldField');
```

### Remove Sensitive Data

```javascript
await db.unset(
  { userId: userId },
  'temporaryToken'
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
