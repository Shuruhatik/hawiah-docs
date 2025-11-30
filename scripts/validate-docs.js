#!/usr/bin/env node

/**
 * Script to validate that all navigation items have corresponding markdown files
 * Usage: node scripts/validate-docs.js
 */

const fs = require('fs');
const path = require('path');

const navigationPath = path.join(__dirname, '../data/sidebar-navigation.json');
const docsDir = path.join(__dirname, '../content/docs');

// Read navigation data
const navigation = JSON.parse(fs.readFileSync(navigationPath, 'utf8'));

let totalItems = 0;
let missingDocs = [];
let existingDocs = [];

// Check each navigation item
navigation.forEach(group => {
  group.items.forEach(item => {
    totalItems++;
    const filePath = path.join(docsDir, `${item.id}.md`);
    
    if (fs.existsSync(filePath)) {
      existingDocs.push({ id: item.id, label: item.label, category: group.title });
    } else {
      missingDocs.push({ id: item.id, label: item.label, category: group.title });
    }
  });
});

console.log('\n📊 Documentation Validation Report\n');
console.log(`Total navigation items: ${totalItems}`);
console.log(`✓ Documented: ${existingDocs.length}`);
console.log(`✗ Missing: ${missingDocs.length}`);

if (missingDocs.length > 0) {
  console.log('\n❌ Missing Documentation Files:\n');
  missingDocs.forEach(item => {
    console.log(`  - ${item.id}.md (${item.label} - ${item.category})`);
  });
  console.log('\nRun "node scripts/generate-docs-template.js" to create templates for missing files.');
  process.exit(1);
} else {
  console.log('\n✅ All navigation items have documentation files!');
  process.exit(0);
}
