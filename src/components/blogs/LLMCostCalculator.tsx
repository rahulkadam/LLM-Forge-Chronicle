import React, { useState, useEffect } from 'react';
import './LLMCostCalculator.css';

interface ModelCost {
  name: string;
  inputCost: number;
  outputCost: number;
  contextWindow: number;
}

const modelCosts: ModelCost[] = [
  { name: 'GPT-4 Turbo', inputCost: 0.01, outputCost: 0.03, contextWindow: 128000 },
  { name: 'GPT-4', inputCost: 0.03, outputCost: 0.06, contextWindow: 8000 },
  { name: 'Claude 3 Opus', inputCost: 0.015, outputCost: 0.075, contextWindow: 200000 },
  { name: 'Claude 3 Sonnet', inputCost: 0.003, outputCost: 0.015, contextWindow: 200000 },
  { name: 'Gemini Pro', inputCost: 0.0025, outputCost: 0.005, contextWindow: 32000 },
  { name: 'Mistral Large', inputCost: 0.002, outputCost: 0.008, contextWindow: 32000 },
];

interface Props {
  className?: string;
}

const LLMCostCalculator: React.FC<Props> = ({ className }) => {
  const [selectedModel, setSelectedModel] = useState<ModelCost>(modelCosts[0]);
  const [inputTokens, setInputTokens] = useState<number>(1000);
  const [outputTokens, setOutputTokens] = useState<number>(500);
  const [requestsPerDay, setRequestsPerDay] = useState<number>(100);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [monthlyCost, setMonthlyCost] = useState<number>(0);

  useEffect(() => {
    const costPerRequest = 
      (selectedModel.inputCost * inputTokens / 1000) +
      (selectedModel.outputCost * outputTokens / 1000);
    const dailyCost = costPerRequest * requestsPerDay;
    const monthly = dailyCost * 30;
    
    setTotalCost(costPerRequest);
    setMonthlyCost(monthly);
  }, [selectedModel, inputTokens, outputTokens, requestsPerDay]);

  return (
    <div className={`llm-cost-calculator ${className || ''}`}>
      <h3>LLM Cost Calculator</h3>
      
      <div className="calculator-grid">
        <div className="input-group">
          <label htmlFor="model-select">Model</label>
          <select
            id="model-select"
            value={selectedModel.name}
            onChange={(e) => {
              const model = modelCosts.find(m => m.name === e.target.value);
              if (model) setSelectedModel(model);
            }}
          >
            {modelCosts.map(model => (
              <option key={model.name} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="input-tokens">Input Tokens</label>
          <input
            id="input-tokens"
            type="number"
            min="1"
            value={inputTokens}
            onChange={(e) => setInputTokens(parseInt(e.target.value) || 0)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="output-tokens">Output Tokens</label>
          <input
            id="output-tokens"
            type="number"
            min="1"
            value={outputTokens}
            onChange={(e) => setOutputTokens(parseInt(e.target.value) || 0)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="requests-per-day">Requests per Day</label>
          <input
            id="requests-per-day"
            type="number"
            min="1"
            value={requestsPerDay}
            onChange={(e) => setRequestsPerDay(parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="cost-summary">
        <div className="cost-item">
          <span>Cost per Request:</span>
          <span className="cost-value">${totalCost.toFixed(4)}</span>
        </div>
        <div className="cost-item">
          <span>Estimated Monthly Cost:</span>
          <span className="cost-value">${monthlyCost.toFixed(2)}</span>
        </div>
      </div>

      <div className="model-info">
        <h4>Model Information</h4>
        <p>
          <strong>Context Window:</strong> {selectedModel.contextWindow.toLocaleString()} tokens
        </p>
        <p>
          <strong>Input Cost:</strong> ${selectedModel.inputCost}/1K tokens
        </p>
        <p>
          <strong>Output Cost:</strong> ${selectedModel.outputCost}/1K tokens
        </p>
      </div>
    </div>
  );
};

export default LLMCostCalculator;