import React, { useState } from 'react';
import '../../styles/MarketMind.css';

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
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCode, setShowCode] = useState<'server' | 'agents' | 'prompts' | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const [results, setResults] = useState<any>(null);

  return (
    <div className="agent-container">
      <section className="header-section">
        <h1>MarketMind AI</h1>
        <p className="subtitle">Multi-Agent System for Company & Stock Analysis</p>
      </section>

      <section className="demo-section">
        <h2>Try the Demo</h2>
        <form onSubmit={handleSubmit} className="search-form">
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
          <div className="loading-message">
            <p>MarketMind agents are analyzing the company...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {results && (
          <div className="results-container">
            <div className="company-card">
              <h3>{results.info.name}</h3>
              <p className="description">{results.info.description}</p>
              
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Sector</span>
                  <span className="value">{results.info.sector}</span>
                </div>
                <div className="info-item">
                  <span className="label">Industry</span>
                  <span className="value">{results.info.industry}</span>
                </div>
                <div className="info-item">
                  <span className="label">Employees</span>
                  <span className="value">{results.info.employees.toLocaleString()}</span>
                </div>
                <div className="info-item">
                  <span className="label">Founded</span>
                  <span className="value">{results.info.founded}</span>
                </div>
              </div>
            </div>

            <div className="metrics-card">
              <h3>Stock Metrics</h3>
              <div className="metrics-grid">
                <div className="metric-item">
                  <span className="label">Market Cap</span>
                  <span className="value">{results.metrics.marketCap}</span>
                </div>
                <div className="metric-item">
                  <span className="label">P/E Ratio</span>
                  <span className="value">{results.metrics.peRatio}</span>
                </div>
                <div className="metric-item">
                  <span className="label">Dividend Yield</span>
                  <span className="value">{results.metrics.dividend}</span>
                </div>
                <div className="metric-item">
                  <span className="label">Volume</span>
                  <span className="value">{results.metrics.volume}</span>
                </div>
                <div className="metric-item">
                  <span className="label">52W High</span>
                  <span className="value">{results.metrics.weekHigh}</span>
                </div>
                <div className="metric-item">
                  <span className="label">52W Low</span>
                  <span className="value">{results.metrics.weekLow}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="implementation-section">
        <h2>Multi-Agent Implementation</h2>
        <div className="code-nav">
          <button
            className={`nav-button ${showCode === 'server' ? 'active' : ''}`}
            onClick={() => setShowCode('server')}
          >
            Server Implementation
          </button>
          <button
            className={`nav-button ${showCode === 'agents' ? 'active' : ''}`}
            onClick={() => setShowCode('agents')}
          >
            Specialized Agents
          </button>
          <button
            className={`nav-button ${showCode === 'prompts' ? 'active' : ''}`}
            onClick={() => setShowCode('prompts')}
          >
            Agent Prompts
          </button>
        </div>

        <div className="code-section">
          {showCode ? (
            <pre className="code-example">
              <code>{codeExamples[showCode]}</code>
            </pre>
          ) : (
            <p className="code-prompt">Select a section above to view the implementation</p>
          )}
        </div>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Company Analysis Agent</h3>
            <ul>
              <li>Business model analysis</li>
              <li>Industry position evaluation</li>
              <li>Growth potential assessment</li>
              <li>Competitive analysis</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Stock Analysis Agent</h3>
            <ul>
              <li>Financial metrics analysis</li>
              <li>Market performance tracking</li>
              <li>Risk assessment</li>
              <li>Investment insights</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Implementation Benefits</h3>
            <ul>
              <li>Specialized agent expertise</li>
              <li>Comprehensive analysis</li>
              <li>Real-time insights</li>
              <li>Structured data output</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketMindAI;