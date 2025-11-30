---
title: get()
description: Retrieves multiple records matching the query criteria.
category: "CRUD: Reading Data"
signature: "get(query?: Query, limit?: number): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of matching records"
relatedMethods: ["getOne", "getAll", "getById", "getBy"]
---

# db.get()

Retrieves multiple records matching the query criteria.

## Signature

```typescript
get(query?: Query, limit?: number): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `Query` | Query criteria (default: {}) |
| `limit` | `number` | Maximum number of records (optional) |

## Examples

### Get all active users

```javascript
const activeUsers = await db.get({ active: true });
```

### Get first 10 admins

```javascript
const admins = await db.get({ role: 'Admin' }, 10);
```

### Get with multiple conditions

```javascript
const users = await db.get({
  role: 'User',
  active: true,
  verified: true
});
```

### Get all records

```javascript
const allRecords = await db.get({});
// or use getAll()
const allRecords2 = await db.getAll();
```

### Get with limit

```javascript
// Get first 5 records
const first5 = await db.get({}, 5);
```

## Return Value

Returns a `Promise<Data[]>` containing an array of matching records.

## Notes

- If no query is provided, returns all records
- Use `limit` parameter to restrict number of results
- For a single record, use `getOne()` instead
- For all records without filtering, use `getAll()`

## Related Methods

- [getOne()](/docs/getOne) - Get a single record
- [getAll()](/docs/getAll) - Get all records
- [getById()](/docs/getById) - Get record by ID
- [getBy()](/docs/getBy) - Get records by field value
- [paginate()](/docs/paginate) - Get paginated results
- [count()](/docs/count) - Count matching records
