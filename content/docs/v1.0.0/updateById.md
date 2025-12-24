---
title: updateById()
description: Updates a record by its unique identifier.
category: "CRUD: Updating Data"
signature: "updateById(id: string | number, data: Partial<Data>): Promise<Data | null>"
returnValue: "Promise<Data | null> - The updated record or null"
relatedMethods: ["update", "updateOne", "getById"]
---

# db.updateById()

Updates a record by its unique identifier.

## Signature

```typescript
updateById(id: string | number, data: Partial<Data>): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string \| number` | The unique identifier |
| `data` | `object` | Fields to update |

## Examples

### Update User by ID

```javascript
const user = await db.updateById(
  '507f1f77bcf86cd799439011',
  { role: 'Admin', verified: true }
);
```

### Update Multiple Fields

```javascript
const updated = await db.updateById(userId, {
  name: 'Ahmed Ali',
  email: 'ahmed.ali@example.com',
  phone: '+20123456789',
  updatedAt: new Date()
});
```

### API Endpoint

```javascript
app.patch('/api/users/:id', async (req, res) => {
  const user = await db.updateById(req.params.id, req.body);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});
```

## Return Value

Returns a `Promise<Data | null>`:
- The updated record if found
- `null` if no record exists with that ID
