import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../../../styles/blogs/blog-layout-update.css';

const OpenRouterPlatformGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-openrouter', title: 'What is OpenRouter?' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'integration', title: 'Integration Guide' },
    { id: 'use-cases', title: 'Use Cases' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="What is OpenRouter and Why Use It?"
      date="January 15, 2025"
      readTime="6 min"
      category="Fundamentals"
      bannerClassName="openrouter-banner"
      tableOfContents={tableOfContents}
    >{/* Rest of the component content remains the same */}</BlogTemplate>
  );
};

export default OpenRouterPlatformGuide;