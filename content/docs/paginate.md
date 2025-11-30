---
title: paginate()
description: Retrieves paginated results with metadata.
category: "CRUD: Reading Data"
signature: "paginate(query?: Query, page?: number, pageSize?: number): Promise<PaginatedResult>"
returnValue: "Promise<PaginatedResult> - Object with data, page, pageSize, total, and totalPages"
relatedMethods: ["get", "count"]
---

# db.paginate()

Retrieves paginated results with metadata.

## Signature

```typescript
paginate(query?: Query, page?: number, pageSize?: number): Promise<PaginatedResult>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `object` | Query criteria (optional) |
| `page` | `number` | Page number (default: 1) |
| `pageSize` | `number` | Records per page (default: 10) |

## Examples

### Basic Pagination

```javascript
const result = await db.paginate({ active: true }, 2, 20);

console.log(result.data);        // Current page records
console.log(result.page);        // 2
console.log(result.pageSize);    // 20
console.log(result.total);       // Total matching records
console.log(result.totalPages);  // Total pages
```

### API Endpoint

```javascript
app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  
  const result = await db.paginate({}, page, pageSize);
  res.json(result);
});
```

### With Filters

```javascript
const result = await db.paginate(
  { role: 'User', active: true },
  1,
  25
);

console.log(`Showing ${result.data.length} of ${result.total} users`);
```

### Navigation Helper

```javascript
const result = await db.paginate({}, currentPage, 10);

const pagination = {
  current: result.page,
  total: result.totalPages,
  hasNext: result.page < result.totalPages,
  hasPrev: result.page > 1,
  nextPage: result.page + 1,
  prevPage: result.page - 1
};
```

## Return Value

Returns a `Promise<PaginatedResult>` with:
- `data`: Array of records for current page
- `page`: Current page number
- `pageSize`: Records per page
- `total`: Total number of matching records
- `totalPages`: Total number of pages
