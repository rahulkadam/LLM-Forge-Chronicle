import React from 'react';
import './styles.css';

const ChatGPTGuide: React.FC = () => {
  return (
    <div className="chatgpt-guide">
      <h1>Understanding ChatGPT: A Simple Guide</h1>
      
      <section className="intro-section">
        <h2>What is ChatGPT?</h2>
        <p>
          Think of ChatGPT as a highly advanced digital assistant that can understand and 
          respond to your questions in a human-like way. It's like having a knowledgeable 
          conversation partner who can help you with various tasks - from writing and research 
          to answering questions and solving problems.
        </p>
      </section>

      <section className="everyday-uses">
        <h2>How Can You Use ChatGPT?</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>✍️ Writing Help</h3>
            <ul>
              <li>Draft emails and letters</li>
              <li>Review and improve your writing</li>
              <li>Create content for social media</li>
              <li>Help with creative writing</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>💡 Research & Learning</h3>
            <ul>
              <li>Explain complex topics simply</li>
              <li>Find information quickly</li>
              <li>Get study help</li>
              <li>Learn new subjects</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>💼 Business Tasks</h3>
            <ul>
              <li>Create presentations</li>
              <li>Analyze business ideas</li>
              <li>Write product descriptions</li>
              <li>Draft business plans</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>🎯 Problem Solving</h3>
            <ul>
              <li>Break down complex problems</li>
              <li>Get different perspectives</li>
              <li>Find creative solutions</li>
              <li>Plan projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>Tips for Better Results</h2>
        <div className="tips-container">
          <div className="tip-card">
            <h3>1. Be Specific</h3>
            <p>Instead of asking "Help me write an email," try:</p>
            <div className="example-box">
              "Help me write a polite email to reschedule a business meeting with a client"
            </div>
          </div>

          <div className="tip-card">
            <h3>2. Provide Context</h3>
            <p>Give relevant background information for better responses:</p>
            <div className="example-box">
              "I'm planning a birthday party for a 5-year-old who loves dinosaurs. What are some theme ideas?"
            </div>
          </div>

          <div className="tip-card">
            <h3>3. Ask for Alternatives</h3>
            <p>Get multiple options by requesting different approaches:</p>
            <div className="example-box">
              "Can you suggest three different ways to explain photosynthesis to a 10-year-old?"
            </div>
          </div>
        </div>
      </section>

      <section className="limitations">
        <h2>What to Keep in Mind</h2>
        <div className="limitations-grid">
          <div className="limitation-card">
            <h3>❗ Not Always Perfect</h3>
            <p>
              Like humans, ChatGPT can make mistakes. Always review its suggestions 
              and fact-check important information.
            </p>
          </div>

          <div className="limitation-card">
            <h3>📅 Knowledge Cutoff</h3>
            <p>
              ChatGPT's knowledge has a cutoff date, so it might not know about very 
              recent events or developments.
            </p>
          </div>

          <div className="limitation-card">
            <h3>🔒 Privacy Awareness</h3>
            <p>
              Avoid sharing sensitive personal information as conversations may be 
              used for improving the service.
            </p>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Access ChatGPT</h3>
            <p>
              Visit chat.openai.com and create a free account to start using ChatGPT.
            </p>
          </div>

          <div className="step">
            <h3>Step 2: Start Simple</h3>
            <p>
              Begin with basic questions or tasks to get comfortable with how it works.
            </p>
          </div>

          <div className="step">
            <h3>Step 3: Explore Features</h3>
            <p>
              Try different types of requests to discover what ChatGPT can do for you.
            </p>
          </div>
        </div>
      </section>

      <section className="examples">
        <h2>Real-World Examples</h2>
        <div className="examples-grid">
          <div className="example-card">
            <h3>For Teachers</h3>
            <div className="example-content">
              <p className="question">
                "Can you help me create a lesson plan about the water cycle for 3rd graders?"
              </p>
              <p className="usage">
                Get creative activity ideas, simple explanations, and engaging examples.
              </p>
            </div>
          </div>

          <div className="example-card">
            <h3>For Small Business Owners</h3>
            <div className="example-content">
              <p className="question">
                "Help me write a social media post announcing our holiday sale."
              </p>
              <p className="usage">
                Create engaging content, marketing materials, and business communications.
              </p>
            </div>
          </div>

          <div className="example-card">
            <h3>For Students</h3>
            <div className="example-content">
              <p className="question">
                "Can you explain quantum physics in simple terms?"
              </p>
              <p className="usage">
                Get help understanding complex topics and preparing for assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Common Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Is ChatGPT free to use?</h3>
            <p>
              There's a free version and a paid version (ChatGPT Plus) with additional features.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can ChatGPT replace human experts?</h3>
            <p>
              No, ChatGPT is a helpful tool but should not replace professional advice, 
              especially in fields like medicine, law, or finance.
            </p>
          </div>

          <div className="faq-item">
            <h3>How accurate is ChatGPT?</h3>
            <p>
              While generally helpful, it's important to verify important information 
              from reliable sources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatGPTGuide; 