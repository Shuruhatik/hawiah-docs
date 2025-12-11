---
title: getAll()
description: Retrieves all records from the database.
category: "CRUD: Reading Data"
signature: "getAll(): Promise<Data[]>"
returnValue: "Promise<Data[]> - Array of all records"
relatedMethods: ["get", "getOne", "count"]
---

# db.getAll()

Retrieves all records from the database without any filtering.

## Signature

```typescript
getAll(): Promise<Data[]>
```

## Examples

### Get all records

```javascript
const allUsers = await db.getAll();
console.log(`Total users: ${allUsers.length}`);
```

### Process all records

```javascript
const records = await db.getAll();

for (const record of records) {
  console.log(record.name);
}
```

### Export data

```javascript
const allData = await db.getAll();
fs.writeFileSync('backup.json', JSON.stringify(allData, null, 2));
```

## Return Value

Returns a `Promise<Data[]>` containing all records in the database.

## Notes

- Equivalent to `get({})` but more explicit
- Use with caution on large datasets
- Consider using `paginate()` for large collections
- For filtered results, use `get(query)` instead

## Related Methods

- [get()](/docs=get) - Get records with filtering
- [getOne()](/docs=getOne) - Get a single record
- [count()](/docs=count) - Count all records
- [paginate()](/docs=paginate) - Get paginated results
- [isEmpty()](/docs=isEmpty) - Check if database is empty
