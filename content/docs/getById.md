---
title: getById()
description: Retrieves a single record by its unique identifier.
category: CRUD: Reading Data
signature: "getById(id: string | number): Promise<Data | null>"
returnValue: "Promise<Data | null> - The record or null if not found"
relatedMethods: ["getOne", "updateById", "removeById"]
---

# db.getById()

Retrieves a single record by its unique identifier.

## Signature

```typescript
getById(id: string | number): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string \| number` | The unique identifier |

## Examples

### Get User by ID

```javascript
const user = await db.getById('507f1f77bcf86cd799439011');
if (user) {
  console.log(user.name);
}
```

### Numeric ID

```javascript
const product = await db.getById(12345);
console.log(product.name, product.price);
```

### With Error Handling

```javascript
const userId = req.params.id;
const user = await db.getById(userId);

if (!user) {
  return res.status(404).json({ error: 'User not found' });
}

res.json(user);
```

### Load Related Data

```javascript
const post = await db.getById(postId);
if (post) {
  const author = await db.getById(post.authorId);
  post.author = author;
}
```

## Return Value

Returns a `Promise<Data | null>`:
- The record if found
- `null` if no record exists with that ID

## Performance

`getById()` is the fastest query method as it uses the primary key index.
