import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const BackendLLMIntegration: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'java-integration', title: 'Java Integration' },
    { id: 'python-integration', title: 'Python Integration' },
    { id: 'nodejs-integration', title: 'Node.js Integration' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'performance', title: 'Performance Considerations' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'LLM Integration';

  const javaSpringExample = `@Service
public class LLMService {
    private final OpenAiService openAiService;
    private final ModelConfig modelConfig;

    @Autowired
    public LLMService(
        OpenAiService openAiService,
        @Value("\${llm.model}") String model,
        @Value("\${llm.temperature}") double temperature
    ) {
        this.openAiService = openAiService;
        this.modelConfig = new ModelConfig(model, temperature);
    }

    public CompletableFuture<String> generateResponse(String prompt) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                ChatCompletionRequest request = ChatCompletionRequest.builder()
                    .model(modelConfig.getModel())
                    .messages(List.of(new Message("user", prompt)))
                    .temperature(modelConfig.getTemperature())
                    .build();

                return openAiService.createChatCompletion(request)
                    .getChoices().get(0).getMessage().getContent();
            } catch (Exception e) {
                throw new LLMProcessingException("Error generating response", e);
            }
        });
    }

    @Retryable(
        value = { OpenAiException.class },
        maxAttempts = 3,
        backoff = @Backoff(delay = 1000)
    )
    public String generateResponseWithRetry(String prompt) {
        // Implementation with retry logic
    }
}

@RestController
@RequestMapping("/api/llm")
public class LLMController {
    private final LLMService llmService;

    @PostMapping("/generate")
    public ResponseEntity<CompletableFuture<String>> generateResponse(
        @RequestBody PromptRequest request
    ) {
        return ResponseEntity.ok(llmService.generateResponse(request.getPrompt()));
    }
}`;

  const pythonFastAPIExample = `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import openai
from tenacity import retry, stop_after_attempt, wait_exponential

app = FastAPI()

class LLMConfig:
    def __init__(self, model: str, temperature: float):
        self.model = model
        self.temperature = temperature

class LLMService:
    def __init__(self, api_key: str, config: LLMConfig):
        openai.api_key = api_key
        self.config = config

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=4, max=10)
    )
    async def generate_response(self, prompt: str) -> str:
        try:
            response = await openai.ChatCompletion.acreate(
                model=self.config.model,
                messages=[{"role": "user", "content": prompt}],
                temperature=self.config.temperature
            )
            return response.choices[0].message.content
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"LLM processing error: {str(e)}"
            )

class PromptRequest(BaseModel):
    prompt: str
    options: Optional[dict] = None

@app.post("/api/llm/generate")
async def generate_response(request: PromptRequest):
    llm_service = LLMService(
        api_key="your-api-key",
        config=LLMConfig(model="gpt-3.5-turbo", temperature=0.7)
    )
    return {"response": await llm_service.generate_response(request.prompt)}`;

  const nodejsExample = `import express from 'express';
import { OpenAI } from 'openai';
import { rateLimit } from 'express-rate-limit';
import { z } from 'zod';

// Request validation schema
const promptSchema = z.object({
  prompt: z.string().min(1).max(4000),
  options: z.object({
    temperature: z.number().min(0).max(2).optional(),
    model: z.string().optional()
  }).optional()
});

class LLMService {
  private openai: OpenAI;
  private defaultConfig: {
    model: string;
    temperature: number;
  };

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey });
    this.defaultConfig = {
      model: 'gpt-3.5-turbo',
      temperature: 0.7
    };
  }

  async generateResponse(prompt: string, options = {}) {
    const config = { ...this.defaultConfig, ...options };

    try {
      const response = await this.openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        ...config
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('LLM Error:', error);
      throw new Error('Failed to generate response');
    }
  }
}

const app = express();
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const llmService = new LLMService(process.env.OPENAI_API_KEY!);

app.post('/api/llm/generate', limiter, async (req, res) => {
  try {
    const { prompt, options } = promptSchema.parse(req.body);
    const response = await llmService.generateResponse(prompt, options);
    res.json({ response });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: 'Invalid request format' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});`;

  const errorHandlingExample = `// TypeScript/Node.js Error Handling
class LLMError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public context?: any
  ) {
    super(message);
    this.name = 'LLMError';
  }
}

async function handleLLMRequest(prompt: string) {
  try {
    // Validate input
    if (!prompt.trim()) {
      throw new LLMError('Empty prompt', 400);
    }

    // Rate limiting check
    await checkRateLimit();

    // Token count validation
    if (getTokenCount(prompt) > MAX_TOKENS) {
      throw new LLMError('Prompt too long', 400);
    }

    const response = await llmService.generateResponse(prompt);
    return response;

  } catch (error) {
    if (error instanceof OpenAIError) {
      if (error.code === 'rate_limit_exceeded') {
        throw new LLMError('Rate limit exceeded', 429);
      }
      // Handle other OpenAI specific errors
    }
    throw error;
  }
}`;

  return (
    <BlogTemplate
      title="LLM Integration in Backend Systems: Java, Python, and Node.js"
      date="April 15, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Integrating Large Language Models (LLMs) into backend systems requires
          careful consideration of language-specific patterns, error handling,
          and performance optimizations. This guide explores implementation
          approaches in Java, Python, and Node.js.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Language-specific integration patterns</li>
            <li>Error handling and retry strategies</li>
            <li>Performance optimization techniques</li>
            <li>Best practices for each ecosystem</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="java-integration" title="Java Integration">
        <p>
          Java integration typically involves Spring Boot for RESTful services
          and CompletableFuture for asynchronous operations.
        </p>

        <CodeExample
          language="java"
          code={javaSpringExample}
          title="Java Spring Boot Integration"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Java Integration Features">
          <ul>
            <li>Asynchronous processing with CompletableFuture</li>
            <li>Spring retry mechanism for failures</li>
            <li>Dependency injection for configuration</li>
            <li>Type-safe request/response handling</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="python-integration" title="Python Integration">
        <p>
          Python offers elegant integration options using FastAPI and
          async/await patterns.
        </p>

        <CodeExample
          language="python"
          code={pythonFastAPIExample}
          title="Python FastAPI Integration"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Python Integration Features">
          <ul>
            <li>Async/await for non-blocking operations</li>
            <li>Pydantic for request validation</li>
            <li>Automatic API documentation</li>
            <li>Built-in type hints</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="nodejs-integration" title="Node.js Integration">
        <p>
          Node.js provides a robust ecosystem for LLM integration with strong
          async support and TypeScript capabilities.
        </p>

        <CodeExample
          language="typescript"
          code={nodejsExample}
          title="Node.js Express Integration"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Node.js Integration Features">
          <ul>
            <li>TypeScript for type safety</li>
            <li>Express middleware for request handling</li>
            <li>Rate limiting support</li>
            <li>Zod for runtime validation</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <InfoBox type="tip" title="Implementation Guidelines">
          <ul>
            <li>Use asynchronous patterns when possible</li>
            <li>Implement proper request validation</li>
            <li>Add rate limiting and quotas</li>
            <li>Cache responses when appropriate</li>
            <li>Monitor API usage and costs</li>
            <li>Implement proper logging</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="error-handling" title="Error Handling">
        <p>
          Robust error handling is crucial for LLM integrations:
        </p>

        <CodeExample
          language="typescript"
          code={errorHandlingExample}
          title="Error Handling Example"
          showLineNumbers={true}
        />

        <InfoBox type="warning" title="Common Error Scenarios">
          <ul>
            <li>Rate limiting errors</li>
            <li>Token limit exceeded</li>
            <li>Network timeouts</li>
            <li>Invalid input formats</li>
            <li>Model-specific errors</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="performance" title="Performance Considerations">
        <h3>Optimization Strategies</h3>
        <ul>
          <li>Use connection pooling</li>
          <li>Implement request batching</li>
          <li>Cache frequently used responses</li>
          <li>Monitor and optimize token usage</li>
        </ul>

        <InfoBox type="tip" title="Performance Tips">
          <ul>
            <li>Use streaming for long responses</li>
            <li>Implement proper timeout handling</li>
            <li>Consider load balancing for high traffic</li>
            <li>Monitor and adjust resource allocation</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          To further enhance your LLM backend integration:
        </p>

        <div className="resource-links">
          <Link to="/blogs/llm-integration/event-driven" className="resource-link">
            Event-Driven LLM Architecture →
          </Link>
          <Link to="/blogs/llm-integration/chain-comparison" className="resource-link">
            Prompt vs Function Chaining →
          </Link>
          <Link to="/blogs/advanced/rag-tutorial" className="resource-link">
            RAG Implementation Guide →
          </Link>
        </div>

        <InfoBox type="success" title="Continue Learning">
          <p>
            Explore language-specific optimizations and advanced patterns as you
            build more sophisticated LLM integrations. Consider implementing
            monitoring and observability solutions for production deployments.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default BackendLLMIntegration;