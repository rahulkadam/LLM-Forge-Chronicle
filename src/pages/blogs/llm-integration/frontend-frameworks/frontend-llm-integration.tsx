import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const FrontendLLMIntegration: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'react-integration', title: 'React Integration' },
    { id: 'streamlit-quickstart', title: 'Streamlit Quick Start' },
    { id: 'nextjs-setup', title: 'Next.js Implementation' },
    { id: 'ui-patterns', title: 'UI Patterns & Best Practices' },
    { id: 'error-handling', title: 'Error Handling & UX' },
    { id: 'advanced-features', title: 'Advanced Features' },
    { id: 'performance', title: 'Performance Optimization' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'LLM Integration';

  return (
    <BlogTemplate
      title="Integrating LLMs in Frontend: React, Streamlit, and More"
      date="April 15, 2025"
      readTime="12 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Integrating Large Language Models (LLMs) into frontend applications can transform
          user experiences by enabling real-time AI interactions. This guide explores
          different approaches using popular frontend frameworks like React, Streamlit,
          and Next.js.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Building chat interfaces in React</li>
            <li>Quick prototyping with Streamlit</li>
            <li>Server-side rendering with Next.js</li>
            <li>UI patterns and best practices</li>
            <li>Performance optimization techniques</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="react-integration" title="React Integration">
        <h3>Basic Chat Interface</h3>
        <p>
          Let's start with a simple React chat interface that integrates with an LLM:
        </p>

        <CodeExample
          language="typescript"
          code={`import React, { useState } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });

      const data = await response.json();
      
      // Add assistant message
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.response }
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={\`message \${msg.role}\`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="loading">AI is thinking...</div>}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          Send
        </button>
      </form>
    </div>
  );
};`}
          title="Basic React Chat Interface"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Key Features">
          <ul>
            <li>Message history management</li>
            <li>Loading states</li>
            <li>Error handling</li>
            <li>TypeScript support</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="streamlit-quickstart" title="Streamlit Quick Start">
        <h3>Rapid Prototyping with Streamlit</h3>
        <p>
          Streamlit offers a faster way to create LLM interfaces with Python:
        </p>

        <CodeExample
          language="python"
          code={`import streamlit as st
from openai import OpenAI
import os

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv('OPENAI_API_KEY'))

# App title
st.title("💬 LLM Chat Interface")

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat messages
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# User input
if prompt := st.chat_input("What would you like to know?"):
    # Add user message to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})
    
    with st.chat_message("user"):
        st.markdown(prompt)

    # Get LLM response
    with st.chat_message("assistant"):
        message_placeholder = st.empty()
        full_response = ""

        # Stream the response
        for response in client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": m["role"], "content": m["content"]}
                for m in st.session_state.messages
            ],
            stream=True,
        ):
            full_response += (response.choices[0].delta.content or "")
            message_placeholder.markdown(full_response + "▌")
        
        message_placeholder.markdown(full_response)
    
    # Add assistant response to chat history
    st.session_state.messages.append(
        {"role": "assistant", "content": full_response}
    )`}
          title="Streamlit Chat Interface"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Streamlit Advantages">
          <ul>
            <li>Rapid development</li>
            <li>Built-in session management</li>
            <li>Easy streaming responses</li>
            <li>Python-first approach</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="nextjs-setup" title="Next.js Implementation">
        <h3>Server-Side Integration</h3>
        <p>
          Next.js provides robust server-side capabilities for LLM integration:
        </p>

        <CodeExample
          language="typescript"
          code={`// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });

    res.status(200).json({ 
      response: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}`}
          title="Next.js API Route"
          showLineNumbers={true}
        />

        <h3>Frontend Component</h3>
        <CodeExample
          language="typescript"
          code={`// components/Chat.tsx
'use client';

import { useState } from 'react';

export default function Chat() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) throw new Error('API Error');
      
      const data = await response.json();
      return data.response;
    } finally {
      setLoading(false);
    }
  };

  // Rest of the component...
}`}
          title="Next.js Frontend Component"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="ui-patterns" title="UI Patterns & Best Practices">
        <h3>Essential UI Patterns</h3>
        
        <InfoBox type="tip" title="Key UI Considerations">
          <ul>
            <li>Clear loading states</li>
            <li>Error message handling</li>
            <li>Input validation</li>
            <li>Response formatting</li>
            <li>Mobile responsiveness</li>
          </ul>
        </InfoBox>

        <CodeExample
          language="typescript"
          code={`const LoadingIndicator: React.FC = () => (
  <div className="loading-container">
    <div className="typing-indicator">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <p>AI is thinking...</p>
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="error-message">
    <p>❌ {message}</p>
    <button onClick={() => window.location.reload()}>
      Try Again
    </button>
  </div>
);`}
          title="UI Components"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="error-handling" title="Error Handling & UX">
        <h3>Robust Error Handling</h3>
        <CodeExample
          language="typescript"
          code={`const handleApiError = (error: any) => {
  if (error.name === 'AbortError') {
    return 'Request timeout - please try again';
  }
  
  if (error.status === 429) {
    return 'Rate limit exceeded - please wait a moment';
  }
  
  if (error.status === 413) {
    return 'Input too long - please shorten your message';
  }
  
  return 'An unexpected error occurred';
};

const ChatWithErrorBoundary: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (prompt: string) => {
    try {
      // Add timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('/api/chat', {
        signal: controller.signal,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      setError(handleApiError(error));
      throw error;
    }
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return <ChatInterface onSubmit={handleSubmit} />;
};`}
          title="Error Handling Implementation"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="advanced-features" title="Advanced Features">
        <h3>Streaming Responses</h3>
        <CodeExample
          language="typescript"
          code={`const StreamingChat: React.FC = () => {
  const [streaming, setStreaming] = useState(false);
  const [partialResponse, setPartialResponse] = useState('');

  const handleStream = async (prompt: string) => {
    setStreaming(true);
    setPartialResponse('');

    try {
      const response = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = new TextDecoder().decode(value);
        setPartialResponse(prev => prev + text);
      }
    } finally {
      setStreaming(false);
    }
  };

  return (
    <div className="chat-container">
      {streaming ? (
        <div className="streaming-response">
          {partialResponse}<span className="cursor">|</span>
        </div>
      ) : (
        /* Regular chat interface */
      )}
    </div>
  );
};`}
          title="Streaming Implementation"
          showLineNumbers={true}
        />

        <h3>File Handling</h3>
        <CodeExample
          language="typescript"
          code={`const FileUploadChat: React.FC = () => {
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    return response.json();
  };

  return (
    <div className="chat-with-upload">
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }}
      />
      {/* Chat interface */}
    </div>
  );
};`}
          title="File Upload Handler"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="performance" title="Performance Optimization">
        <h3>Optimizing Response Time</h3>
        
        <InfoBox type="warning" title="Performance Tips">
          <ul>
            <li>Implement request debouncing</li>
            <li>Use streaming for long responses</li>
            <li>Cache common responses</li>
            <li>Optimize payload size</li>
          </ul>
        </InfoBox>

        <CodeExample
          language="typescript"
          code={`import { useMemo, useCallback } from 'react';
import debounce from 'lodash/debounce';

const OptimizedChat: React.FC = () => {
  // Debounce user input
  const debouncedSearch = useMemo(
    () => debounce(async (prompt: string) => {
      // API call logic
    }, 500),
    []
  );

  // Memoize response processing
  const processResponse = useCallback((response: string) => {
    // Processing logic
    return processedResponse;
  }, []);

  // Cache results
  const responseCache = useMemo(() => new Map<string, string>(), []);

  const handleSubmit = async (prompt: string) => {
    // Check cache first
    if (responseCache.has(prompt)) {
      return responseCache.get(prompt);
    }

    const response = await debouncedSearch(prompt);
    responseCache.set(prompt, response);
    return response;
  };

  return (/* Component JSX */);
};`}
          title="Performance Optimizations"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          Now that you have a solid foundation in frontend LLM integration, consider
          exploring these advanced topics:
        </p>

        <div className="resource-links">
          <Link to="/blogs/llm-integration/langchain-llama-guide" className="resource-link">
            LangChain & LlamaIndex Integration →
          </Link>
          <Link to="/blogs/llm-integration/openai-api" className="resource-link">
            OpenAI API Guide →
          </Link>
          <Link to="/blogs/advanced/rag-tutorial" className="resource-link">
            RAG Implementation Guide →
          </Link>
        </div>

        <InfoBox type="success" title="Continue Learning">
          <p>
            Keep exploring different frameworks and approaches, and remember to
            focus on user experience and performance as you build more complex
            applications.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default FrontendLLMIntegration;