import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';


const ProfessionalExample: React.FC = () => {
  const category: BlogCategory = 'Technical';
  
  const tableOfContents = [
    { id: 'overview', title: 'Project Overview' },
    { id: 'architecture', title: 'System Architecture' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'prompts', title: 'Advanced Prompts' },
    { id: 'integration', title: 'LLM Integration' },
    { id: 'optimization', title: 'Optimization' },
    { id: 'conclusion', title: 'Best Practices' }
  ];

  return (
    <BlogTemplate
      title="Building a Professional LLM Application"
      date="April 12, 2025"
      readTime="25 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="overview" title="Project Overview">
        <p className="tutorial-description">
          This case study demonstrates how to build a production-ready LLM application for financial 
          analysis and reporting. Follow along to learn how to develop an enterprise-grade solution 
          that helps financial analysts process reports, extract insights, and generate summaries.
        </p>

        <div className="content-grid">
          <div className="content-card">
            <h3>Application Purpose</h3>
            <p>
              The Financial Analysis Assistant helps investment analysts and financial professionals analyze 
              earnings reports, financial statements, and market news using LLM technology.
            </p>
          </div>

          <div className="content-card">
            <h3>Business Benefits</h3>
            <ul>
              <li>Reduce analysis time from hours to minutes</li>
              <li>Process multiple reports in parallel</li>
              <li>Standardize analysis methodology</li>
              <li>Provide consistent summarization</li>
              <li>Scale with increasing document volume</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="architecture" title="System Architecture">
        <div className="content-grid">
          <div className="content-card">
            <h3>Frontend Layer</h3>
            <ul>
              <li>Web Interface (React + TypeScript)</li>
              <li>Document Viewer (PDF.js)</li>
              <li>Reports Dashboard (Chart.js)</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>API Layer</h3>
            <ul>
              <li>REST API (FastAPI)</li>
              <li>Authentication (JWT + OAuth2)</li>
              <li>Rate Limiting (Redis)</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Processing Layer</h3>
            <ul>
              <li>Document Processing (PyPDF2 + Langchain)</li>
              <li>LLM Orchestration (Langchain)</li>
              <li>Financial Entity Extraction (Custom NER)</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="implementation" title="Implementation Details">
        <div className="content-card">
          <h3>Document Processing Pipeline</h3>
          <p>
            Build a document processing pipeline that handles various financial report formats and prepares
            them for analysis.
          </p>
          <div className="code-block">
            <pre>{`# financial_processor.py
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

class FinancialDocumentProcessor:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
    
    def process_document(self, file_path):
        # Load document
        loader = PyPDFLoader(file_path)
        pages = loader.load()
        
        # Extract metadata
        metadata = self._extract_metadata(pages)
        
        # Split text into chunks
        text_chunks = self.text_splitter.split_documents(pages)
        
        return {
            "chunks": text_chunks,
            "metadata": metadata
        }`}</pre>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="prompts" title="Advanced Prompt Engineering">
        <div className="content-grid">
          <div className="content-card">
            <h3>Chain-of-Thought Analysis</h3>
            <div className="code-block">
              <pre>{`# Financial Analysis Prompt
You are a financial analyst assistant.
Analyze the following results step by step:

1. Identify key financial metrics
2. Analyze revenue drivers
3. Examine profit margins
4. Assess balance sheet
5. Identify guidance statements
6. Conclude with summary`}</pre>
            </div>
          </div>

          <div className="content-card">
            <h3>Structured Output Control</h3>
            <div className="code-block">
              <pre>{`# Metrics Extraction Prompt
Extract metrics in JSON format:
{
  "revenue": {
    "value": "amount",
    "change_yoy": "percentage"
  },
  "eps": {
    "value": "amount",
    "change_yoy": "percentage"
  }
}`}</pre>
            </div>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="integration" title="LLM Integration">
        <div className="content-card">
          <h3>Core Analysis Engine</h3>
          <div className="code-block">
            <pre>{`# analysis_engine.py
from langchain.llms import OpenAI
from langchain.chains import LLMChain

class FinancialAnalysisEngine:
    def __init__(self, api_key: str):
        self.llm = OpenAI(
            openai_api_key=api_key,
            model_name="gpt-4",
            temperature=0.1
        )
        
    def analyze_financial_data(
        self, 
        company_name: str,
        financial_data: str
    ) -> str:
        try:
            analysis = self.chain.run(
                company_name=company_name,
                financial_data=financial_data
            )
            return analysis
        except Exception as e:
            return f"Analysis error: {str(e)}"`}</pre>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="optimization" title="Cost & Performance Optimization">
        <div className="content-grid">
          <div className="content-card">
            <h3>Optimization Strategies</h3>
            <ul>
              <li>Token Reduction through prompt engineering</li>
              <li>Context Compression for large documents</li>
              <li>Model Cascading for efficient processing</li>
              <li>Response Caching to avoid duplicate calls</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Cost Comparison</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Approach</th>
                  <th>Cost per Doc</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic</td>
                  <td>$1.20</td>
                  <td>60s</td>
                </tr>
                <tr>
                  <td>Optimized</td>
                  <td>$0.30</td>
                  <td>30s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Best Practices">
        <div className="content-grid">
          <div className="content-card">
            <h3>Architecture Best Practices</h3>
            <ul>
              <li>Design for robustness</li>
              <li>Implement proper validation</li>
              <li>Use multi-step processing</li>
              <li>Maintain modularity</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Enterprise Considerations</h3>
            <ul>
              <li>Implement security measures</li>
              <li>Monitor API costs</li>
              <li>Establish usage guidelines</li>
              <li>Create fallback mechanisms</li>
            </ul>
          </div>
        </div>

        <div className="info-box">
          <h3>Ready to Build Your Own?</h3>
          <p>Download our project template and explore more case studies:</p>
          <div className="button-group">
            <a href="#" className="primary-button">Download Template</a>
            <a href="#" className="secondary-button">More Case Studies</a>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default ProfessionalExample;