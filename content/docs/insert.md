---
title: insert()
description: Adds a new record to the database.
category: "CRUD: Writing Data"
signature: "insert(data: Data): Promise<Data>"
returnValue: "Promise<Data> - The inserted record"
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

console.log(user);
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

### Insert with arrays

```javascript
const user = await db.insert({
  name: 'Sara',
  skills: ['JavaScript', 'TypeScript', 'Node.js'],
  projects: [
    { name: 'Project A', status: 'active' },
    { name: 'Project B', status: 'completed' }
  ]
});
```

## Return Value

Returns a `Promise<Data>` containing the inserted record.

## Notes

- The driver may add an `_id` field automatically
- For inserting multiple records, use `insertMany()` for better performance
- Use `save()` if you want upsert behavior (insert or update)

## Related Methods

- [insertMany()](/docs/insertMany) - Insert multiple records at once
- [save()](/docs/save) - Upsert operation (insert or update)
- [update()](/docs/update) - Update existing records
