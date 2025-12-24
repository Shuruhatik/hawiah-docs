# Documentation Content Management

This directory contains all the documentation content for the Hawiah website. The documentation system is **completely file-driven** - you can add, edit, or remove documentation without touching any application code.

## 📁 Architecture Overview

### How It Works

1. **Markdown Files** (`content/docs/*.md`) - Each documentation page is a standalone markdown file
2. **Navigation Config** (`data/sidebar-navigation.json`) - Controls the sidebar structure and navigation
3. **Dynamic Rendering** - The app automatically loads and renders markdown files based on the navigation

### File Structure

```
content/docs/
├── README.md              # This file
├── installation.md        # Installation guide
├── quick-start.md         # Quick start guide
├── connect.md             # connect() method docs
├── insert.md              # insert() method docs
└── ...                    # All other documentation files
```

## ✍️ Creating New Documentation

### Step 1: Create a Markdown File

Create a new `.md` file in `content/docs/` with the following frontmatter:

```markdown
---
title: Your Method Name
description: Brief description of what this does
category: The Category Name
signature: "methodName(param: Type): ReturnType"
returnValue: "Description of return value"
relatedMethods: ["method1", "method2"]
---

# Your Method Name

Your documentation content goes here...

## Examples

\`\`\`javascript
// Your code examples
\`\`\`
```

### Step 2: Add to Navigation

Edit `data/sidebar-navigation.json` to add your new page:

```json
{
  "title": "Your Category",
  "items": [
    { "id": "your-file-name", "label": "Display Name" }
  ]
}
```

**Important**: The `id` must match your markdown filename (without `.md`)

### Step 3: Done!

That's it! Your new documentation page is now live. No code changes needed.

## 📝 Markdown Features

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Page title |
| `description` | No | Brief description |
| `category` | No | Category for organization |
| `signature` | No | Method signature (for API docs) |
| `returnValue` | No | Return value description |
| `relatedMethods` | No | Array of related method IDs |

### Supported Markdown

- **Headers**: `#`, `##`, `###`
- **Code blocks**: ` ```javascript ` with syntax highlighting
- **Inline code**: `` `code` ``
- **Lists**: Ordered and unordered
- **Tables**: GitHub-flavored markdown tables
- **Links**: `[text](url)`
- **Blockquotes**: `> quote`
- **Bold/Italic**: `**bold**`, `*italic*`

### Code Syntax Highlighting

Supported languages:
- `javascript` / `js`
- `typescript` / `ts`
- `bash` / `shell`
- `json`
- `html`
- `css`
- And many more...

## 🔧 Bulk Operations

### Generate Templates for All Navigation Items

Run this script to create markdown templates for all items in your navigation:

```bash
node scripts/generate-docs-template.js
```

This will:
- Read `data/sidebar-navigation.json`
- Create a markdown template for each item that doesn't have a file yet
- Skip existing files (won't overwrite)

### Validate Documentation

Check which navigation items are missing documentation files:

```bash
node scripts/validate-docs.js
```

## 🎨 Styling

The markdown renderer uses custom styling that matches your site's design:

- Dark theme optimized
- Syntax highlighting with GitHub Dark theme
- Responsive tables
- Custom code block styling
- Teal accent colors for links and highlights

## 📋 Best Practices

1. **One file per page** - Keep each documentation page in its own markdown file
2. **Descriptive filenames** - Use kebab-case: `get-by-id.md`, not `getById.md`
3. **Complete frontmatter** - Always include at least `title` and `description`
4. **Code examples** - Include practical, working examples
5. **Related methods** - Link to related documentation for better navigation
6. **Keep it simple** - Markdown files should be easy to read and edit

## 🚀 Advanced Features

### Custom Components

While markdown is the primary format, you can also use HTML in your markdown files:

```markdown
<div class="bg-teal-500/10 p-4 rounded-lg">
  <strong>Pro Tip:</strong> This is a custom styled section
</div>
```

### Dynamic Content

The system supports:
- Automatic table of contents generation
- Related methods sidebar
- Search indexing
- Category-based filtering

## 🔍 Search Integration

All markdown content is automatically indexed for search. The search includes:
- Page titles
- Descriptions
- Full content text
- Code examples

No additional configuration needed!

## 📦 Deployment

When deploying:
1. All markdown files are read at build time (for static generation)
2. Content is served via API routes (for dynamic loading)
3. No database required - everything is file-based

## 🆘 Troubleshooting

### Page Not Found

If you see "Documentation Not Found":
1. Check that the markdown file exists in `content/docs/`
2. Verify the filename matches the `id` in `sidebar-navigation.json`
3. Ensure the file has valid frontmatter

### Styling Issues

If markdown isn't rendering correctly:
1. Check for syntax errors in your markdown
2. Ensure code blocks have proper language tags
3. Verify frontmatter is valid YAML

### Navigation Not Updating

If sidebar changes don't appear:
1. Restart the development server
2. Clear your browser cache
3. Check `sidebar-navigation.json` for JSON syntax errors

## 📚 Examples

See the existing documentation files for examples:
- `installation.md` - Simple guide with code blocks
- `connect.md` - API method with signature and examples
- `insert.md` - Complex examples with tables
- `quick-start.md` - Multi-section tutorial

---

**Remember**: This is a completely file-driven system. You never need to touch the application code to manage documentation content!
