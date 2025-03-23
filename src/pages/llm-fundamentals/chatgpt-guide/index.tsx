import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics';
import './styles.css';

const ChatGPTGuide: React.FC = () => {
  const handleExampleClick = (exampleType: string) => {
    trackEvent('ChatGPT Guide', 'Example Click', exampleType);
  };

  const handleNextStepClick = (step: string) => {
    trackEvent('ChatGPT Guide', 'Next Step Click', step);
  };

  return (
    <div className="chatgpt-guide">
      <h1>Using ChatGPT: A Practical LLM Guide</h1>
      
      <section className="intro-section1">
        <h2>ChatGPT as Your Introduction to LLMs</h2>
        <p>
          ChatGPT is one of the most popular implementations of a Large Language Model, making it
          an ideal starting point for understanding what LLMs can do. This practical guide will 
          help you make the most of ChatGPT while learning core LLM concepts that apply to other 
          models as well.
        </p>
      </section>

      <section className="everyday-uses">
        <h2>Practical Applications</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>✍️ Content Creation</h3>
            <ul>
              <li>Draft emails and documents</li>
              <li>Review and improve writing</li>
              <li>Create social media content</li>
              <li>Generate creative writing</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>💡 Research & Learning</h3>
            <ul>
              <li>Explain complex topics simply</li>
              <li>Find information and summarize</li>
              <li>Get study assistance</li>
              <li>Learn new subjects</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>💼 Professional Tasks</h3>
            <ul>
              <li>Create presentations</li>
              <li>Analyze business concepts</li>
              <li>Draft product content</li>
              <li>Develop business plans</li>
            </ul>
          </div>

          <div className="use-case">
            <h3>🎯 Problem Solving</h3>
            <ul>
              <li>Break down complex problems</li>
              <li>Generate alternative solutions</li>
              <li>Think through challenges</li>
              <li>Plan projects step-by-step</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <h2>Effective Prompting Techniques</h2>
        <p className="section-intro">
          The way you phrase your requests (prompts) to ChatGPT dramatically affects the quality and relevance of responses.
          These techniques apply to most LLMs, not just ChatGPT.
        </p>
        <div className="tips-container">
          <div className="tip-card">
            <h3>1. Be Specific</h3>
            <p>Instead of asking "Help me write an email," try:</p>
            <div className="example-box">
              "Help me write a polite email to reschedule a business meeting with a client named John who I've met twice before"
            </div>
          </div>

          <div className="tip-card">
            <h3>2. Provide Context</h3>
            <p>Give relevant background information for better responses:</p>
            <div className="example-box">
              "I'm planning a birthday party for a 5-year-old who loves dinosaurs and outer space. The venue is our backyard. What are some theme ideas that combine these interests?"
            </div>
          </div>

          <div className="tip-card">
            <h3>3. Use System Prompts</h3>
            <p>Set the role and behavioral expectations for the LLM:</p>
            <div className="example-box">
              "You are an expert chef specializing in Italian cuisine. Please help me create a traditional pasta recipe using ingredients I already have: flour, eggs, tomatoes, garlic, and basil."
            </div>
          </div>
        </div>
      </section>

      <section className="limitations">
        <h2>Understanding LLM Limitations</h2>
        <div className="limitations-grid">
          <div className="limitation-card">
            <h3>❗ Hallucinations</h3>
            <p>
              LLMs like ChatGPT can generate incorrect information that sounds plausible. 
              Always verify important facts from reliable sources.
            </p>
          </div>

          <div className="limitation-card">
            <h3>📅 Knowledge Cutoff</h3>
            <p>
              ChatGPT's training data has a cutoff date, meaning it lacks knowledge of more
              recent events, research, or developments.
            </p>
          </div>

          <div className="limitation-card">
            <h3>🔒 Privacy Considerations</h3>
            <p>
              Be mindful about sharing sensitive personal or business information, as conversations
              may be used for model improvements.
            </p>
          </div>
        </div>
      </section>

      <section className="getting-started">
        <h2>Getting Started with ChatGPT</h2>
        <div>
          <div>
            <h3>Step 1: Access ChatGPT</h3>
            <p>
              Visit <a href="https://chat.openai.com" target="_blank" rel="noreferrer">chat.openai.com</a> and create a free account to start using ChatGPT.
            </p>
          </div>

          <div>
            <h3>Step 2: Experiment with Prompts</h3>
            <p>
              Try different prompting techniques to see how they affect the responses you receive.
            </p>
          </div>

          <div>
            <h3>Step 3: Refine Your Approach</h3>
            <p>
              Learn from your interactions and continuously improve your prompting skills for better results.
            </p>
          </div>
        </div>
      </section>

      <section className="examples">
        <h2>Professional Use Cases</h2>
        <div className="examples-grid">
          <div className="example-card">
            <h3>For Educators</h3>
            <div className="example-content">
              <p className="question">
                "Design a 45-minute lesson plan about the water cycle for 3rd graders, including a hands-on activity requiring only basic classroom supplies."
              </p>
              <p className="usage">
                Generate lesson plans, instructional materials, and creative teaching approaches.
              </p>
            </div>
          </div>

          <div className="example-card">
            <h3>For Business Professionals</h3>
            <div className="example-content">
              <p className="question">
                "Draft a compelling social media announcement for our holiday sale. We're offering 30% off all products from November 25-30. Our brand voice is friendly but professional."
              </p>
              <p className="usage">
                Create marketing content, business communications, and professional documents.
              </p>
            </div>
          </div>

          <div className="example-card">
            <h3>For Researchers</h3>
            <div className="example-content">
              <p className="question">
                "Help me brainstorm 10 potential research questions about the impact of climate change on urban agriculture in developing countries."
              </p>
              <p className="usage">
                Generate research ideas, structure literature reviews, and analyze concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Continue Your LLM Learning Journey</h2>
        <div className="next-steps-grid">
          <Link 
            to="/prompt-engineering" 
            className="next-step-card"
            onClick={() => handleNextStepClick('prompt-engineering')}
          >
            <h3>Advanced Prompt Engineering</h3>
            <p>Learn sophisticated techniques for getting precisely what you want from LLMs</p>
          </Link>

          <Link 
            to="/llm-agent" 
            className="next-step-card"
            onClick={() => handleNextStepClick('llm-agent')}
          >
            <h3>Advanced LLM Capabilities</h3>
            <p>Discover how LLMs can be extended into powerful agent systems</p>
          </Link>

          <Link 
            to="/BuildingLLMAgent" 
            className="next-step-card"
            onClick={() => handleNextStepClick('build-agent')}
          >
            <h3>Building Your Own LLM Applications</h3>
            <p>Learn to create custom applications powered by language models</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChatGPTGuide;