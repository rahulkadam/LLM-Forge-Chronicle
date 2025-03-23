import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, CardGrid, Card } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './llm-agent-guide.css'; // Import the custom CSS
import '../../../styles/blogs/blog-layout-update.css'; // Import the updated layout CSS

const LLMAgentSimplified: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'why-complex', title: 'Why People Think It\'s Complex' },
    { id: 'simple-truth', title: 'The Simple Truth' },
    { id: 'technical-side', title: 'The Technical Side' },
    { id: 'real-example', title: 'A Real Example' },
    { id: 'business-cases', title: 'Business Use Cases' }
  ];

  return (
    <BlogTemplate
      title="LLM Agents: Just Functions with a Fancy Name"
      date="March 22, 2024"
      readTime="5 min"
      category="Technical"
      bannerClassName="llm-agent-banner"
      tableOfContents={tableOfContents}
      className="llm-agent-guide" // Add the class name for custom styling
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          When you hear "LLM Agent," you might picture a complex AI system that can do everything. 
          But let me tell you a secret: it's just a fancy name for a function that uses an LLM to do specific tasks. 
          That's it! Let's break down why this simple concept has become so mystified and how you can use it in your projects.
        </p>
      </BlogSection>

      <BlogSection id="why-complex" title="Why People Think It's Complex">
        <p>
          The term "Agent" has been around in AI for decades, often associated with complex systems that can:
        </p>
        <ul>
          <li>Make autonomous decisions</li>
          <li>Learn from experience</li>
          <li>Interact with their environment</li>
          <li>Have goals and objectives</li>
        </ul>
        <p>
          When this term got attached to LLMs, people started thinking these were some kind of super-intelligent systems. 
          But in reality, an LLM Agent is just a function that:
        </p>
        <ul>
          <li>Takes some input</li>
          <li>Uses an LLM to process it</li>
          <li>Returns some output</li>
        </ul>
      </BlogSection>

      <BlogSection id="simple-truth" title="The Simple Truth">
        <p>
          An LLM Agent is nothing more than a function that wraps around an LLM to do specific tasks. 
          Think of it like this:
        </p>
        <CodeExample 
          code={`// A simple function
function calculateSum(a, b) {
  return a + b;
}

// An LLM Agent (just another function!)
function analyzeSentiment(text) {
  return llm.analyze(text, "What's the sentiment of this text?");
}`}
          language="javascript"
        />
        <p>
          The only difference is that instead of doing math, it's using an LLM to do something with text or data. 
          That's all there is to it!
        </p>
      </BlogSection>

      <BlogSection id="technical-side" title="The Technical Side">
        <p>
          The term "Agent" was chosen because these functions often:
        </p>
        <ul>
          <li>Act on behalf of something (like a user or system)</li>
          <li>Can be chained together to do more complex tasks</li>
          <li>Might use tools or APIs to accomplish their goals</li>
        </ul>
        <p>
          But at their core, they're just functions that use LLMs. The fancy name helps distinguish them from regular functions 
          because they're specifically designed to work with language models.
        </p>
      </BlogSection>

      <BlogSection id="real-example" title="A Real Example">
        <p>
          Let's look at a simple example of an LLM Agent that helps with customer support:
        </p>
        <CodeExample 
          code={`// A simple customer support agent
async function customerSupportAgent(userMessage) {
  // 1. Understand the user's issue
  const issue = await llm.analyze(userMessage, "What's the main issue?");
  
  // 2. Check if we have a solution
  const solution = await checkKnowledgeBase(issue);
  
  // 3. Generate a response
  const response = await llm.generate(
    "Generate a helpful response to this customer issue",
    { issue, solution }
  );
  
  return response;
}`}
          language="javascript"
        />
        <p>
          This agent is just three functions working together:
        </p>
        <ol>
          <li>One to understand the problem</li>
          <li>One to look up a solution</li>
          <li>One to generate a response</li>
        </ol>
      </BlogSection>

      <BlogSection id="business-cases" title="Business Use Cases">
        <p>
          Here are some simple ways businesses use LLM Agents:
        </p>
        <CardGrid>
          <Card title="Customer Support">
            <p>Simple function that reads customer messages and suggests responses</p>
          </Card>
          <Card title="Data Analysis">
            <p>Function that reads reports and summarizes key points</p>
          </Card>
          <Card title="Content Creation">
            <p>Function that helps write product descriptions or social media posts</p>
          </Card>
        </CardGrid>
      </BlogSection>

      <p>
        Remember: LLM Agents are just functions that use language models. 
        Don't let the fancy name intimidate you - they're powerful tools that are simpler than they seem!
      </p>

    </BlogTemplate>
  );
};

export default LLMAgentSimplified;