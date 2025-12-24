---
title: has()
description: Checks if any records match the query criteria.
category: Utility Methods
signature: "has(query: Query): Promise<boolean>"
returnValue: "Promise<boolean> - True if at least one record matches"
relatedMethods: ["count", "getOne"]
---

# db.has()

Checks if any records match the query criteria.

## Signature

```typescript
has(query: Query): Promise<boolean>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |

## Examples

### Check if Admin Exists

```javascript
const hasAdmin = await db.has({ role: 'Admin' });
if (!hasAdmin) {
  console.log('No admin users found');
}
```

### Check Email Exists

```javascript
const emailExists = await db.has({ email: 'test@example.com' });
if (emailExists) {
  console.log('Email already registered');
}
```

### Validation

```javascript
if (await db.has({ username: newUsername })) {
  throw new Error('Username already taken');
}
```

## Return Value

Returns a `Promise<boolean>`:
- `true` if at least one record matches
- `false` if no records match
