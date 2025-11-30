# Content Creator's Quick Start Guide

This guide is for content creators who want to add or edit documentation without touching any code.

## 🚀 Quick Start (3 Steps)

### Step 1: Create Your Markdown File

Create a new file in `content/docs/` with a descriptive name:

```bash
content/docs/my-new-feature.md
```

### Step 2: Add Content with Frontmatter

```markdown
---
title: My New Feature
description: A brief description of what this feature does
category: Feature Category
relatedMethods: ["related-feature-1", "related-feature-2"]
---

# My New Feature

Write your documentation here using markdown...

## Examples

\`\`\`javascript
// Your code examples
const example = "Hello World";
\`\`\`
```

### Step 3: Add to Navigation

Edit `data/sidebar-navigation.json` and add your page:

```json
{
  "title": "Feature Category",
  "items": [
    { "id": "my-new-feature", "label": "My New Feature" }
  ]
}
```

**That's it!** Your documentation is now live.

## 📝 Markdown Cheat Sheet

### Headers

```markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
```

### Text Formatting

```markdown
**Bold text**
*Italic text*
`Inline code`
```

### Code Blocks

````markdown
```javascript
const code = "with syntax highlighting";
```
````

Supported languages: `javascript`, `typescript`, `bash`, `json`, `html`, `css`, `python`, `java`, and many more.

### Lists

```markdown
- Bullet point 1
- Bullet point 2
  - Nested item

1. Numbered item 1
2. Numbered item 2
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](#section-name)
```

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Blockquotes

```markdown
> This is a quote or important note
```

## 🎨 Frontmatter Fields

Add these at the top of your markdown file between `---` markers:

| Field | Required | Description | Example |
|-------|----------|-------------|---------|
| `title` | ✅ Yes | Page title | `"Installation Guide"` |
| `description` | ⭐ Recommended | Brief description for search | `"Learn how to install..."` |
| `category` | No | Category name | `"Getting Started"` |
| `relatedMethods` | No | Array of related page IDs | `["connect", "disconnect"]` |

### Example Frontmatter

```yaml
---
title: connect()
description: Establishes a connection to the database
category: Connection Methods
relatedMethods: ["disconnect", "isActive"]
---
```

## 📂 File Naming Rules

1. **Use kebab-case**: `my-feature.md` not `MyFeature.md`
2. **Be descriptive**: `user-authentication.md` not `auth.md`
3. **Match navigation ID**: The filename (without `.md`) must match the `id` in `sidebar-navigation.json`

### Good Examples
- ✅ `installation.md`
- ✅ `quick-start.md`
- ✅ `api-reference.md`

### Bad Examples
- ❌ `Installation.md` (capital letter)
- ❌ `quick start.md` (space instead of dash)
- ❌ `api_reference.md` (underscore instead of dash)

## 🗂️ Navigation Structure

The `data/sidebar-navigation.json` file controls the sidebar:

```json
[
  {
    "title": "Category Name",
    "items": [
      { "id": "file-name", "label": "Display Name" },
      { "id": "another-file", "label": "Another Page" }
    ]
  },
  {
    "title": "Another Category",
    "items": [
      { "id": "third-file", "label": "Third Page" }
    ]
  }
]
```

### Rules
- `id` must match the markdown filename (without `.md`)
- `label` is what users see in the sidebar
- Categories can be collapsed/expanded by users
- Order matters - items appear in the order listed

## ✏️ Editing Existing Documentation

1. Find the file in `content/docs/`
2. Edit the markdown content
3. Save the file
4. Refresh your browser to see changes

**No need to restart the server or rebuild!**

## 🗑️ Removing Documentation

1. Delete the markdown file from `content/docs/`
2. Remove the entry from `data/sidebar-navigation.json`
3. Done!

## 🛠️ Helpful Scripts

### Generate Templates

Automatically create markdown files for all navigation items:

```bash
node scripts/generate-docs-template.js
```

This creates template files for any navigation items that don't have markdown files yet.

### Validate Documentation

Check if all navigation items have corresponding files:

```bash
node scripts/validate-docs.js
```

This will list any missing documentation files.

## 💡 Tips & Best Practices

### 1. Write Clear Titles
```markdown
# ✅ Good: "How to Install Hawiah"
# ❌ Bad: "Installation"
```

### 2. Include Code Examples
Always show practical examples:

```markdown
## Example

\`\`\`javascript
// Good: Show actual working code
const db = new Hawiah({ driver: 'mongodb' });
await db.connect();
\`\`\`
```

### 3. Use Descriptive Descriptions
```yaml
# ✅ Good
description: "Learn how to establish a database connection using the connect() method"

# ❌ Bad
description: "Connection method"
```

### 4. Link Related Content
```yaml
relatedMethods: ["disconnect", "isActive", "reconnect"]
```

### 5. Break Up Long Content
Use headers to organize:

```markdown
# Main Title

## Overview
Brief introduction...

## Installation
Step by step...

## Usage
How to use...

## Examples
Code examples...

## Troubleshooting
Common issues...
```

## 🎯 Content Templates

### API Method Documentation

```markdown
---
title: methodName()
description: Brief description of what this method does
category: API Methods
relatedMethods: ["related1", "related2"]
---

# methodName()

Brief overview of the method.

## Signature

\`\`\`typescript
methodName(param1: Type1, param2: Type2): ReturnType
\`\`\`

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| param1 | Type1 | Yes | Description |
| param2 | Type2 | No | Description |

## Examples

### Basic Usage

\`\`\`javascript
const result = await methodName(value1, value2);
\`\`\`

### Advanced Usage

\`\`\`javascript
// More complex example
\`\`\`

## Return Value

Description of what the method returns.

## Error Handling

\`\`\`javascript
try {
  await methodName();
} catch (error) {
  console.error(error);
}
\`\`\`
```

### Tutorial/Guide Documentation

```markdown
---
title: Getting Started with Feature X
description: A step-by-step guide to using Feature X
category: Tutorials
---

# Getting Started with Feature X

Learn how to use Feature X in your project.

## Prerequisites

- Requirement 1
- Requirement 2

## Step 1: Setup

Instructions...

\`\`\`bash
npm install package
\`\`\`

## Step 2: Configuration

Instructions...

\`\`\`javascript
const config = { ... };
\`\`\`

## Step 3: Usage

Instructions...

## Next Steps

- [Advanced Features](#advanced)
- [API Reference](#api)
```

## 🔍 Search Optimization

Your content is automatically indexed for search. To improve searchability:

1. **Use clear titles**: Search prioritizes titles
2. **Write good descriptions**: These appear in search results
3. **Include keywords**: Naturally use terms users might search for
4. **Add code examples**: Code is searchable too

## ❓ Common Questions

### Q: Do I need to restart the server after adding content?
**A:** No! In development mode, changes are picked up automatically.

### Q: Can I use HTML in markdown?
**A:** Yes! You can mix HTML with markdown for custom styling.

### Q: How do I add images?
**A:** Place images in `public/` and reference them:
```markdown
![Alt text](/image-name.png)
```

### Q: Can I create nested categories?
**A:** The navigation supports one level of categories. For deeper nesting, use headers within your markdown.

### Q: What if I make a mistake?
**A:** Just edit the file and save. Changes are immediate in development.

## 🆘 Troubleshooting

### "Documentation Not Found" Error

**Problem**: Page shows "Documentation Not Found"

**Solutions**:
1. Check that the markdown file exists in `content/docs/`
2. Verify the filename matches the navigation `id`
3. Make sure the file has valid frontmatter
4. Try restarting the development server

### Content Not Updating

**Problem**: Changes don't appear

**Solutions**:
1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check the browser console for errors
3. Verify the file was saved
4. Restart the development server

### Markdown Not Rendering Correctly

**Problem**: Formatting looks wrong

**Solutions**:
1. Check for unclosed code blocks (` ``` `)
2. Verify frontmatter is valid YAML
3. Look for special characters that need escaping
4. Test your markdown in a markdown preview tool

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [YAML Frontmatter](https://jekyllrb.com/docs/front-matter/)

## 🎓 Learning Path

1. **Start Simple**: Edit an existing file to see how it works
2. **Create a Test Page**: Make a simple page with basic markdown
3. **Add Code Examples**: Practice adding code blocks
4. **Use Frontmatter**: Add metadata to your pages
5. **Link Pages**: Use related methods to connect content
6. **Optimize**: Improve titles and descriptions for search

---

**Remember**: You're working with files, not code. If you can write a text document, you can create documentation!

Need help? Check the full architecture guide in `CMS-ARCHITECTURE.md`
