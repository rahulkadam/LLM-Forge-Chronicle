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

export const CardGrid = ({ children, className = 'use-case-grid' }: CardGridProps) => {
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

export const Card = ({ title, children, className = 'use-case' }: CardProps) => {
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
  title?: string;
  children: ReactNode;
}

export const InfoBox = ({ type, title, children }: InfoBoxProps) => (
  <div className={`${type}-box`}>
    {title && <h4>{title}</h4>}
    {children}
  </div>
);

// New Reference Links Component
interface ReferenceLink {
  title: string;
  url: string;
  description?: string;
}

interface ReferenceLinksProps {
  title?: string;
  references: ReferenceLink[];
}

export const ReferenceLinks = ({ 
  title = "Additional References", 
  references 
}: ReferenceLinksProps) => {
  return (
    <div className="reference-links-section">
      <h3>{title}</h3>
      <div className="reference-links-grid">
        {references.map((reference, index) => (
          <div key={index} className="reference-link-card">
            <h4>{reference.title}</h4>
            {reference.description && <p>{reference.description}</p>}
            <a href={reference.url} target="_blank" rel="noopener noreferrer" className="reference-link">
              View Resource →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};