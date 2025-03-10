import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const PromptBasics: React.FC = () => {
  return (
    <div className="prompt-basics">
      <section className="guide-header">
        <h1>Prompt Engineering Basics</h1>
        <p className="subtitle">
          Learn how to write effective prompts to get better results from AI tools
        </p>
      </section>

      <section className="prompt-structure">
        <h2>Basic Prompt Structure</h2>
        <div className="structure-examples">
          <div className="example-card">
            <h3>Task + Context + Format</h3>
            <div className="prompt-example">
              <p className="prompt">"Write a 200-word blog post about artificial intelligence for a general audience, using simple language"</p>
              <div className="breakdown">
                <span className="label">Task:</span> Write a blog post
                <span className="label">Context:</span> About AI for general audience
                <span className="label">Format:</span> 200 words, simple language
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prompt-templates">
        <h2>Common Prompt Templates</h2>
        <div className="template-grid">
          <div className="template-card">
            <h3>Writing Template</h3>
            <p className="template">"Write a [type of content] about [topic] for [audience], [specific requirements]"</p>
            <p className="example">"Write a social media post about climate change for teenagers, with an engaging hook"</p>
          </div>

          <div className="template-card">
            <h3>Analysis Template</h3>
            <p className="template">"Analyze [topic] from [perspective], focusing on [specific aspects]"</p>
            <p className="example">"Analyze the impact of remote work from an employee perspective, focusing on work-life balance"</p>
          </div>

          <div className="template-card">
            <h3>Problem-Solving Template</h3>
            <p className="template">"Help me solve [problem] by [approach], considering [constraints]"</p>
            <p className="example">"Help me solve my time management issues by suggesting a daily schedule, considering my 9-5 job"</p>
          </div>
        </div>
      </section>

      <section className="tips">
        <h2>Essential Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>Be Specific</h3>
            <p>Instead of "Write about technology", specify "Write about the impact of AI on healthcare in the last 5 years"</p>
          </div>

          <div className="tip-card">
            <h3>Include Context</h3>
            <p>Provide relevant background information to get more accurate responses</p>
          </div>

          <div className="tip-card">
            <h3>Specify Format</h3>
            <p>Tell the AI exactly how you want the response structured</p>
          </div>

          <div className="tip-card">
            <h3>Ask for Examples</h3>
            <p>Request specific examples to make concepts clearer</p>
          </div>
        </div>
      </section>

      <section className="practice">
        <h2>Practice Examples</h2>
        <div className="practice-grid">
          <div className="practice-card">
            <h3>Basic Prompt</h3>
            <p className="prompt">"Explain machine learning"</p>
            <p className="improved">Improved: "Explain machine learning to a high school student, using simple examples from everyday life"</p>
          </div>

          <div className="practice-card">
            <h3>Writing Prompt</h3>
            <p className="prompt">"Write a story"</p>
            <p className="improved">Improved: "Write a 300-word children's story about a robot learning to make friends, with a clear moral lesson"</p>
          </div>

          <div className="practice-card">
            <h3>Analysis Prompt</h3>
            <p className="prompt">"Analyze this data"</p>
            <p className="improved">Improved: "Analyze these sales figures and provide three key insights, focusing on seasonal trends"</p>
          </div>
        </div>
      </section>

      <section className="next-steps">
        <h2>Ready to Practice?</h2>
        <div className="next-steps-grid">
          <Link to="/ai-basics/examples" className="next-step-card">
            <h3>View Real Examples</h3>
            <p>See how others use prompts effectively</p>
          </Link>

          <Link to="/ai-basics/chatgpt-guide" className="next-step-card">
            <h3>Try with ChatGPT</h3>
            <p>Practice these prompts with ChatGPT</p>
          </Link>

          <Link to="/ai-basics/tips" className="next-step-card">
            <h3>Advanced Tips</h3>
            <p>Learn more advanced prompting techniques</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PromptBasics; 