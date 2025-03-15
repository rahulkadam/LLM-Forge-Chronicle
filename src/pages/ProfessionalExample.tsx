import React from 'react';
import '../styles/ProfessionalExample.css';

const ProfessionalExample: React.FC = () => {
  return (
    <div className="professional-example">
      <section className="example-header">
        <h1>Building a Professional LLM Application</h1>
        <h2>Case Study: Financial Analysis & Reporting Assistant</h2>
        <div className="example-summary">
          <p>
            This case study demonstrates how to build a production-ready LLM application for financial 
            analysis and reporting. Follow along to learn how to develop an enterprise-grade solution 
            that helps financial analysts process reports, extract insights, and generate summaries.
          </p>
        </div>
      </section>

      <section className="example-overview">
        <div className="overview-container">
          <div className="overview-content">
            <h3>Project Overview</h3>
            <p>
              The Financial Analysis Assistant is designed to help investment analysts and financial 
              professionals analyze earnings reports, financial statements, and market news. It uses 
              LLM technology to extract key metrics, identify trends, and generate executive summaries.
            </p>
          </div>
          <div className="overview-benefits">
            <h4>Business Benefits</h4>
            <ul>
              <li>Reduce analysis time from hours to minutes</li>
              <li>Process multiple reports in parallel</li>
              <li>Standardize analysis methodology</li>
              <li>Provide consistent summarization</li>
              <li>Scale with increasing document volume</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="example-architecture">
        <h3>System Architecture</h3>
        
        <div className="architecture-diagram">
          <div className="architecture-layer">
            <h4>Frontend Layer</h4>
            <div className="architecture-components">
              <div className="component">
                <div className="component-name">Web Interface</div>
                <div className="component-tech">React + TypeScript</div>
              </div>
              <div className="component">
                <div className="component-name">Document Viewer</div>
                <div className="component-tech">PDF.js</div>
              </div>
              <div className="component">
                <div className="component-name">Reports Dashboard</div>
                <div className="component-tech">Chart.js</div>
              </div>
            </div>
          </div>
          
          <div className="architecture-layer">
            <h4>API Layer</h4>
            <div className="architecture-components">
              <div className="component">
                <div className="component-name">REST API</div>
                <div className="component-tech">FastAPI</div>
              </div>
              <div className="component">
                <div className="component-name">Authentication</div>
                <div className="component-tech">JWT + OAuth2</div>
              </div>
              <div className="component">
                <div className="component-name">Rate Limiting</div>
                <div className="component-tech">Redis</div>
              </div>
            </div>
          </div>
          
          <div className="architecture-layer">
            <h4>Processing Layer</h4>
            <div className="architecture-components">
              <div className="component">
                <div className="component-name">Document Processing</div>
                <div className="component-tech">PyPDF2 + Langchain</div>
              </div>
              <div className="component">
                <div className="component-name">LLM Orchestration</div>
                <div className="component-tech">Langchain</div>
              </div>
              <div className="component">
                <div className="component-name">Financial Entity Extraction</div>
                <div className="component-tech">Custom NER + Regex</div>
              </div>
            </div>
          </div>
          
          <div className="architecture-layer">
            <h4>Model Layer</h4>
            <div className="architecture-components">
              <div className="component">
                <div className="component-name">Document Analysis</div>
                <div className="component-tech">GPT-4</div>
              </div>
              <div className="component">
                <div className="component-name">Metric Extraction</div>
                <div className="component-tech">Fine-tuned LLaMA 2</div>
              </div>
              <div className="component">
                <div className="component-name">Report Generation</div>
                <div className="component-tech">GPT-4</div>
              </div>
            </div>
          </div>
          
          <div className="architecture-layer">
            <h4>Data Layer</h4>
            <div className="architecture-components">
              <div className="component">
                <div className="component-name">Document Storage</div>
                <div className="component-tech">S3</div>
              </div>
              <div className="component">
                <div className="component-name">Vector Database</div>
                <div className="component-tech">Pinecone</div>
              </div>
              <div className="component">
                <div className="component-name">Operational Database</div>
                <div className="component-tech">PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="example-implementation">
        <h3>Implementation Details</h3>
        
        <div className="implementation-tabs">
          <div className="tab active">1. Document Processing</div>
          <div className="tab">2. Financial Extraction</div>
          <div className="tab">3. Analysis Engine</div>
          <div className="tab">4. Report Generation</div>
          <div className="tab">5. Deployment</div>
        </div>
        
        <div className="tab-content">
          <h4>Document Processing Pipeline</h4>
          
          <div className="code-explanation">
            <div className="explanation">
              <p>
                The first step is to build a document processing pipeline that can handle various 
                financial report formats (PDF, HTML, DOCX). We'll use Langchain's document loaders 
                and text splitters to prepare the documents for analysis.
              </p>
              <p>
                Key features:
              </p>
              <ul>
                <li>Multi-format document support</li>
                <li>Table extraction and normalization</li>
                <li>Document chunking with context preservation</li>
                <li>Metadata extraction (date, company, report type)</li>
              </ul>
            </div>
            
            <div className="code-sample">
              <pre>
                <code>
{`# financial_processor.py
from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
import re

class FinancialDocumentProcessor:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            separators=["\n\n", "\n", " ", ""]
        )
    
    def process_document(self, file_path):
        """Process financial document and prepare for analysis"""
        # 1. Load document based on format
        loader = PyPDFLoader(file_path)
        pages = loader.load()
        
        # 2. Extract metadata
        metadata = self._extract_metadata(pages)
        
        # 3. Extract tables
        tables = self._extract_tables(pages)
        
        # 4. Split text into chunks
        text_chunks = self.text_splitter.split_documents(pages)
        
        # 5. Enhance chunks with table context
        enhanced_chunks = self._enhance_chunks_with_tables(
            text_chunks, tables
        )
        
        return {
            "chunks": enhanced_chunks,
            "metadata": metadata,
            "tables": tables
        }
    
    def _extract_metadata(self, pages):
        # Extract report date, company name, report type
        # using regex patterns common in financial documents
        raw_text = "".join([p.page_content for p in pages])
        
        # Extract company name
        company_match = re.search(
            r"([A-Z][A-Za-z0-9\.\&\s]+)(?:Inc\.?|Corp\.?|Ltd\.?|LLC\.?)", 
            raw_text
        )
        company = company_match.group(1).strip() if company_match else None
        
        # Extract date (various formats)
        date_match = re.search(
            r"(?:(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4})|(?:\d{1,2}/\d{1,2}/\d{4})",
            raw_text
        )
        date = date_match.group(0) if date_match else None
        
        # Determine report type
        report_type = None
        if re.search(r"Quarterly Report|Form 10-Q", raw_text):
            report_type = "Quarterly Report (10-Q)"
        elif re.search(r"Annual Report|Form 10-K", raw_text):
            report_type = "Annual Report (10-K)"
        elif re.search(r"Earnings Release|Financial Results", raw_text):
            report_type = "Earnings Release"
            
        return {
            "company": company,
            "date": date,
            "report_type": report_type
        }
    
    def _extract_tables(self, pages):
        # Extract tables using tabular data extraction
        # Normalize table format for consistent analysis
        # ... table extraction code ...
        pass
        
    def _enhance_chunks_with_tables(self, chunks, tables):
        # Add relevant table data to text chunks
        # based on content similarity
        # ... enhancement code ...
        pass`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="implementation-notes">
            <h5>Production Considerations</h5>
            <ul>
              <li><strong>Error Handling:</strong> Robust error handling for malformed documents</li>
              <li><strong>Scalability:</strong> Process documents in parallel using worker pools</li>
              <li><strong>Monitoring:</strong> Add detailed logging for all processing steps</li>
              <li><strong>Caching:</strong> Cache processed documents to avoid redundant processing</li>
              <li><strong>Security:</strong> Implement proper document sanitization and validation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="example-prompts">
        <h3>Advanced Prompt Engineering</h3>
        
        <div className="prompt-techniques">
          <div className="technique">
            <h4>Chain-of-Thought Analysis</h4>
            <div className="prompt-example">
              <h5>Financial Analysis Prompt</h5>
              <pre>
                <code>
{`You are a financial analyst assistant with expertise in earnings reports.
Analyze the following quarterly results and provide a step-by-step analysis.

COMPANY INFO:
{company_name}, {report_date}, {report_type}

FINANCIAL DATA:
{financial_data}

INSTRUCTIONS:
1. First, identify all key financial metrics and their YoY changes.
2. Then, analyze revenue drivers and any significant segments.
3. Next, examine profit margins and cost trends.
4. Assess the balance sheet and cash flow highlights.
5. Identify forward guidance or management outlook statements.
6. Finally, conclude with a summary of the company's performance.

For each step, explain your analysis process and reasoning.
Provide specific numbers and percentages when discussing changes.`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="technique">
            <h4>Structured Output Control</h4>
            <div className="prompt-example">
              <h5>Metrics Extraction Prompt</h5>
              <pre>
                <code>
{`Extract the following financial metrics from the provided text.
Return the results in valid JSON format exactly as specified below.

REPORT SECTION:
{report_section}

OUTPUT FORMAT:
{
  "revenue": {
    "value": "extracted value in millions/billions",
    "change_yoy": "percentage change YoY",
    "source_line": "exact line from text where found"
  },
  "eps": {
    "value": "extracted value",
    "adjusted_value": "adjusted value if available",
    "change_yoy": "percentage change YoY",
    "source_line": "exact line from text where found"
  },
  "net_income": {
    "value": "extracted value in millions/billions",
    "change_yoy": "percentage change YoY",
    "source_line": "exact line from text where found" 
  }
}

If a metric cannot be found, use null for its value and "not found" for source_line.
Ensure the output is valid JSON with no additional text or explanations.`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="example-llm-integration">
        <h3>Python LLM Integration</h3>
        
        <div className="code-explanation">
          <div className="explanation">
            <p>
              The core analysis engine integrates multiple LLM calls via an orchestration layer. Here, 
              we're using Langchain to manage the LLM interactions, prompt templates, and response handling.
            </p>
            <p>
              This integration includes:
            </p>
            <ul>
              <li>Multiple model integrations (GPT-4 and fine-tuned LLaMA 2)</li>
              <li>Response validation and error recovery</li>
              <li>Cost and token optimization</li>
              <li>Caching for improved performance</li>
            </ul>
          </div>
          
          <div className="code-sample">
            <pre>
              <code>
{`# financial_analysis_engine.py
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.cache import InMemoryCache
import langchain
import json
from typing import Dict, List, Any

# Enable caching to reduce API calls
langchain.llm_cache = InMemoryCache()

class FinancialAnalysisEngine:
    def __init__(self, api_key: str, model_name: str = "gpt-4"):
        self.llm = OpenAI(
            openai_api_key=api_key,
            model_name=model_name,
            temperature=0.1  # Low temperature for factual analysis
        )
        
        # Initialize prompt templates
        self.metrics_prompt = PromptTemplate(
            input_variables=["report_section"],
            template="""
            Extract the following financial metrics from the provided text.
            Return the results in valid JSON format exactly as specified below.
            
            REPORT SECTION:
            {report_section}
            
            OUTPUT FORMAT:
            {
              "revenue": {
                "value": "extracted value in millions/billions",
                "change_yoy": "percentage change YoY",
                "source_line": "exact line from text where found"
              },
              "eps": {
                "value": "extracted value",
                "adjusted_value": "adjusted value if available",
                "change_yoy": "percentage change YoY",
                "source_line": "exact line from text where found"
              }
            }
            
            If a metric cannot be found, use null for its value and "not found" for source_line.
            Ensure the output is valid JSON with no additional text or explanations.
            """
        )
        
        self.analysis_prompt = PromptTemplate(
            input_variables=["company_name", "report_date", "report_type", "financial_data"],
            template="""
            You are a financial analyst assistant with expertise in earnings reports.
            Analyze the following quarterly results and provide a step-by-step analysis.
            
            COMPANY INFO:
            {company_name}, {report_date}, {report_type}
            
            FINANCIAL DATA:
            {financial_data}
            
            INSTRUCTIONS:
            1. First, identify all key financial metrics and their YoY changes.
            2. Then, analyze revenue drivers and any significant segments.
            3. Next, examine profit margins and cost trends.
            4. Assess the balance sheet and cash flow highlights.
            5. Identify forward guidance or management outlook statements.
            6. Finally, conclude with a summary of the company's performance.
            
            For each step, explain your analysis process and reasoning.
            Provide specific numbers and percentages when discussing changes.
            """
        )
        
        # Create chains
        self.metrics_chain = LLMChain(llm=self.llm, prompt=self.metrics_prompt)
        self.analysis_chain = LLMChain(llm=self.llm, prompt=self.analysis_prompt)
        
    def extract_metrics(self, report_section: str) -> Dict[str, Any]:
        """Extract financial metrics from a report section"""
        try:
            # Get raw response from LLM
            response = self.metrics_chain.run(report_section=report_section)
            
            # Parse and validate the response
            return self._validate_json_response(response)
            
        except Exception as e:
            print(f"Error extracting metrics: {e}")
            return {"error": str(e)}
    
    def analyze_financial_data(
        self, 
        company_name: str, 
        report_date: str, 
        report_type: str, 
        financial_data: str
    ) -> str:
        """Generate comprehensive financial analysis"""
        try:
            analysis = self.analysis_chain.run(
                company_name=company_name,
                report_date=report_date,
                report_type=report_type,
                financial_data=financial_data
            )
            return analysis
            
        except Exception as e:
            print(f"Error generating analysis: {e}")
            return f"Analysis error: {str(e)}"
    
    def _validate_json_response(self, response: str) -> Dict[str, Any]:
        """Validate and clean JSON response from LLM"""
        try:
            # Clean the response (remove markdown code blocks if present)
            clean_response = response.strip()
            if clean_response.startswith("json"):
                clean_response = clean_response[7:-3].strip()
            elif clean_response.startswith(""):
                clean_response = clean_response[3:-3].strip()
                
            # Parse JSON
            parsed = json.loads(clean_response)
            return parsed
            
        except json.JSONDecodeError as e:
            print(f"JSON decode error: {e}")
            print(f"Problem response: {response}")
            # Return empty dict with error info
            return {"error": "Failed to parse response as JSON"}
        }`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="example-cost-optimization">
        <h3>Cost & Performance Optimization</h3>
        
        <div className="optimization-strategies">
          <div className="strategy">
            <h4>Prompt Engineering Optimization</h4>
            <ul>
              <li><strong>Token Reduction:</strong> Restructure prompts to minimize token usage</li>
              <li><strong>Context Compression:</strong> Summarize inputs before sending to expensive models</li>
              <li><strong>Model Cascading:</strong> Use smaller models for initial processing, larger models for refinement</li>
            </ul>
          </div>
          
          <div className="strategy">
            <h4>Caching Strategy</h4>
            <ul>
              <li><strong>Response Caching:</strong> Cache identical requests to avoid duplicate API calls</li>
              <li><strong>Embeddings Reuse:</strong> Store and reuse document embeddings</li>
              <li><strong>Semantic Deduplication:</strong> Detect and remove semantically similar content</li>
            </ul>
          </div>
          
          <div className="strategy">
            <h4>Fine-tuning Benefits</h4>
            <ul>
              <li><strong>Specific Tasks:</strong> Fine-tune specialized models for repeated tasks</li>
              <li><strong>Lower Latency:</strong> Smaller fine-tuned models can be faster than large general models</li>
              <li><strong>Cost Reduction:</strong> 50-90% cost reduction for specific financial tasks</li>
            </ul>
          </div>
          
          <div className="strategy">
            <h4>Hybrid Approach</h4>
            <ul>
              <li><strong>Rule-Based Pre-processing:</strong> Use rules for extracting structured data where possible</li>
              <li><strong>Retrieval-Augmented Generation:</strong> Use vector search to reduce context size</li>
              <li><strong>Local + Cloud Models:</strong> Deploy smaller models locally, use cloud for complex tasks</li>
            </ul>
          </div>
        </div>
        
        <div className="cost-comparison">
          <h4>Cost Analysis (Estimated)</h4>
          <table className="cost-table">
            <thead>
              <tr>
                <th>Approach</th>
                <th>Processing Cost (per document)</th>
                <th>Processing Time</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Naive Implementation</td>
                <td>$1.20 - $1.50</td>
                <td>45-60 seconds</td>
                <td>85-90%</td>
              </tr>
              <tr>
                <td>Optimized Prompts</td>
                <td>$0.60 - $0.80</td>
                <td>30-45 seconds</td>
                <td>88-92%</td>
              </tr>
              <tr>
                <td>Model Cascading</td>
                <td>$0.30 - $0.50</td>
                <td>35-50 seconds</td>
                <td>86-90%</td>
              </tr>
              <tr>
                <td>Hybrid + Fine-tuned</td>
                <td>$0.15 - $0.30</td>
                <td>20-30 seconds</td>
                <td>90-95%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="example-conclusion">
        <h3>Key Learnings & Best Practices</h3>
        
        <div className="best-practices">
          <div className="practice">
            <h4>LLM Application Architecture</h4>
            <ul>
              <li>Design for robustness against model quirks and failures</li>
              <li>Implement proper validation and error handling for LLM outputs</li>
              <li>Consider multi-step processing for complex tasks</li>
              <li>Separate document processing from analysis for better modularity</li>
            </ul>
          </div>
          
          <div className="practice">
            <h4>Enterprise Considerations</h4>
            <ul>
              <li>Implement proper security measures for sensitive financial data</li>
              <li>Track and monitor API costs and usage patterns</li>
              <li>Establish clear usage guidelines and access controls</li>
              <li>Create fallback mechanisms for API outages or rate limiting</li>
            </ul>
          </div>
          
          <div className="practice">
            <h4>Domain-Specific Adaptations</h4>
            <ul>
              <li>Enhance prompts with financial domain knowledge</li>
              <li>Create specialized tools for financial metric extraction</li>
              <li>Consider fine-tuning for financial terminology and formats</li>
              <li>Build custom evaluation metrics for financial analysis quality</li>
            </ul>
          </div>
        </div>
        
        <div className="next-steps-cta">
          <h4>Ready to Build Your Own Professional LLM Application?</h4>
          <div className="cta-buttons">
            <a href="#" className="cta-button primary">Download Project Template</a>
            <a href="#" className="cta-button secondary">Explore More Case Studies</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalExample;
