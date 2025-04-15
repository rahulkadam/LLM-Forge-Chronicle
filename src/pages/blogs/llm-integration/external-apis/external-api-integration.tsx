import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const ExternalAPIIntegration: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'api-integration-basics', title: 'API Integration Basics' },
    { id: 'tool-integration', title: 'Tool Integration' },
    { id: 'authentication', title: 'Authentication & Security' },
    { id: 'implementation', title: 'Implementation Examples' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'LLM Integration';

  const weatherAPIExample = `interface WeatherTool {
  getWeather(location: string): Promise<WeatherData>;
}

class LLMWithTools {
  private llm: OpenAI;
  private weatherTool: WeatherTool;

  constructor(tools: { weather: WeatherTool }) {
    this.llm = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    this.weatherTool = tools.weather;
  }

  async processQuery(query: string) {
    // Check if weather information is needed
    if (query.toLowerCase().includes('weather')) {
      try {
        // Extract location from query using LLM
        const location = await this.extractLocation(query);
        // Get weather data
        const weatherData = await this.weatherTool.getWeather(location);
        // Generate response using weather data
        return this.generateWeatherResponse(query, weatherData);
      } catch (error) {
        console.error('Weather API Error:', error);
        return this.handleError(error);
      }
    }

    // Process normal query
    return this.llm.complete(query);
  }

  private async extractLocation(query: string): Promise<string> {
    const response = await this.llm.chat.completions.create({
      messages: [{
        role: 'user',
        content: \`Extract location from: "\${query}". Reply with just the location name.\`
      }],
      model: 'gpt-3.5-turbo'
    });
    return response.choices[0].message.content;
  }
}`;

  const calendarIntegrationExample = `class CalendarIntegration {
  private calendar: GoogleCalendar;
  private llm: OpenAI;

  constructor() {
    this.calendar = new GoogleCalendar(config);
    this.llm = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async processSchedulingRequest(request: string) {
    // Extract meeting details using LLM
    const meetingDetails = await this.extractMeetingDetails(request);
    
    // Check calendar availability
    const availability = await this.calendar.checkAvailability(
      meetingDetails.startTime,
      meetingDetails.endTime
    );

    if (!availability.isAvailable) {
      // Get alternative times
      const alternatives = await this.calendar.findAlternativeTimes(
        meetingDetails.duration
      );
      
      // Use LLM to format response with alternatives
      return this.formatAlternativeResponse(alternatives);
    }

    // Schedule the meeting
    await this.calendar.createEvent(meetingDetails);
    return this.formatConfirmationResponse(meetingDetails);
  }

  private async extractMeetingDetails(request: string) {
    const response = await this.llm.chat.completions.create({
      messages: [{
        role: 'user',
        content: \`Extract meeting details from: "\${request}".
                  Format as JSON with: title, startTime, endTime, attendees\`
      }],
      model: 'gpt-3.5-turbo'
    });
    return JSON.parse(response.choices[0].message.content);
  }
}`;

  const emailToolExample = `class EmailIntegration {
  private emailClient: EmailClient;
  private llm: OpenAI;
  private templates: Map<string, string>;

  constructor() {
    this.emailClient = new EmailClient(config);
    this.llm = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    this.templates = this.loadTemplates();
  }

  async generateAndSendEmail(request: {
    type: string;
    recipient: string;
    context: any;
  }) {
    // Get base template
    const template = this.templates.get(request.type);
    
    // Generate customized content
    const content = await this.generateEmailContent(
      template,
      request.context
    );

    // Review content with LLM
    const reviewedContent = await this.reviewContent(content);

    // Send email
    await this.emailClient.send({
      to: request.recipient,
      subject: reviewedContent.subject,
      body: reviewedContent.body
    });
  }

  private async reviewContent(content: string) {
    const response = await this.llm.chat.completions.create({
      messages: [{
        role: 'user',
        content: \`Review this email content for professionalism and clarity:
                  \${content}
                  Make necessary improvements while maintaining the message.\`
      }],
      model: 'gpt-3.5-turbo'
    });
    return response.choices[0].message.content;
  }
}`;

  const errorHandlingExample = `class APIErrorHandler {
  static async withRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3
  ): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error;
        
        if (!this.isRetryable(error)) {
          throw error;
        }

        const delay = this.calculateBackoff(attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }

    throw lastError;
  }

  private static isRetryable(error: any): boolean {
    return error.status === 429 || // Rate limit
           error.status === 503 || // Service unavailable
           error.code === 'ECONNRESET';
  }

  private static calculateBackoff(attempt: number): number {
    return Math.min(1000 * Math.pow(2, attempt - 1), 10000);
  }
}

// Usage example
class WeatherAPI {
  async getWeather(location: string) {
    return APIErrorHandler.withRetry(async () => {
      const response = await fetch(\`/api/weather/\${location}\`);
      if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
      return response.json();
    });
  }
}`;

  return (
    <BlogTemplate
      title="Connecting LLMs with External APIs & Tools"
      date="April 15, 2025"
      readTime="12 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Integrating LLMs with external APIs and tools can significantly enhance
          their capabilities, enabling them to interact with real-world data and
          services. This guide explores patterns and best practices for
          connecting LLMs with various external systems.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>API integration patterns</li>
            <li>Tool integration strategies</li>
            <li>Authentication and security</li>
            <li>Error handling best practices</li>
            <li>Real-world implementation examples</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="api-integration-basics" title="API Integration Basics">
        <p>
          When integrating LLMs with external APIs, it's important to establish
          clear patterns for data flow and error handling. Here's an example
          with a weather API integration:
        </p>

        <CodeExample
          language="typescript"
          code={weatherAPIExample}
          title="Weather API Integration"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Key Integration Points">
          <ul>
            <li>Clear separation of concerns</li>
            <li>Type-safe API interfaces</li>
            <li>Error boundary definition</li>
            <li>Response handling patterns</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="tool-integration" title="Tool Integration">
        <h3>Calendar Integration Example</h3>
        <p>
          Tools like calendar systems require careful handling of both LLM
          interactions and API calls:
        </p>

        <CodeExample
          language="typescript"
          code={calendarIntegrationExample}
          title="Calendar Integration"
          showLineNumbers={true}
        />

        <h3>Email Integration Example</h3>
        <CodeExample
          language="typescript"
          code={emailToolExample}
          title="Email Integration"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Tool Integration Tips">
          <ul>
            <li>Use typed interfaces for tool interactions</li>
            <li>Implement proper error handling</li>
            <li>Consider rate limiting</li>
            <li>Cache results when appropriate</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="authentication" title="Authentication & Security">
        <h3>Security Considerations</h3>
        <ul>
          <li>Use environment variables for API keys</li>
          <li>Implement proper token management</li>
          <li>Handle OAuth flows securely</li>
          <li>Validate and sanitize inputs</li>
        </ul>

        <InfoBox type="warning" title="Security Best Practices">
          <ul>
            <li>Never expose API keys in client-side code</li>
            <li>Implement proper access controls</li>
            <li>Use secure connection protocols</li>
            <li>Regular security audits</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="error-handling" title="Error Handling">
        <p>
          Robust error handling is crucial when working with multiple external
          services:
        </p>

        <CodeExample
          language="typescript"
          code={errorHandlingExample}
          title="API Error Handler"
          showLineNumbers={true}
        />

        <InfoBox type="warning" title="Error Handling Considerations">
          <ul>
            <li>Implement retry mechanisms</li>
            <li>Handle rate limiting gracefully</li>
            <li>Log errors properly</li>
            <li>Provide meaningful error messages</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <InfoBox type="tip" title="Implementation Guidelines">
          <ul>
            <li>Use typed interfaces for all external services</li>
            <li>Implement proper error boundaries</li>
            <li>Cache responses when appropriate</li>
            <li>Monitor API usage and costs</li>
            <li>Implement rate limiting</li>
            <li>Use proper logging</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          To further enhance your LLM integrations:
        </p>

        <div className="resource-links">
          <Link to="/blogs/llm-integration/event-driven" className="resource-link">
            Event-Driven Architecture Guide →
          </Link>
          <Link to="/blogs/llm-integration/backend-integration" className="resource-link">
            Backend Integration Guide →
          </Link>
          <Link to="/blogs/advanced/rag-tutorial" className="resource-link">
            RAG Implementation Guide →
          </Link>
        </div>

        <InfoBox type="success" title="Continue Learning">
          <p>
            Explore different integration patterns and tools to find the best
            fit for your use case. Consider implementing monitoring and
            observability solutions for production deployments.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default ExternalAPIIntegration;