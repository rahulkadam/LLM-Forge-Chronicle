import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const LangchainLlamaGuide: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'langchain-fundamentals', title: 'LangChain Fundamentals' },
    { id: 'llama-index-overview', title: 'LlamaIndex Overview' },
    { id: 'framework-comparison', title: 'Framework Comparison' },
    { id: 'basic-implementation', title: 'Basic Implementation' },
    { id: 'advanced-features', title: 'Advanced Features' },
    { id: 'practical-examples', title: 'Practical Examples' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'LLM Integration';

  const langchainBasicExample = `import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";

const chat = new ChatOpenAI({
  temperature: 0.7,
  modelName: "gpt-3.5-turbo"
});

const prompt = PromptTemplate.fromTemplate(
  "Answer the following question: {question}"
);`;

  const llamaIndexBasicExample = `from llama_index import SimpleDirectoryReader, GPTListIndex
from llama_index import LLMPredictor, PromptHelper

# Load documents
documents = SimpleDirectoryReader('data').load_data()

# Create index
index = GPTListIndex.from_documents(documents)

# Query
response = index.query("What is the main topic?")`;

  const advancedLangChainExample = `import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

// Initialize the vector store
const vectorStore = await HNSWLib.fromTexts(
  texts,
  metadatas,
  new OpenAIEmbeddings()
);

// Create the chain
const chain = RetrievalQAChain.fromLLM(
  new OpenAI({ temperature: 0 }),
  vectorStore.asRetriever()
);

// Run the chain
const response = await chain.call({
  query: "What is the main topic discussed?"
});`;

  const llamaIndexAdvancedExample = `from llama_index import GPTVectorStoreIndex, ServiceContext
from llama_index.vector_stores import ChromaVectorStore
import chromadb

# Initialize Chroma
chroma_client = chromadb.Client()
chroma_collection = chroma_client.create_collection("my_collection")

# Create vector store
vector_store = ChromaVectorStore(
    chroma_collection=chroma_collection
)

# Create index
service_context = ServiceContext.from_defaults()
index = GPTVectorStoreIndex.from_documents(
    documents,
    service_context=service_context,
    vector_store=vector_store
)

# Query with metadata filters
response = index.query(
    "What are the key findings?",
    filters={"date": "2025"}
)`;

  return (
    <BlogTemplate
      title="LangChain and LlamaIndex: Complete Integration Guide"
      date="April 15, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          LangChain and LlamaIndex are two powerful frameworks that simplify the
          integration and usage of Large Language Models (LLMs) in applications.
          This guide explores both frameworks, their unique capabilities, and how
          to effectively use them in your projects.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Understanding LangChain and LlamaIndex fundamentals</li>
            <li>Choosing the right framework for your needs</li>
            <li>Implementing basic and advanced features</li>
            <li>Best practices for production deployments</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="langchain-fundamentals" title="LangChain Fundamentals">
        <p>
          LangChain is a framework designed to simplify the creation of
          applications using LLMs. It provides a consistent interface for model
          interactions, prompt management, and chain operations.
        </p>

        <CodeExample
          language="typescript"
          code={langchainBasicExample}
          title="Basic LangChain Setup"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Key LangChain Concepts">
          <ul>
            <li>Chains: Combine multiple operations</li>
            <li>Agents: Autonomous task execution</li>
            <li>Memory: State management between calls</li>
            <li>Prompts: Templating and management</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="llama-index-overview" title="LlamaIndex Overview">
        <p>
          LlamaIndex specializes in data ingestion and indexing for LLMs,
          making it easier to build applications that require querying over
          custom data sources.
        </p>

        <CodeExample
          language="python"
          code={llamaIndexBasicExample}
          title="Basic LlamaIndex Setup"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="LlamaIndex Features">
          <ul>
            <li>Document loading and parsing</li>
            <li>Automatic index creation</li>
            <li>Query optimization</li>
            <li>Multiple index types support</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="framework-comparison" title="Framework Comparison">
        <h3>Use Cases</h3>
        <InfoBox type="tip" title="When to Use Each Framework">
          <p><strong>Choose LangChain when:</strong></p>
          <ul>
            <li>Building complex LLM workflows</li>
            <li>Needing flexible model integration</li>
            <li>Implementing autonomous agents</li>
            <li>Requiring cross-platform support</li>
          </ul>
          <p><strong>Choose LlamaIndex when:</strong></p>
          <ul>
            <li>Working with large document collections</li>
            <li>Needing efficient data indexing</li>
            <li>Building question-answering systems</li>
            <li>Requiring structured data integration</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="basic-implementation" title="Basic Implementation">
        <p>
          Let's look at how to implement basic features in both frameworks:
        </p>

        <h3>LangChain Chain Implementation</h3>
        <CodeExample
          language="typescript"
          code={advancedLangChainExample}
          title="Advanced LangChain Chain"
          showLineNumbers={true}
        />

        <h3>LlamaIndex Query Implementation</h3>
        <CodeExample
          language="python"
          code={llamaIndexAdvancedExample}
          title="Advanced LlamaIndex Query"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="advanced-features" title="Advanced Features">
        <h3>Custom Chains and Indexes</h3>
        <p>
          Both frameworks support advanced customization for specific use cases:
        </p>

        <InfoBox type="tip" title="Advanced Capabilities">
          <ul>
            <li>Custom embedding models</li>
            <li>Vector store integration</li>
            <li>Memory management</li>
            <li>Custom agents and tools</li>
            <li>Streaming responses</li>
            <li>Batch processing</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="practical-examples" title="Practical Examples">
        <p>
          Real-world applications often combine both frameworks to leverage
          their respective strengths:
        </p>

        <InfoBox type="success" title="Common Integration Patterns">
          <ul>
            <li>Document processing with LlamaIndex feeding into LangChain chains</li>
            <li>Using LangChain agents with LlamaIndex knowledge bases</li>
            <li>Combining vector stores across both frameworks</li>
            <li>Hybrid search implementations</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <InfoBox type="warning" title="Implementation Guidelines">
          <ul>
            <li>Choose the right framework for your specific use case</li>
            <li>Implement proper error handling</li>
            <li>Monitor token usage and costs</li>
            <li>Cache results when possible</li>
            <li>Implement retry mechanisms</li>
            <li>Use type checking and validation</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          To continue your learning journey:
        </p>

        <div className="resource-links">
          <Link to="/blogs/llm-integration/chain-comparison" className="resource-link">
            Prompt vs Function Chaining →
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
            Experiment with both frameworks and combine them in ways that best
            suit your application's needs. Remember to keep up with the latest
            updates as both frameworks are actively developed.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default LangchainLlamaGuide;