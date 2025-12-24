---
title: getOne()
description: Retrieves a single record matching the query criteria.
category: "CRUD: Reading Data"
signature: "getOne(query: Query): Promise<Data | null>"
returnValue: "Promise<Data | null> - The first matching record or null"
relatedMethods: ["get", "getById", "first"]
---

# db.getOne()

Retrieves a single record matching the query criteria.

## Signature

```typescript
getOne(query: Query): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |

## Examples

### Find Single User

```javascript
const admin = await db.getOne({ role: 'Admin' });
if (admin) {
  console.log(admin.name);
}
```

### Find by Email

```javascript
const user = await db.getOne({ email: 'ahmed@example.com' });
if (user) {
  console.log('User found:', user.name);
} else {
  console.log('User not found');
}
```

### Complex Query

```javascript
const activeAdmin = await db.getOne({
  role: 'Admin',
  active: true,
  verified: true
});
```

### With Default Value

```javascript
const settings = await db.getOne({ key: 'app_config' }) || {
  key: 'app_config',
  theme: 'light',
  language: 'en'
};
```

## Return Value

Returns a `Promise<Data | null>`:
- The first matching record if found
- `null` if no record matches the query

## Notes

- Returns only the first match if multiple records match
- Use `get()` if you need all matching records
- Use `getById()` if you have the record ID
