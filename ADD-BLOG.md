# Adding Content to ChronoPrompt

This guide explains how to add new content (blogs, tutorials, resources) to ChronoPrompt using our React-based template system.

## File Structure

```
src/pages/blogs/
└── your-blog-name/              # Kebab-case directory name
    ├── your-blog-name.tsx       # Main blog component
    ├── your-blog-name.css       # Blog-specific styles (optional)
    └── assets/                  # Blog images and resources
```

## Step-by-Step Guide

### 1. Create Blog Directory

```bash
# Create blog directory
mkdir src/pages/blogs/your-blog-name
cd src/pages/blogs/your-blog-name
```

### 2. Create Blog Component

Create `your-blog-name.tsx` using this template:

```tsx
import React from 'react';

import "../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './your-blog-name.css';  // Optional: blog-specific styles

const YourBlogComponent: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Define your table of contents
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'main-section', title: 'Main Section' },
    // Add more sections as needed
  ];

  return (
    <BlogTemplate
      title="Your Blog Title"
      date="Month DD, YYYY"
      readTime="X min"
      category="Category Name"
      tableOfContents={tableOfContents}
      className="your-blog-name"
    >
      <BlogSection id="introduction">
        <h2>Introduction</h2>
        {/* Your content here */}
      </BlogSection>

      <BlogSection id="main-section">
        <h2>Main Section</h2>
        {/* Your content here */}
      </BlogSection>

      {/* Code example usage */}
      <CodeExample
        language="typescript"
        code={\`// Your code here
const example = "Hello World";\`}
      />

      {/* Info box usage */}
      <InfoBox type="tip">
        Important tips or notes go here
      </InfoBox>
    </BlogTemplate>
  );
};

export default YourBlogComponent;
```

### 3. Available Components

#### BlogTemplate Props
```typescript
interface BlogTemplateProps {
  title: string;          // Blog post title
  date: string;           // Publication date
  readTime: string;       // Estimated read time
  category: string;       // Blog category
  tableOfContents: {      // Table of contents structure
    id: string;
    title: string;
  }[];
  className?: string;     // Optional custom class
}
```

#### Utility Components
- `BlogSection`: Wraps content sections with proper IDs for navigation
- `CodeExample`: Displays formatted code blocks
- `InfoBox`: Shows highlighted information boxes (types: "tip", "warning", "note")

### 4. Writing Guidelines

#### Content Structure
- Start with a clear introduction
- Use descriptive section headers
- Include practical code examples
- End with actionable conclusions

#### Code Examples
- Use real, working code
- Include comments for clarity
- Show both basic and advanced usage
- Provide context for examples

#### Best Practices
- Use proper TypeScript/React practices
- Keep sections focused and concise
- Include relevant screenshots/diagrams
- Link to additional resources

### 5. Testing Your Blog

1. Add styles (optional):
```css
/* your-blog-name.css */
.your-blog-name {
  /* Your custom styles */
}
```

2. Test locally:
```bash
npm start
# Visit http://localhost:3004/blogs/your-blog-name
```

3. Verify:
- Navigation works correctly
- Code examples are formatted
- Images load properly
- Mobile responsiveness

### 6. Submit Your Content

1. Create a feature branch:
```bash
git checkout -b blog/your-blog-name
```

2. Add and commit:
```bash
git add src/pages/blogs/your-blog-name
git commit -m "Add: New blog - Your Blog Title"
```

3. Create pull request with:
- Preview screenshots
- Brief description
- Related references

## Example Blog Categories

- LLM Fundamentals
- Prompt Engineering
- AI Agents
- Development Tools
- Integration Patterns
- Industry Updates

## Quality Checklist

- [ ] Follows component structure
- [ ] Includes working code examples
- [ ] Has clear navigation structure
- [ ] Mobile-responsive layout
- [ ] Proper TypeScript/React practices
- [ ] Relevant images/diagrams
- [ ] Proper attribution for resources
- [ ] Tested on local environment

## Need Help?

- Reference existing blogs in `src/pages/blogs`
- Check component documentation
- Create an issue for questions
- Join our discussions

---

For technical issues or questions, create an issue in the repository.