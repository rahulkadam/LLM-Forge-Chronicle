import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import type { BlogCategory } from '../../../data/blogData';
import '../../../styles/blogs/blog-layout-update.css';
import './llm-fundamentals.css';

const ChatGPTGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'use-cases', title: 'Everyday Uses' },
    { id: 'tips', title: 'Tips for Better Results' },
    { id: 'limitations', title: 'Important Limitations' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'examples', title: 'Real-World Examples' },
    { id: 'faq', title: 'Common Questions' }
  ];

  const category: BlogCategory = 'Fundamentals';

  return (
    <BlogTemplate
      title="Understanding ChatGPT: A Comprehensive Guide"
      date="April 12, 2025"
      readTime="12 min"
      category={category}
      bannerClassName="chatgpt-guide-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="What is ChatGPT?">
        <p>
          Think of ChatGPT as a highly advanced digital assistant that can understand and 
          respond to your questions in a human-like way. It's like having a knowledgeable 
          conversation partner who can help you with various tasks - from writing and research 
          to answering questions and solving problems.
        </p>
      </BlogSection>

      <BlogSection id="use-cases" title="How Can You Use ChatGPT?">
        <div className="use-cases-grid">
          <InfoBox type="tip" title="Writing Help">
            <ul>
              <li>Draft emails and letters</li>
              <li>Review and improve your writing</li>
              <li>Create content for social media</li>
              <li>Help with creative writing</li>
            </ul>
          </InfoBox>

          <InfoBox type="tip" title="Research & Learning">
            <ul>
              <li>Explain complex topics simply</li>
              <li>Find information quickly</li>
              <li>Get study help</li>
              <li>Learn new subjects</li>
            </ul>
          </InfoBox>

          <InfoBox type="tip" title="Business Tasks">
            <ul>
              <li>Create presentations</li>
              <li>Analyze business ideas</li>
              <li>Write product descriptions</li>
              <li>Draft business plans</li>
            </ul>
          </InfoBox>

          <InfoBox type="tip" title="Problem Solving">
            <ul>
              <li>Break down complex problems</li>
              <li>Get different perspectives</li>
              <li>Find creative solutions</li>
              <li>Plan projects</li>
            </ul>
          </InfoBox>
        </div>
      </BlogSection>

      <BlogSection id="tips" title="Tips for Better Results">
        <h3>1. Be Specific</h3>
        <div className="code-block">
          <pre>{`Instead of:
"Help me write an email"

Better:
"Help me write a polite email to reschedule a business meeting with a client"`}</pre>
        </div>

        <h3>2. Provide Context</h3>
        <div className="code-block">
          <pre>{`"I'm planning a birthday party for a 5-year-old who loves dinosaurs. What are some theme ideas?"`}</pre>
        </div>

        <h3>3. Ask for Alternatives</h3>
        <div className="code-block">
          <pre>{`"Can you suggest three different ways to explain photosynthesis to a 10-year-old?"`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="limitations" title="Important Limitations">
        <InfoBox type="warning" title="Key Limitations">
          <ul>
            <li><strong>Not Always Perfect:</strong> Like humans, ChatGPT can make mistakes. Always review its suggestions.</li>
            <li><strong>Knowledge Cutoff:</strong> May not know about very recent events or developments.</li>
            <li><strong>Privacy Awareness:</strong> Avoid sharing sensitive personal information.</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="getting-started" title="Getting Started">
        <div className="steps-container">
          <h3>Step 1: Access ChatGPT</h3>
          <p>Visit chat.openai.com and create a free account to start using ChatGPT.</p>

          <h3>Step 2: Start Simple</h3>
          <p>Begin with basic questions or tasks to get comfortable with how it works.</p>

          <h3>Step 3: Explore Features</h3>
          <p>Try different types of requests to discover what ChatGPT can do for you.</p>
        </div>
      </BlogSection>

      <BlogSection id="examples" title="Real-World Examples">
        <h3>For Teachers</h3>
        <div className="code-block">
          <pre>{`"Can you help me create a lesson plan about the water cycle for 3rd graders?"

Get creative activity ideas, simple explanations, and engaging examples.`}</pre>
        </div>

        <h3>For Small Business Owners</h3>
        <div className="code-block">
          <pre>{`"Help me write a social media post announcing our holiday sale."

Create engaging content, marketing materials, and business communications.`}</pre>
        </div>

        <h3>For Students</h3>
        <div className="code-block">
          <pre>{`"Can you explain quantum physics in simple terms?"

Get help understanding complex topics and preparing for assignments.`}</pre>
        </div>
      </BlogSection>

      <BlogSection id="faq" title="Common Questions">
        <InfoBox type="tip" title="Frequently Asked Questions">
          <h3>Is ChatGPT free to use?</h3>
          <p>There's a free version and a paid version (ChatGPT Plus) with additional features.</p>

          <h3>Can ChatGPT replace human experts?</h3>
          <p>No, ChatGPT is a helpful tool but should not replace professional advice, especially in fields like medicine, law, or finance.</p>

          <h3>How accurate is ChatGPT?</h3>
          <p>While generally helpful, it's important to verify important information from reliable sources.</p>
        </InfoBox>

        <div className="next-steps-grid">
          <Link to="/prompt-engineering" className="next-step-card">
            Learn Prompt Engineering →
          </Link>
          <Link to="/blogs/llm-models/chatgpt" className="next-step-card">
            Explore ChatGPT Technical Details →
          </Link>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default ChatGPTGuide;