import React, { useState } from 'react';
import './LLMComparisonTool.css';

interface ModelFeature {
  name: string;
  description: string;
  metrics: {
    [key: string]: string | number | boolean;
  };
}

const modelFeatures: ModelFeature[] = [
  {
    name: 'GPT-4 Turbo',
    description: 'Latest GPT-4 model with extended context and updated knowledge',
    metrics: {
      contextWindow: 128000,
      multimodal: true,
      openSource: false,
      localDeployment: false,
      finetuning: true,
      updateFrequency: 'Quarterly',
      costPerformanceRatio: 4,
      enterpriseSupport: true,
    }
  },
  {
    name: 'Claude 3 Opus',
    description: 'Advanced model with constitutional AI and extended context',
    metrics: {
      contextWindow: 200000,
      multimodal: true,
      openSource: false,
      localDeployment: false,
      finetuning: false,
      updateFrequency: 'Monthly',
      costPerformanceRatio: 4.5,
      enterpriseSupport: true,
    }
  },
  {
    name: 'Gemini Ultra',
    description: 'Google\'s flagship multimodal model',
    metrics: {
      contextWindow: 128000,
      multimodal: true,
      openSource: false,
      localDeployment: true,
      finetuning: true,
      updateFrequency: 'Quarterly',
      costPerformanceRatio: 4,
      enterpriseSupport: true,
    }
  },
  {
    name: 'Llama 3',
    description: 'Meta\'s latest open-source model',
    metrics: {
      contextWindow: 128000,
      multimodal: true,
      openSource: true,
      localDeployment: true,
      finetuning: true,
      updateFrequency: 'Semi-annual',
      costPerformanceRatio: 5,
      enterpriseSupport: false,
    }
  },
  {
    name: 'Mixtral 8x7B',
    description: 'Mistral\'s mixture of experts model',
    metrics: {
      contextWindow: 32000,
      multimodal: false,
      openSource: true,
      localDeployment: true,
      finetuning: true,
      updateFrequency: 'Quarterly',
      costPerformanceRatio: 4.5,
      enterpriseSupport: true,
    }
  }
];

interface Props {
  className?: string;
}

const LLMComparisonTool: React.FC<Props> = ({ className }) => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [focusMetric, setFocusMetric] = useState<string>('contextWindow');

  const metrics = {
    contextWindow: 'Context Window',
    multimodal: 'Multimodal Support',
    openSource: 'Open Source',
    localDeployment: 'Local Deployment',
    finetuning: 'Fine-tuning Support',
    updateFrequency: 'Update Frequency',
    costPerformanceRatio: 'Cost/Performance Ratio',
    enterpriseSupport: 'Enterprise Support'
  };

  const toggleModel = (modelName: string) => {
    if (selectedModels.includes(modelName)) {
      setSelectedModels(selectedModels.filter(m => m !== modelName));
    } else {
      setSelectedModels([...selectedModels, modelName]);
    }
  };

  return (
    <div className={`llm-comparison-tool ${className || ''}`}>
      <h3>Interactive Model Comparison</h3>

      <div className="model-selection">
        <h4>Select Models to Compare</h4>
        <div className="model-checkboxes">
          {modelFeatures.map(model => (
            <label key={model.name} className="model-checkbox">
              <input
                type="checkbox"
                checked={selectedModels.includes(model.name)}
                onChange={() => toggleModel(model.name)}
              />
              {model.name}
            </label>
          ))}
        </div>
      </div>

      <div className="metric-focus">
        <h4>Focus Metric</h4>
        <select
          value={focusMetric}
          onChange={(e) => setFocusMetric(e.target.value)}
        >
          {Object.entries(metrics).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {selectedModels.length > 0 && (
        <div className="comparison-results">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                {selectedModels.map(model => (
                  <th key={model}>{model}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(metrics).map(([key, label]) => (
                <tr key={key} className={key === focusMetric ? 'highlight-row' : ''}>
                  <td>{label}</td>
                  {selectedModels.map(modelName => {
                    const model = modelFeatures.find(m => m.name === modelName);
                    const value = model?.metrics[key];
                    return (
                      <td key={`${modelName}-${key}`}>
                        {typeof value === 'boolean' ? 
                          (value ? '✓' : '✗') : 
                          value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedModels.length > 0 && (
        <div className="model-descriptions">
          <h4>Model Descriptions</h4>
          {selectedModels.map(modelName => {
            const model = modelFeatures.find(m => m.name === modelName);
            return (
              <div key={modelName} className="model-description">
                <h5>{modelName}</h5>
                <p>{model?.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LLMComparisonTool;