import React, { useState } from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

interface CompanyInfo {
  name: string;
  description: string;
  sector: string;
  industry: string;
  employees: number;
  founded: string;
  headquarters: string;
}

interface StockMetrics {
  marketCap: string;
  peRatio: number;
  dividend: string;
  volume: string;
  weekHigh: string;
  weekLow: string;
}

const MarketMindAI: React.FC = () => {
  const category: BlogCategory = 'Agents';
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCode, setShowCode] = useState<'server' | 'agents' | 'prompts'>('server');
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);

  const tableOfContents = [
    { id: 'demo', title: 'Interactive Demo' },
    { id: 'implementation', title: 'Multi-Agent Implementation' },
    { id: 'features', title: 'Key Features' },
    { id: 'next', title: 'Next Steps' }
  ];

  // Mock data for demonstration
  const mockCompanyData = {
    'Apple': {
      info: {
        name: 'Apple Inc.',
        description: 'Technology company that designs, manufactures, and markets smartphones, computers, tablets, wearables, and accessories.',
        sector: 'Technology',
        industry: 'Consumer Electronics',
        employees: 164000,
        founded: '1976',
        headquarters: 'Cupertino, California'
      },
      metrics: {
        marketCap: '$2.8T',
        peRatio: 28.5,
        dividend: '0.5%',
        volume: '85.4M',
        weekHigh: '$182.34',
        weekLow: '$124.17'
      }
    }
  };

  const codeExamples = {
    server: `// Multi-Agent Market Analysis System
class MarketMindServer {
  private companyAgent: OpenAI;
  private stockAgent: OpenAI;

  constructor() {
    // Initialize specialized agents
    this.companyAgent = new OpenAI({
      model: "gpt-4",
      temperature: 0.7,
      max_tokens: 1000
    });

    this.stockAgent = new OpenAI({
      model: "gpt-4",
      temperature: 0.3,
      max_tokens: 1000
    });
  }

  async analyzeCompany(companyName: string) {
    // Get company overview
    const companyInfo = await this.companyAgent.chat.completions.create({
      messages: [
        { role: "system", content: this.getCompanyAgentPrompt() },
        { role: "user", content: \`Analyze company: \${companyName}\` }
      ],
      response_format: { type: "json_object" }
    });

    // Get stock analysis
    const stockAnalysis = await this.stockAgent.chat.completions.create({
      messages: [
        { role: "system", content: this.getStockAgentPrompt() },
        { role: "user", content: \`Analyze stock metrics for: \${companyName}\` }
      ],
      response_format: { type: "json_object" }
    });

    return {
      company: JSON.parse(companyInfo.choices[0].message.content),
      stock: JSON.parse(stockAnalysis.choices[0].message.content)
    };
  }
}`,

    agents: `// Specialized Agent Implementations
class CompanyAnalysisAgent {
  private agent: OpenAI;
  
  constructor() {
    this.agent = new OpenAI({
      model: "gpt-4",
      temperature: 0.7
    });
  }

  async analyzeCompany(name: string) {
    const response = await this.agent.chat.completions.create({
      messages: [
        {
          role: "system",
          content: \`You are a company analysis expert.
Focus on:
1. Business model
2. Market position
3. Industry trends
4. Company strengths\`
        },
        { role: "user", content: \`Analyze: \${name}\` }
      ]
    });
    return response;
  }
}

class StockAnalysisAgent {
  private agent: OpenAI;
  
  constructor() {
    this.agent = new OpenAI({
      model: "gpt-4",
      temperature: 0.3
    });
  }

  async analyzeStock(symbol: string) {
    const response = await this.agent.chat.completions.create({
      messages: [
        {
          role: "system",
          content: \`You are a stock analysis expert.
Focus on:
1. Financial metrics
2. Market performance
3. Risk factors
4. Investment outlook\`
        },
        { role: "user", content: \`Analyze: \${symbol}\` }
      ]
    });
    return response;
  }
}`,

    prompts: `// Agent-Specific Prompts
const MarketMindPrompts = {
  companyAnalysis: \`You are a company analysis expert.
Analyze the following aspects:
1. Business Overview
   - Core products/services
   - Market position
   - Competitive advantages

2. Industry Analysis
   - Market trends
   - Competition
   - Growth opportunities

3. Company Profile
   - History and background
   - Management team
   - Corporate strategy

Provide response as JSON:
{
  "overview": {
    "business": string,
    "industry": string,
    "position": string
  },
  "analysis": {
    "strengths": string[],
    "opportunities": string[],
    "risks": string[]
  },
  "metrics": {
    "marketShare": string,
    "growth": string,
    "outlook": string
  }
}\`,

  stockAnalysis: \`You are a stock market expert.
Analyze the following metrics:
1. Financial Performance
   - Key ratios
   - Growth metrics
   - Profitability

2. Market Performance
   - Price trends
   - Volume analysis
   - Technical indicators

3. Risk Assessment
   - Market risks
   - Company risks
   - Industry risks

Provide response as JSON:
{
  "metrics": {
    "fundamental": object,
    "technical": object,
    "ratios": object
  },
  "analysis": {
    "trend": string,
    "strength": string,
    "risks": string[]
  },
  "recommendation": {
    "outlook": string,
    "confidence": number
  }
}\`
};`
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call with timeout
      setTimeout(() => {
        const company = mockCompanyData['Apple'];
        setResults(company);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to analyze company. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <BlogTemplate
      title="MarketMind AI - Multi-Agent Stock Analysis System"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="demo" title="Interactive Demo">
        <p>
          Experience our advanced multi-agent system for comprehensive company
          and stock market analysis, powered by specialized AI agents.
        </p>

        <div className="demo-container">
          <form onSubmit={handleSubmit} className="input-form">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter company name (e.g., Apple, Microsoft, Tesla)"
              className="search-input"
            />
            <button type="submit" disabled={isLoading || !userInput.trim()}>
              {isLoading ? 'Analyzing...' : 'Analyze'}
            </button>
          </form>

          {isLoading && (
            <div className="info-box">
              <p>MarketMind agents are analyzing the company...</p>
            </div>
          )}

          {error && (
            <div className="warning-box">
              {error}
            </div>
          )}

          {results && (
            <div className="content-grid">
              <div className="content-card">
                <h3>{results.info.name}</h3>
                <p>{results.info.description}</p>
                
                <div className="data-table">
                  <div>
                    <span>Sector:</span>
                    <span>{results.info.sector}</span>
                  </div>
                  <div>
                    <span>Industry:</span>
                    <span>{results.info.industry}</span>
                  </div>
                  <div>
                    <span>Employees:</span>
                    <span>{results.info.employees.toLocaleString()}</span>
                  </div>
                  <div>
                    <span>Founded:</span>
                    <span>{results.info.founded}</span>
                  </div>
                </div>
              </div>

              <div className="content-card">
                <h3>Stock Metrics</h3>
                <div className="data-table">
                  <div>
                    <span>Market Cap:</span>
                    <span>{results.metrics.marketCap}</span>
                  </div>
                  <div>
                    <span>P/E Ratio:</span>
                    <span>{results.metrics.peRatio}</span>
                  </div>
                  <div>
                    <span>Dividend Yield:</span>
                    <span>{results.metrics.dividend}</span>
                  </div>
                  <div>
                    <span>Volume:</span>
                    <span>{results.metrics.volume}</span>
                  </div>
                  <div>
                    <span>52W High:</span>
                    <span>{results.metrics.weekHigh}</span>
                  </div>
                  <div>
                    <span>52W Low:</span>
                    <span>{results.metrics.weekLow}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </BlogSection>

      <BlogSection id="implementation" title="Multi-Agent Implementation">
        <p>
          Explore the technical implementation of our multi-agent system,
          featuring specialized agents for company and stock analysis.
        </p>

        <div className="button-group">
          <button
            className={`tag ${showCode === 'server' ? 'active' : ''}`}
            onClick={() => setShowCode('server')}
          >
            Server
          </button>
          <button
            className={`tag ${showCode === 'agents' ? 'active' : ''}`}
            onClick={() => setShowCode('agents')}
          >
            Agents
          </button>
          <button
            className={`tag ${showCode === 'prompts' ? 'active' : ''}`}
            onClick={() => setShowCode('prompts')}
          >
            Prompts
          </button>
        </div>

        <div className="code-block">
          <pre>{codeExamples[showCode]}</pre>
        </div>
      </BlogSection>

      <BlogSection id="features" title="Key Features">
        <div className="content-grid">
          <div className="content-card">
            <h3>Company Analysis Agent</h3>
            <ul>
              <li>Business model analysis</li>
              <li>Industry position evaluation</li>
              <li>Growth potential assessment</li>
              <li>Competitive analysis</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Stock Analysis Agent</h3>
            <ul>
              <li>Financial metrics analysis</li>
              <li>Market performance tracking</li>
              <li>Risk assessment</li>
              <li>Investment insights</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Implementation Benefits</h3>
            <ul>
              <li>Specialized agent expertise</li>
              <li>Comprehensive analysis</li>
              <li>Real-time insights</li>
              <li>Structured data output</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="next" title="Next Steps">
        <div className="content-grid">
          <div className="content-card">
            <h3>Future Enhancements</h3>
            <ul>
              <li>Integration with real-time market data APIs</li>
              <li>Advanced technical analysis capabilities</li>
              <li>Portfolio optimization recommendations</li>
              <li>Sentiment analysis from news and social media</li>
              <li>Custom alerts and monitoring</li>
              <li>Machine learning-based predictions</li>
            </ul>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default MarketMindAI;