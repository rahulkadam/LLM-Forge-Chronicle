# Blog System Documentation

This directory contains a streamlined blog system with a centralized structure for all blog posts. The system uses shared components, styles, and templates to ensure consistency across all blog pages.

## Directory Structure

```
src/
├── components/
│   └── blogs/
│       ├── BlogComponents.tsx    # Reusable blog-specific components
│       └── BlogTemplate.tsx      # Main blog template component
├── hooks/
│   └── useBlogBehavior.ts        # Custom hook for blog behavior
├── pages/
│   └── blogs/
│       ├── blog1/
│       │   └── blog1.tsx         # Blog content using the template
│       ├── blog2/
│       │   └── blog2.tsx         # Blog content using the template
│       └── ...
└── styles/
    └── blogs/
        ├── blog-base-style.css   # Base styles for all blogs
        ├── blog-banners.css      # Banner styles for all blogs
        └── blog-viewport-fix.css # Mobile & responsive fixes
```

## How to Create a New Blog

1. Create a new directory for your blog under `src/pages/blogs/`
2. Create a new TSX file using the BlogTemplate component
3. No need to create individual CSS files - use the shared styles

### Example Blog Component

```tsx
import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, CardGrid, Card } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';

const MyNewBlog: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'section1', title: 'Section 1' },
    { id: 'section2', title: 'Section 2' },
    // Add more sections as needed
  ];

  return (
    <BlogTemplate
      title="My Blog Title"
      date="March 25, 2024"
      readTime="5 min"
      category="Technical" // Optional, defaults to "Technical"
      bannerClassName="my-custom-banner" // Use an existing banner class or create a new one
      tableOfContents={tableOfContents}
    >
      {/* Blog content goes here */}
      <BlogSection id="section1" title="Section 1">
        <p>Your content here...</p>
      </BlogSection>

      <BlogSection id="section2" title="Section 2">
        <p>More content here...</p>
        
        {/* Example of using the CodeExample component */}
        <CodeExample 
          code={`console.log("Hello, world!");`}
          language="javascript"
        />
        
        {/* Example of using Card components */}
        <CardGrid>
          <Card title="Card 1">
            <p>Card content</p>
          </Card>
          <Card title="Card 2">
            <p>More card content</p>
          </Card>
        </CardGrid>
      </BlogSection>
    </BlogTemplate>
  );
};

export default MyNewBlog;
```

## Creating a New Banner Style

If you need a new banner style, add it to `src/styles/blogs/blog-banners.css` following this pattern:

```css
/* New Banner Style */
.my-custom-banner {
  background: linear-gradient(135deg, #PRIMARY_COLOR 0%, #SECONDARY_COLOR 100%);
}

.my-custom-banner::before {
  content: "LARGE BACKGROUND TEXT";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  white-space: nowrap;
}

.my-custom-banner::after {
  content: "Subtitle or tagline";
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 600px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

## Available Components

### BlogTemplate

The main wrapper for all blog posts that provides the standard layout.

### BlogSection

Used to create a new section with a heading and anchor ID.

### CodeExample

Displays formatted code examples with syntax highlighting.

### CardGrid & Card

Used for creating card-based layouts within blogs.

### InfoBox

Creates styled info boxes for tips or warnings.

## Custom Hook: useBlogBehavior

This hook adds standard behaviors to all blogs:
- Scrolls to top on initial load
- Enables smooth scrolling to anchor links
- Updates the URL when clicking on table of contents links

## Responsive Design

The shared stylesheets include responsive designs for all screen sizes, ensuring your blog looks great on desktop, tablet, and mobile devices.