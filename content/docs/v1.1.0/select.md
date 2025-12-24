---
title: select()
description: Retrieves records with only specified fields included.
category: Utility Methods
signature: "select(query: Query, fields: string[]): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of records with selected fields"
relatedMethods: ["get", "sort"]
---

# db.select()

Retrieves records with only specified fields included.

## Signature

```typescript
select(query: Query, fields: string[]): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `fields` | `string[]` | Array of field names to include |

## Examples

### Select Specific Fields

```javascript
const users = await db.select(
  { active: true },
  ['name', 'email']
);

console.log(users[0]); // { name: '...', email: '...' }
```

### Projection

```javascript
// Get only IDs and names
const list = await db.select({}, ['_id', 'name']);
```

### Optimize Performance

```javascript
// Load only needed fields to reduce data transfer
const profiles = await db.select(
  { role: 'User' },
  ['username', 'avatar', 'bio']
);
```

## Return Value

Returns a `Promise<Data[]>` containing records with only the selected fields.
