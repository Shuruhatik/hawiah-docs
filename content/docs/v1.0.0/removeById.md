---
title: removeById()
description: Deletes a record by its unique identifier.
category: "CRUD: Deleting Data"
signature: "removeById(id: string | number): Promise<Data | null>"
returnValue: "Promise<Data | null> - The deleted record or null"
relatedMethods: ["remove", "removeOne", "getById"]
---

# db.removeById()

Deletes a record by its unique identifier.

## Signature

```typescript
removeById(id: string | number): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string \| number` | The unique identifier |

## Examples

### Delete by ID

```javascript
const deleted = await db.removeById('507f1f77bcf86cd799439011');
console.log('Deleted:', deleted);
```

### API Endpoint

```javascript
app.delete('/api/users/:id', async (req, res) => {
  const deleted = await db.removeById(req.params.id);
  
  if (!deleted) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ message: 'User deleted successfully' });
});
```

### With Confirmation

```javascript
const user = await db.getById(userId);
if (user && confirm(`Delete ${user.name}?`)) {
  await db.removeById(userId);
  console.log('User deleted');
}
```

## Return Value

Returns a `Promise<Data | null>`:
- The deleted record if found
- `null` if no record exists with that ID
