import React from 'react';
import { Link } from 'react-router-dom';
import "../../../../styles/blogs/blog-base-style.css";
import BlogTemplate from '../../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../../components/blogs/BlogComponents';
import CodeExample from '../../../../components/blogs/CodeExample';
import type { BlogCategory } from '../../../../data/blogData';

const VertexAIGenAI: React.FC = () => {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'setup', title: 'Setup & Configuration' },
    { id: 'text-generation', title: 'Text Generation' },
    { id: 'image-generation', title: 'Image Generation' },
    { id: 'chat-models', title: 'Chat Models' },
    { id: 'embeddings', title: 'Embeddings' },
    { id: 'error-handling', title: 'Error Handling' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'next-steps', title: 'Next Steps' }
  ];

  const category: BlogCategory = 'LLM Integration';

  const setupExample = `// Java SDK Setup
import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.generativeai.GenerativeModel;

public class VertexAIService {
    private final VertexAI vertexAI;
    private final String project;
    private final String location;

    public VertexAIService(String projectId, String location) {
        this.project = projectId;
        this.location = location;
        this.vertexAI = new VertexAI(project, location);
    }

    // Model initialization
    private GenerativeModel initializeModel(String modelName) {
        return new GenerativeModel(modelName, vertexAI);
    }
}`;

  const textGenerationExample = `// Text Generation Example
public class TextGenerator {
    private final GenerativeModel textModel;

    public TextGenerator(VertexAI vertexAI) {
        this.textModel = new GenerativeModel("text-bison", vertexAI);
    }

    public String generateText(String prompt) {
        TextGenerationResponse response = textModel.generateText(prompt);
        return response.getText();
    }

    // Streaming response
    public void generateTextStream(String prompt, Consumer<String> callback) {
        StreamingTextGenerationResponse response = 
            textModel.generateTextStream(prompt);
        
        response.stream().forEach(chunk -> {
            callback.accept(chunk.getText());
        });
    }
}`;

  const imageGenerationExample = `// Image Generation Example
public class ImageGenerator {
    private final GenerativeModel imageModel;

    public ImageGenerator(VertexAI vertexAI) {
        this.imageModel = new GenerativeModel("imagegeneration", vertexAI);
    }

    public List<GeneratedImage> generateImages(
        String prompt,
        int numImages
    ) {
        GenerateImagesResponse response = imageModel.generateImages(
            GenerateImagesRequest.builder()
                .setPrompt(prompt)
                .setNumberOfImages(numImages)
                .build()
        );
        return response.getImages();
    }

    // Save generated images
    private void saveImage(GeneratedImage image, String path) {
        try (FileOutputStream fos = new FileOutputStream(path)) {
            fos.write(image.getBytes());
        } catch (IOException e) {
            throw new RuntimeException("Failed to save image", e);
        }
    }
}`;

  const chatModelExample = `// Chat Model Implementation
public class ChatService {
    private final GenerativeModel chatModel;
    private ChatSession session;

    public ChatService(VertexAI vertexAI) {
        this.chatModel = new GenerativeModel("chat-bison", vertexAI);
        this.session = chatModel.startChat();
    }

    public String sendMessage(String message) {
        ChatResponse response = session.sendMessage(message);
        return response.getCandidates(0).getContent();
    }

    // With context and parameters
    public String sendMessageWithContext(
        String message,
        String context,
        Map<String, Object> parameters
    ) {
        ChatRequest request = ChatRequest.builder()
            .setMessage(message)
            .setContext(context)
            .setParameters(parameters)
            .build();

        ChatResponse response = session.sendMessage(request);
        return response.getCandidates(0).getContent();
    }

    public void resetChat() {
        this.session = chatModel.startChat();
    }
}`;

  const embeddingsExample = `// Embeddings Implementation
public class EmbeddingService {
    private final GenerativeModel embeddingModel;

    public EmbeddingService(VertexAI vertexAI) {
        this.embeddingModel = new GenerativeModel(
            "textembedding-gecko", 
            vertexAI
        );
    }

    public List<Float> getEmbeddings(String text) {
        EmbeddingResponse response = embeddingModel.embedText(text);
        return response.getEmbedding(0).getValues();
    }

    // Batch embeddings
    public List<List<Float>> batchEmbeddings(List<String> texts) {
        BatchEmbeddingResponse response = 
            embeddingModel.batchEmbedText(texts);
        
        return response.getEmbeddings().stream()
            .map(embedding -> embedding.getValues())
            .collect(Collectors.toList());
    }
}`;

  const errorHandlingExample = `// Error Handling Example
public class VertexAIErrorHandler {
    private static final int MAX_RETRIES = 3;
    private static final long INITIAL_BACKOFF = 1000; // 1 second

    public static <T> T withRetry(
        Supplier<T> operation,
        String operationName
    ) {
        int attempts = 0;
        while (attempts < MAX_RETRIES) {
            try {
                return operation.get();
            } catch (VertexAIException e) {
                attempts++;
                if (attempts == MAX_RETRIES) {
                    throw new VertexAIException(
                        "Failed " + operationName + 
                        " after " + MAX_RETRIES + " attempts",
                        e
                    );
                }
                
                long backoff = INITIAL_BACKOFF * (long) Math.pow(2, attempts - 1);
                try {
                    Thread.sleep(backoff);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new VertexAIException(
                        "Operation interrupted", 
                        ie
                    );
                }
            }
        }
        throw new IllegalStateException("Unreachable code");
    }
}

// Usage example
public String generateTextSafely(String prompt) {
    return VertexAIErrorHandler.withRetry(
        () -> generateText(prompt),
        "text generation"
    );
}`;

  return (
    <BlogTemplate
      title="Google Vertex AI GenAI SDK Integration Guide"
      date="April 15, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Google's Vertex AI GenAI SDK provides a powerful and flexible way to
          integrate generative AI capabilities into your applications. This guide
          explores how to effectively use the SDK for text generation, image
          generation, chat models, and embeddings.
        </p>

        <InfoBox type="tip" title="What You'll Learn">
          <ul>
            <li>Setting up Vertex AI GenAI SDK</li>
            <li>Implementing text and image generation</li>
            <li>Working with chat models</li>
            <li>Generating embeddings</li>
            <li>Error handling and best practices</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="setup" title="Setup & Configuration">
        <p>
          To get started with the Vertex AI GenAI SDK, you'll need to set up your
          environment and initialize the SDK:
        </p>

        <CodeExample
          language="java"
          code={setupExample}
          title="Vertex AI Setup"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Prerequisites">
          <ul>
            <li>Google Cloud Project</li>
            <li>Vertex AI API enabled</li>
            <li>Authentication configured</li>
            <li>Java 8 or later</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="text-generation" title="Text Generation">
        <p>
          The SDK provides powerful text generation capabilities through various
          models:
        </p>

        <CodeExample
          language="java"
          code={textGenerationExample}
          title="Text Generation Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Text Generation Features">
          <ul>
            <li>Synchronous and streaming responses</li>
            <li>Multiple model options</li>
            <li>Configurable parameters</li>
            <li>Context control</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="image-generation" title="Image Generation">
        <p>
          Generate images using Vertex AI's image generation models:
        </p>

        <CodeExample
          language="java"
          code={imageGenerationExample}
          title="Image Generation Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Image Generation Features">
          <ul>
            <li>Multiple image generation</li>
            <li>Quality control parameters</li>
            <li>Image size options</li>
            <li>Format selection</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="chat-models" title="Chat Models">
        <p>
          Implement conversational AI using Vertex AI's chat models:
        </p>

        <CodeExample
          language="java"
          code={chatModelExample}
          title="Chat Model Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="tip" title="Chat Features">
          <ul>
            <li>Session management</li>
            <li>Context preservation</li>
            <li>Parameter customization</li>
            <li>Multiple response candidates</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="embeddings" title="Embeddings">
        <p>
          Generate and work with text embeddings:
        </p>

        <CodeExample
          language="java"
          code={embeddingsExample}
          title="Embeddings Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="note" title="Embedding Features">
          <ul>
            <li>Single and batch processing</li>
            <li>Multiple embedding models</li>
            <li>Dimension control</li>
            <li>Efficient processing</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="error-handling" title="Error Handling">
        <p>
          Implement robust error handling for Vertex AI operations:
        </p>

        <CodeExample
          language="java"
          code={errorHandlingExample}
          title="Error Handling Implementation"
          showLineNumbers={true}
        />

        <InfoBox type="warning" title="Error Handling Considerations">
          <ul>
            <li>Implement retry mechanisms</li>
            <li>Handle rate limiting</li>
            <li>Manage timeouts</li>
            <li>Log errors properly</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <InfoBox type="tip" title="Implementation Guidelines">
          <ul>
            <li>Use appropriate model versions</li>
            <li>Implement proper error handling</li>
            <li>Monitor API usage and costs</li>
            <li>Cache responses when appropriate</li>
            <li>Implement proper logging</li>
            <li>Handle rate limits gracefully</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="next-steps" title="Next Steps">
        <p>
          To further enhance your Vertex AI integration:
        </p>

        <div className="resource-links">
          <Link to="/blogs/llm-integration/external-apis" className="resource-link">
            External APIs Integration Guide →
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
            Explore more advanced features of Vertex AI and consider implementing
            monitoring and observability solutions for production deployments.
            Keep up with the latest model updates and features in the Vertex AI
            ecosystem.
          </p>
        </InfoBox>
      </BlogSection>
    </BlogTemplate>
  );
};

export default VertexAIGenAI;