import React, { useState } from 'react';
import '../../styles/SportPlayer.css';

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

const SportPlayer: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<CodeExampleType | null>(null);

  // Code examples showing MCP implementation
  const codeExamples: Record<CodeExampleType, string> = {
    server: `// Model Context Protocol (MCP) Server
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

  // Rest of the component remains the same...
  
  return (
    <div className="agent-tutorial-container">
      <section className="tutorial-header">
        <h1>SportPlayer - MCP-Powered Sports Analysis</h1>
        <p className="tutorial-description">
          A high-performance sports analysis system using Model Context Protocol (MCP)
          for intelligent player recommendations with context awareness.
        </p>
      </section>

      {/* Rest of the JSX remains the same... */}
    </div>
  );
};

export default SportPlayer;