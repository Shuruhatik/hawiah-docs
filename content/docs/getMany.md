---
title: getMany()
description: Retrieves records matching any of the provided queries.
category: "CRUD: Reading Data"
signature: "getMany(queries: Query[]): Promise<Data[]>"
returnValue: "Promise<Data[]> - Combined array of matching records"
relatedMethods: ["get", "getOne"]
---

# db.getMany()

Retrieves records matching any of the provided queries (OR operation).

## Signature

```typescript
getMany(queries: Query[]): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `queries` | `Query[]` | Array of query criteria |

## Examples

### Get users with multiple roles

```javascript
const users = await db.getMany([
  { role: 'Admin' },
  { role: 'Moderator' },
  { role: 'Editor' }
]);
```

### Get posts by multiple authors

```javascript
const posts = await db.getMany([
  { authorId: 'user1' },
  { authorId: 'user2' },
  { authorId: 'user3' }
]);
```

### Complex OR queries

```javascript
const records = await db.getMany([
  { status: 'active', verified: true },
  { status: 'pending', priority: 'high' }
]);
```

## Return Value

Returns a `Promise<Data[]>` containing all records that match any of the queries.

## Notes

- Performs OR operation across all queries
- May return duplicate records if they match multiple queries
- Results are combined into a single array

## Related Methods

- [get()](/docs#get) - Get with single query (AND operation)
- [getOne()](/docs#getOne) - Get single record
