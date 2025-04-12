import React, { useState } from 'react';
import '../../styles/agents/athlete-insight.css';

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
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<CodeExampleType | null>('server');

  // Mock database with player examples
  const mockPlayerDatabase: { [key: string]: Player[] } = {
    'cricket': [
      {
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
      }
    ],
    'football': [
      {
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
      }
    ]
  };

  // Code examples showing MCP implementation
  const codeExamples: Record<CodeExampleType, string> = {
    server: `// Model Context Protocol (MCP) Server Implementation
class MCPServer {
  private contextStore: Map<string, string>;
  private readonly MAX_CONTEXT_SIZE = 4096;

  constructor() {
    this.contextStore = new Map();
  }

  async processQuery(query: string, contextId?: string) {
    // 1. Get or create context
    const context = this.getContext(contextId);

    // 2. Create messages with context
    const messages = [
      {
        role: "system",
        content: "You are a sports analysis expert. Analyze players based on: " +
                "1. Playing style and techniques " +
                "2. Performance statistics " +
                "3. Match situations"
      },
      { role: "user", content: context },
      { role: "user", content: query }
    ];

    // 3. Get model response
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      response_format: { type: "json_object" }
    });

    // 4. Update context with new information
    this.updateContext(contextId, query, response.choices[0].message.content);

    return response;
  }

  private getContext(contextId?: string): string {
    return this.contextStore.get(contextId || "default") || "";
  }

  private updateContext(contextId: string, query: string, response: string) {
    const currentContext = this.getContext(contextId);
    const newContext = this.pruneContext(\`
      Previous Context: \${currentContext}
      Latest Query: \${query}
      Latest Response: \${response}
    \`);
    this.contextStore.set(contextId || "default", newContext);
  }

  private pruneContext(context: string): string {
    // Keep context size manageable
    if (context.length > this.MAX_CONTEXT_SIZE) {
      return context.slice(-this.MAX_CONTEXT_SIZE);
    }
    return context;
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
    // 1. Get or create server for this context
    const serverId = this.getServerId(contextId);
    const server = this.getOrCreateServer(serverId);

    // 2. Process query with context awareness
    const result = await server.processQuery(query, contextId);

    // 3. Update routing information
    this.updateRouting(contextId, serverId);

    return result;
  }

  private getServerId(contextId?: string): string {
    if (contextId && this.contextRoutingTable.has(contextId)) {
      return this.contextRoutingTable.get(contextId)!;
    }
    return this.selectOptimalServer();
  }

  private selectOptimalServer(): string {
    // Load balancing logic here
    return "server_" + Math.floor(Math.random() * 3);
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
      // Track request metrics
      const result = await server.processQuery(query);
      
      // Update success metrics
      this.updateMetrics({
        responseTime: Date.now() - start,
        success: true,
        contextSize: query.length
      });

      return result;
    } catch (error) {
      // Update error metrics
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
3. Match situations
4. Historical achievements

Provide responses as JSON with:
{
  "analysis": {
    "player": string,
    "style": string,
    "stats": object,
    "insights": string[]
  },
  "recommendations": string[],
  "confidence": number
}\`,

  createContextPrompt: (context: string, query: string) => {
    return \`Previous Analysis Context:
\${context}

Current Query: \${query}

Analyze the player considering the previous context and current query.\`;
  }
}`
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      setTimeout(() => {
        const results = Object.values(mockPlayerDatabase)
          .flat()
          .sort(() => Math.random() - 0.5)
          .slice(0, 3);
        setRecommendations(results);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to get player recommendations. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="agent-tutorial-container">
      <section className="tutorial-header">
        <h1>AthleteInsightAI - MCP-Powered Sports Analysis</h1>
        <p className="tutorial-description">
          An advanced sports analysis system using Model Context Protocol (MCP)
          for intelligent athlete evaluation and performance insights.
        </p>
      </section>

      <section className="demo-section">
        <h2>Try the Demo</h2>
        <div className="demo-container">
          <form onSubmit={handleSubmit} className="input-form">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe the player style or scenario you're interested in... (e.g., 'aggressive batsman who performs well in chases' or 'creative midfielder with good dribbling skills')"
              rows={4}
            />
            <button type="submit" disabled={isLoading || !userInput.trim()}>
              {isLoading ? 'Analyzing...' : 'Get Insights'}
            </button>
          </form>

          {isLoading && (
            <div className="loading">
              <p>Analyzing athlete database using MCP...</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="recommendations">
              <h3>Recommended Athletes:</h3>
              <div className="recommendations-grid">
                {recommendations.map((player, index) => (
                  <div key={index} className="player-card">
                    <h4>{player.name}</h4>
                    <p className="position">{player.position} - {player.sport}</p>
                    <p className="description">{player.description}</p>
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {player.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="stats">
                      <h5>Statistics:</h5>
                      <div className="stats-grid">
                        {Object.entries(player.stats).map(([key, value]) => (
                          <div key={key} className="stat-item">
                            <span className="stat-label">{key}:</span>
                            <span className="stat-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="match-style"><strong>Playing Style:</strong> {player.matchStyle}</p>
                    <p className="recommendation">{player.recommendation}</p>
                    <p className="confidence">Match Confidence: {(player.confidence * 100).toFixed(0)}%</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="theory-section">
        <h2>Model Context Protocol (MCP) Server</h2>
        
        <div className="theory-grid">
          <div className="theory-card">
            <h3>What is MCP Server?</h3>
            <p>
              A Model Context Protocol server manages stateful interactions with language models
              by maintaining conversation context and handling model interactions through a
              standardized protocol. It acts as an intermediate layer between your application
              and the LLM API.
            </p>
          </div>

          <div className="theory-card">
            <h3>Key Features</h3>
            <div className="key-points">
              <ul>
                <li>Maintains conversation state between requests</li>
                <li>Handles context management automatically</li>
                <li>Provides consistent API interface</li>
                <li>Optimizes model interactions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mcp-workflow">
          <h3>How MCP Server Works</h3>
          <div className="workflow-steps">
            <div className="workflow-step">
              <h4>1. Request Processing</h4>
              <p>
                - Receives client request
                - Retrieves relevant context
                - Prepares model inputs
              </p>
            </div>
            <div className="workflow-step">
              <h4>2. Model Interaction</h4>
              <p>
                - Sends formatted request to LLM
                - Handles API communication
                - Processes model response
              </p>
            </div>
            <div className="workflow-step">
              <h4>3. Context Management</h4>
              <p>
                - Updates conversation state
                - Maintains context history
                - Handles memory cleanup
              </p>
            </div>
          </div>
        </div>
      </section>



        <div className="mcp-workflow">
          <h3>MCP Workflow in AthleteInsightAI</h3>
          <div className="workflow-steps1">
            <div className="workflow-step1">
              <h4>1. Context Initialization</h4>
              <p>
                When a new analysis session starts, MCP initializes a context store with:
                - Player performance data
                - Historical analysis patterns
                - Sport-specific metrics
              </p>
            </div>
            <div className="workflow-step1">
              <h4>2. Query Processing</h4>
              <p>
                Each user query triggers:
                - Context retrieval
                - Relevant data selection
                - Query enhancement with context
              </p>
            </div>
            <div className="workflow-step1">
              <h4>3. Response Generation</h4>
              <p>
                The LLM generates responses by:
                - Analyzing context and query
                - Applying sports domain knowledge
                - Formatting structured insights
              </p>
            </div>
            <div className="workflow-step1">
              <h4>4. Context Update</h4>
              <p>
                After each interaction:
                - New insights are stored
                - Context is pruned if needed
                - Relevance scores are updated
              </p>
            </div>
          </div>
        </div>


      <section className="implementation-section">
        <h2>MCP Implementation</h2>
        
        <div className="implementation-nav">
          <button 
            className={`nav-button ${showCode === 'server' ? 'active' : ''}`}
            onClick={() => setShowCode('server')}
          >
            MCP Server
          </button>
          <button 
            className={`nav-button ${showCode === 'distributed' ? 'active' : ''}`}
            onClick={() => setShowCode('distributed')}
          >
            Distributed MCP
          </button>
          <button 
            className={`nav-button ${showCode === 'monitoring' ? 'active' : ''}`}
            onClick={() => setShowCode('monitoring')}
          >
            Performance Monitor
          </button>
          <button 
            className={`nav-button ${showCode === 'prompts' ? 'active' : ''}`}
            onClick={() => setShowCode('prompts')}
          >
            MCP Prompts
          </button>
        </div>

        <div className="code-section">
          {showCode ? (
            <pre className="code-example">
              {codeExamples[showCode]}
            </pre>
          ) : (
            <p className="code-prompt">Select a section above to view the implementation details.</p>
          )}
        </div>

        <div className="implementation-notes">
          <h3>Key MCP Features</h3>
          <ul>
            <li><strong>Context Management:</strong> Efficient handling of conversation context</li>
            <li><strong>Stateful Processing:</strong> Maintains conversation state across requests</li>
            <li><strong>Performance Monitoring:</strong> Tracks metrics and optimizes performance</li>
            <li><strong>Distributed Capability:</strong> Supports multiple server instances</li>
          </ul>
        </div>
      </section>

      <section className="best-practices-section">
        <h2>MCP Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>Context Management</h3>
            <ul>
              <li>Maintain conversation state</li>
              <li>Handle context expiration</li>
              <li>Optimize context size</li>
              <li>Implement context pruning</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>Server Configuration</h3>
            <ul>
              <li>Configure timeout settings</li>
              <li>Set up error handling</li>
              <li>Implement retry logic</li>
              <li>Monitor server health</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>Performance</h3>
            <ul>
              <li>Track response times</li>
              <li>Monitor error rates</li>
              <li>Optimize prompts</li>
              <li>Implement caching</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>Reliability</h3>
            <ul>
              <li>Handle API failures</li>
              <li>Implement logging</li>
              <li>Monitor usage metrics</li>
              <li>Backup critical data</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="further-learning-section">
        <h2>Next Steps</h2>
        <ul>
          <li>Implement persistent storage</li>
          <li>Add real-time monitoring</li>
          <li>Enhance error handling</li>
          <li>Optimize prompt engineering</li>
          <li>Add performance analytics</li>
          <li>Implement user feedback</li>
        </ul>
      </section>
    </div>
  );
};

export default AthleteInsightAI;