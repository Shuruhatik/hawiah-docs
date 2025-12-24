---
title: unique()
description: Retrieves unique values for a specific field.
category: Utility Methods
signature: "unique(field: string): Promise<any[]>"
returnValue: "Promise<any[]> - Array of unique values"
relatedMethods: ["group", "select"]
---

# db.unique()

Retrieves unique values for a specific field.

## Signature

```typescript
unique(field: string): Promise<any[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | `string` | Field name to get unique values from |

## Examples

### Get Unique Roles

```javascript
const roles = await db.unique('role');
console.log(roles); // ['Admin', 'User', 'Moderator']
```

### Get Unique Countries

```javascript
const countries = await db.unique('country');
// Display in dropdown
```

### Get Unique Tags

```javascript
const tags = await db.unique('tags');
console.log(`Available tags: ${tags.join(', ')}`);
```

### Get Unique Categories

```javascript
const categories = await db.unique('category');
// Use for filtering
```

## Return Value

Returns a `Promise<any[]>` containing an array of unique values from the specified field.
