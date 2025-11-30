---
title: getById()
description: Retrieves a record by its ID.
category: "CRUD: Reading Data"
signature: "getById(id: number | string): Promise<Data | null>"
returnValue: "Promise<Data | null> - The record or null if not found"
relatedMethods: ["getOne", "updateById", "removeById", "hasId"]
---

# db.getById()

Retrieves a record by its ID.

## Signature

```typescript
getById(id: number | string): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `number \| string` | The record ID |

## Examples

### Get user by ID

```javascript
const user = await db.getById(123);

if (user) {
  console.log(user.name);
} else {
  console.log('User not found');
}
```

### Get with string ID

```javascript
const post = await db.getById('abc-123-def');
```

### API endpoint

```javascript
app.get('/api/users/:id', async (req, res) => {
  const user = await db.getById(req.params.id);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});
```

## Return Value

Returns a `Promise<Data | null>`:
- The record if found
- `null` if no record with that ID exists

## Notes

- Searches for `_id` field by default
- Faster than using `getOne({ _id: id })`
- Returns `null` if not found (doesn't throw error)

## Related Methods

- [getOne()](/docs/getOne) - Get by any query
- [updateById()](/docs/updateById) - Update by ID
- [removeById()](/docs/removeById) - Remove by ID
- [hasId()](/docs/hasId) - Check if ID exists
- [get()](/docs/get) - Get multiple records
