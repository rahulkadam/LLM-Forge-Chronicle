import React, { useState } from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection } from '../../../components/blogs/BlogComponents';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-base-style.css';
import '../../../styles/blogs/blog-content.css';
import '../../../styles/blogs/blog-layout-update.css';

interface Book {
  title: string;
  author: string;
  description: string;
  genre?: string;
  reason: string;
  topics?: string[];
  keyIdeas?: string[];
  confidence?: number;
}

type CodeExampleType = 'openai' | 'rag' | 'combined' | 'prompts';

const BookBuddy: React.FC = () => {
  const category: BlogCategory = 'Agents';
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCode, setShowCode] = useState<CodeExampleType>('rag');

  const tableOfContents = [
    { id: 'demo', title: 'Interactive Demo' },
    { id: 'implementation', title: 'Implementation Guide' },
    { id: 'practices', title: 'Best Practices' },
    { id: 'next', title: 'Next Steps' }
  ];

  // Mock database for demonstration
  const mockBookDatabase: { [key: string]: Book[] } = {
    'psychology': [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        description: "Explores the two systems that drive the way we think",
        genre: "Psychology",
        reason: "Perfect for understanding decision-making and cognitive biases",
        topics: ["decision making", "cognitive psychology", "behavioral economics"],
        keyIdeas: [
          "Two systems of thinking: fast and slow",
          "Common cognitive biases and their effects",
          "How to make better decisions"
        ],
        confidence: 0.95
      }
    ],
    'productivity': [
      {
        title: "Deep Work",
        author: "Cal Newport",
        description: "Rules for focused success in a distracted world",
        genre: "Productivity",
        reason: "Helps develop concentrated work habits in a distracted world",
        topics: ["focus", "productivity", "attention management"],
        keyIdeas: [
          "Deep work is increasingly rare and valuable",
          "Structure your day for focused work",
          "Eliminate distractions systematically"
        ],
        confidence: 0.9
      }
    ]
  };

  const codeExamples: Record<CodeExampleType, string> = {
    openai: `// OpenAI Integration Example
async function getRecommendations(query: string, books: Book[]) {
  const systemPrompt = "You are an expert librarian and book recommendation agent. " +
    "Your task is to recommend books based on the user's query and retrieved information. " +
    "Consider:\\n" +
    "1. User's interests and preferences\\n" +
    "2. RAG system relevance scores\\n" +
    "3. Book's key ideas and topics\\n" +
    "4. User's implied reading level";

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: createUserPrompt(query, books) }
    ],
    temperature: 0.7,
    response_format: { type: "json_object" }
  });

  return processResponse(response);
}`,

    rag: `// RAG Implementation Example
function retrieveRelevantBooks(query: string, books: Book[]) {
  const searchTerms = query.toLowerCase().split(" ");
  
  return books.map(book => ({
    ...book,
    relevanceScore: calculateRelevanceScore(searchTerms, book)
  }))
  .sort((a, b) => b.relevanceScore - a.relevanceScore)
  .slice(0, 3);
}

function calculateRelevanceScore(terms: string[], book: Book): number {
  let score = 0;
  
  // Match topics
  terms.forEach(term => {
    if (book.topics?.some(t => t.includes(term))) score += 2;
    if (book.keyIdeas?.some(i => i.toLowerCase().includes(term))) score += 1;
  });
  
  return score;
}`,

    combined: `// Combined RAG + LLM Implementation
async function getBookRecommendations(query: string) {
  // 1. Retrieve relevant books using RAG
  const relevantBooks = retrieveRelevantBooks(query, bookDatabase);

  // 2. Generate LLM prompt with retrieved context
  const prompt = createPromptWithContext(query, relevantBooks);

  // 3. Get enhanced recommendations from LLM
  const llmResponse = await getRecommendations(prompt);

  // 4. Process and format the final recommendations
  return processRecommendations(llmResponse, relevantBooks);
}`,

    prompts: `// Prompt Engineering Example
const systemPrompt = \`You are an expert librarian.
Recommend books based on:
1. User's query
2. Retrieved book information
3. Relevance scores

Format response as JSON:
{
  "recommendations": [
    {
      "title": string,
      "author": string,
      "reason": string,
      "confidence": number
    }
  ]
}\`;

function createUserPrompt(query: string, books: Book[]) {
  return \`Query: \${JSON.stringify(query)}

Available Books:
\${books.map(b => \`
- \${b.title} by \${b.author}
  Topics: \${b.topics?.join(", ")}
  Key Ideas: \${b.keyIdeas?.join("; ")}
  Relevance: \${b.relevanceScore}
\`).join("\\n")}

Provide recommendations based on query and book information.\`;
}`
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      setTimeout(() => {
        const results = Object.values(mockBookDatabase)
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
      title="BookBuddy - RAG + LLM Book Recommendations"
      date="April 12, 2025"
      readTime="15 min"
      category={category}
      tableOfContents={tableOfContents}
    >
      <BlogSection id="demo" title="Interactive Demo">
        <p>
          Try our comprehensive book recommendation system that combines RAG
          (Retrieval Augmented Generation) with OpenAI's GPT models for
          intelligent book suggestions.
        </p>

        <div className="demo-container">
          <form onSubmit={handleSubmit} className="input-form">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe what kind of books you're interested in... (e.g., 'I want to learn about psychology and decision making')"
              rows={4}
            />
            <button type="submit" disabled={isLoading || !userInput.trim()}>
              {isLoading ? 'Finding Books...' : 'Get Recommendations'}
            </button>
          </form>

          {isLoading && (
            <div className="info-box">
              <p>BookBuddy is analyzing your preferences...</p>
            </div>
          )}

          {error && (
            <div className="warning-box">
              {error}
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="content-grid">
              {recommendations.map((book, index) => (
                <div key={index} className="content-card">
                  <h3>{book.title}</h3>
                  <p>by {book.author}</p>
                  <p>{book.description}</p>
                  {book.genre && <p>Genre: {book.genre}</p>}
                  
                  {book.topics && (
                    <div className="tag-group">
                      {book.topics.map((topic, i) => (
                        <span key={i} className="tag">{topic}</span>
                      ))}
                    </div>
                  )}
                  
                  {book.keyIdeas && (
                    <>
                      <h4>Key Ideas:</h4>
                      <ul>
                        {book.keyIdeas.map((idea, i) => (
                          <li key={i}>{idea}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <p>{book.reason}</p>
                  {book.confidence && (
                    <p>Confidence: {(book.confidence * 100).toFixed(0)}%</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </BlogSection>

      <BlogSection id="implementation" title="Implementation Guide">
        <p>
          Explore the key components of BookBuddy's implementation, from RAG system
          to OpenAI integration and prompt engineering.
        </p>
        
        <div className="button-group">
          <button 
            className={`tag ${showCode === 'rag' ? 'active' : ''}`}
            onClick={() => setShowCode('rag')}
          >
            RAG System
          </button>
          <button 
            className={`tag ${showCode === 'openai' ? 'active' : ''}`}
            onClick={() => setShowCode('openai')}
          >
            OpenAI
          </button>
          <button 
            className={`tag ${showCode === 'combined' ? 'active' : ''}`}
            onClick={() => setShowCode('combined')}
          >
            Combined
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
            <h3>RAG Best Practices</h3>
            <ul>
              <li>Maintain structured knowledge base</li>
              <li>Implement semantic search</li>
              <li>Use vector embeddings</li>
              <li>Cache search results</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>LLM Integration</h3>
            <ul>
              <li>Use clear system prompts</li>
              <li>Structure user prompts</li>
              <li>Validate LLM responses</li>
              <li>Handle API errors</li>
            </ul>
          </div>

          <div className="content-card">
            <h3>Response Handling</h3>
            <ul>
              <li>Validate JSON responses</li>
              <li>Include confidence scores</li>
              <li>Provide clear explanations</li>
              <li>Handle edge cases</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="next" title="Next Steps">
        <div className="content-grid">
          <div className="content-card">
            <h3>Future Enhancements</h3>
            <ul>
              <li>Integrate with real book databases (Google Books, OpenLibrary)</li>
              <li>Implement vector database for better semantic search</li>
              <li>Add user feedback and rating system</li>
              <li>Include collaborative filtering</li>
              <li>Support multiple languages</li>
              <li>Add book previews and purchase links</li>
            </ul>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default BookBuddy;