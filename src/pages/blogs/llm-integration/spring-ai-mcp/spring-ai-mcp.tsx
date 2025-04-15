import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const SpringAIMCP: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-is-mcp', title: 'What is MCP?' },
    { id: 'spring-ai-integration', title: 'Spring AI Integration' },
    { id: 'implementation', title: 'Implementation Guide' },
    { id: 'deployment', title: 'Deployment Patterns' },
    { id: 'monitoring', title: 'Monitoring & Management' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'LLM Integration';

  const springAIConfigExample = `@Configuration
public class SpringAIConfig {
    @Bean
    public MistralChatClient mistralChatClient() {
        return new MistralChatClient("your-api-key");
    }

    @Bean
    public AnthropicChatClient anthropicChatClient() {
        return new AnthropicChatClient("your-api-key");
    }
}`;

  const mcpControllerExample = `@RestController
@RequestMapping("/api/ai")
public class MCPController {
    private final MultiChatModel multiChatModel;

    public MCPController(MultiChatModel multiChatModel) {
        this.multiChatModel = multiChatModel;
    }

    @PostMapping("/chat")
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        Prompt prompt = new Prompt(request.getMessage());
        return ResponseEntity.ok(
            new ChatResponse(multiChatModel.generate(prompt))
        );
    }
}`;

  const errorHandlingExample = `public class MCPErrorHandler {
    @ExceptionHandler(ModelNotAvailableException.class)
    public ResponseEntity<ErrorResponse> handleModelNotAvailable(
        ModelNotAvailableException ex
    ) {
        return ResponseEntity
            .status(HttpStatus.SERVICE_UNAVAILABLE)
            .body(new ErrorResponse("Model currently unavailable"));
    }

    @ExceptionHandler(QuotaExceededException.class)
    public ResponseEntity<ErrorResponse> handleQuotaExceeded(
        QuotaExceededException ex
    ) {
        return ResponseEntity
            .status(HttpStatus.TOO_MANY_REQUESTS)
            .body(new ErrorResponse("API quota exceeded"));
    }
}`;

  return (
    <BlogTemplate
      title="Spring AI MCP Server: Multi-LLM Management Made Easy"
      date="April 15, 2025"
      readTime="8 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Spring AI has recently announced support for Model Control Plane (MCP) server,
          a game-changing feature that simplifies the management and integration of
          multiple Large Language Models (LLMs) in Spring applications. This addition
          makes it easier than ever to build robust, production-ready AI applications
          with Spring Boot.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Understanding MCP and its benefits</li>
            <li>Integrating multiple LLMs in Spring applications</li>
            <li>Implementation patterns and best practices</li>
            <li>Deployment and monitoring strategies</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="what-is-mcp" title="What is MCP?">
        <p>
          Model Control Plane (MCP) is a server component that provides a unified
          interface for managing multiple LLM providers. It handles:
        </p>
        <ul>
          <li>Load balancing between different models</li>
          <li>Failover mechanisms</li>
          <li>API key management</li>
          <li>Usage tracking and quotas</li>
        </ul>

        <InfoBox type="note" title="Key Benefits">
          <ul>
            <li>Simplified model management</li>
            <li>Improved reliability through redundancy</li>
            <li>Centralized monitoring and logging</li>
            <li>Cost optimization capabilities</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="spring-ai-integration" title="Spring AI Integration">
        <p>
          Spring AI's MCP support comes with built-in integration for popular LLM
          providers including OpenAI, Anthropic, and Mistral. Here's how to set up
          the basic configuration:
        </p>

        <CodeExample
          language="java"
          code={springAIConfigExample}
          title="Spring AI Configuration"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Configuration Tips">
          <ul>
            <li>Store API keys in secure configuration</li>
            <li>Use Spring Cloud Config for dynamic updates</li>
            <li>Implement proper secret management</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="implementation" title="Implementation Guide">
        <p>
          Implementing MCP in your Spring application involves creating controllers
          that leverage the MultiChatModel interface:
        </p>

        <CodeExample
          language="java"
          code={mcpControllerExample}
          title="MCP Controller Implementation"
          showLineNumbers={true}
        />

        <h3>Error Handling</h3>
        <p>
          Proper error handling is crucial when working with multiple LLM providers:
        </p>

        <CodeExample
          language="java"
          code={errorHandlingExample}
          title="Error Handling Implementation"
          showLineNumbers={true}
        />
      </BlogSection>

      <BlogSection id="deployment" title="Deployment Patterns">
        <h3>Single Instance Deployment</h3>
        <p>
          For smaller applications, a single MCP server instance can handle multiple
          LLM providers effectively. This setup is suitable for:
        </p>
        <ul>
          <li>Development environments</li>
          <li>Small to medium workloads</li>
          <li>Testing and prototyping</li>
        </ul>

        <h3>Clustered Deployment</h3>
        <p>
          For production environments, consider a clustered deployment pattern:
        </p>
        <ul>
          <li>Multiple MCP instances behind a load balancer</li>
          <li>Shared configuration through Spring Cloud Config</li>
          <li>Centralized logging and monitoring</li>
        </ul>

        <InfoBox type="warning" title="Production Considerations">
          <ul>
            <li>Implement proper security measures</li>
            <li>Set up monitoring and alerting</li>
            <li>Configure appropriate scaling policies</li>
            <li>Plan for disaster recovery</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="monitoring" title="Monitoring & Management">
        <p>
          Spring AI MCP provides several monitoring endpoints and metrics:
        </p>
        <ul>
          <li>Model availability status</li>
          <li>Request/response latencies</li>
          <li>Error rates and types</li>
          <li>Token usage and costs</li>
        </ul>

        <InfoBox type="note" title="Monitoring Best Practices">
          <ul>
            <li>Set up dashboards for key metrics</li>
            <li>Configure alerts for critical thresholds</li>
            <li>Track costs across different providers</li>
            <li>Monitor API quota usage</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          To get started with Spring AI MCP:
        </p>
        <ul>
          <li>Set up a basic Spring Boot project</li>
          <li>Add Spring AI dependencies</li>
          <li>Configure your LLM providers</li>
          <li>Implement your first MCP controller</li>
        </ul>

        <div className="resource-links">
          <Link to="/blogs/llm-integration/openai-api" className="resource-link">
            OpenAI API Integration Guide →
          </Link>
          <Link to="/blogs/advance/rag-tutorial" className="resource-link">
            RAG Implementation Guide →
          </Link>
        </div>

        <InfoBox type="success" title="Keep Learning">
          <p>
            Spring AI's MCP support is continuously evolving. Stay updated with the
            latest features and best practices by following the Spring blog and
            documentation.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default SpringAIMCP;