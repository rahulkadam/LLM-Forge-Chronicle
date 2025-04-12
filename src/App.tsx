import DeveloperEfficiency from './pages/blogs/ai-driven-it/developer-efficiency';
import CodeMigrationLLM from './pages/blogs/ai-driven-it/code-migration';
import EnterpriseIntegrations from './pages/blogs/ai-driven-it/enterprise-integrations';
import GrokModelGuide from './pages/blogs/llm-models/grok';
import AIItTransformation from './pages/blogs/ai-driven-it/ai-transformation';
import DeepSeekModelGuide from './pages/blogs/llm-models/deepseek';
import MistralModelGuide from './pages/blogs/llm-models/mistral';
import LlamaModelGuide from './pages/blogs/llm-models/llama';
import ManusModelGuide from './pages/blogs/llm-models/manus';
import DeveloperPromptGuide from './pages/blogs/prompt-engineering/developer-prompts';

import ChatGPTModelGuide from './pages/blogs/llm-models/chatgpt';
import ClaudeModelGuide from './pages/blogs/llm-models/claude';
import GeminiModelGuide from './pages/blogs/llm-models/gemini';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initGA } from './utils/analytics';
import usePageTracking from './hooks/usePageTracking';
import Navbar from './components/Navbar';
import About from './pages/blogs/about';
import AITutorial from './pages/blogs/ai-tools/AITutorial';
import LLMAgent from './pages/blogs/llm-agent-guide/LLMAgent';
import BuildingLLMAgent from './pages/blogs/llm-agent-guide/BuildingLLMAgent';
import BasicLLMAgent from './pages/blogs/llm-fundamentals/BasicLLMAgent';
import Foundation from './pages/blogs/roadmap/foundation';
import PythonModule from './pages/blogs/roadmap/python-module';
import Professional from './pages/blogs/roadmap/Professional';
import Expert from './pages/blogs/roadmap/Expert';
import GettingStarted from './pages/blogs/getting-started';
import AITools from './pages/blogs/ai-tools/AITools';
import PromptEngineeringBasics from './pages/blogs/prompt-engineering/basics';
import PromptEngineeringIntermediate from './pages/blogs/prompt-engineering/intermediate';
import PromptEngineeringAdvanced from './pages/blogs/prompt-engineering/advanced';
import Resources from './pages/blogs/ai-tools/Resources';
import LLMTechnical from './pages/blogs/llm-agent-guide/LLMTechnical';
import ProfessionalExample from './pages/blogs/roadmap/ProfessionalExample';
import Community from './pages/blogs/community';
import BlogsPage from './pages/blogs/BlogsPage';
import OpenAIApiGuide from './pages/blogs/openai-api-guide/openai-api-guide';
import OpenRouterPlatformGuide from "./pages/blogs/openrouter-platform-guide/openrouter-platform-guide";
import LLMTechnologyGuide from "./pages/blogs/llm-terms-guide/llm-technology-guide";
import LLMAgentGuide from './pages/blogs/llm-agent-guide/llm-agent-guide';
import LLMGettingStartedGuide from './pages/blogs/llm-getting-started-guide/llm-getting-started-guide';
import RAGTutorial from './pages/blogs/rag-tutorial/rag-tutorial';
import LangchainIntroduction from './pages/blogs/langchain-introduction/langchain-introduction';
import CursorCustomWorkflows from './pages/blogs/cursor-custom-workflows/cursor-custom-workflows';
import ModelContextServer from './pages/blogs/model-context-server/model-context-server';
import LLMModelComparison from './pages/blogs/llm-model-comparison/llm-model-comparison';
import VectorDatabaseGuide from './pages/blogs/vector-database-guide/vector-llm-guide';

// Updated agent imports
import BookBuddy from './pages/blogs/agents/BookBuddy';
import AthleteInsightAI from './pages/blogs/agents/AthleteInsightAI';
import MarketMindAI from './pages/blogs/agents/MarketMindAI';

import DeveloperQuickStart from './pages/blogs/llm-fundamentals/developer-quick-start';
import LLMFundamentals from './pages/blogs/llm-fundamentals';

// Import blog-formatted components
import LLMIntroduction from './pages/blogs/llm-fundamentals/introduction';
import ChatGPTBlogGuide from './pages/blogs/llm-fundamentals/chatgpt-guide';
import LLMCapabilities from './pages/blogs/llm-fundamentals/capabilities';

import './App.css';

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
          <Route path="/" element={<OpenAIApiGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-tutorial" element={<AITutorial />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/python-module" element={<PythonModule />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/llm-agent" element={<LLMAgent />} />
          <Route path="/llm-agent/building" element={<BuildingLLMAgent />} />
          <Route path="/llm-agent/basic" element={<BasicLLMAgent />} />
          <Route path="/llm-technical" element={<LLMTechnical />} />
          <Route path="/BuildingLLMAgent" element={<BuildingLLMAgent />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/roadmap" element={<Navigate to="/getting-started" replace />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/prompt-engineering" element={<PromptEngineeringBasics />} />
          <Route path="/prompt-engineering/intermediate" element={<PromptEngineeringIntermediate />} />
          <Route path="/prompt-engineering/advanced" element={<PromptEngineeringAdvanced />} />
          
          {/* New routes */}
          <Route path="/llm-fundamentals" element={<LLMFundamentals />} />
          <Route path="/llm-fundamentals/chatgpt-guide" element={<ChatGPTBlogGuide />} />
          <Route path="/llm-fundamentals/developer-quick-start" element={<DeveloperQuickStart />} />
          <Route path="/professional-example" element={<ProfessionalExample />} />
          <Route path="/professional/example" element={<ProfessionalExample />} />
          <Route path="/community" element={<Community />} />
          
          {/* Blog routes */}
          <Route path="/blogs/openai-api-guide" element={<OpenAIApiGuide />} />
          <Route path="/blogs/openrouter-platform-guide" element={<OpenRouterPlatformGuide />} />
          <Route path="/blogs/llm-technology-guide" element={<LLMTechnologyGuide />} />
          <Route path="/blogs/llm-agent-guide" element={<LLMAgentGuide />} />
          <Route path="/blogs/llm-getting-started-guide" element={<LLMGettingStartedGuide />} />
          <Route path="/blogs/rag-tutorial" element={<RAGTutorial />} />
          <Route path="/blogs/langchain-introduction" element={<LangchainIntroduction />} />
          <Route path="/blogs/cursor-custom-workflows" element={<CursorCustomWorkflows />} />
          <Route path="/blogs/model-context-server" element={<ModelContextServer />} />
          <Route path="/blogs/llm-model-comparison" element={<LLMModelComparison />} />
          <Route path="/blogs/vector-database-guide/vector-llm-guide" element={<VectorDatabaseGuide />} />
          <Route path="/blogs/prompt-engineering/developer-prompts" element={<DeveloperPromptGuide />} />
          
          {/* LLM Model Guides */}
          <Route path="/blogs/llm-models/chatgpt" element={<ChatGPTModelGuide />} />
          <Route path="/blogs/llm-models/claude" element={<ClaudeModelGuide />} />
          <Route path="/blogs/llm-models/gemini" element={<GeminiModelGuide />} />
          <Route path="/blogs/ai-driven-it/developer-efficiency" element={<DeveloperEfficiency />} />
          <Route path="/blogs/ai-driven-it/code-migration" element={<CodeMigrationLLM />} />
          <Route path="/blogs/ai-driven-it/enterprise-integrations" element={<EnterpriseIntegrations />} />
          <Route path="/blogs/ai-driven-it/ai-transformation" element={<AIItTransformation />} />
          <Route path="/blogs/llm-models/grok" element={<GrokModelGuide />} />
          <Route path="/blogs/llm-models/deepseek" element={<DeepSeekModelGuide />} />
          <Route path="/blogs/llm-models/mistral" element={<MistralModelGuide />} />
          <Route path="/blogs/llm-models/llama" element={<LlamaModelGuide />} />
          <Route path="/blogs/llm-models/manus" element={<ManusModelGuide />} />
          
          {/* LLM Fundamentals using new blog format */}
          <Route path="/ai-basics" element={<LLMIntroduction />} />
          <Route path="/llm-agent" element={<LLMCapabilities />} />
          <Route path="/ai-basics/chatgpt-guide" element={<ChatGPTBlogGuide />} />
          
          {/* Keep old routes temporarily for backward compatibility */}
          <Route path="/ai-basics/prompt-basics" element={<PromptEngineeringBasics />} />
          <Route path="/ai-basics/examples" element={<LLMCapabilities />} />

          {/* Updated agent routes */}
          <Route path="/blogs/agents/marketmind" element={<MarketMindAI />} />
          <Route path="/blogs/agents/athlete-insight" element={<AthleteInsightAI />} />
          <Route path="/blogs/agents/bookbuddy" element={<BookBuddy />} />

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