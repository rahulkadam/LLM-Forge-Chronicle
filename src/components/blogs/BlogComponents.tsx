import React, { ReactNode } from 'react';

interface BlogSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

// Blog Section Component
export const BlogSection: React.FC<BlogSectionProps> = ({ id, title, children }) => {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

// Blog Code Example Component
interface CodeExampleProps {
  code: string;
  language?: string;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ code, language = '' }) => {
  return (
    <div className="code-example">
      <pre>
        <code className={language ? `language-${language}` : ''}>
          {code}
        </code>
      </pre>
    </div>
  );
};

// Blog Card Grid
interface CardGridProps {
  children: ReactNode;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({ children, className = 'use-case-grid' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

// Blog Card
interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = 'use-case' }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

// Info Box Component
interface InfoBoxProps {
  type: 'tip' | 'warning';
  children: ReactNode;
}

export const InfoBox: React.FC<InfoBoxProps> = ({ type, children }) => {
  return (
    <div className={`${type}-box`}>
      {children}
    </div>
  );
};