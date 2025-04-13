# ChronoPrompt Blog Creation Guide

## Section 1: Creating a New Blog

### Step 1: Set Up Blog Directory
```bash
# Create new directory under appropriate category
mkdir src/pages/blogs/[category]/[blog-name]
```

### Step 2: Create Required Files
1. Main Blog File (`[blog-name].tsx`)
2. Optional CSS File (`[blog-name].css`)
3. Optional Assets Directory (`assets/`)

### Step 3: Basic Template Structure
```typescript
import React from 'react';
import "../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import './[blog-name].css';  // If needed

const BlogComponent: React.FC = () => {
  const tableOfContents = [
    { id: 'section-1', title: 'Section 1' },
    // Add more sections
  ];

  const category: BlogCategory = 'Category Name';

  return (
    <BlogTemplate
      title="Your Blog Title"
      date="Month DD, YYYY"
      readTime="X min"
      category={category}
      tableOfContents={tableOfContents}
    >
      {/* Blog sections here */}
    </BlogTemplate>
  );
};

export default BlogComponent;
```

## Section 2: Blog Format Guidelines

### 1. Metadata Requirements
- Title: Clear and descriptive
- Date: Current date in "Month DD, YYYY" format
- Reading Time: Estimated in minutes
- Category: Must match existing categories
- Table of Contents: List of all major sections

### 2. Required Sections
1. **Introduction Section**
   ```tsx
   <BlogSection id="introduction" title="Introduction">
     <p>Opening hook and context</p>
     <InfoBox type="tip" title="Key Points">
       <ul>
         <li>Point 1</li>
         <li>Point 2</li>
       </ul>
     </InfoBox>
   </BlogSection>
   ```

2. **Main Content Sections**
   ```tsx
   <BlogSection id="section-id" title="Section Title">
     <h3>Sub-heading</h3>
     <p>Content paragraphs</p>
     
     <InfoBox type="tip" title="Example">
       Example content
     </InfoBox>
   </BlogSection>
   ```

3. **Conclusion/Next Steps**
   ```tsx
   <BlogSection id="next-steps" title="Next Steps">
     <div className="resource-links">
       <Link to="/related-path" className="resource-link">
         Related Resource →
       </Link>
     </div>
   </BlogSection>
   ```

### 3. Component Usage

#### InfoBox Types
```tsx
<InfoBox type="tip">    // For tips and best practices
<InfoBox type="note">   // For additional information
<InfoBox type="warning"> // For important warnings
```

#### Code Examples
```tsx
<CodeExample
  language="typescript"
  code={`// Your code here`}
/>
```

#### Images
```tsx
<img 
  src="/path/to/image.png"
  alt="Descriptive alt text"
  className="blog-image"
/>
```

### 4. Styling Guidelines
- Use existing CSS classes from blog-base-style.css
- Create blog-specific styles in separate CSS file
- Follow responsive design patterns
- Maintain consistent spacing

## Reference Examples

Current blog examples by category:

1. **LLM Fundamentals**
   - introduction.tsx (Basic structure)
   - chatgpt-guide.tsx (Tutorial format)
   - capabilities.tsx (Feature overview)

2. **Prompt Engineering**
   - basics.tsx (Beginner guide)
   - intermediate.tsx (Advanced concepts)
   - developer-prompts.tsx (Technical focus)

3. **AI Tools**
   - AITools.tsx (Tool overview)
   - AITutorial.tsx (Step-by-step guide)
   - Resources.tsx (Resource listing)

For specific examples and implementations, refer to these existing blogs in the codebase.

## Quality Checklist

Before submitting a new blog:
- [ ] All required metadata is present
- [ ] Table of contents matches sections
- [ ] All links are working
- [ ] Images have alt text
- [ ] Code examples are formatted
- [ ] InfoBoxes are used appropriately
- [ ] Responsive design is maintained
- [ ] Spelling and grammar checked


import 'import {Link} from "react-router-dom";' when required,
<BlogSection id="introduction" title={'Introduction'}> always missing title , add title also