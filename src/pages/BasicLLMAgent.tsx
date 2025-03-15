import React from 'react';
import '../styles/BasicLLMAgent.css';

const BasicLLMAgent: React.FC = () => {
  return (
    <div className="basic-agent-page">
      <section className="agent-hero">
        <h1>Building Your First LLM Agent</h1>
        <p className="subtitle">
          A step-by-step guide to creating a simple but practical LLM-powered assistant
        </p>
      </section>

      <section className="introduction">
        <h2>What We'll Build</h2>
        <p>
          In this tutorial, we'll create a basic LLM agent that can help with text analysis
          and writing tasks. This agent will be able to:
        </p>
        <div className="capabilities-grid">
          <div className="capability-card">
            <h3>📝 Text Analysis</h3>
            <p>Analyze text for tone, style, and readability</p>
          </div>
          <div className="capability-card">
            <h3>✍️ Writing Assistant</h3>
            <p>Help improve writing with suggestions and edits</p>
          </div>
          <div className="capability-card">
            <h3>🔍 Content Research</h3>
            <p>Find relevant information for writing tasks</p>
          </div>
        </div>
      </section>

      <section className="prerequisites">
        <h2>Prerequisites</h2>
        <div className="prereq-list">
          <div className="prereq-item">
            <h3>🐍 Python Basics</h3>
            <p>Basic understanding of Python programming</p>
          </div>
          <div className="prereq-item">
            <h3>🔑 OpenAI API Key</h3>
            <p>Access to OpenAI's API (GPT-3.5 or GPT-4)</p>
          </div>
          <div className="prereq-item">
            <h3>📚 Basic Libraries</h3>
            <p>Python environment with pip for installing packages</p>
          </div>
        </div>
      </section>

      <section className="implementation">
        <h2>Step-by-Step Implementation</h2>
        
        <div className="step">
          <h3>1. Project Setup</h3>
          <div className="code-block">
            <pre>
{`# Create project directory
mkdir writing_assistant_agent
cd writing_assistant_agent

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install required packages
pip install openai python-dotenv`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>2. Environment Setup</h3>
          <p>Create a .env file in your project root:</p>
          <div className="code-block">
            <pre>
{`# .env
OPENAI_API_KEY=your_api_key_here`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>3. Creating the Basic Agent</h3>
          <p>Create a new file called <code>agent.py</code>:</p>
          <div className="code-block">
            <pre>
{`# agent.py
import os
from dotenv import load_dotenv
import openai

class WritingAssistant:
    def __init__(self):
        # Load environment variables
        load_dotenv()
        
        # Initialize OpenAI client
        openai.api_key = os.getenv("OPENAI_API_KEY")
        
        # Define agent capabilities
        self.capabilities = {
            "analyze_text": "Analyze text for tone, style, and readability",
            "improve_writing": "Suggest improvements for writing",
            "research_topic": "Find relevant information for a topic"
        }

    def analyze_text(self, text: str) -> dict:
        """Analyze the given text for tone, style, and readability."""
        prompt = f"""
        Please analyze the following text and provide insights about:
        1. Tone (formal, informal, etc.)
        2. Style (descriptive, technical, etc.)
        3. Readability (easy, moderate, difficult)
        4. Suggestions for improvement

        Text: {text}
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a writing analysis expert."},
                {"role": "user", "content": prompt}
            ]
        )
        
        return {
            "analysis": response.choices[0].message.content,
            "tokens_used": response.usage.total_tokens
        }

    def improve_writing(self, text: str) -> dict:
        """Suggest improvements for the given text."""
        prompt = f"""
        Please suggest improvements for the following text:
        1. Grammar and clarity
        2. Sentence structure
        3. Word choice
        4. Overall flow

        Text: {text}
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a professional editor."},
                {"role": "user", "content": prompt}
            ]
        )
        
        return {
            "suggestions": response.choices[0].message.content,
            "tokens_used": response.usage.total_tokens
        }

    def research_topic(self, topic: str) -> dict:
        """Research and provide information about a topic."""
        prompt = f"""
        Please provide key information about the following topic:
        1. Main points
        2. Key concepts
        3. Useful examples
        4. Potential writing angles

        Topic: {topic}
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a research assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        
        return {
            "research": response.choices[0].message.content,
            "tokens_used": response.usage.total_tokens
        }`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>4. Creating the Command Line Interface</h3>
          <p>Create a new file called <code>main.py</code>:</p>
          <div className="code-block">
            <pre>
{`# main.py
from agent import WritingAssistant

def main():
    # Initialize the agent
    assistant = WritingAssistant()
    
    print("Welcome to the Writing Assistant!")
    print("\\nAvailable commands:")
    print("1. analyze - Analyze text")
    print("2. improve - Get writing improvements")
    print("3. research - Research a topic")
    print("4. quit - Exit the program")
    
    while True:
        command = input("\\nEnter command: ").lower()
        
        if command == "quit":
            break
            
        elif command == "analyze":
            text = input("Enter text to analyze: ")
            result = assistant.analyze_text(text)
            print("\\nAnalysis:")
            print(result["analysis"])
            print(f"\\nTokens used: {result['tokens_used']}")
            
        elif command == "improve":
            text = input("Enter text to improve: ")
            result = assistant.improve_writing(text)
            print("\\nSuggestions:")
            print(result["suggestions"])
            print(f"\\nTokens used: {result['tokens_used']}")
            
        elif command == "research":
            topic = input("Enter topic to research: ")
            result = assistant.research_topic(topic)
            print("\\nResearch:")
            print(result["research"])
            print(f"\\nTokens used: {result['tokens_used']}")
            
        else:
            print("Unknown command. Please try again.")

if __name__ == "__main__":
    main()`}
            </pre>
          </div>
        </div>

        <div className="step">
          <h3>5. Using the Agent</h3>
          <div className="usage-example">
            <h4>Running the Agent</h4>
            <div className="code-block">
              <pre>
{`python main.py

# Example interactions:
> Enter command: analyze
> Enter text to analyze: The quick brown fox jumps over the lazy dog.

> Enter command: improve
> Enter text to improve: The meeting was good and we talked about stuff.

> Enter command: research
> Enter topic to research: Climate change impacts on agriculture`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="example-interactions">
        <h2>Example Interactions</h2>
        <div className="interaction-examples">
          <div className="example-card">
            <h3>Text Analysis Example</h3>
            <div className="example-content">
              <div className="input">
                <h4>Input:</h4>
                <p>The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div className="output">
                <h4>Output:</h4>
                <pre>
{`Analysis:
1. Tone: Neutral, straightforward
2. Style: Simple, descriptive
3. Readability: Easy
4. Suggestions:
   - Could add more descriptive adjectives
   - Consider varying sentence structure
   - Opportunity to add emotional context`}
                </pre>
              </div>
            </div>
          </div>

          <div className="example-card">
            <h3>Writing Improvement Example</h3>
            <div className="example-content">
              <div className="input">
                <h4>Input:</h4>
                <p>The meeting was good and we talked about stuff.</p>
              </div>
              <div className="output">
                <h4>Output:</h4>
                <pre>
{`Suggestions:
1. Grammar and clarity:
   - Be more specific about the meeting's outcome
   - Replace vague words like "good" and "stuff"
2. Improved version:
   "The team meeting was productive, covering project timelines and resource allocation."`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="customization">
        <h2>Customizing Your Agent</h2>
        <div className="customization-grid">
          <div className="custom-card">
            <h3>Add New Capabilities</h3>
            <p>Extend the agent with new methods:</p>
            <div className="code-block">
              <pre>
{`def summarize_text(self, text: str) -> dict:
    """Generate a concise summary of the text."""
    prompt = f"Please summarize the following text:\\n{text}"
    # ... implementation ...`}
              </pre>
            </div>
          </div>

          <div className="custom-card">
            <h3>Modify System Prompts</h3>
            <p>Customize the agent's personality:</p>
            <div className="code-block">
              <pre>
{`# More specific system prompts
{"role": "system", "content": 
 "You are a helpful writing assistant with expertise in technical documentation."}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="best-practices">
        <h2>Best Practices</h2>
        <div className="practices-grid">
          <div className="practice-card">
            <h3>🔐 API Key Security</h3>
            <ul>
              <li>Always use environment variables</li>
              <li>Never commit API keys to version control</li>
              <li>Rotate keys periodically</li>
            </ul>
          </div>
          <div className="practice-card">
            <h3>💰 Cost Management</h3>
            <ul>
              <li>Monitor token usage</li>
              <li>Set usage limits</li>
              <li>Use appropriate model tiers</li>
            </ul>
          </div>
          <div className="practice-card">
            <h3>🚀 Performance</h3>
            <ul>
              <li>Keep prompts concise</li>
              <li>Cache frequent responses</li>
              <li>Handle API rate limits</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Next Steps</h2>
        <div className="steps-grid">
          <div className="next-step-card">
            <h3>Advanced Features</h3>
            <ul>
              <li>Add conversation memory</li>
              <li>Implement error handling</li>
              <li>Add more analysis tools</li>
              <li>Create a web interface</li>
            </ul>
          </div>
          <div className="next-step-card">
            <h3>Integration Ideas</h3>
            <ul>
              <li>Connect to document processors</li>
              <li>Add grammar checking APIs</li>
              <li>Integrate with writing tools</li>
              <li>Add collaboration features</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BasicLLMAgent; 