import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './cursor-custom-workflows.css';
import '../../../styles/blogs/blog-layout-update.css';

const CursorCustomWorkflows: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-are-workflows', title: 'What Are Cursor Workflows?' },
    { id: 'why-use-workflows', title: 'Why Use Custom Workflows?' },
    { id: 'creating-workflows', title: 'Creating Your First Workflow' },
    { id: 'advanced-workflows', title: 'Advanced Workflow Techniques' },
    { id: 'workflow-examples', title: 'Practical Workflow Examples' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Mastering Cursor Custom Workflows: Automate Your Coding Tasks"
      date="March 25, 2025"
      readTime="8 min"
      category="Tools & Frameworks"
      bannerClassName="cursor-workflows-banner"
      tableOfContents={tableOfContents}
      className="cursor-custom-workflows-guide"
    >{/* Rest of the component content remains the same */}</BlogTemplate>
  );
};

export default CursorCustomWorkflows;