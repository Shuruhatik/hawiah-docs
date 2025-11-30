# Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                             │
│                                                                       │
│  Browser → /docs → Sidebar Navigation → Click "Installation"        │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      REACT COMPONENT LAYER                           │
│                                                                       │
│  ┌─────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │   Sidebar.tsx   │  │  DocContent.tsx  │  │MarkdownRenderer  │  │
│  │                 │  │                  │  │      .tsx        │  │
│  │ • Reads JSON    │  │ • Fetches API    │  │ • Renders MD     │  │
│  │ • Shows nav     │  │ • Shows loading  │  │ • Syntax HL      │  │
│  │ • Handles click │  │ • Error handling │  │ • Custom styles  │  │
│  └────────┬────────┘  └────────┬─────────┘  └────────┬─────────┘  │
│           │                    │                      │             │
└───────────┼────────────────────┼──────────────────────┼─────────────┘
            │                    │                      │
            │                    ▼                      │
            │         ┌──────────────────────┐         │
            │         │   API ROUTE LAYER    │         │
            │         │                      │         │
            │         │  GET /api/docs/:id   │         │
            │         │  • Receives request  │         │
            │         │  • Calls markdown.ts │         │
            │         │  • Returns JSON      │         │
            │         └──────────┬───────────┘         │
            │                    │                      │
            │                    ▼                      │
            │         ┌──────────────────────┐         │
            │         │   LIBRARY LAYER      │         │
            │         │                      │         │
            │         │   lib/markdown.ts    │         │
            │         │   • getDocById()     │         │
            │         │   • Parse frontmatter│         │
            │         │   • Read file        │         │
            │         └──────────┬───────────┘         │
            │                    │                      │
            ▼                    ▼                      ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         FILE SYSTEM LAYER                            │
│                                                                       │
│  ┌──────────────────────┐         ┌──────────────────────────────┐ │
│  │ sidebar-navigation   │         │    content/docs/             │ │
│  │       .json          │         │                              │ │
│  │                      │         │  ┌────────────────────────┐ │ │
│  │ [                    │         │  │ installation.md        │ │ │
│  │   {                  │         │  │ ---                    │ │ │
│  │     "title": "...",  │         │  │ title: Installation    │ │ │
│  │     "items": [       │         │  │ ---                    │ │ │
│  │       {              │         │  │ # Installation         │ │ │
│  │         "id": "...", │◄────────┼──│ Content here...        │ │ │
│  │         "label": "..." }       │  └────────────────────────┘ │ │
│  │     ]                │         │                              │ │
│  │   }                  │         │  ┌────────────────────────┐ │ │
│  │ ]                    │         │  │ quick-start.md         │ │ │
│  └──────────────────────┘         │  │ connect.md             │ │ │
│                                    │  │ insert.md              │ │ │
│                                    │  │ ... (40 files total)   │ │ │
│                                    │  └────────────────────────┘ │ │
│                                    └──────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

## Data Flow: Page Load

```
1. User visits /docs
   │
   ▼
2. DocsPage component renders
   │
   ├─► Sidebar reads sidebar-navigation.json
   │   └─► Displays navigation tree
   │
   └─► DocContent component mounts
       │
       ▼
3. DocContent fetches /api/docs/installation
   │
   ▼
4. API route calls getDocById('installation')
   │
   ▼
5. markdown.ts reads content/docs/installation.md
   │
   ├─► Parses YAML frontmatter
   │   └─► Extracts: title, description, category, etc.
   │
   └─► Reads markdown content
       └─► Returns: { metadata, content }
   │
   ▼
6. API returns JSON to client
   │
   ▼
7. DocContent receives data
   │
   ▼
8. MarkdownRenderer converts markdown to React
   │
   ├─► Applies syntax highlighting
   ├─► Styles headers, code, tables
   └─► Renders custom components
   │
   ▼
9. User sees beautiful documentation
```

## Data Flow: Search

```
1. User types "insert" in search box
   │
   ▼
2. Debounced (300ms) API call
   │
   ▼
3. GET /api/search?q=insert
   │
   ▼
4. Search API builds index (first time only)
   │
   ├─► Reads all .md files
   ├─► Extracts content & metadata
   ├─► Generates keywords
   └─► Caches index
   │
   ▼
5. Scores each document
   │
   ├─► Label match: 100 points
   ├─► Keyword match: 30 points
   ├─► Description match: 20 points
   └─► Content match: 10 points
   │
   ▼
6. Returns top 10 results with highlights
   │
   ▼
7. Dropdown shows results
   │
   └─► User clicks result
       │
       ▼
8. Navigate to selected page
```

## Component Hierarchy

```
app/docs/page.tsx (Main Page)
│
├─► Header
│   ├─► Logo
│   ├─► Search Bar
│   │   └─► Search Results Dropdown
│   └─► GitHub Link
│
├─► Sidebar (Left)
│   └─► Navigation Groups
│       └─► Navigation Items
│
├─► DocContent (Center)
│   ├─► Loading State
│   ├─► Error State
│   └─► MarkdownRenderer
│       ├─► Headers (h1, h2, h3)
│       ├─► Paragraphs
│       ├─► Code Blocks (with syntax highlighting)
│       ├─► Tables
│       ├─► Lists
│       └─► Links
│   └─► RelatedMethods
│       └─► Method Links
│
└─► TableOfContents (Right)
    └─► Section Links
```

## File Dependencies

```
app/docs/page.tsx
├── imports components/docs/Sidebar.tsx
│   └── imports data/sidebar-navigation.json
├── imports components/docs/DocContent.tsx
│   ├── imports components/docs/MarkdownRenderer.tsx
│   │   ├── imports react-markdown
│   │   ├── imports remark-gfm
│   │   └── imports rehype-highlight
│   └── imports components/docs/RelatedMethods.tsx
│       └── imports data/sidebar-navigation.json
└── imports components/docs/TableOfContents.tsx

app/api/docs/[id]/route.ts
└── imports lib/markdown.ts
    ├── imports fs (Node.js)
    ├── imports path (Node.js)
    └── imports gray-matter

app/api/search/route.ts
└── imports lib/searchData.server.ts
    ├── imports lib/markdown.ts
    └── imports data/sidebar-navigation.json
```

## Content Management Flow

```
CONTENT CREATOR WORKFLOW
│
├─► Option 1: Manual Creation
│   │
│   ├─► 1. Create content/docs/new-page.md
│   │   └─► Add frontmatter + content
│   │
│   ├─► 2. Edit data/sidebar-navigation.json
│   │   └─► Add { "id": "new-page", "label": "New Page" }
│   │
│   └─► 3. Done! Page is live
│
└─► Option 2: Automated Creation
    │
    ├─► 1. Edit data/sidebar-navigation.json
    │   └─► Add { "id": "new-page", "label": "New Page" }
    │
    ├─► 2. Run: node scripts/generate-docs-template.js
    │   └─► Creates content/docs/new-page.md with template
    │
    ├─► 3. Edit content/docs/new-page.md
    │   └─► Fill in content
    │
    └─► 4. Done! Page is live
```

## Build Process

```
npm run build
│
├─► Next.js compiles TypeScript
│   └─► Validates all imports
│
├─► Generates static pages
│   ├─► / (home page)
│   └─► /docs (docs page)
│
├─► Prepares API routes
│   ├─► /api/docs/[id]
│   └─► /api/search
│
├─► Bundles client JavaScript
│   └─► Code splitting by route
│
└─► Optimizes assets
    ├─► Images
    ├─► CSS
    └─► Fonts

Result: .next/ directory ready for deployment
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CDN / EDGE                           │
│                                                               │
│  • Static assets (CSS, JS, images)                          │
│  • Cached responses                                          │
│  • Global distribution                                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS SERVER                            │
│                                                               │
│  ┌─────────────────┐  ┌─────────────────┐                  │
│  │  Static Pages   │  │   API Routes    │                  │
│  │  • /            │  │  • /api/docs    │                  │
│  │  • /docs        │  │  • /api/search  │                  │
│  └─────────────────┘  └─────────────────┘                  │
│                                                               │
│  ┌─────────────────────────────────────┐                   │
│  │        File System                   │                   │
│  │  • content/docs/*.md                │                   │
│  │  • data/sidebar-navigation.json     │                   │
│  └─────────────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND LAYER                          │
│                                                               │
│  React 19 + Next.js 16 + TypeScript                         │
│  └─► Tailwind CSS 4 (styling)                               │
│  └─► Framer Motion (animations)                             │
│  └─► Lucide React (icons)                                   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    PROCESSING LAYER                          │
│                                                               │
│  react-markdown (MD → React)                                │
│  └─► remark-gfm (GitHub-flavored markdown)                  │
│  └─► rehype-highlight (syntax highlighting)                 │
│  └─► rehype-raw (raw HTML support)                          │
│                                                               │
│  gray-matter (frontmatter parsing)                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                       DATA LAYER                             │
│                                                               │
│  File System (Node.js fs module)                            │
│  └─► Markdown files (.md)                                   │
│  └─► JSON configuration                                     │
└─────────────────────────────────────────────────────────────┘
```

## Security Model

```
┌─────────────────────────────────────────────────────────────┐
│                      PUBLIC ACCESS                           │
│                                                               │
│  • Read-only access to documentation                        │
│  • No authentication required                               │
│  • No user input stored                                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      API LAYER                               │
│                                                               │
│  • Rate limiting (via hosting provider)                     │
│  • Input validation (search queries)                        │
│  • Path traversal prevention                                │
│  • No database = no SQL injection                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    FILE SYSTEM                               │
│                                                               │
│  • Read-only access                                         │
│  • Sandboxed to content/docs/                               │
│  • No write operations from API                             │
│  • No arbitrary file access                                 │
└─────────────────────────────────────────────────────────────┘
```

---

**Legend:**
- `│` = Data flow
- `►` = Process step
- `└─►` = Sub-process
- `◄────` = Reference/Link
