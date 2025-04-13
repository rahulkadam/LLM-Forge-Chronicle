import React from 'react';

import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, InfoBox } from '../../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../../hooks/useBlogBehavior';

const OpenAIAPIGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'basic-requests', title: 'Making Basic Requests' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Connecting to OpenAI API: A Complete Guide"
      date="January 20, 2025"
      readTime="8 min"
      category="Fundamentals"
      tableOfContents={tableOfContents}
    >{/* Rest of the component content remains the same */}</BlogTemplate>
  );
};

export default OpenAIAPIGuide;
