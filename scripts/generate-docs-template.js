#!/usr/bin/env node

/**
 * Script to generate markdown template files for all items in sidebar-navigation.json
 * Usage: node scripts/generate-docs-template.js
 */

const fs = require('fs');
const path = require('path');

const navigationPath = path.join(__dirname, '../data/sidebar-navigation.json');
const docsDir = path.join(__dirname, '../content/docs');

// Ensure docs directory exists
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Read navigation data
const navigation = JSON.parse(fs.readFileSync(navigationPath, 'utf8'));

// Template for markdown files
function generateTemplate(item, category) {
  return `---
title: ${item.label}
description: Description for ${item.label}
category: ${category}
---

# ${item.label}

Add your documentation content here.

## Overview

Describe what this method/feature does.

## Signature

\`\`\`typescript
// Add method signature here
\`\`\`

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| param1 | type | Description |

## Examples

### Basic Example

\`\`\`javascript
// Add example code here
\`\`\`

## Return Value

Describe what this method returns.

## Related Methods

- [method1](#method1)
- [method2](#method2)
`;
}

let created = 0;
let skipped = 0;

// Generate files for each navigation item
navigation.forEach(group => {
  group.items.forEach(item => {
    const filePath = path.join(docsDir, `${item.id}.md`);
    
    // Only create if file doesn't exist
    if (!fs.existsSync(filePath)) {
      const content = generateTemplate(item, group.title);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Created: ${item.id}.md`);
      created++;
    } else {
      console.log(`- Skipped: ${item.id}.md (already exists)`);
      skipped++;
    }
  });
});

console.log(`\n✨ Done! Created ${created} files, skipped ${skipped} existing files.`);
