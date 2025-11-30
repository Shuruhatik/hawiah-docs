---
title: group()
description: Groups records by a specific field and returns grouped results.
category: Utility Methods
signature: "group(field: string): Promise<Record<string, Data[]>>"
returnValue: "Promise<Record<string, Data[]>> - Object with grouped records"
relatedMethods: ["unique", "count"]
---

# db.group()

Groups records by a specific field and returns grouped results.

## Signature

```typescript
group(field: string): Promise<Record<string, Data[]>>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | `string` | Field name to group by |

## Examples

### Group Users by Role

```javascript
const grouped = await db.group('role');

console.log(grouped);
// {
//   'Admin': [{ name: 'Ahmed', role: 'Admin' }, ...],
//   'User': [{ name: 'Sara', role: 'User' }, ...],
//   'Moderator': [{ name: 'Omar', role: 'Moderator' }, ...]
// }
```

### Count by Group

```javascript
const grouped = await db.group('role');

Object.entries(grouped).forEach(([role, users]) => {
  console.log(`${role}: ${users.length} users`);
});
```

### Group by Category

```javascript
const postsByCategory = await db.group('category');

// Display posts organized by category
for (const [category, posts] of Object.entries(postsByCategory)) {
  console.log(`\n${category}:`);
  posts.forEach(post => console.log(`  - ${post.title}`));
}
```

### Group by Status

```javascript
const ordersByStatus = await db.group('status');
console.log(`Pending: ${ordersByStatus.pending?.length || 0}`);
console.log(`Completed: ${ordersByStatus.completed?.length || 0}`);
```

## Return Value

Returns a `Promise<Record<string, Data[]>>` - an object where keys are unique field values and values are arrays of records with that value.
