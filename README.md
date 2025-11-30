# Hawiah Documentation Website

A modern, file-driven documentation website built with Next.js 16, featuring dynamic markdown rendering and zero-code content management.

## ✨ Features

- 🎨 **Modern Dark Theme** - Beautiful, responsive design optimized for readability
- 📝 **Markdown-Powered** - Write documentation in simple markdown files
- 🔍 **Full-Text Search** - Fast, intelligent search with highlighting
- 🚀 **Zero-Code CMS** - Add/edit content without touching application code
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Optimized** - Built with Next.js 16 and React 19
- 🎯 **SEO Friendly** - Optimized for search engines
- 🔗 **Smart Navigation** - JSON-driven sidebar with collapsible sections

## 🚀 Quick Start

### Prerequisites

- Node.js 14.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
project/
├── content/docs/           # 📝 All documentation content (Markdown)
├── data/                   # 🗂️ Configuration files
│   └── sidebar-navigation.json
├── app/                    # 🎯 Next.js app directory
│   ├── api/               # API routes
│   └── docs/              # Documentation pages
├── components/            # ⚛️ React components
│   └── docs/             # Documentation-specific components
├── lib/                   # 🛠️ Utility functions
├── scripts/              # 🤖 Automation scripts
└── public/               # 📦 Static assets
```

## ✍️ Content Management

### Adding New Documentation

1. **Create a markdown file** in `content/docs/`:

```markdown
---
title: Your Page Title
description: Brief description
category: Category Name
---

# Your Page Title

Your content here...
```

2. **Add to navigation** in `data/sidebar-navigation.json`:

```json
{
  "title": "Category Name",
  "items": [
    { "id": "your-file-name", "label": "Display Name" }
  ]
}
```

3. **Done!** Your page is now live.

### Editing Documentation

Simply edit the markdown file in `content/docs/` and save. Changes appear immediately in development mode.

### Removing Documentation

1. Delete the markdown file
2. Remove the entry from `sidebar-navigation.json`

## 🛠️ Scripts

### Generate Documentation Templates

Automatically create markdown files for all navigation items:

```bash
node scripts/generate-docs-template.js
```

### Validate Documentation

Check for missing documentation files:

```bash
node scripts/validate-docs.js
```

## 📚 Documentation

- **[Content Creator's Guide](CONTENT-GUIDE.md)** - Quick start for content creators
- **[CMS Architecture](CMS-ARCHITECTURE.md)** - Complete technical documentation
- **[Content Docs README](content/docs/README.md)** - Detailed content management guide

## 🎨 Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Markdown**: react-markdown, remark-gfm, rehype-highlight
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript

## 🏗️ Architecture

This project uses a **file-driven CMS architecture**:

```
Markdown Files → API Routes → React Components → Rendered Pages
     ↓              ↓              ↓                  ↓
  content/      lib/markdown   components/      Beautiful UI
   docs/           .ts          docs/
```

### Key Components

- **Markdown Parser** (`lib/markdown.ts`) - Reads and parses markdown files
- **Document API** (`app/api/docs/[id]/route.ts`) - Serves content as JSON
- **Search API** (`app/api/search/route.ts`) - Full-text search
- **Markdown Renderer** (`components/docs/MarkdownRenderer.tsx`) - Renders styled content
- **Navigation** (`data/sidebar-navigation.json`) - Controls sidebar structure

## 🔍 Search

The search system:
- Indexes all markdown content automatically
- Scores results by relevance
- Highlights matching terms
- Shows context snippets
- Supports keyboard shortcuts (Ctrl+K)

## 📱 Responsive Design

- **Desktop**: Full sidebar + content + table of contents
- **Tablet**: Collapsible sidebar + content
- **Mobile**: Hamburger menu + optimized content

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

The project is optimized for Vercel but works on any Next.js hosting platform.

## 🧪 Development

### File Watching

The development server watches for changes in:
- Markdown files (`content/docs/*.md`)
- Navigation config (`data/sidebar-navigation.json`)
- All React components

### Hot Reload

Changes to markdown files are reflected immediately without full page reload.

## 📊 Performance

- **Build Time**: ~10-30 seconds
- **Page Load**: < 1 second
- **Search**: < 100ms
- **Markdown Parsing**: Server-side (no client overhead)

## 🎯 Best Practices

1. **Keep markdown files under 100KB** for optimal performance
2. **Use descriptive filenames** (kebab-case)
3. **Always include frontmatter** with title and description
4. **Link related content** using relatedMethods
5. **Test locally** before deploying

## 🤝 Contributing

### Content Contributions

1. Fork the repository
2. Add/edit markdown files in `content/docs/`
3. Update `sidebar-navigation.json` if needed
4. Submit a pull request

### Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run build`
5. Submit a pull request

## 📝 License

[Your License Here]

## 🆘 Support

- **Documentation Issues**: Check [CONTENT-GUIDE.md](CONTENT-GUIDE.md)
- **Technical Issues**: Check [CMS-ARCHITECTURE.md](CMS-ARCHITECTURE.md)
- **Bug Reports**: Open an issue on GitHub

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🔮 Roadmap

- [ ] Versioned documentation
- [ ] Multi-language support
- [ ] PDF export
- [ ] Edit on GitHub integration
- [ ] Analytics dashboard
- [ ] Content suggestions
- [ ] A/B testing

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ for the developer community**
