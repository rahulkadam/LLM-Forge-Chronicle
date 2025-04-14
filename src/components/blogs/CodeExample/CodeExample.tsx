import React, { useEffect, useCallback } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
import './CodeExample.css';

interface CodeExampleProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  title?: string;
  caption?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({
  code,
  language,
  showLineNumbers = true,
  title,
  caption
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }, [code]);

  return (
    <div className="code-example-container">
      {(title || caption) && (
        <div className="code-example-header">
          {title && <div className="code-example-title">{title}</div>}
          {caption && <div className="code-example-caption">{caption}</div>}
        </div>
      )}
      <div className="code-example-toolbar">
        <span className="code-example-language">{language}</span>
        <button 
          onClick={handleCopy}
          className="code-example-copy"
          title="Copy code"
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copy</span>
        </button>
      </div>
      <pre className={showLineNumbers ? 'line-numbers' : ''}>
        <code className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeExample;