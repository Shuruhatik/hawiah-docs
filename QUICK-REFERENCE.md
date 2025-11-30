# Quick Reference Card

## 🚀 Add New Page (3 Steps)

### 1️⃣ Create File
```bash
content/docs/my-page.md
```

### 2️⃣ Add Content
```markdown
---
title: My Page
description: Brief description
---

# My Page

Your content here...
```

### 3️⃣ Add to Navigation
Edit `data/sidebar-navigation.json`:
```json
{ "id": "my-page", "label": "My Page" }
```

## 📝 Markdown Syntax

| Element | Syntax |
|---------|--------|
| Header 1 | `# Title` |
| Header 2 | `## Section` |
| Bold | `**text**` |
| Italic | `*text*` |
| Code | `` `code` `` |
| Link | `[text](url)` |

## 💻 Code Blocks

````markdown
```javascript
const code = "here";
```
````

## 📋 Frontmatter

```yaml
---
title: Required
description: Recommended
category: Optional
relatedMethods: ["id1", "id2"]
---
```

## 🛠️ Commands

```bash
# Generate templates
node scripts/generate-docs-template.js

# Validate docs
node scripts/validate-docs.js

# Dev server
npm run dev

# Build
npm run build
```

## 📂 File Locations

- **Content**: `content/docs/*.md`
- **Navigation**: `data/sidebar-navigation.json`
- **Images**: `public/`

## ✅ Checklist

- [ ] Create markdown file
- [ ] Add frontmatter
- [ ] Write content
- [ ] Add to navigation
- [ ] Test locally
- [ ] Commit changes

## 🆘 Help

- Content Guide: `CONTENT-GUIDE.md`
- Architecture: `CMS-ARCHITECTURE.md`
- README: `README.md`
