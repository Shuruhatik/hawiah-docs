---
title: update()
description: Updates all records matching the query criteria.
category: "CRUD - Updating Data"
signature: "update(query: Query, data: Partial<Data>): Promise<number>"
returnValue: "Promise<number> - Number of records updated"
relatedMethods: ["updateOne", "updateById"]
---

# db.update()

Updates all records matching the query criteria.

## Signature

```typescript
update(query: Query, data: Partial<Data>): Promise<number>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria to match records |
| `data` | `object` | Fields to update |

## Examples

### Update all inactive users

```javascript
const count = await db.update(
  { active: false },
  { status: 'suspended' }
);

console.log(`Updated ${count} records`);
```

### Update multiple fields

```javascript
await db.update(
  { role: 'User' },
  {
    permissions: ['read'],
    tier: 'free',
    updatedAt: new Date()
  }
);
```

### Conditional update

```javascript
const updated = await db.update(
  { 
    role: 'Trial',
    createdAt: { $lt: new Date('2024-01-01') }
  },
  { 
    role: 'Expired',
    active: false 
  }
);
```

## Return Value

Returns a `Promise<number>` indicating the number of records updated.

## Related Methods

- [updateOne()](#updateOne) - Update a single record
- [updateById()](#updateById) - Update by ID
