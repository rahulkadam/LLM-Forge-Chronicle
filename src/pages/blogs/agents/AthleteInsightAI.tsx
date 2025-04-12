import React, { useState } from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';


// Types
interface Player {
  name: string;
  sport: string;
  position: string;
  description: string;
  achievements: string[];
  stats: Record<string, string | number>;
  matchStyle: string;
  recommendation: string;
  confidence: number;
}

type CodeExampleType = 'server' | 'distributed' | 'monitoring' | 'prompts';

const AthleteInsightAI: React.FC = () => {
  const category: BlogCategory = 'Agents';
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<CodeExampleType>('server');

  const tableOfContents = [
    { id: 'demo', title: 'Interactive Demo' },
    { id: 'theory', title: 'MCP Server Theory' },
    { id: 'workflow', title: 'MCP Workflow' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'practices', title: 'Best Practices' },
    { id: 'next', title: 'Next Steps' }
  ];

  // Mock database
  const mockPlayerDatabase: { [key: string]: Player[] } = {
    'cricket': [{
      name: "Virat Kohli",
      sport: "Cricket",
      position: "Batsman",
      description: "Aggressive right-handed batsman known for chase mastery",
      achievements: [
        "Most runs in T20I cricket",
        "Fastest to 12,000 ODI runs",
        "ICC Cricketer of the Year"
      ],
      stats: {
        matches: 492,
        average: 53.62,
        centuries: 75,
        strikeRate: 93.62
      },
      matchStyle: "Aggressive, technically sound, strong mental game",
      recommendation: "Perfect for studying chase batting and high-pressure performance",
      confidence: 0.95
    }],
    'football': [{
      name: "Lionel Messi",
      sport: "Football",
      position: "Forward",
      description: "Legendary playmaker with exceptional dribbling skills",
      achievements: [
        "FIFA World Cup Winner 2022",
        "7 Ballon d'Or awards",
        "Most goals in La Liga history"
      ],
      stats: {
        matches: 853,
        goals: 672,
        assists: 303,
        dribbleSuccess: "62%"
      },
      matchStyle: "Creative playmaker, excellent ball control, precise passing",
      recommendation: "Ideal for learning dribbling techniques and playmaking",
      confidence: 0.98
    }]
  };

  // Code examples
  const codeExamples: Record<CodeExampleType, string> = {
    server: `// Model Context Protocol (MCP) Server
class MCPServer {
  private contextStore: Map<string, string>;
  private readonly MAX_CONTEXT_SIZE = 4096;

  constructor() {
    this.contextStore = new Map();
  }

  async processQuery(query: string, contextId?: string) {
    const context = this.getContext(contextId);
    const messages = [
      {
        role: "system",
        content: "You are a sports analysis expert."
      },
      { role: "user", content: context },
      { role: "user", content: query }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      response_format: { type: "json_object" }
    });

    this.updateContext(contextId, query, response.choices[0].message.content);
    return response;
  }
}`,
    distributed: `// Distributed MCP Implementation
class DistributedMCP {
  private servers: Map<string, MCPServer>;
  private contextRoutingTable: Map<string, string>;

  constructor() {
    this.servers = new Map();
    this.contextRoutingTable = new Map();
  }

  async processQuery(query: string, contextId?: string) {
    const serverId = this.getServerId(contextId);
    const server = this.getOrCreateServer(serverId);
    return await server.processQuery(query, contextId);
  }
}`,
    monitoring: `// MCP Performance Monitoring
class MCPMonitor {
  private metrics: {
    requestCount: number;
    avgResponseTime: number;
    contextSize: number;
    errorRate: number;
  };

  async trackRequest(server: MCPServer, query: string) {
    const start = Date.now();
    try {
      const result = await server.processQuery(query);
      this.updateMetrics({
        responseTime: Date.now() - start,
        success: true,
        contextSize: query.length
      });
      return result;
    } catch (error) {
      this.updateMetrics({
        responseTime: Date.now() - start,
        success: false,
        error
      });
      throw error;
    }
  }
}`,
    prompts: `// MCP Prompt Templates
const MCPPrompts = {
  systemPrompt: \`You are a sports analysis expert.
Analyze players based on:
1. Playing style and techniques
2. Performance statistics
3. Match situations\`,

  createContextPrompt: (context: string, query: string) => {
    return \`Previous Analysis Context:
\${context}

Current Query: \${query}\`;
  }
}`
  };

  // Event handlers
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      setTimeout(() => {
        const results = Object.values(mockPlayerDatabase)
          .flat()
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
        setRecommendations(results);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to get recommendations. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <BlogTemplate
      title="AthleteInsightAI - MCP-Powered Sports Analysis"
      date="April 12, 2025"
      readTime="20 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="demo" title="Interactive Demo">
        <p className="tutorial-description">
          Try our advanced sports analysis system using Model Context Protocol (MCP)
          for intelligent athlete evaluation and performance insights.
        </p>

        <div className="demo-container">
          <form onSubmit={handleSubmit} className="input-form">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe the player style (e.g., 'aggressive batsman who performs well in chases')"
              rows={4}
            />
            <button type="submit" disabled={isLoading || !userInput.trim()}>
              {isLoading ? 'Analyzing...' : 'Get Insights'}
            </button>
          </form>

          {isLoading && (
            <div className="info-box">
              <p>Analyzing athlete database using MCP...</p>
            </div>
          )}

          {error && (
            <div className="warning-box">
              {error}
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="content-grid">
              {recommendations.map((player, index) => (
                <div key={index} className="content-card">
                  <h3>{player.name}</h3>
                  <p>{player.position} - {player.sport}</p>
                  <p>{player.description}</p>
                  
                  <h4>Key Achievements:</h4>
                  <ul>
                    {player.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>

                  <h4>Statistics:</h4>
                  <div className="data-table">
                    {Object.entries(player.stats).map(([key, value]) => (
                      <div key={key}>
                        <span>{key}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>

                  <p><strong>Playing Style:</strong> {player.matchStyle}</p>
                  <p>{player.recommendation}</p>
                  <p>Match Confidence: {(player.confidence * 100).toFixed(0)}%</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </BlogSection>

      <BlogSection id="theory" title="MCP Server Theory">
        <div className="content-grid">
          <div className="content-card">
            <h3>What is MCP Server?</h3>
            <p>
              A Model Context Protocol server manages stateful interactions with language models
              by maintaining conversation context and handling model interactions through a
              standardized protocol.
            </p>
          </div>

          <div className="content-card">
            <h3>Key Features</h3>
            <ul>
              <li>Maintains conversation state</li>
              <li>Handles context management</li>
              <li>Provides consistent API</li>
              <li>Optimizes interactions</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="workflow" title="MCP Workflow">
        <div className="content-grid">
          <div className="content-card">
            <h3>1. Context Initialization</h3>
            <ul>
              <li>Performance data loading</li>
              <li>Historical analysis patterns</li>
              <li>Sport-specific metrics</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>2. Query Processing</h3>
            <ul>
              <li>Context retrieval</li>
              <li>Data selection</li>
              <li>Query enhancement</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>3. Response Generation</h3>
            <ul>
              <li>Context analysis</li>
              <li>Domain knowledge application</li>
              <li>Insight formatting</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="implementation" title="MCP Implementation">
        <div className="button-group">
          <button 
            className={`tag ${showCode === 'server' ? 'active' : ''}`}
            onClick={() => setShowCode('server')}
          >
            MCP Server
          </button>
          <button 
            className={`tag ${showCode === 'distributed' ? 'active' : ''}`}
            onClick={() => setShowCode('distributed')}
          >
            Distributed
          </button>
          <button 
            className={`tag ${showCode === 'monitoring' ? 'active' : ''}`}
            onClick={() => setShowCode('monitoring')}
          >
            Monitor
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

      <BlogSection id="practices" title="Best Practices">
        <div className="content-grid">
          <div className="content-card">
            <h3>Context Management</h3>
            <ul>
              <li>Maintain conversation state</li>
              <li>Handle context expiration</li>
              <li>Optimize context size</li>
              <li>Implement pruning</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Server Configuration</h3>
            <ul>
              <li>Configure timeouts</li>
              <li>Set up error handling</li>
              <li>Implement retries</li>
              <li>Monitor health</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Performance</h3>
            <ul>
              <li>Track response times</li>
              <li>Monitor error rates</li>
              <li>Optimize prompts</li>
              <li>Implement caching</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="next" title="Next Steps">
        <div className="content-grid">
          <div className="content-card">
            <h3>Future Enhancements</h3>
            <ul>
              <li>Implement persistent storage</li>
              <li>Add real-time monitoring</li>
              <li>Enhance error handling</li>
              <li>Optimize prompts</li>
              <li>Add analytics</li>
              <li>Implement feedback</li>
            </ul>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default AthleteInsightAI;