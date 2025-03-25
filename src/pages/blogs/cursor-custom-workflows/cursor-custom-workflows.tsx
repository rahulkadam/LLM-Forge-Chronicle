import React from 'react';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, CodeExample, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../mobile-viewport-fix.css';
import './cursor-custom-workflows.css';
import '../../../styles/blogs/blog-layout-update.css';

const CursorCustomWorkflows: React.FC = () => {
  // Use the blog behavior hook
  useBlogBehavior();

  // Table of contents definition
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'what-are-workflows', title: 'What Are Cursor Workflows?' },
    { id: 'why-use-workflows', title: 'Why Use Custom Workflows?' },
    { id: 'creating-workflows', title: 'Creating Your First Workflow' },
    { id: 'advanced-workflows', title: 'Advanced Workflow Techniques' },
    { id: 'workflow-examples', title: 'Practical Workflow Examples' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'conclusion', title: 'Conclusion' }
  ];

  return (
    <BlogTemplate
      title="Mastering Cursor Custom Workflows: Automate Your Coding Tasks"
      date="March 25, 2024"
      readTime="8 min"
      category="Developer Tools"
      bannerClassName="cursor-workflows-banner"
      tableOfContents={tableOfContents}
      className="cursor-custom-workflows-guide"
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          As developers, we're constantly looking for ways to streamline our workflow and reduce repetitive tasks. 
          Cursor, the AI-powered code editor, offers a powerful but often overlooked feature: custom workflows. 
          These allow you to create personalized AI-powered commands that can significantly speed up your development process.
        </p>
        <p>
          In this guide, we'll explore how to create, use, and optimize custom workflows in Cursor to automate your 
          coding tasks and boost your productivity.
        </p>
      </BlogSection>

      <BlogSection id="what-are-workflows" title="What Are Cursor Workflows?">
        <p>
          Cursor workflows are customizable AI-powered commands that you can create to automate specific coding tasks. 
          Unlike standard editor features, workflows leverage Cursor's AI capabilities to perform complex operations 
          based on your instructions.
        </p>
        
        <div className="qa-container">
          <div className="question">What exactly is a Cursor workflow?</div>
          <div className="answer">
            <p>
              A Cursor workflow is essentially a saved prompt with a specific purpose that you can trigger with a custom command.
              Think of it as creating your own AI assistant with specialized skills for particular coding tasks.
            </p>
            <p>
              For example, you could create a workflow that generates unit tests, explains complex code, or refactors 
              code according to best practices—all accessible with a simple command.
            </p>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="why-use-workflows" title="Why Use Custom Workflows?">
        <p>
          Custom workflows offer several advantages that can dramatically improve your development experience:
        </p>
        
        <ul>
          <li>
            <strong>Consistency:</strong> Ensure that repetitive tasks are performed the same way every time.
          </li>
          <li>
            <strong>Time-saving:</strong> Reduce the time spent on routine coding tasks.
          </li>
          <li>
            <strong>Context-specific assistance:</strong> Create workflows tailored to your project's specific needs.
          </li>
          <li>
            <strong>Knowledge sharing:</strong> Share workflows with your team to establish coding standards.
          </li>
          <li>
            <strong>Reduced cognitive load:</strong> Delegate mental overhead of routine tasks to your AI assistant.
          </li>
        </ul>
        
        <InfoBox type="tip">
          <p>
            <strong>Pro Tip:</strong> Create workflows for the tasks you find yourself repeatedly asking AI to help with.
            This saves you from rewriting the same prompts multiple times.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="creating-workflows" title="Creating Your First Workflow">
        <p>
          Let's walk through the process of creating a basic custom workflow in Cursor:
        </p>
        
        <ol className="step-list">
          <li>
            <strong>Open Cursor Settings:</strong> Click on the gear icon in the bottom left corner of the Cursor editor, 
            or use the keyboard shortcut Cmd+, (Mac) or Ctrl+, (Windows).
          </li>
          <li>
            <strong>Navigate to Workflows:</strong> In the settings panel, find and select the "Workflows" tab.
          </li>
          <li>
            <strong>Create New Workflow:</strong> Click the "Add Workflow" button.
          </li>
          <li>
            <strong>Define Your Workflow:</strong> Fill in the following fields:
            <ul>
              <li><strong>Name:</strong> Give your workflow a descriptive name (e.g., "Generate Unit Tests").</li>
              <li><strong>Command:</strong> Create a short command that will trigger your workflow (e.g., "unittest").</li>
              <li><strong>Prompt:</strong> Write detailed instructions for what the AI should do when the workflow is triggered.</li>
            </ul>
          </li>
          <li>
            <strong>Save Your Workflow:</strong> Click "Save" to add your new workflow to Cursor.
          </li>
        </ol>
        
        <p>Here's an example of a simple workflow to generate unit tests:</p>
        
        <div className="workflow-card">
          <h4>Generate Unit Tests Workflow</h4>
          <p><strong>Command:</strong> unittest</p>
          <p><strong>Prompt:</strong></p>
          <CodeExample 
            code={`Analyze the selected code and generate comprehensive unit tests for it.
Follow these guidelines:
1. Use the appropriate testing framework based on the language (Jest for JavaScript/TypeScript, pytest for Python, etc.)
2. Cover all main functions and edge cases
3. Include proper assertions
4. Follow testing best practices for the language
5. Include setup and teardown where appropriate
6. Add brief comments explaining the purpose of each test`}
            language="text"
          />
        </div>
        
        <InfoBox type="warning">
          <p>
            <strong>Important:</strong> Be specific in your workflow prompts. Vague instructions will lead to inconsistent results.
            The more detail you provide, the better the AI will understand your expectations.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="advanced-workflows" title="Advanced Workflow Techniques">
        <p>
          Once you're comfortable with basic workflows, you can create more sophisticated ones using these advanced techniques:
        </p>
        
        <h3>Using Variables in Workflows</h3>
        <p>
          You can make your workflows more flexible by incorporating variables that you'll supply when triggering the workflow.
          In your prompt, use placeholders like <code>{'{$variableName}'}</code> which Cursor will prompt you to fill when running the workflow.
        </p>
        
        <div className="workflow-card">
          <h4>Customizable Code Explainer</h4>
          <p><strong>Command:</strong> explain</p>
          <p><strong>Prompt:</strong></p>
          <CodeExample 
            code={`Explain the selected code with a focus on {$aspect}.
Be thorough but concise. 
Use examples where helpful.
Highlight any potential issues or improvements.`}
            language="text"
          />
          <p><em>When triggered, Cursor will ask what "aspect" you want to focus on (e.g., "performance", "security", etc.)</em></p>
        </div>
        
        <h3>Context-Aware Workflows</h3>
        <p>
          Make your workflows smarter by instructing them to consider the current file context, project structure, or programming language.
        </p>
        
        <div className="workflow-card">
          <h4>Smart Code Review</h4>
          <p><strong>Command:</strong> review</p>
          <p><strong>Prompt:</strong></p>
          <CodeExample 
            code={`Perform a thorough code review of the selected code.
First, identify the programming language and relevant frameworks being used.
Then analyze the code for:
1. Bugs and logical errors
2. Performance optimizations
3. Security vulnerabilities specific to this language/framework
4. Code style inconsistencies
5. Opportunities to implement design patterns
6. Ways to improve readability and maintainability

Format your review as a structured list of findings with suggested improvements.`}
            language="text"
          />
        </div>
      </BlogSection>

      <BlogSection id="workflow-examples" title="Practical Workflow Examples">
        <p>
          Here are some practical workflows you can add to your Cursor setup right away:
        </p>
        
        <div className="workflow-card">
          <h4>Documentation Generator</h4>
          <p><strong>Command:</strong> docs</p>
          <p><strong>Prompt:</strong></p>
          <CodeExample 
            code={`Generate comprehensive documentation for the selected code.
Follow the standard documentation format for the language (JSDoc for JavaScript, docstrings for Python, etc.).
Include:
1. Function/method purpose
2. Parameter descriptions and types
3. Return value description and type
4. Usage examples
5. Any exceptions/errors that might be thrown
6. Related functions or methods where relevant`}
            language="text"
          />
        </div>
        
        <div className="workflow-card">
          <h4>Refactor for Readability</h4>
          <p><strong>Command:</strong> cleancode</p>
          <p><strong>Prompt:</strong></p>
          <CodeExample 
            code={`Refactor the selected code to improve readability and maintainability without changing its functionality.
Apply clean code principles:
1. Use meaningful variable and function names
2. Break down complex functions into smaller ones
3. Remove redundant or duplicate code
4. Add helpful comments where necessary
5. Ensure consistent formatting and style
6. Apply appropriate design patterns where beneficial

Explain the changes you've made and why they improve the code.`}
            language="text"
          />
        </div>
        
        <div className="workflow-card">
          <h4>Type Definition Generator</h4>
          <p><strong>Command:</strong> types</p>
          <p><strong>Prompt:</strong></p>
          <CodeExample 
            code={`Generate TypeScript type definitions for the selected JavaScript code.
Create comprehensive interface or type definitions that accurately represent the data structures.
Include:
1. Proper typing for all variables, parameters, and return values
2. Union types where appropriate
3. Generic types where they add value
4. JSDoc comments to explain complex types
5. Export statements for types that should be available to other modules`}
            language="text"
          />
        </div>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <p>
          To get the most out of Cursor workflows, follow these best practices:
        </p>
        
        <ol>
          <li>
            <strong>Be Specific:</strong> Provide clear, detailed instructions in your workflow prompts.
          </li>
          <li>
            <strong>Use Consistent Naming:</strong> Create a naming convention for your workflows to make them easy to remember.
          </li>
          <li>
            <strong>Start Small:</strong> Begin with simple workflows and gradually build more complex ones as you get comfortable.
          </li>
          <li>
            <strong>Iterate and Refine:</strong> If a workflow isn't producing the results you want, refine the prompt and try again.
          </li>
          <li>
            <strong>Share with Your Team:</strong> Export and share effective workflows with colleagues to establish team standards.
          </li>
          <li>
            <strong>Document Your Workflows:</strong> Keep notes on what each workflow does and when to use it.
          </li>
          <li>
            <strong>Combine with Keyboard Shortcuts:</strong> For frequently used workflows, consider assigning keyboard shortcuts for even faster access.
          </li>
        </ol>
        
        <InfoBox type="tip">
          <p>
            <strong>Organization Tip:</strong> Create different categories of workflows—development, documentation, refactoring, etc.—and prefix their commands accordingly (dev:, doc:, refactor:) for easier management.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          Custom workflows in Cursor represent a powerful way to enhance your productivity and coding experience. 
          By automating repetitive tasks and creating specialized AI assistants for specific coding challenges, 
          you can focus more on solving complex problems and less on routine activities.
        </p>
        <p>
          Start with a few simple workflows that address your most common needs, then gradually expand your collection 
          as you identify more opportunities for automation. With practice, you'll develop a personalized suite of 
          AI-powered tools that make your development process faster, more consistent, and more enjoyable.
        </p>
        <p>
          Have you created any unique workflows that have transformed your development process? Share them with 
          the community and help fellow developers boost their productivity too!
        </p>
      </BlogSection>

    </BlogTemplate>
  );
};

export default CursorCustomWorkflows;