import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { initGA } from './utils/analytics';
import usePageTracking from './hooks/usePageTracking';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tutorial from './pages/Tutorial';
import AITutorial from './pages/AITutorial';
import LLMAgent from './pages/LLMAgent';
import BuildingLLMAgent from './pages/BuildingLLMAgent';
import BasicLLMAgent from './pages/BasicLLMAgent';
import Foundation from './pages/foundation';
import PythonModule from './pages/python-module';
import Professional from './pages/Professional';
import Expert from './pages/Expert';
import Roadmap from './pages/Roadmap';
import AITools from './pages/AITools';
import PromptEngineering from './pages/PromptEngineering';
import Resources from './pages/Resources';
import LLMTechnical from './pages/LLMTechnical';
import ProfessionalExample from './pages/ProfessionalExample';
import Community from './pages/Community';
import Blogs from './pages/Blogs';
import OpenAIConnectionGuide from './pages/blogs/openai-connection-guide';
import OpenRouterIntroduction from "./pages/blogs/openrouter-introduction";
import LLMTerminology from "./pages/blogs/llm-terminology";
import LLMAgentSimplified from './pages/blogs/llm-agent-simplified';

// Import renamed components
import LLMFundamentals from './pages/llm-fundamentals';
import ChatGPTGuide from './pages/llm-fundamentals/chatgpt-guide';

// Original components for redirection
import AIBasics from './pages/ai-basics';
import OldChatGPTGuide from './pages/ai-basics/chatgpt-guide';
import PromptBasics from './pages/ai-basics/prompt-basics';
import Examples from './pages/ai-basics/examples';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorial" element={<Tutorial />} />
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
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/ai-tools" element={<AITools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/prompt-engineering" element={<PromptEngineering />} />
          
          {/* New routes */}
          <Route path="/llm-fundamentals" element={<LLMFundamentals />} />
          <Route path="/llm-fundamentals/chatgpt-guide" element={<ChatGPTGuide />} />
          <Route path="/professional-example" element={<ProfessionalExample />} />
          <Route path="/professional/example" element={<ProfessionalExample />} />
          <Route path="/community" element={<Community />} />
          
          {/* Blog routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/openai-connection-guide" element={<OpenAIConnectionGuide />} />
          <Route path="/blogs/openrouter-introduction" element={<OpenRouterIntroduction />} />
          <Route path="/blogs/llm-terminology" element={<LLMTerminology />} />
          <Route path="/blogs/llm-agent-simplified" element={<LLMAgentSimplified />} />
          
          {/* Redirects from old routes to new routes */}
          <Route path="/ai-basics" element={<Navigate to="/llm-fundamentals" replace />} />
          <Route path="/ai-basics/chatgpt-guide" element={<Navigate to="/llm-fundamentals/chatgpt-guide" replace />} />
          
          {/* Keep old routes temporarily for backward compatibility */}
          <Route path="/ai-basics/old" element={<AIBasics />} />
          <Route path="/ai-basics/chatgpt-guide/old" element={<OldChatGPTGuide />} />
          <Route path="/ai-basics/prompt-basics" element={<PromptBasics />} />
          <Route path="/ai-basics/examples" element={<Examples />} />
        </Routes>
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