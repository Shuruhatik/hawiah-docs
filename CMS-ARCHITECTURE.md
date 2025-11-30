# File-Driven Content Management Architecture

## 🎯 Overview

This project implements a **completely file-driven CMS** where all website content is managed through:
1. **Markdown files** (`content/docs/*.md`) - Documentation content
2. **JSON configuration** (`data/sidebar-navigation.json`) - Navigation structure

**Zero code changes required** to add, edit, or remove content!

## 📐 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    Content Layer (Files)                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  content/docs/                  data/                        │
│  ├── installation.md            └── sidebar-navigation.json  │
│  ├── quick-start.md                                          │
│  ├── connect.md                                              │
│  └── ...                                                     │
│                                                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   Processing Layer (API)                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  lib/markdown.ts              lib/searchData.server.ts       │
│  ├── getDocById()             ├── buildSearchIndex()         │
│  ├── getAllDocs()             └── extractKeywords()          │
│  └── getAllDocIds()                                          │
│                                                               │
│  app/api/docs/[id]/route.ts  app/api/search/route.ts        │
│  └── GET /api/docs/:id        └── GET /api/search?q=...     │
│                                                               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                 Presentation Layer (React)                   │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  app/docs/page.tsx                                           │
│  ├── Search functionality                                    │
│  ├── Navigation state                                        │
│  └── Layout management                                       │
│                                                               │
│  components/docs/                                            │
│  ├── DocContent.tsx          (Loads markdown via API)        │
│  ├── MarkdownRenderer.tsx    (Renders markdown with styling) │
│  ├── Sidebar.tsx             (Reads navigation JSON)         │
│  └── RelatedMethods.tsx      (Shows related links)           │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Data Flow

### 1. Page Load Flow
```
User visits /docs
    ↓
DocsPage component loads
    ↓
Sidebar reads sidebar-navigation.json
    ↓
DocContent fetches /api/docs/installation
    ↓
API reads content/docs/installation.md
    ↓
Parses frontmatter + markdown content
    ↓
Returns JSON to client
    ↓
MarkdownRenderer displays content
```

### 2. Search Flow
```
User types in search box
    ↓
Debounced API call to /api/search?q=query
    ↓
Server builds search index from all .md files
    ↓
Scores and ranks results
    ↓
Returns top 10 matches with highlights
    ↓
Display results in dropdown
```

### 3. Navigation Flow
```
User clicks sidebar item
    ↓
activeSection state updates
    ↓
DocContent re-fetches new document
    ↓
URL updates (optional)
    ↓
New content renders
```

## 📁 File Structure

```
project/
├── content/
│   └── docs/                    # All documentation content
│       ├── README.md            # Content management guide
│       ├── installation.md      # Individual doc pages
│       ├── quick-start.md
│       └── ...
│
├── data/
│   └── sidebar-navigation.json  # Navigation structure
│
├── lib/
│   ├── markdown.ts              # Server-side markdown parser
│   └── searchData.server.ts     # Server-side search indexing
│
├── app/
│   ├── api/
│   │   ├── docs/[id]/route.ts   # Document API endpoint
│   │   └── search/route.ts      # Search API endpoint
│   └── docs/
│       └── page.tsx              # Main docs page
│
├── components/
│   └── docs/
│       ├── DocContent.tsx        # Dynamic content loader
│       ├── MarkdownRenderer.tsx  # Markdown to React
│       ├── Sidebar.tsx           # Navigation sidebar
│       └── RelatedMethods.tsx    # Related links
│
└── scripts/
    ├── generate-docs-template.js # Generate markdown templates
    └── validate-docs.js          # Validate documentation
```

## 🛠️ Key Components

### 1. Markdown Parser (`lib/markdown.ts`)

**Purpose**: Server-side markdown file reading and parsing

**Key Functions**:
- `getDocById(id)` - Load a single document
- `getAllDocs()` - Load all documents
- `getAllDocIds()` - List all document IDs

**Features**:
- Parses YAML frontmatter
- Extracts metadata (title, description, category, etc.)
- Returns structured content

### 2. Document API (`app/api/docs/[id]/route.ts`)

**Purpose**: Serve markdown content as JSON

**Endpoint**: `GET /api/docs/:id`

**Response**:
```json
{
  "content": "# Title\n\nMarkdown content...",
  "metadata": {
    "title": "Page Title",
    "description": "Description",
    "category": "Category",
    "relatedMethods": ["method1", "method2"]
  }
}
```

### 3. Search API (`app/api/search/route.ts`)

**Purpose**: Full-text search across all documentation

**Endpoint**: `GET /api/search?q=query`

**Features**:
- Builds index from all markdown files
- Scores results by relevance
- Highlights matching terms
- Returns top 10 results

### 4. Markdown Renderer (`components/docs/MarkdownRenderer.tsx`)

**Purpose**: Convert markdown to styled React components

**Features**:
- Syntax highlighting (via rehype-highlight)
- GitHub-flavored markdown (via remark-gfm)
- Custom component styling
- Dark theme optimized
- Responsive tables

### 5. Navigation Config (`data/sidebar-navigation.json`)

**Purpose**: Define sidebar structure

**Format**:
```json
[
  {
    "title": "Category Name",
    "items": [
      { "id": "file-name", "label": "Display Name" }
    ]
  }
]
```

**Rules**:
- `id` must match markdown filename (without `.md`)
- `label` is displayed in sidebar
- Groups can be collapsed/expanded

## ✍️ Content Management Workflow

### Adding New Documentation

1. **Create markdown file**:
   ```bash
   # Create content/docs/new-feature.md
   ```

2. **Add frontmatter**:
   ```markdown
   ---
   title: New Feature
   description: Description of the feature
   category: Category Name
   ---
   
   # New Feature
   
   Your content here...
   ```

3. **Update navigation**:
   ```json
   {
     "title": "Category Name",
     "items": [
       { "id": "new-feature", "label": "New Feature" }
     ]
   }
   ```

4. **Done!** No code changes needed.

### Editing Documentation

1. Open the markdown file in `content/docs/`
2. Edit the content
3. Save the file
4. Changes appear immediately (in dev mode)

### Removing Documentation

1. Delete the markdown file
2. Remove the entry from `sidebar-navigation.json`
3. Done!

## 🚀 Automation Scripts

### Generate Templates

Creates markdown templates for all navigation items:

```bash
node scripts/generate-docs-template.js
```

**Output**:
- Creates `.md` files for missing navigation items
- Skips existing files
- Uses template with frontmatter

### Validate Documentation

Checks for missing documentation:

```bash
node scripts/validate-docs.js
```

**Output**:
- Lists all navigation items
- Identifies missing markdown files
- Exit code 1 if any missing (useful for CI/CD)

## 🎨 Markdown Features

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Page title |
| `description` | string | No | Brief description |
| `category` | string | No | Category name |
| `signature` | string | No | Method signature |
| `returnValue` | string | No | Return value description |
| `relatedMethods` | array | No | Related method IDs |

### Supported Markdown

- **Headers**: `#`, `##`, `###`
- **Code blocks**: ` ```language ` with syntax highlighting
- **Inline code**: `` `code` ``
- **Lists**: Ordered and unordered
- **Tables**: GitHub-flavored markdown
- **Links**: `[text](url)`
- **Blockquotes**: `> quote`
- **Bold/Italic**: `**bold**`, `*italic*`
- **HTML**: Raw HTML is supported

### Code Syntax Highlighting

Supported languages:
- JavaScript/TypeScript
- Bash/Shell
- JSON
- HTML/CSS
- And 100+ more via highlight.js

## 🔍 Search Implementation

### Index Building

1. Reads all markdown files
2. Extracts content and metadata
3. Generates keywords from:
   - Titles
   - Headers
   - Code blocks
   - Content text

### Scoring Algorithm

```
Exact label match:     100 points
Partial label match:    50 points
Keyword match:          30 points
Description match:      20 points
Category match:         15 points
Content match:          10 points
```

### Search Features

- Debounced input (300ms)
- Highlighted matches
- Context snippets
- Category badges
- Keyboard shortcuts (Ctrl+K)

## 🔧 Configuration

### Adding New Markdown Features

Edit `components/docs/MarkdownRenderer.tsx`:

```typescript
components={{
  h1: ({ children }) => (
    <h1 className="custom-style">{children}</h1>
  ),
  // Add more custom components
}}
```

### Customizing Search

Edit `app/api/search/route.ts` to adjust:
- Scoring weights
- Result limit
- Snippet length
- Highlighting style

### Styling

All styles are in the component files:
- `MarkdownRenderer.tsx` - Content styles
- `Sidebar.tsx` - Navigation styles
- `DocContent.tsx` - Layout styles

## 📊 Performance

### Build Time
- Markdown files are read at build time
- Search index is built on first request
- Subsequent requests use cached index

### Runtime
- API routes serve content dynamically
- Client-side caching via React state
- Debounced search prevents excessive requests

### Optimization Tips
1. Keep markdown files under 100KB
2. Use code splitting for large docs
3. Implement pagination for long lists
4. Cache API responses on client

## 🧪 Testing

### Manual Testing

1. **Add new doc**: Create markdown file, verify it loads
2. **Edit doc**: Modify content, verify changes appear
3. **Search**: Test search with various queries
4. **Navigation**: Click all sidebar items

### Automated Testing

```bash
# Validate all docs exist
node scripts/validate-docs.js

# Check for broken links (TODO)
# Check for invalid frontmatter (TODO)
```

## 🚢 Deployment

### Build Process

```bash
npm run build
```

**What happens**:
1. Next.js builds static pages
2. API routes are prepared
3. Markdown files are included in build
4. Search index is built on first request

### Environment Variables

None required! Everything is file-based.

### Hosting

Works on any Next.js hosting:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted

## 🆘 Troubleshooting

### Document Not Found

**Symptom**: "Documentation Not Found" error

**Solutions**:
1. Check filename matches navigation ID
2. Verify file exists in `content/docs/`
3. Check frontmatter is valid YAML
4. Restart dev server

### Search Not Working

**Symptom**: No search results

**Solutions**:
1. Check API route is accessible
2. Verify markdown files have content
3. Check browser console for errors
4. Clear browser cache

### Styling Issues

**Symptom**: Markdown not rendering correctly

**Solutions**:
1. Check markdown syntax
2. Verify code blocks have language tags
3. Check for unclosed HTML tags
4. Inspect with browser dev tools

## 📚 Best Practices

1. **One file per page** - Keep documentation modular
2. **Descriptive filenames** - Use kebab-case: `get-by-id.md`
3. **Complete frontmatter** - Always include title and description
4. **Code examples** - Include practical, working examples
5. **Related methods** - Link to related documentation
6. **Keep it simple** - Markdown should be easy to read
7. **Test locally** - Verify changes before committing
8. **Use scripts** - Automate repetitive tasks

## 🎓 Learning Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [Gray Matter (Frontmatter)](https://github.com/jonschlinkert/gray-matter)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

## 🔮 Future Enhancements

Potential improvements:
- [ ] Versioned documentation
- [ ] Multi-language support
- [ ] PDF export
- [ ] Edit on GitHub links
- [ ] Contribution workflow
- [ ] Analytics integration
- [ ] A/B testing
- [ ] Content suggestions

---

**Remember**: This is a completely file-driven system. You never need to touch application code to manage content!
