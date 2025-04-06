import React, { useState } from 'react';
import '../../styles/BookBuddy.css';

// Mock API response type
interface Book {
  title: string;
  author: string;
  description: string;
  genre?: string;
  reason: string;
}

const BookBuddy: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [recommendations, setRecommendations] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock data to simulate LLM responses
  const mockBookDatabase: { [key: string]: Book[] } = {
    'fiction': [
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        description: "A lone astronaut must save humanity from extinction",
        genre: "Science Fiction",
        reason: "Perfect for readers who enjoy hard science fiction with problem-solving"
      },
      {
        title: "The Midnight Library",
        author: "Matt Haig",
        description: "A library between life and death contains books of alternate lives",
        genre: "Literary Fiction",
        reason: "Great for exploring philosophical questions about life choices"
      }
    ],
    'business': [
      {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        description: "Timeless lessons on wealth, greed, and happiness",
        genre: "Finance",
        reason: "Excellent for understanding behavioral aspects of finance"
      },
      {
        title: "Zero to One",
        author: "Peter Thiel",
        description: "Notes on startups, or how to build the future",
        genre: "Business",
        reason: "Essential reading for understanding innovation and startup thinking"
      }
    ],
    'productivity': [
      {
        title: "Deep Work",
        author: "Cal Newport",
        description: "Rules for focused success in a distracted world",
        genre: "Productivity",
        reason: "Helps develop concentrated work habits in a distracted world"
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        description: "An easy & proven way to build good habits & break bad ones",
        genre: "Self-Help",
        reason: "Perfect for developing better habits and personal systems"
      }
    ],
    'psychology': [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        description: "Understanding how we think and make decisions",
        genre: "Psychology",
        reason: "Comprehensive look at decision-making and cognitive biases"
      },
      {
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        description: "Brain, mind, and body in the healing of trauma",
        genre: "Psychology",
        reason: "Essential reading for understanding trauma and healing"
      }
    ]
  };

  const analyzeUserInput = (input: string): string[] => {
    const lowercaseInput = input.toLowerCase();
    const categories = [];
    
    if (lowercaseInput.includes('fiction') || lowercaseInput.includes('novel') || lowercaseInput.includes('story')) {
      categories.push('fiction');
    }
    if (lowercaseInput.includes('business') || lowercaseInput.includes('startup') || lowercaseInput.includes('finance')) {
      categories.push('business');
    }
    if (lowercaseInput.includes('productive') || lowercaseInput.includes('habit') || lowercaseInput.includes('focus')) {
      categories.push('productivity');
    }
    if (lowercaseInput.includes('psychology') || lowercaseInput.includes('mind') || lowercaseInput.includes('thinking')) {
      categories.push('psychology');
    }

    // If no specific category is found, include books from all categories
    if (categories.length === 0) {
      return ['fiction', 'business', 'productivity', 'psychology'];
    }

    return categories;
  };

  const getBookRecommendations = (input: string): Book[] => {
    const categories = analyzeUserInput(input);
    const recommendations: Book[] = [];

    // Get books from each relevant category
    categories.forEach(category => {
      if (mockBookDatabase[category]) {
        recommendations.push(...mockBookDatabase[category]);
      }
    });

    // Shuffle and return top 3 recommendations
    return recommendations
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      setTimeout(() => {
        const results = getBookRecommendations(userInput);
        setRecommendations(results);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError('Failed to get recommendations. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="agent-tutorial-container">
      {/* Tutorial Header Section */}
      <section className="tutorial-header">
        <h1>📚 BookBuddy - LLM-Powered Book Recommendations</h1>
        <p className="tutorial-description">
          An intelligent book recommendation system that demonstrates LLM integration,
          natural language processing, and response generation.
        </p>
      </section>

      {/* Overview Section */}
      <section className="tutorial-section">
        <h2>How It Works</h2>
        <p>
          BookBuddy uses natural language processing to understand your reading preferences
          and provides personalized book recommendations. Try it out with queries like:
        </p>
        <ul>
          <li>"I want to learn about psychology and decision making"</li>
          <li>"Looking for science fiction books with complex plots"</li>
          <li>"Need books about business and startups"</li>
          <li>"Interested in productivity and habit formation"</li>
        </ul>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <h2>Try It Out</h2>
        <div className="demo-container">
          <form onSubmit={handleSubmit} className="input-form">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Describe what kind of books you're interested in..."
              rows={4}
            />
            <button type="submit" disabled={isLoading || !userInput.trim()}>
              {isLoading ? 'Finding Books...' : 'Get Recommendations'}
            </button>
          </form>

          {isLoading && (
            <div className="loading">
              <p>BookBuddy is analyzing your preferences... 📚</p>
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="recommendations">
              <h3>Recommended Books for You:</h3>
              <div className="recommendations-grid">
                {recommendations.map((book, index) => (
                  <div key={index} className="recommendation-card">
                    <h4>{book.title}</h4>
                    <p className="author">by {book.author}</p>
                    <p className="description">{book.description}</p>
                    {book.genre && <p className="genre">Genre: {book.genre}</p>}
                    <p className="reason">{book.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="implementation-section">
        <h2>Implementation Guide</h2>
        
        <div className="subsection">
          <h3>1. Setting Up the LLM Integration</h3>
          <pre>{`
# Python implementation using OpenAI's API
from openai import AsyncOpenAI

class BookBuddyAgent:
    def __init__(self, api_key: str):
        self.client = AsyncOpenAI(api_key=api_key)
    
    async def get_recommendations(self, user_input: str):
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are an expert librarian..."},
                {"role": "user", "content": user_input}
            ],
            temperature=0.7
        )
        return self._process_response(response)
          `}</pre>
        </div>

        <div className="subsection">
          <h3>2. Prompt Engineering</h3>
          <pre>{`
const systemPrompt = \`As an expert librarian, recommend books that:
1. Match the user's interests and preferences
2. Consider reading level and complexity
3. Include a mix of popular and lesser-known titles
4. Provide clear reasoning for each recommendation

Format your response as a structured JSON object.\`
          `}</pre>
        </div>

        <div className="subsection">
          <h3>3. Response Processing</h3>
          <pre>{`
def _process_response(self, response: str) -> List[Book]:
    """Process and validate LLM response"""
    try:
        recommendations = json.loads(response)
        return [
            {
                'title': book['title'],
                'author': book['author'],
                'description': book['description'],
                'reason': book['reason']
            }
            for book in recommendations['books']
        ]
    except Exception as e:
        raise ValueError(f"Error processing response: {e}")
          `}</pre>
        </div>
      </section>

      {/* Best Practices */}
      <section className="best-practices-section">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>🎯 Prompt Design</h3>
            <ul>
              <li>Be specific in role definition</li>
              <li>Request structured outputs</li>
              <li>Include format examples</li>
              <li>Set clear constraints</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>🔄 Error Handling</h3>
            <ul>
              <li>Validate API responses</li>
              <li>Implement retries</li>
              <li>Handle timeouts</li>
              <li>Provide clear error messages</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>📊 Response Processing</h3>
            <ul>
              <li>Validate data structure</li>
              <li>Transform to typed objects</li>
              <li>Handle missing fields</li>
              <li>Format consistently</li>
            </ul>
          </div>

          <div className="practice-card">
            <h3>🚀 Performance</h3>
            <ul>
              <li>Use async/await</li>
              <li>Implement caching</li>
              <li>Optimize token usage</li>
              <li>Monitor response times</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="further-learning-section">
        <h2>Future Improvements</h2>
        <ul>
          <li>Integration with book databases (Google Books, OpenLibrary)</li>
          <li>User preference history and personalization</li>
          <li>Advanced natural language understanding</li>
          <li>Collaborative filtering for recommendations</li>
          <li>Book availability and purchase links</li>
          <li>Reading level analysis and matching</li>
        </ul>
      </section>
    </div>
  );
};

export default BookBuddy;