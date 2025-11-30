---
title: removeOne()
description: Deletes the first record matching the query criteria.
category: CRUD: Deleting Data
signature: "removeOne(query: Query): Promise<Data | null>"
returnValue: "Promise<Data | null> - The deleted record or null"
relatedMethods: ["remove", "removeById"]
---

# db.removeOne()

Deletes the first record matching the query criteria.

## Signature

```typescript
removeOne(query: Query): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |

## Examples

### Delete Single User

```javascript
const deleted = await db.removeOne({ email: 'test@example.com' });
if (deleted) {
  console.log('User deleted:', deleted.name);
}
```

### Delete First Match

```javascript
const removed = await db.removeOne({ status: 'pending' });
if (removed) {
  console.log('Removed pending item:', removed.id);
}
```

### API Endpoint

```javascript
app.delete('/api/users/by-email/:email', async (req, res) => {
  const deleted = await db.removeOne({ email: req.params.email });
  
  if (!deleted) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ message: 'User deleted', user: deleted });
});
```

## Return Value

Returns a `Promise<Data | null>`:
- The deleted record if found
- `null` if no record matches the query
