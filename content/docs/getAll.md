---
title: getAll()
description: Retrieves all records from the database without any filtering.
category: "CRUD: Reading Data"
signature: "getAll(): Promise<Data[]>"
returnValue: "Promise<Data[]> - All records in the database"
relatedMethods: ["get", "count"]
---

# db.getAll()

Retrieves all records from the database without any filtering.

## Signature

```typescript
getAll(): Promise<Data[]>
```

## Examples

### Get All Records

```javascript
const allRecords = await db.getAll();
console.log(`Total records: ${allRecords.length}`);
```

### Export Data

```javascript
const allData = await db.getAll();
const json = JSON.stringify(allData, null, 2);
fs.writeFileSync('backup.json', json);
```

### Statistics

```javascript
const records = await db.getAll();
const stats = {
  total: records.length,
  active: records.filter(r => r.active).length,
  inactive: records.filter(r => !r.active).length
};
console.log(stats);
```

### Iterate All Records

```javascript
const records = await db.getAll();
for (const record of records) {
  console.log(record.name);
}
```

## Return Value

Returns a `Promise<Data[]>` containing all records in the database.

## Performance Considerations

- Use with caution on large datasets
- Consider using `get()` with pagination for large collections
- Use `count()` if you only need the total number
- Consider using `paginate()` for better performance

## Use Cases

- Small datasets
- Data export/backup
- Statistics calculation
- Development/testing
