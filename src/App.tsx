import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initGA } from './utils/analytics';
import usePageTracking from './hooks/usePageTracking';
import Navbar from './components/Navbar';

// Fundamentals
import LLMIntroduction from './pages/blogs/llm-fundamentals/introduction';
import ChatGPTBlogGuide from './pages/blogs/llm-fundamentals/chatgpt-guide';
import LLMCapabilities from './pages/blogs/llm-fundamentals/capabilities';
import DeveloperQuickStart from './pages/blogs/llm-fundamentals/developer-quick-start';
import LLMGettingStartedGuide from './pages/blogs/llm-fundamentals/llm-getting-started-guide/llm-getting-started-guide';
import LLMTechnologyGuide from "./pages/blogs/llm-fundamentals/llm-terms-guide/llm-technology-guide";
import OpenAIApiGuide from './pages/blogs/advance/openai-api-guide/openai-api-guide';
import OpenRouterPlatformGuide from "./pages/blogs/llm-fundamentals/openrouter-platform-guide/openrouter-platform-guide";

// LLM Models
import ChatGPTModelGuide from './pages/blogs/llm-models/chatgpt';
import ClaudeModelGuide from './pages/blogs/llm-models/claude';
import GeminiModelGuide from './pages/blogs/llm-models/gemini';
import GrokModelGuide from './pages/blogs/llm-models/grok';
import DeepSeekModelGuide from './pages/blogs/llm-models/deepseek';
import MistralModelGuide from './pages/blogs/llm-models/mistral';
import LlamaModelGuide from './pages/blogs/llm-models/llama';
import ManusModelGuide from './pages/blogs/llm-models/manus';
import LLMModelComparison from './pages/blogs/llm-models/llm-model-comparison/llm-model-comparison';

// Prompt Engineering
import PromptEngineeringBasics from './pages/blogs/prompt-engineering/basics';
import PromptEngineeringIntermediate from './pages/blogs/prompt-engineering/intermediate';
import PromptEngineeringAdvanced from './pages/blogs/prompt-engineering/advanced';
import DeveloperPromptGuide from './pages/blogs/prompt-engineering/developer-prompts';

// Agents
import LLMAgent from './pages/blogs/agents/llm-agent-guide/LLMAgent';
import BuildingLLMAgent from './pages/blogs/agents/llm-agent-guide/BuildingLLMAgent';
import BasicLLMAgent from './pages/blogs/llm-fundamentals/BasicLLMAgent';
import LLMAgentGuide from './pages/blogs/agents/llm-agent-guide/llm-agent-guide';
import BookBuddy from './pages/blogs/agents/BookBuddy';
import AthleteInsightAI from './pages/blogs/agents/AthleteInsightAI';
import MarketMindAI from './pages/blogs/agents/MarketMindAI';

// AI-Driven IT
import DeveloperEfficiency from './pages/blogs/ai-driven-it/developer-efficiency';
import CodeMigrationLLM from './pages/blogs/ai-driven-it/code-migration';
import EnterpriseIntegrations from './pages/blogs/ai-driven-it/enterprise-integrations';
import AIItTransformation from './pages/blogs/ai-driven-it/ai-transformation';

// Advanced Techniques
import RAGTutorial from './pages/blogs/advance/rag-tutorial/rag-tutorial';
import VectorDatabaseGuide from './pages/blogs/advance/vector-database-guide/vector-llm-guide';
import ModelContextServer from './pages/blogs/advance/model-context-server/model-context-server';

// Tools & Framework
import AITools from './pages/blogs/ai-tools/AITools';
import Resources from './pages/blogs/ai-tools/Resources';
import LangchainIntroduction from './pages/blogs/advance/langchain-introduction/langchain-introduction';
import CursorCustomWorkflows from './pages/blogs/advance/cursor-custom-workflows/cursor-custom-workflows';

// Other Pages
import About from './pages/blogs/about';
import Community from './pages/blogs/roadmap/community';

import './App.css';
import HomePage from "./pages/HomePage";

// Initialize Google Analytics if measurement ID is available
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  initGA(GA_MEASUREMENT_ID);
}

// Wrapper component to use hooks within Router context
const AppContent: React.FC = () => {
  usePageTracking();

  return (
    <div className="App">
      <Navbar />
      <main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<HomePage />} />

          {/* Fundamentals */}
          <Route path="/blogs/fundamentals" element={<LLMIntroduction />} />
          <Route path="/blogs/fundamentals/introduction" element={<LLMIntroduction />} />
          <Route path="/blogs/fundamentals/getting-started" element={<LLMGettingStartedGuide />} />
          <Route path="/blogs/fundamentals/terminology" element={<LLMTechnologyGuide />} />
          <Route path="/blogs/fundamentals/openai-api" element={<OpenAIApiGuide />} />
          <Route path="/blogs/fundamentals/openrouter" element={<OpenRouterPlatformGuide />} />
          <Route path="/blogs/fundamentals/developer-start" element={<DeveloperQuickStart />} />
          <Route path="/blogs/fundamentals/chatgpt-guide" element={<ChatGPTBlogGuide />} />
          <Route path="/blogs/fundamentals/capabilities" element={<LLMCapabilities />} />

          {/* LLM Models */}
          <Route path="/blogs/models" element={<ChatGPTModelGuide />} />
          <Route path="/blogs/models/chatgpt" element={<ChatGPTModelGuide />} />
          <Route path="/blogs/models/claude" element={<ClaudeModelGuide />} />
          <Route path="/blogs/models/gemini" element={<GeminiModelGuide />} />
          <Route path="/blogs/models/grok" element={<GrokModelGuide />} />
          <Route path="/blogs/models/deepseek" element={<DeepSeekModelGuide />} />
          <Route path="/blogs/models/mistral" element={<MistralModelGuide />} />
          <Route path="/blogs/models/llama" element={<LlamaModelGuide />} />
          <Route path="/blogs/models/manus" element={<ManusModelGuide />} />
          <Route path="/blogs/models/comparison" element={<LLMModelComparison />} />

          {/* Prompt Engineering */}
          <Route path="/blogs/prompts" element={<PromptEngineeringBasics />} />
          <Route path="/blogs/prompts/basics" element={<PromptEngineeringBasics />} />
          <Route path="/blogs/prompts/intermediate" element={<PromptEngineeringIntermediate />} />
          <Route path="/blogs/prompts/advanced" element={<PromptEngineeringAdvanced />} />
          <Route path="/blogs/prompts/developer-guide" element={<DeveloperPromptGuide />} />

          {/* Agents */}
          <Route path="/blogs/agents" element={<LLMAgent />} />
          <Route path="/blogs/agents/introduction" element={<LLMAgent />} />
          <Route path="/blogs/agents/building-guide" element={<BuildingLLMAgent />} />
          <Route path="/blogs/agents/basics" element={<BasicLLMAgent />} />
          <Route path="/blogs/agents/complete-guide" element={<LLMAgentGuide />} />
          <Route path="/blogs/agents/marketmind" element={<MarketMindAI />} />
          <Route path="/blogs/agents/athlete-insight" element={<AthleteInsightAI />} />
          <Route path="/blogs/agents/bookbuddy" element={<BookBuddy />} />

          {/* AI-Driven IT */}
          <Route path="/blogs/ai-it" element={<DeveloperEfficiency />} />
          <Route path="/blogs/ai-it/developer-efficiency" element={<DeveloperEfficiency />} />
          <Route path="/blogs/ai-it/code-migration" element={<CodeMigrationLLM />} />
          <Route path="/blogs/ai-it/enterprise-integrations" element={<EnterpriseIntegrations />} />
          <Route path="/blogs/ai-it/transformation" element={<AIItTransformation />} />

          {/* Advanced Techniques */}
          <Route path="/blogs/advanced/rag-tutorial" element={<RAGTutorial />} />
          <Route path="/blogs/advanced/vector-databases" element={<VectorDatabaseGuide />} />
          <Route path="/blogs/advanced/context-server" element={<ModelContextServer />} />

          {/* Tools & Frameworks */}
          <Route path="/blogs/tools/overview" element={<AITools />} />
          <Route path="/blogs/tools/resources" element={<Resources />} />
          <Route path="/blogs/tools/langchain" element={<LangchainIntroduction />} />
          <Route path="/blogs/tools/cursor-workflows" element={<CursorCustomWorkflows />} />

          {/* Catch all route for 404 pages - keep at bottom */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;