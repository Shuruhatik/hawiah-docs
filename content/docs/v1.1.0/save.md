---
title: save()
description: Upsert operation - updates existing record if found, otherwise inserts a new one.
category: "CRUD: Writing Data"
signature: "save(query: Query, data: Data): Promise<Data>"
returnValue: "Promise<Data> - The saved record"
relatedMethods: ["insert", "update", "updateOne"]
---

# db.save()

Upsert operation: updates existing record if found, otherwise inserts a new one.

## Signature

```typescript
save(query: Query, data: Data): Promise<Data>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query to find existing record |
| `data` | `object` | Data to save |

## Examples

### Basic Upsert

```javascript
// Will update if user exists, insert if not
const user = await db.save(
  { email: 'ahmed@example.com' },
  { name: 'Ahmed', email: 'ahmed@example.com', role: 'Admin' }
);
```

### Update or Create Profile

```javascript
const profile = await db.save(
  { userId: '123' },
  {
    userId: '123',
    bio: 'Software Developer',
    location: 'Cairo',
    website: 'https://example.com'
  }
);
```

### Idempotent Operations

```javascript
// Safe to call multiple times
const config = await db.save(
  { key: 'app_settings' },
  {
    key: 'app_settings',
    theme: 'dark',
    language: 'en',
    notifications: true
  }
);
```

## Return Value

Returns a `Promise<Data>` containing the saved record (either updated or newly inserted).

## Use Cases

- User profile management
- Configuration storage
- Cache updates
- Idempotent API operations
