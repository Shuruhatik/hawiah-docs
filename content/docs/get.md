---
title: get()
description: Retrieves multiple records matching the query criteria.
category: "CRUD - Reading Data"
signature: "get(query?: Query, limit?: number): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of matching records"
relatedMethods: ["getOne", "getAll", "getById"]
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
| `query` | `object` | Query criteria (optional) |
| `limit` | `number` | Maximum number of records to return (optional) |

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
const allRecords = await db.get();
```

## Return Value

Returns a `Promise<Data[]>` containing an array of matching records.

## Related Methods

- [getOne()](#getOne) - Get a single record
- [getAll()](#getAll) - Get all records without filtering
- [getById()](#getById) - Get record by ID
- [getBy()](#getBy) - Get records by field and value
