---
title: Performance Benchmarks
description: Comprehensive performance comparison between Hawiah and popular database libraries like Prisma, TypeORM, and Sequelize.
category: Getting Started
---

# Performance Benchmarks

To ensure high performance across various workloads, we conducted a comprehensive benchmark comparing **Hawiah** with other popular database libraries using **SQLite** as the common database driver.

SQLite provides a level playing field as all libraries use their respective SQLite drivers, ensuring a fair comparison without network latency or external database setup overhead.

## 📊 Summary Results

Testing Hawiah against **Prisma**, **TypeORM**, and **Sequelize** across 9 different database operations reveals that Hawiah is significantly faster in almost every category.

### 🥇 The Verdict: Hawiah Wins

| Rank | Library | Total Time | Performance |
|------|-----|------------|-------------|
| 🥇 | **Hawiah** | **94.42 ms** | **Baseline (Fastest)** |
| 🥈 | Sequelize | 230.08 ms | 144% slower |
| 🥉 | TypeORM | 239.49 ms | 154% slower |
| 4️⃣ | Prisma | 268.57 ms | 184% slower |

> **Hawiah is 2.6x faster on average than its competitors.**

---

## 📈 Detailed Test Results

All tests performed using the **SQLite database driver**. Metrics are in milliseconds (**ms**), where lower is better.

| # | Operation | Hawiah | Prisma | TypeORM | Sequelize | Hawiah Advantage |
|---|-----------|--------|--------|---------|-----------|------------------|
| 1 | **Insert Single** | 71.18 | 103.88 | 92.36 | 75.29 | **Highly Competitive** |
| 2 | **Get By ID** | **0.24** | 6.44 | 1.45 | 4.15 | **2,583% faster** |
| 3 | **Sort Records** | **0.41** | 5.22 | 2.74 | 4.58 | **1,173% faster** |
| 4 | **Pagination** | **0.46** | 1.04 | 0.72 | 1.14 | **126% faster** |
| 5 | **Select All** | **0.30** | 2.41 | 2.45 | 3.25 | **703% faster** |
| 6 | **Select Filter** | **0.47** | 2.27 | 1.00 | 1.58 | **383% faster** |
| 7 | **Update Records**| **18.72** | 80.26 | 70.68 | 71.17 | **329% faster** |
| 8 | **Delete Records**| **2.46** | 64.25 | 67.27 | 67.55 | **2,512% faster** |
| 9 | **Count Records** | **0.17** | 2.80 | 0.81 | 1.37 | **1,547% faster** |

---

## 💡 Key Findings

### ✅ When Hawiah Excels
- **Read Operations**: Between 4x to 260x faster for single record lookups and bulk reads.
- **Delete Operations**: Extreme efficiency, performing up to 27x faster than competitors.
- **Sorting & Filtering**: Optimized internal logic makes these operations 4x to 12x faster.
- **Aggregations**: Counting and basic aggregations are 8x to 16x faster.

### ⚡ Performance Highlights
- **Best for**: Read-heavy applications, real-time queries, and highly dynamic filtering.
- **Resource Efficient**: Lower CPU and memory overhead during query execution.
- **Lean Architecture**: Minimal abstraction layer ensures direct and fast database interaction.

---

## 🔧 Test Environment

- **Database**: SQLite (Common Denominator)
- **Dataset**: 1,000 user records
- **Operations**: Insert, Select, Update, Delete, Sort, Pagination, Count
- **Metric**: Execution time in milliseconds (lower is better)
- **Calculation**: Improving % = `((Competitor - Hawiah) / Hawiah) * 100`

## 🔗 Open Source Benchmarks

We believe in transparency. You can view the full source code for these benchmarks, run them yourself, or contribute new tests on our GitHub repository:

👉 **[Hawiah Benchmarks Repository](https://github.com/Shuruhatik/hawiah-benchmarks/)**