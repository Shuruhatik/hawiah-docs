---
title: insertMany()
description: Inserts multiple records into the database in a single operation.
category: CRUD: Writing Data
signature: "insertMany(dataArray: Data[]): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of inserted records with generated IDs"
relatedMethods: ["insert", "save"]
---

# db.insertMany()

Inserts multiple records into the database in a single operation.

## Signature

```typescript
insertMany(dataArray: Data[]): Promise<Data[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `dataArray` | `object[]` | Array of records to insert |

## Examples

### Insert Multiple Users

```javascript
const users = await db.insertMany([
  { name: 'Ahmed', role: 'Admin' },
  { name: 'Sara', role: 'User' },
  { name: 'Omar', role: 'Moderator' }
]);

console.log(users.length); // 3
console.log(users[0]._id); // Generated ID
```

### Bulk Import

```javascript
const products = [
  { name: 'Product 1', price: 100, stock: 50 },
  { name: 'Product 2', price: 200, stock: 30 },
  { name: 'Product 3', price: 150, stock: 40 }
];

const inserted = await db.insertMany(products);
console.log(`Inserted ${inserted.length} products`);
```

### With Error Handling

```javascript
try {
  const records = await db.insertMany(dataArray);
  console.log('Bulk insert successful');
} catch (error) {
  console.error('Bulk insert failed:', error);
}
```

## Return Value

Returns a `Promise<Data[]>` containing an array of inserted records, each with a generated ID.

## Performance

`insertMany()` is significantly faster than multiple `insert()` calls as it performs the operation in a single database transaction.
