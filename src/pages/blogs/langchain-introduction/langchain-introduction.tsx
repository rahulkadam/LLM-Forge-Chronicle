import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './langchain-introduction.css';
import '../../../styles/blogs/blog-layout-update.css';

const LangchainIntroduction: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-langchain', title: 'What is LangChain?' },
    { id: 'installation', title: 'Installation' },
    { id: 'first-app', title: 'Your First LangChain App' },
    { id: 'core-concepts', title: 'Core Concepts' },
    { id: 'chatbot-example', title: 'Chatbot Example' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  return (
    <BlogTemplate
      title="Getting Started with LangChain"
      date="March 25, 2025"
      readTime="7 min"
      category="Framework"
      bannerClassName="langchain-banner"
      tableOfContents={tableOfContents}
      className="langchain-introduction"
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          LangChain is a powerful framework that makes it easy to build applications powered by large language models (LLMs).
          This beginner-friendly guide will help you start building with LangChain in no time!
        </p>
      </BlogSection>
      
      <BlogSection id="what-is-langchain" title="What is LangChain?">
        <p>
          LangChain is a framework designed to simplify the development of applications using large language models. It provides:
        </p>
        <ul>
          <li>🔗 <strong>Chain components</strong> that connect LLMs with other resources</li>
          <li>📚 <strong>Built-in prompts</strong> and templates for common tasks</li>
          <li>🧠 <strong>Memory systems</strong> for contextual conversations</li>
          <li>🔍 <strong>Retrieval tools</strong> to connect models with external data</li>
        </ul>
      </BlogSection>

      <BlogSection id="installation" title="Installation in 30 Seconds">
        <p>Getting started with LangChain is as simple as:</p>
        
        <CodeExample
          code="pip install langchain"
          language="bash"
        />
        
        <p>For specific integrations, you might need additional packages:</p>
        
        <CodeExample
          code="pip install langchain[openai]  # For OpenAI integration"
          language="bash"
        />
      </BlogSection>

      <BlogSection id="first-app" title="Your First LangChain App">
        <p>Here's a simple example that shows how to use LangChain with OpenAI:</p>
        
        <CodeExample
          code={`from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

# Initialize the LLM
llm = OpenAI(temperature=0.7)

# Create a prompt template
prompt = PromptTemplate(
    input_variables=["product"],
    template="Write a short, catchy tagline for a {product}."
)

# Create a chain that combines the LLM and prompt
chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain
result = chain.run(product="smart coffee mug")
print(result)  # Outputs a creative tagline`}
          language="python"
        />
        
        <div className="tip-box">
          <strong>Tip:</strong> Make sure to set your OpenAI API key as an environment variable with <code>export OPENAI_API_KEY="your-api-key"</code>
        </div>
      </BlogSection>
      
      <BlogSection id="core-concepts" title="Core Concepts in LangChain">
        <div className="concept-card">
          <h3>🔄 Chains</h3>
          <p>Chains combine multiple components to perform complex tasks. They're the building blocks of LangChain applications.</p>
        </div>
        
        <div className="concept-card">
          <h3>🧠 Memory</h3>
          <p>Memory components allow your applications to remember previous interactions, enabling contextual conversations.</p>
        </div>
        
        <div className="concept-card">
          <h3>🔍 Retrievers</h3>
          <p>Retrievers connect language models to external data sources, allowing them to access specific information.</p>
        </div>
        
        <div className="concept-card">
          <h3>🤖 Agents</h3>
          <p>Agents use LLMs to determine which actions to take and in what order, creating autonomous systems.</p>
        </div>
      </BlogSection>
      
      <BlogSection id="chatbot-example" title="Quick Example: Building a Chatbot with Memory">
        <p>Let's create a simple chatbot that remembers previous messages:</p>
        
        <CodeExample
          code={`from langchain.chains import ConversationChain
from langchain.llms import OpenAI
from langchain.memory import ConversationBufferMemory

# Initialize components
llm = OpenAI(temperature=0.7)
memory = ConversationBufferMemory()

# Create conversation chain with memory
conversation = ConversationChain(
    llm=llm, 
    memory=memory,
    verbose=True
)

# Chat interactions
response1 = conversation.predict(input="Hi, my name is Alice")
print(response1)

response2 = conversation.predict(input="What did I tell you my name was?")
print(response2)  # The model remembers the name`}
          language="python"
        />
      </BlogSection>
      
      <BlogSection id="next-steps" title="Where to Go Next">
        <p>Now that you've got the basics, here are some next steps:</p>
        <ul>
          <li>Explore <a href="https://python.langchain.com/docs/get_started/introduction" target="_blank" rel="noopener noreferrer">LangChain's official documentation</a></li>
          <li>Try building a document Q&A system with retrieval augmented generation (RAG)</li>
          <li>Experiment with different LLM providers like Anthropic, Cohere, or Hugging Face</li>
          <li>Join the <a href="https://discord.gg/6adMQxSpJS" target="_blank" rel="noopener noreferrer">LangChain Discord community</a> for support</li>
        </ul>
        
        <div className="blog-conclusion">
          <h3>Start Building Today!</h3>
          <p>
            LangChain makes it incredibly easy to create sophisticated AI applications without getting bogged down in complex implementation details. 
            The examples in this guide are just the beginning—LangChain's modular design lets you build anything from simple chatbots to complex reasoning systems.
          </p>
          <p>
            Ready to take the next step? Check out our other tutorials and start building your LLM-powered application today!
          </p>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LangchainIntroduction;