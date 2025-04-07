import React from 'react';
import Giscus from '@giscus/react';

interface CommentsProps {
  mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
}

const Comments: React.FC<CommentsProps> = ({ mapping = 'pathname' }) => {
  return (
    <div className="comments-section">
      <Giscus
        repo="rahulkadam/LLM-Forge-Chronicle"
        repoId="R_kgDOOCsStA"
        category="General"
        categoryId="DIC_kwDOOCsStM4Co3E9"
        mapping={mapping}
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default Comments;