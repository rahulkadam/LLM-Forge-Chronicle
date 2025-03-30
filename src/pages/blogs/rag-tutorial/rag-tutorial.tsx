import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './rag-tutorial.css';
import '../../../styles/blogs/blog-layout-update.css';

// RAG Diagram component for visualization
const RAGDiagram: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="architecture-diagram">
      <h3>{title}</h3>
      <div className="diagram-content">
        <img 
          src="/rag/rag-diagram.png" 
          alt="RAG Architecture Diagram" 
          className="diagram-image" 
        />
      </div>
    </div>
  );
};

// Component for each RAG component explanation
interface ComponentProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ icon, title, children }) => {
  return (
    <div className="component">
      <h3>
        <div className="component-icon">{icon}</div>
        {title}
      </h3>
      {children}
    </div>
  );
};

// Step component for implementation steps
interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, children }) => {
  return (
    <div className="step1">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

// Code with explanation component
interface CodeWithExplanationProps {
  code: string;
  language?: string;
  children: React.ReactNode;
}

const CodeWithExplanation: React.FC<CodeWithExplanationProps> = ({ code, language = 'python', children }) => {
  return (
    <div className="code-explanation">
      <div className="code-block">
        <pre>
          <code className={language ? `language-${language}` : ''}>
            {code}
          </code>
        </pre>
      </div>
      <div className="explanation">
        {children}
      </div>
    </div>
  );
};

const RAGTutorial: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-rag', title: 'What is RAG?' },
    { id: 'benefits', title: 'Benefits of RAG' },
    { id: 'components', title: 'Key Components' },
    { id: 'implementation', title: 'Step-by-Step Implementation' },
    { id: 'complete-example', title: 'Complete Example Code' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Building Your First RAG System"
      date="March 26, 2025"
      readTime="12 min"
      category="Advanced"
      bannerClassName="rag-banner"
      tableOfContents={tableOfContents}
      className="rag-tutorial"
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Retrieval Augmented Generation (RAG) is revolutionizing how we build LLM-powered applications. 
          By combining the power of retrieval systems with generative AI models, RAG allows you to create 
          applications that have access to specific data that wasn't in the LLM's original training set, 
          resulting in more accurate and context-aware responses.
        </p>
        <p>
          In this tutorial, we'll build a simple yet fully functional RAG system from scratch. 
          Whether you're creating a documentation assistant, a customer support bot, or just want to help 
          LLMs provide more factual and relevant responses based on your data - this guide will show you how.
        </p>
        <div className="tip-box">
          <h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Prerequisites
          </h4>
          <p>
            To follow along with this tutorial, you'll need:
          </p>
          <ul>
            <li>Basic knowledge of Python</li>
            <li>An OpenAI API key (or another LLM provider)</li>
            <li>A basic understanding of how LLMs work</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="what-is-rag" title="What is RAG?">
        <p>
          Retrieval Augmented Generation (RAG) is an approach that enhances language models by retrieving 
          relevant information from external sources before generating responses. Instead of relying solely 
          on the model's inherent knowledge, RAG utilizes the following workflow:
        </p>
        <ol>
          <li>A user submits a query</li>
          <li>The system retrieves relevant information from a knowledge base</li>
          <li>This information is combined with the original query as context</li>
          <li>An LLM generates a response based on both the query and the retrieved information</li>
        </ol>

        <RAGDiagram title="Basic RAG Architecture" />
        
        <p>
          This approach helps overcome several limitations of traditional LLMs:
        </p>
        <ul>
          <li>It reduces hallucinations by grounding responses in retrieved facts</li>
          <li>It enables access to information beyond the model's training data</li>
          <li>It allows for more up-to-date and specific information</li>
        </ul>
      </BlogSection>

      <BlogSection id="benefits" title="Benefits of RAG">
        <div className="comparison-grid">
          <div className="comparison-card naive-approach">
            <h3>Traditional LLM Approach</h3>
            <p><strong>Query:</strong> "What's the latest feature in our product?"</p>
            <p><strong>Response:</strong> "Based on my training data up to 2022, your product's latest feature is the dashboard analytics tool, which allows for real-time monitoring of key metrics..."</p>
            <p><em>Problem:</em> The information may be outdated or entirely incorrect if it wasn't part of the LLM's training data.</p>
          </div>
          
          <div className="comparison-card rag-approach">
            <h3>RAG Approach</h3>
            <p><strong>Query:</strong> "What's the latest feature in our product?"</p>
            <p><strong>Behind the scenes:</strong> System retrieves the latest product documentation.</p>
            <p><strong>Response:</strong> "Based on your documentation, the latest feature released on March 15, 2024 is the integrated AI assistant that helps users automate common workflows..."</p>
            <p><em>Benefit:</em> Response is grounded in your specific, up-to-date documentation.</p>
          </div>
        </div>
        
        <p>
          The key benefits of implementing RAG include:
        </p>
        <ul>
          <li><strong>Factual accuracy:</strong> Responses are based on your verified data</li>
          <li><strong>Customization:</strong> Tailor responses to your specific domain or use case</li>
          <li><strong>Freshness:</strong> Include recent information that post-dates the LLM's training data</li>
          <li><strong>Control:</strong> More control over what information the LLM uses to generate responses</li>
          <li><strong>Transparency:</strong> Ability to cite sources for information used in responses</li>
        </ul>
      </BlogSection>

      <BlogSection id="components" title="Key Components">
        <p>
          A basic RAG system consists of three main components:
        </p>
        
        <Component icon="📚" title="Document Processor">
          <p>
            The document processor is responsible for preparing your data for efficient retrieval. 
            This typically involves:
          </p>
          <ul>
            <li>Loading documents from various sources (PDFs, web pages, databases, etc.)</li>
            <li>Chunking documents into smaller pieces for more precise retrieval</li>
            <li>Cleaning and preprocessing text</li>
          </ul>
        </Component>
        
        <Component icon="🧠" title="Vector Store">
          <p>
            The vector store is where your document embeddings are stored and indexed for quick retrieval. 
            Key aspects include:
          </p>
          <ul>
            <li>Generating embeddings (vector representations) of text chunks</li>
            <li>Storing these embeddings efficiently</li>
            <li>Implementing similarity search to find relevant information</li>
          </ul>
        </Component>
        
        <Component icon="🤖" title="Retrieval + Generation Pipeline">
          <p>
            The pipeline ties everything together, handling:
          </p>
          <ul>
            <li>Query processing and embedding</li>
            <li>Retrieving relevant documents from the vector store</li>
            <li>Constructing a prompt that includes the query and retrieved context</li>
            <li>Generating a response using an LLM</li>
          </ul>
        </Component>
      </BlogSection>

      <BlogSection id="implementation" title="Step-by-Step Implementation">
        <p>
          Let's build a simple RAG system that can answer questions about a company's 
          fictional product documentation. We'll use Python with a few key libraries:
        </p>
        <ul>
          <li><code>langchain</code> - A framework for developing LLM applications</li>
          <li><code>openai</code> - For accessing OpenAI's embeddings and completion APIs</li>
          <li><code>chromadb</code> - A vector store for similarity search</li>
        </ul>

        <Step number={1} title="Set Up Your Environment">
          <p>
            First, install the necessary packages:
          </p>
          <CodeExample 
            code={`pip install langchain openai chromadb`}
            language="bash"
          />
          <p>
            Set up your OpenAI API key as an environment variable:
          </p>
          <CodeExample 
            code={`import os
os.environ["OPENAI_API_KEY"] = "your-api-key-here"

from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.schema import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter`}
            language="python"
          />
        </Step>

        <Step number={2} title="Prepare Sample Documents">
          <p>
            Let's create some sample product documentation:
          </p>
          <CodeExample 
            code={`# Sample product documentation
documents = [
    Document(
        page_content="Product: SmartAnalytics\n\nFeature: Dashboard Analytics\nRelease Date: January 10, 2024\nDescription: Real-time monitoring of key business metrics with customizable dashboards. Users can create widgets for different data points and arrange them according to their needs.",
        metadata={"source": "product_docs/analytics.txt"}
    ),
    Document(
        page_content="Product: SmartAnalytics\n\nFeature: Automated Reports\nRelease Date: February 5, 2024\nDescription: Schedule and automate report generation and distribution. Reports can be customized with different templates and sent to stakeholders via email or Slack.",
        metadata={"source": "product_docs/reports.txt"}
    ),
    Document(
        page_content="Product: SmartAnalytics\n\nFeature: AI Assistant\nRelease Date: March 15, 2024\nDescription: Our newest feature, the integrated AI assistant, helps users automate common workflows and provides insights based on your data patterns. It can suggest optimizations and predict future trends.",
        metadata={"source": "product_docs/ai_assistant.txt"}
    )
]`}
            language="python"
          />
        </Step>

        <Step number={3} title="Split Documents into Chunks">
          <p>
            To improve retrieval precision, we'll split documents into smaller chunks:
          </p>
          <CodeWithExplanation 
            code={`# Initialize the text splitter
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

# Split documents into chunks
document_chunks = text_splitter.split_documents(documents)

print(f"Split {len(documents)} documents into {len(document_chunks)} chunks")`}
          >
            <p>
              <strong>chunk_size</strong> controls how large each document piece should be. Smaller chunks allow
              for more precise retrieval but may lose context.
            </p>
            <p>
              <strong>chunk_overlap</strong> ensures some text overlaps between chunks to preserve context
              that might be split across chunk boundaries.
            </p>
          </CodeWithExplanation>
        </Step>

        <Step number={4} title="Create Embeddings and Vector Store">
          <p>
            Now we'll convert our text chunks into embeddings and store them:
          </p>
          <CodeWithExplanation
            code={`# Initialize the embedding model
embeddings = OpenAIEmbeddings()

# Create a vector store from the document chunks
vector_store = Chroma.from_documents(
    documents=document_chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)

# Persist the vector store to disk
vector_store.persist()`}
          >
            <p>
              <strong>OpenAIEmbeddings</strong> uses OpenAI's text-embedding-ada-002 model to convert
              text into high-dimensional vectors that capture semantic meaning.
            </p>
            <p>
              <strong>Chroma</strong> is a lightweight vector database that stores these embeddings and
              enables similarity search. The <code>persist_directory</code> allows us to save and
              reload our database.
            </p>
          </CodeWithExplanation>
        </Step>

        <Step number={5} title="Create the RAG Pipeline">
          <p>
            Let's build the retrieval and generation pipeline:
          </p>
          <CodeWithExplanation
            code={`from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Define a custom prompt template that includes retrieved context
prompt_template = """
You are a helpful assistant that answers questions about our product SmartAnalytics.
Use only the following context to answer the question. If you don't know the answer based
on the context, say "I don't have information about that in my documentation."

Context:
{context}

Question: {question}
Answer: """

PROMPT = PromptTemplate(
    template=prompt_template,
    input_variables=["context", "question"]
)

# Initialize the language model
llm = ChatOpenAI(temperature=0.0, model="gpt-3.5-turbo")

# Create a retrieval chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever(search_kwargs={"k": 2}),
    chain_type_kwargs={"prompt": PROMPT},
    return_source_documents=True
)`}
          >
            <p>
              The <strong>prompt template</strong> instructs the LLM to use only the retrieved context
              to answer questions, reducing hallucinations.
            </p>
            <p>
              Setting <strong>temperature=0.0</strong> minimizes creativity in favor of factual accuracy.
            </p>
            <p>
              The <strong>retriever</strong> fetches the top 2 most relevant document chunks (<code>k=2</code>) for each query.
            </p>
          </CodeWithExplanation>
        </Step>

        <Step number={6} title="Query the RAG System">
          <p>
            Now let's run some queries against our RAG system:
          </p>
          <CodeExample
            code={`# Function to query our RAG system
def query_system(question):
    result = qa_chain({"query": question})
    answer = result["result"]
    sources = [doc.metadata["source"] for doc in result["source_documents"]]
    return answer, sources

# Test the system with queries
questions = [
    "What is the latest feature in SmartAnalytics?",
    "When was the Dashboard Analytics feature released?",
    "Can you explain how the AI Assistant works?",
    "Who created SmartAnalytics?",  # This information is not in our documents
]

for question in questions:
    answer, sources = query_system(question)
    print(f"Q: {question}")
    print(f"A: {answer}")
    print(f"Sources: {sources}")
    print("---\\n")`}
            language="python"
          />
          
          <div className="result-box">
            <h4>Sample Output:</h4>
            <pre>
{`Q: What is the latest feature in SmartAnalytics?
A: The latest feature in SmartAnalytics is the AI Assistant, which was released on March 15, 2024. This integrated assistant helps users automate common workflows and provides insights based on data patterns. It can also suggest optimizations and predict future trends.
Sources: ['product_docs/ai_assistant.txt']
---

Q: When was the Dashboard Analytics feature released?
A: The Dashboard Analytics feature was released on January 10, 2024.
Sources: ['product_docs/analytics.txt']
---

Q: Can you explain how the AI Assistant works?
A: Based on the context provided, the AI Assistant in SmartAnalytics helps users automate common workflows and provides insights based on your data patterns. It can suggest optimizations and predict future trends. It was released on March 15, 2024.
Sources: ['product_docs/ai_assistant.txt']
---

Q: Who created SmartAnalytics?
A: I don't have information about that in my documentation.
Sources: ['product_docs/ai_assistant.txt', 'product_docs/analytics.txt']
---`}
            </pre>
          </div>
        </Step>
      </BlogSection>

      <BlogSection id="complete-example" title="Complete Example Code">
        <p>
          Here's the complete code for our simple RAG system:
        </p>
        <CodeExample
          code={`import os
os.environ["OPENAI_API_KEY"] = "your-api-key-here"

from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.schema import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Sample product documentation
documents = [
    Document(
        page_content="Product: SmartAnalytics\\n\\nFeature: Dashboard Analytics\\nRelease Date: January 10, 2024\\nDescription: Real-time monitoring of key business metrics with customizable dashboards. Users can create widgets for different data points and arrange them according to their needs.",
        metadata={"source": "product_docs/analytics.txt"}
    ),
    Document(
        page_content="Product: SmartAnalytics\\n\\nFeature: Automated Reports\\nRelease Date: February 5, 2024\\nDescription: Schedule and automate report generation and distribution. Reports can be customized with different templates and sent to stakeholders via email or Slack.",
        metadata={"source": "product_docs/reports.txt"}
    ),
    Document(
        page_content="Product: SmartAnalytics\\n\\nFeature: AI Assistant\\nRelease Date: March 15, 2024\\nDescription: Our newest feature, the integrated AI assistant, helps users automate common workflows and provides insights based on your data patterns. It can suggest optimizations and predict future trends.",
        metadata={"source": "product_docs/ai_assistant.txt"}
    )
]

# Initialize the text splitter
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

# Split documents into chunks
document_chunks = text_splitter.split_documents(documents)
print(f"Split {len(documents)} documents into {len(document_chunks)} chunks")

# Initialize the embedding model
embeddings = OpenAIEmbeddings()

# Create a vector store from the document chunks
vector_store = Chroma.from_documents(
    documents=document_chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)

# Persist the vector store to disk
vector_store.persist()

# Define a custom prompt template
prompt_template = """
You are a helpful assistant that answers questions about our product SmartAnalytics.
Use only the following context to answer the question. If you don't know the answer based
on the context, say "I don't have information about that in my documentation."

Context:
{context}

Question: {question}
Answer: """

PROMPT = PromptTemplate(
    template=prompt_template,
    input_variables=["context", "question"]
)

# Initialize the language model
llm = ChatOpenAI(temperature=0.0, model="gpt-3.5-turbo")

# Create a retrieval chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever(search_kwargs={"k": 2}),
    chain_type_kwargs={"prompt": PROMPT},
    return_source_documents=True
)

# Function to query our RAG system
def query_system(question):
    result = qa_chain({"query": question})
    answer = result["result"]
    sources = [doc.metadata["source"] for doc in result["source_documents"]]
    return answer, sources

# Test the system with queries
questions = [
    "What is the latest feature in SmartAnalytics?",
    "When was the Dashboard Analytics feature released?",
    "Can you explain how the AI Assistant works?",
    "Who created SmartAnalytics?",
]

for question in questions:
    answer, sources = query_system(question)
    print(f"Q: {question}")
    print(f"A: {answer}")
    print(f"Sources: {sources}")
    print("---\\n")`}
          language="python"
        />
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <div className="best-practices1">
          <h3>RAG System Best Practices</h3>
          <ul>
            <li><strong>Document Chunking:</strong> Experiment with different chunk sizes to find the optimal balance between context retention and retrieval precision.</li>
            <li><strong>Overlap:</strong> Use an overlap between chunks (typically 10-20% of chunk size) to prevent losing context at boundaries.</li>
            <li><strong>Prompt Engineering:</strong> Create clear instructions for the LLM to use the retrieved context and acknowledge when information isn't available.</li>
            <li><strong>Citations:</strong> Include source tracking to understand where information comes from.</li>
            <li><strong>Metadata Filtering:</strong> Add metadata to chunks for filtering retrieval results (by date, category, etc.).</li>
            <li><strong>Re-ranking:</strong> Consider adding a re-ranking step to improve retrieval quality.</li>
            <li><strong>Embedding Models:</strong> Use high-quality embedding models; they're the foundation of good retrieval.</li>
            <li><strong>Hybrid Search:</strong> Combine semantic search with keyword search for better results.</li>
            <li><strong>Temperature:</strong> Use a low temperature (0-0.2) for factual accuracy.</li>
            <li><strong>Evaluation:</strong> Regularly test your RAG system against a variety of queries and measure relevance and accuracy.</li>
          </ul>
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          You've now built your first Retrieval Augmented Generation system! This approach enables LLMs 
          to provide more accurate, relevant, and up-to-date information by grounding responses in your 
          specific data.
        </p>
        <p>
          While our example was simple, the same principles apply to more complex RAG systems that might include:
        </p>
        <ul>
          <li>Document loaders for different file formats (PDF, Word, HTML, etc.)</li>
          <li>More sophisticated chunking strategies</li>
          <li>Advanced retrieval methods (hybrid search, re-ranking, etc.)</li>
          <li>Streaming responses</li>
          <li>User feedback loops for continuous improvement</li>
        </ul>
        
        <p>
          RAG is a powerful technique that addresses many limitations of traditional LLMs, particularly 
          for domain-specific applications and cases where accuracy and up-to-date information are crucial.
        </p>
        
        <h3>Where to Go From Here</h3>
        <p>
          To further explore RAG development, check out these resources:
        </p>
        <ul>
          <li><Link to="/blogs/llm-agent-guide">LLM Agents: Extending RAG with actions</Link></li>
          <li><Link to="/blogs/openai-api-guide">Using OpenAI's APIs effectively</Link></li>
        </ul>
      </BlogSection>
    </BlogTemplate>
  );
};

export default RAGTutorial;