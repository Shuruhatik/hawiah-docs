---
title: insert()
description: Adds a new record to the database.
category: "CRUD - Writing Data"
signature: "insert(data: Data): Promise<Data>"
returnValue: "Promise<Data> - The inserted record with generated ID"
relatedMethods: ["insertMany", "save"]
---

# db.insert()

Adds a new record to the database.

## Signature

```typescript
insert(data: Data): Promise<Data>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `object` | The record to insert |

## Examples

### Insert a user

```javascript
const user = await db.insert({
  name: 'Ahmed',
  email: 'ahmed@example.com',
  role: 'Admin',
  active: true
});

console.log(user); // { _id: '...', name: 'Ahmed', ... }
```

### Insert with nested data

```javascript
const post = await db.insert({
  title: 'Getting Started with Hawiah',
  author: {
    name: 'Ahmed',
    email: 'ahmed@example.com'
  },
  tags: ['database', 'nodejs', 'tutorial'],
  publishedAt: new Date()
});
```

## Return Value

Returns a `Promise<Data>` containing the inserted record with a generated ID.

## Related Methods

- [insertMany()](#insertMany) - Insert multiple records at once
- [save()](#save) - Upsert operation (insert or update)
