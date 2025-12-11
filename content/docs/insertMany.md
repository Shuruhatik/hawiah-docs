---
title: insertMany()
description: Inserts multiple records into the database in a single operation.
category: "CRUD: Writing Data"
signature: "insertMany(dataArray: Data[]): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of inserted records"
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
| `dataArray` | `Data[]` | Array of records to insert |

## Examples

### Insert multiple users

```javascript
const users = await db.insertMany([
  { name: 'Ahmed', role: 'Admin', age: 25 },
  { name: 'Sara', role: 'User', age: 30 },
  { name: 'Omar', role: 'Moderator', age: 28 }
]);

console.log(`Inserted ${users.length} users`);
```

### Bulk import products

```javascript
const products = [
  { name: 'Product 1', price: 100, stock: 50 },
  { name: 'Product 2', price: 200, stock: 30 },
  { name: 'Product 3', price: 150, stock: 40 }
];

const inserted = await db.insertMany(products);
console.log(`Inserted ${inserted.length} products`);
```

### With error handling

```javascript
try {
  const records = await db.insertMany(dataArray);
  console.log('Bulk insert successful');
} catch (error) {
  console.error('Bulk insert failed:', error);
}
```

## Return Value

Returns a `Promise<Data[]>` containing an array of inserted records.

## Performance

`insertMany()` is significantly faster than multiple `insert()` calls as it performs the operation in a single batch.

## Notes

- Much more efficient than calling `insert()` multiple times
- All records are inserted in a single operation
- If one record fails, behavior depends on the driver

## Related Methods

- [insert()](/docs=insert) - Insert a single record
- [save()](/docs=save) - Upsert operation
- [get()](/docs=get) - Query inserted records
