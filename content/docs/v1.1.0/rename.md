---
title: rename()
description: Renames a field in matching records.
category: Field Operations
signature: "rename(query: Query, oldField: string, newField: string): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["unset"]
---

# db.rename()

Renames a field in matching records.

## Signature

```typescript
rename(query: Query, oldField: string, newField: string): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `oldField` | `string` | Current field name |
| `newField` | `string` | New field name |

## Examples

### Rename Field

```javascript
await db.rename(
  { type: 'user' },
  'username',
  'displayName'
);
```

### Update Schema

```javascript
// Rename 'email' to 'emailAddress'
await db.rename({}, 'email', 'emailAddress');
```

### Conditional Rename

```javascript
await db.rename(
  { version: 1 },
  'oldFieldName',
  'newFieldName'
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.
