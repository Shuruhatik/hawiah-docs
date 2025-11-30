---
title: API Reference
description: Complete reference of all Hawiah methods organized by category.
category: Getting Started
---

# API Reference

Complete reference of all available methods in Hawiah.

## Connection Methods

| Method | Description | Returns |
|--------|-------------|---------|
| [connect()](/docs/connect) | Establish database connection | `Promise<void>` |
| [disconnect()](/docs/disconnect) | Close database connection | `Promise<void>` |
| [isActive()](/docs/isActive) | Check connection status | `boolean` |
| getDriver() | Get underlying driver instance | `IDriver` |

## Virtual Relationships

| Method | Description | Returns |
|--------|-------------|---------|
| relation() | Define relationship between instances | `void` |
| [getWith()](/docs/virtual-relationships) | Get records with relationships | `Promise<Data[]>` |
| [getOneWith()](/docs/virtual-relationships) | Get single record with relationships | `Promise<Data \| null>` |
| clearCache() | Clear relationship cache | `void` |

## Insert Methods (Create)

| Method | Description | Returns |
|--------|-------------|---------|
| [insert()](/docs/insert) | Insert single record | `Promise<Data>` |
| [insertMany()](/docs/insertMany) | Insert multiple records | `Promise<Data[]>` |
| [save()](/docs/save) | Insert or update (upsert) | `Promise<Data>` |

## Query Methods (Read)

### Basic Queries

| Method | Description | Returns |
|--------|-------------|---------|
| [get()](/docs/get) | Get records by query | `Promise<Data[]>` |
| [getOne()](/docs/getOne) | Get single record | `Promise<Data \| null>` |
| [getAll()](/docs/getAll) | Get all records | `Promise<Data[]>` |
| [getMany()](/docs/getMany) | Get by multiple queries (OR) | `Promise<Data[]>` |

### ID-based Queries

| Method | Description | Returns |
|--------|-------------|---------|
| [getById()](/docs/getById) | Get record by ID | `Promise<Data \| null>` |
| [getBy()](/docs/getBy) | Get records by field value | `Promise<Data[]>` |

### Positional Queries

| Method | Description | Returns |
|--------|-------------|---------|
| [first()](/docs/first) | Get first record | `Promise<Data \| null>` |
| [last()](/docs/last) | Get last record | `Promise<Data \| null>` |
| [random()](/docs/random) | Get random record(s) | `Promise<Data[]>` |

### Advanced Queries

| Method | Description | Returns |
|--------|-------------|---------|
| [paginate()](/docs/paginate) | Get paginated results | `Promise<PaginatedResult>` |
| [sort()](/docs/sort) | Get sorted results | `Promise<Data[]>` |
| [select()](/docs/select) | Get specific fields only | `Promise<Data[]>` |
| [unique()](/docs/unique) | Get unique field values | `Promise<any[]>` |
| [group()](/docs/group) | Group records by field | `Promise<{[key: string]: Data[]}>` |

## Update Methods

| Method | Description | Returns |
|--------|-------------|---------|
| [update()](/docs/update) | Update multiple records | `Promise<number>` |
| [updateOne()](/docs/updateOne) | Update single record | `Promise<boolean>` |
| [updateById()](/docs/updateById) | Update by ID | `Promise<boolean>` |
| [save()](/docs/save) | Insert or update | `Promise<Data>` |

## Delete Methods

| Method | Description | Returns |
|--------|-------------|---------|
| [remove()](/docs/remove) | Remove multiple records | `Promise<number>` |
| [removeOne()](/docs/removeOne) | Remove single record | `Promise<boolean>` |
| [removeById()](/docs/removeById) | Remove by ID | `Promise<boolean>` |
| [clear()](/docs/clear) | Remove all records | `Promise<number>` |

## Array Operations

| Method | Description | Returns |
|--------|-------------|---------|
| [push()](/docs/push) | Add to end of array | `Promise<number>` |
| [pull()](/docs/pull) | Remove from array | `Promise<number>` |
| [shift()](/docs/shift) | Remove first element | `Promise<number>` |
| [unshift()](/docs/unshift) | Add to beginning of array | `Promise<number>` |
| [pop()](/docs/pop) | Remove last element | `Promise<number>` |

## Numeric Operations

| Method | Description | Returns |
|--------|-------------|---------|
| [increment()](/docs/increment) | Increase numeric field | `Promise<number>` |
| [decrement()](/docs/decrement) | Decrease numeric field | `Promise<number>` |
| [sum()](/docs/sum) | Calculate sum of field | `Promise<number>` |

## Field Operations

| Method | Description | Returns |
|--------|-------------|---------|
| [unset()](/docs/unset) | Remove field from records | `Promise<number>` |
| [rename()](/docs/rename) | Rename field in records | `Promise<number>` |

## Utility Methods

### Existence Checks

| Method | Description | Returns |
|--------|-------------|---------|
| [has()](/docs/has) | Check if record exists | `Promise<boolean>` |
| hasBy() | Check by field value | `Promise<boolean>` |
| hasId() | Check if ID exists | `Promise<boolean>` |
| [isEmpty()](/docs/isEmpty) | Check if database is empty | `Promise<boolean>` |

### Counting

| Method | Description | Returns |
|--------|-------------|---------|
| [count()](/docs/count) | Count records | `Promise<number>` |
| countBy() | Count by field value | `Promise<number>` |

## Method Relationships

### CRUD Flow

```
INSERT → [insert, insertMany, save]
  ↓
READ → [get, getOne, getAll, getById]
  ↓
UPDATE → [update, updateOne, updateById, save]
  ↓
DELETE → [remove, removeOne, removeById, clear]
```

### Query Hierarchy

```
getAll() → Get everything
  ↓
get(query) → Filter by criteria
  ↓
getOne(query) → Get first match
  ↓
getById(id) → Get by specific ID
```

### Array Operations Flow

```
push() → Add to end
unshift() → Add to beginning
  ↓
[Array Field]
  ↓
shift() → Remove from beginning
pop() → Remove from end
pull(value) → Remove specific value
```

### Numeric Operations Flow

```
increment() → Increase value
  ↓
[Numeric Field]
  ↓
decrement() → Decrease value
  ↓
sum() → Calculate total
```

## Common Patterns

### Check Before Insert

```javascript
if (!await db.has({ email: userEmail })) {
  await db.insert({ email: userEmail, name: userName });
}
```

### Update or Insert

```javascript
await db.save(
  { email: userEmail },
  { email: userEmail, name: userName }
);
```

### Paginated List

```javascript
const page = await db.paginate(
  { active: true },
  pageNumber,
  pageSize
);
```

### Increment Counter

```javascript
await db.increment(
  { _id: postId },
  'views',
  1
);
```

### Array Management

```javascript
// Add item
await db.push({ _id: userId }, 'tags', 'premium');

// Remove item
await db.pull({ _id: userId }, 'tags', 'trial');
```

## Type Definitions

```typescript
type Data = Record<string, any>;
type Query = Record<string, any>;

interface PaginatedResult {
  data: Data[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
```

## Next Steps

- [Quick Start Guide](/docs/quick-start)
- [Database Drivers](/docs/drivers)
- [Installation](/docs/installation)
