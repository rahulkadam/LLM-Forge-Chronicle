import React from 'react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../../components/blogs/BlogTemplate';
import { BlogSection, InfoBox } from '../../../components/blogs/BlogComponents';
import useBlogBehavior from '../../../hooks/useBlogBehavior';
import '../../../styles/blogs/blog-layout-update.css';
import '../../../styles/blogs/llm-models.css';

const DeveloperPromptGuide: React.FC = () => {
  useBlogBehavior();

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'code-prompts', title: 'Code-Related Prompts' },
    { id: 'documentation', title: 'Documentation Generation' },
    { id: 'code-review', title: 'Code Review & Analysis' },
    { id: 'testing', title: 'Testing & Debugging' },
    { id: 'architecture', title: 'Architecture & Design' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'examples', title: 'Real-World Examples' },
  ];

  return (
    <BlogTemplate
      title="Practical Prompt Engineering for Developers"
      date="April 8, 2025"
      readTime="15 min"
      category="Prompt Engineering"
      bannerClassName="prompt-practical-banner"
      tableOfContents={tableOfContents}
    >
      <BlogSection id="introduction" title="Introduction">
        <p>
          Effective prompt engineering can significantly boost developer productivity, but crafting the right prompts
          requires understanding both the capabilities and limitations of LLMs. This guide provides practical, real-world
          examples of prompts that developers can use in their daily workflow.
        </p>

        <InfoBox type="tip" title="Key Benefits">
          <ul>
            <li>Reduce time spent on routine coding tasks</li>
            <li>Generate better documentation faster</li>
            <li>Improve code review quality</li>
            <li>Speed up debugging processes</li>
          </ul>
        </InfoBox>
      </BlogSection>

      <BlogSection id="code-prompts" title="Code-Related Prompts">
        <h3>1. Code Implementation</h3>
        
        <div className="prompt-example1">
          <h4>✨ Basic Implementation Prompt</h4>
          <pre><code>{`Implement a TypeScript function that [specific task].
Requirements:
- Input: [describe input parameters]
- Output: [describe expected output]
- Error handling: [specific requirements]
- Performance considerations: [any constraints]
Additional context:
[any relevant business logic or constraints]`}</code></pre>

          <h4>💡 Advanced Implementation Prompt</h4>
          <pre><code>{`Create a TypeScript implementation with the following specifications:

System Context:
- Project uses [framework/library]
- Following [specific patterns/practices]
- Must integrate with [existing system]

Requirements:
1. Functional:
   - [list key requirements]
2. Non-functional:
   - Performance: [constraints]
   - Security: [requirements]
   - Error handling: [approach]

Additional:
- Include unit tests
- Add JSDoc documentation
- Consider edge cases`}</code></pre>
        </div>

        <InfoBox type="warning" title="Best Practice">
          <p>
            Always provide context about your tech stack, patterns, and naming conventions to get more relevant code.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="documentation" title="Documentation Generation">
        <h3>1. Code Documentation</h3>
        
        <div className="prompt-example1">
          <h4>✨ API Documentation</h4>
          <pre><code>{`Generate comprehensive API documentation for this code:
[paste your code here]

Include:
1. Overview of functionality
2. Parameters and return types
3. Example usage
4. Error scenarios
5. Security considerations

Style: [OpenAPI/JSDoc/etc.]`}</code></pre>

          <h4>💡 README Generation</h4>
          <pre><code>{`Create a README.md for a [type] project with:

Project Context:
- Name: [project name]
- Purpose: [brief description]
- Tech Stack: [list technologies]

Required Sections:
1. Installation
2. Configuration
3. Usage Examples
4. API Reference
5. Contributing Guidelines
6. License Information

Style: Modern, concise, with proper markdown formatting`}</code></pre>
        </div>
      </BlogSection>

      <BlogSection id="code-review" title="Code Review & Analysis">
        <h3>1. Code Review Prompts</h3>
        
        <div className="prompt-example">
          <h4>✨ Code Review Request</h4>
          <pre><code>{`Review this code for:
1. Performance issues
2. Security vulnerabilities
3. Best practices violations
4. Potential bugs
5. Architecture concerns

Code:
[paste code here]

Context:
- Language/Framework: [specify]
- Performance requirements: [specify]
- Security requirements: [specify]`}</code></pre>

          <h4>💡 Pattern Analysis</h4>
          <pre><code>{`Analyze this code for design patterns:

Code:
[paste code here]

Provide:
1. Identified patterns
2. Potential improvements
3. Alternative approaches
4. Refactoring suggestions
5. Maintainability impact`}</code></pre>
        </div>
      </BlogSection>

      <BlogSection id="testing" title="Testing & Debugging">
        <h3>1. Test Generation</h3>
        
        <div className="prompt-example">
          <h4>✨ Unit Test Creation</h4>
          <pre><code>{`Generate unit tests for this function:
[paste function code]

Requirements:
1. Use [test framework]
2. Include edge cases
3. Mock external dependencies
4. Test error scenarios
5. Achieve >90% coverage

Additional:
- Include setup/teardown
- Use test descriptions that follow [convention]`}</code></pre>

          <h4>💡 Debug Assistant</h4>
          <pre><code>{`Help debug this issue:

Code:
[paste relevant code]

Error:
[paste error message/stack trace]

Context:
- Expected behavior: [description]
- Actual behavior: [description]
- Environment: [details]
- Recent changes: [if any]`}</code></pre>
        </div>
      </BlogSection>

      <BlogSection id="architecture" title="Architecture & Design">
        <h3>1. System Design</h3>
        
        <div className="prompt-example">
          <h4>✨ Architecture Planning</h4>
          <pre><code>{`Help design a system with these requirements:

Functional Requirements:
1. [list key features]
2. [performance needs]
3. [scalability requirements]

Technical Context:
- Current stack: [details]
- Integration points: [list]
- Constraints: [any limitations]

Deliverables:
1. High-level architecture
2. Component breakdown
3. Data flow diagram
4. API design
5. Security considerations`}</code></pre>
        </div>

        <InfoBox type="tip" title="Architecture Prompts">
          <p>
            Break down complex architecture questions into smaller, focused prompts for better results.
          </p>
        </InfoBox>
      </BlogSection>

      <BlogSection id="best-practices" title="Best Practices">
        <h3>Guidelines for Effective Prompts</h3>
        
        <div className="best-practices-grid">
          <div className="practice-card">
            <h4>1. Be Specific</h4>
            <ul>
              <li>Define exact requirements</li>
              <li>Specify programming language</li>
              <li>Mention frameworks/libraries</li>
              <li>Include version numbers</li>
            </ul>
          </div>

          <div className="practice-card">
            <h4>2. Provide Context</h4>
            <ul>
              <li>Explain the broader system</li>
              <li>Share relevant constraints</li>
              <li>Mention existing patterns</li>
              <li>Describe user requirements</li>
            </ul>
          </div>

          <div className="practice-card">
            <h4>3. Use Templates</h4>
            <ul>
              <li>Create reusable structures</li>
              <li>Standardize common requests</li>
              <li>Include all necessary sections</li>
              <li>Maintain consistency</li>
            </ul>
          </div>

          <div className="practice-card">
            <h4>4. Iterate & Refine</h4>
            <ul>
              <li>Start with basic prompts</li>
              <li>Add details as needed</li>
              <li>Learn from responses</li>
              <li>Maintain prompt library</li>
            </ul>
          </div>
        </div>
      </BlogSection>

      <BlogSection id="examples" title="Real-World Examples">
        <h3>Complete Prompt Examples</h3>

        <div className="example-card">
          <h4>1. API Endpoint Implementation</h4>
          <pre><code>{`Create a TypeScript Express endpoint for user registration:

Requirements:
- Email & password validation
- Password hashing with bcrypt
- JWT token generation
- Rate limiting
- Input sanitization

Error Handling:
- Duplicate email
- Invalid input
- Database errors

Response Format:
- Success: { user, token }
- Error: { error, message }

Include:
- Type definitions
- Middleware
- Unit tests
- Swagger documentation`}</code></pre>
        </div>

        <div className="example-card">
          <h4>2. React Component Refactoring</h4>
          <pre><code>{`Refactor this React component for better performance:

Component:
[paste component code]

Goals:
1. Optimize re-renders
2. Implement proper hooks
3. Extract reusable logic
4. Add proper TypeScript types
5. Improve state management

Current Issues:
- Excessive re-renders
- Prop drilling
- Memory leaks
- Type any usage

Additional Requirements:
- Use functional components
- Follow React best practices
- Add error boundaries
- Include performance tests`}</code></pre>
        </div>
      </BlogSection>

      <BlogSection id="conclusion" title="Conclusion">
        <p>
          Effective prompt engineering is a crucial skill for modern developers. By following these patterns and
          practices, you can significantly improve your productivity and code quality. Remember to:
        </p>

        <ul>
          <li>Start with clear, specific prompts</li>
          <li>Provide relevant context</li>
          <li>Iterate and refine based on results</li>
          <li>Build a library of effective prompts</li>
          <li>Share and collaborate with your team</li>
        </ul>

        <div className="next-steps">
          <h3>Further Reading</h3>
          <div className="related-links">
            <Link to="/prompt-engineering/intermediate" className="related-link">
              Advanced Prompt Engineering Patterns →
            </Link>
            <Link to="/prompt-engineering/advanced" className="related-link">
              System Design with LLMs →
            </Link>
          </div>
        </div>
      </BlogSection>
    </BlogTemplate>
  );
};

export default DeveloperPromptGuide;