---
title: updateOne()
description: Updates the first record matching the query criteria.
category: "CRUD: Updating Data"
signature: "updateOne(query: Query, data: Partial<Data>): Promise<Data | null>"
returnValue: "Promise<Data | null> - The updated record or null"
relatedMethods: ["update", "updateById"]
---

# db.updateOne()

Updates the first record matching the query criteria.

## Signature

```typescript
updateOne(query: Query, data: Partial<Data>): Promise<Data | null>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria |
| `data` | `object` | Fields to update |

## Examples

### Update Single User

```javascript
const user = await db.updateOne(
  { email: 'ahmed@example.com' },
  { lastLogin: new Date() }
);

console.log(user);
```

### Update First Match

```javascript
const updated = await db.updateOne(
  { status: 'pending' },
  { status: 'processing', startedAt: new Date() }
);
```

### Conditional Update

```javascript
const user = await db.updateOne(
  { email: email, verified: false },
  { verified: true, verifiedAt: new Date() }
);

if (user) {
  console.log('User verified successfully');
}
```

## Return Value

Returns a `Promise<Data | null>`:
- The updated record if found
- `null` if no record matches the query
