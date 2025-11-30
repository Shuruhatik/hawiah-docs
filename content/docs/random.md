---
title: random()
description: Retrieves random records from the database.
category: CRUD: Reading Data
signature: "random(sampleSize?: number): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of random records"
relatedMethods: ["get", "getAll"]
---

# db.random()

Retrieves random records from the database.

## Signature

```typescript
random(sampleSize?: number): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `sampleSize` | `number` | Number of random records to return (default: 1) |

## Examples

### Get One Random Record

```javascript
const randomUser = await db.random();
console.log(randomUser[0]);
```

### Get Multiple Random Records

```javascript
const randomUsers = await db.random(5);
console.log(`Got ${randomUsers.length} random users`);
```

### Random Featured Items

```javascript
const featuredProducts = await db.random(3);
// Display as featured items on homepage
```

### Random Testimonials

```javascript
const testimonials = await db.random(4);
testimonials.forEach(t => {
  console.log(`"${t.text}" - ${t.author}`);
});
```

## Return Value

Returns a `Promise<Data[]>` containing the specified number of random records.

## Use Cases

- Featured content
- Random recommendations
- A/B testing
- Sample data selection
