import React from 'react';

import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import useBlogBehavior from '../../../../hooks/useBlogBehavior';

const RAGTutorial: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-rag', title: 'What is RAG?' },
    { id: 'architecture', title: 'Architecture Overview' },
    { id: 'implementation', title: 'Implementation Guide' },
    { id: 'vector-store', title: 'Vector Store Setup' },
    { id: 'retrieval', title: 'Retrieval System' },
    { id: 'generation', title: 'Generation Process' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Building Your First RAG System"
      date="February 18, 2025"
      readTime="12 min"
      category="Advanced Techniques"
      tableOfContents={tableOfContents}
    >{/* Rest of the component content remains the same */}</BlogTemplate>
  );
};

export default RAGTutorial;
