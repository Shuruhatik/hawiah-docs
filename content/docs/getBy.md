---
title: getBy()
description: Retrieves records where a specific field matches a value.
category: "CRUD: Reading Data"
signature: "getBy(field: string, value: any): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of matching records"
relatedMethods: ["get", "getOne", "hasBy", "countBy"]
---

# db.getBy()

Retrieves records where a specific field matches a value.

## Signature

```typescript
getBy(field: string, value: any): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | `string` | Field name to match |
| `value` | `any` | Value to match |

## Examples

### Get users by role

```javascript
const admins = await db.getBy('role', 'Admin');
console.log(`Found ${admins.length} admins`);
```

### Get posts by author

```javascript
const userPosts = await db.getBy('authorId', userId);
```

### Get by city

```javascript
const users = await db.getBy('city', 'Cairo');
```

### Get by status

```javascript
const activeUsers = await db.getBy('status', 'active');
```

## Return Value

Returns a `Promise<Data[]>` containing all records where the field matches the value.

## Notes

- Equivalent to `get({ [field]: value })`
- More readable for simple field matching
- Returns empty array if no matches found

## Related Methods

- [get()](/docs#get) - Get with complex queries
- [getOne()](/docs#getOne) - Get single record
- [hasBy()](/docs#hasBy) - Check if field value exists
- [countBy()](/docs#countBy) - Count records by field value
