---
title: Virtual Relationships
description: Create relationships between different Hawiah instances for powerful data modeling.
category: Advanced
---

# Virtual Relationships

Virtual Relationships allow you to create relationships between different Hawiah instances, enabling powerful data modeling without complex joins.

## 🎯 The Concept

Relationships work **between different instances** of Hawiah - not within the same instance. This allows:
- Each instance to use a different driver
- Perfect for microservices architecture
- Clear separation between models

## 📦 Installation

```install
hawiah dataloader
```

## 🚀 Quick Start

### 1. Create Instances

```javascript
import { Hawiah } from 'hawiah';
import { MemoryDriver } from '@hawiah/local';

const Users = new Hawiah({ driver: new MemoryDriver() });
const Posts = new Hawiah({ driver: new MemoryDriver() });

await Users.connect();
await Posts.connect();
```

### 2. Define Relationships

```javascript
// User has many posts
Users.relation('posts', Posts, '_id', 'userId', 'many');

// Post belongs to one user
Posts.relation('user', Users, 'userId', '_id', 'one');
```

### 3. Fetch Data with Relationships

```javascript
// Get user with their posts
const user = await Users.getOneWith({ _id: 1 }, 'posts');
console.log(user.posts); // Array of posts

// Get all posts with users
const posts = await Posts.getWith({}, 'user');
posts.forEach(post => {
  console.log(post.user.name);
});
```

## 📖 API Reference

### `relation(name, target, localKey, foreignKey, type)`

Define a relationship between instances.

**Parameters:**
- `name` - Relationship name (appears in results)
- `target` - Target Hawiah instance
- `localKey` - Local field (usually `_id`)
- `foreignKey` - Foreign field (e.g., `userId`)
- `type` - Relationship type: `'one'` or `'many'`

**Example:**
```javascript
Users.relation('posts', Posts, '_id', 'userId', 'many');
```

### `getWith(query, ...relations)`

Fetch multiple records with relationships.

**Example:**
```javascript
// Get all users with their posts
const users = await Users.getWith({}, 'posts');

// Get specific users with multiple relations
const users = await Users.getWith({ age: 25 }, 'posts', 'profile');
```

### `getOneWith(query, ...relations)`

Fetch single record with relationships.

**Example:**
```javascript
// Get one user with posts
const user = await Users.getOneWith({ _id: 1 }, 'posts');

// Get post with user and comments
const post = await Posts.getOneWith({ _id: 1 }, 'user', 'comments');
```

### `clearCache()`

Clear relationship cache.

**Example:**
```javascript
Posts.clearCache();
```

## 💡 Practical Examples

### Example 1: Blog System

```javascript
import { Hawiah } from 'hawiah';
import { MemoryDriver } from '@hawiah/local';

const Users = new Hawiah({ driver: new MemoryDriver() });
const Posts = new Hawiah({ driver: new MemoryDriver() });
const Comments = new Hawiah({ driver: new MemoryDriver() });

await Users.connect();
await Posts.connect();
await Comments.connect();

// Define relationships
Users.relation('posts', Posts, '_id', 'userId', 'many');
Posts.relation('user', Users, 'userId', '_id', 'one');
Posts.relation('comments', Comments, '_id', 'postId', 'many');
Comments.relation('user', Users, 'userId', '_id', 'one');

// Insert data
const user = await Users.insert({ name: 'Ahmed' });
const post = await Posts.insert({ 
  title: 'My Post', 
  userId: user._id 
});
await Comments.insert({ 
  text: 'Great post!', 
  postId: post._id, 
  userId: user._id 
});

// Fetch post with everything
const fullPost = await Posts.getOneWith(
  { _id: post._id }, 
  'user', 
  'comments'
);

console.log(fullPost.user.name);
console.log(fullPost.comments.length);
```

### Example 2: E-Commerce

```javascript
const Products = new Hawiah({ driver: new MemoryDriver() });
const Categories = new Hawiah({ driver: new MemoryDriver() });
const Reviews = new Hawiah({ driver: new MemoryDriver() });

await Products.connect();
await Categories.connect();
await Reviews.connect();

// Define relationships
Products.relation('category', Categories, 'categoryId', '_id', 'one');
Products.relation('reviews', Reviews, '_id', 'productId', 'many');

// Fetch product with category and reviews
const product = await Products.getOneWith(
  { _id: 1 }, 
  'category', 
  'reviews'
);

console.log(product.category.name);
console.log(product.reviews.length);
```

## ⚡ Performance

### The Problem: N+1 Queries

```javascript
// ❌ Bad - 101 queries for 100 posts
const posts = await Posts.get({});
for (const post of posts) {
  post.user = await Users.getOne({ _id: post.userId });
}
```

### The Solution: DataLoader Batching

```javascript
// ✅ Excellent - Only 2 queries!
const posts = await Posts.getWith({}, 'user');
// Query 1: Fetch posts
// Query 2: Fetch all users in one batch
```

**Result: 98% reduction in queries!**

## 🎓 Best Practices

### 1. Define Relationships Once

```javascript
// At application startup
Users.relation('posts', Posts, '_id', 'userId', 'many');
Posts.relation('user', Users, 'userId', '_id', 'one');

// Use anywhere
const user = await Users.getOneWith({ _id: 1 }, 'posts');
```

### 2. Use `getWith()` Instead of Loops

```javascript
// ❌ Slow
const posts = await Posts.get({});
for (const post of posts) {
  post.user = await Users.getOne({ _id: post.userId });
}

// ✅ Fast
const posts = await Posts.getWith({}, 'user');
```

### 3. Clear Cache After Updates

```javascript
await Users.update({ _id: 1 }, { name: 'New Name' });
Posts.clearCache(); // Clear relationship cache
```

## 🔧 TypeScript Support

```typescript
import { Hawiah } from 'hawiah';
import { MemoryDriver } from '@hawiah/local';

const Users = new Hawiah({ driver: new MemoryDriver() });
const Posts = new Hawiah({ driver: new MemoryDriver() });

await Users.connect();
await Posts.connect();

Users.relation('posts', Posts, '_id', 'userId', 'many');

const user = await Users.getOneWith({ _id: 1 }, 'posts');
// user.posts is automatically available
```

## ❓ FAQ

### Why relationships between different instances?

Because:
- Each instance can use a different driver
- Perfect for microservices
- Clear separation between models

### Can I use different drivers?

Yes! Each instance can use a different driver:

```javascript
import { SQLiteDriver } from '@hawiah/sqlite';
import { MongoDriver } from '@hawiah/mongo';

const Users = new Hawiah({ driver: new SQLiteDriver('./users.db', 'users') });
const Posts = new Hawiah({ driver: new MongoDriver({
  uri: 'mongodb://localhost:27017',
  databaseName: 'blog',
  collectionName: 'posts'
}) });

Users.relation('posts', Posts, '_id', 'userId', 'many');
// Works perfectly!
```

### What's the difference between `one` and `many`?

- `'one'` - One-to-one relationship (result is **object**)
- `'many'` - One-to-many relationship (result is **array**)

## Relationship Types

### ONE-TO-ONE

```javascript
// User has one profile
const Users = new Hawiah({ driver: new MemoryDriver() });
const Profiles = new Hawiah({ driver: new MemoryDriver() });

Users.relation('profile', Profiles, '_id', 'userId', 'one');

const user = await Users.getOneWith({ _id: 1 }, 'profile');
console.log(user.profile.bio); // Single object ✅
```

### ONE-TO-MANY

```javascript
// User has many posts
const Posts = new Hawiah({ driver: new MemoryDriver() });

Users.relation('posts', Posts, '_id', 'userId', 'many');

const user = await Users.getOneWith({ _id: 1 }, 'posts');
console.log(user.posts.length); // Array ✅
user.posts.forEach(post => console.log(post.title));
```

### MANY-TO-MANY

For many-to-many relationships, use a junction table:

```javascript
const Users = new Hawiah({ driver: new MemoryDriver() });
const Roles = new Hawiah({ driver: new MemoryDriver() });
const UserRoles = new Hawiah({ driver: new MemoryDriver() });

// User has many roles through UserRoles
Users.relation('userRoles', UserRoles, '_id', 'userId', 'many');
UserRoles.relation('role', Roles, 'roleId', '_id', 'one');

// Fetch user with roles
const user = await Users.getOneWith({ _id: 1 }, 'userRoles');
const roles = user.userRoles.map(ur => ur.role);
```

## Advanced Patterns

### Nested Relationships

```javascript
// Define relationships
Users.relation('posts', Posts, '_id', 'userId', 'many');
Posts.relation('comments', Comments, '_id', 'postId', 'many');
Comments.relation('user', Users, 'userId', '_id', 'one');

// Fetch user with posts and their comments
const user = await Users.getOneWith({ _id: 1 }, 'posts');

// Then fetch comments for each post
for (const post of user.posts) {
  const fullPost = await Posts.getOneWith({ _id: post._id }, 'comments');
  post.comments = fullPost.comments;
}
```

### Conditional Loading

```javascript
// Load relationships conditionally
const includeComments = true;

const relations = ['user'];
if (includeComments) {
  relations.push('comments');
}

const post = await Posts.getOneWith({ _id: 1 }, ...relations);
```

### Relationship Counting

```javascript
// Get user with post count
const user = await Users.getOneWith({ _id: 1 }, 'posts');
user.postCount = user.posts.length;
```

## 📝 Summary

```javascript
// 1. Create instances
const Users = new Hawiah({ driver: new MemoryDriver() });
const Posts = new Hawiah({ driver: new MemoryDriver() });

// 2. Define relationships
Users.relation('posts', Posts, '_id', 'userId', 'many');
Posts.relation('user', Users, 'userId', '_id', 'one');

// 3. Use relationships
const user = await Users.getOneWith({ _id: 1 }, 'posts');
const posts = await Posts.getWith({}, 'user');
```

**That's it! Simple and powerful 🎉**

## Related Topics

- [API Reference](/docs#api-reference) - Complete method list
- [Method Relationships](/docs#relationships) - Method patterns
- [Custom Drivers](/docs#custom-drivers) - Build your own
- [Quick Start](/docs#quick-start) - Getting started
