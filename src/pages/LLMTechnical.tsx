import React from 'react';
import '../styles/LLMTechnical.css';

const LLMTechnical: React.FC = () => {
  return (
    <div className="technical-page">
      <section className="tech-hero">
        <h1>Understanding LLMs: A Technical Deep Dive</h1>
        <p className="subtitle">
          Discover how Large Language Models work under the hood, from architecture to deployment
        </p>
      </section>

      <section className="evolution">
        <h2>The Evolution of Language Models</h2>
        <div className="evolution-content">
          <div className="evolution-text">
            <p>
              The journey of language models began with simple statistical approaches and has evolved into 
              today's sophisticated neural architectures. This evolution represents not just technological 
              advancement, but a fundamental shift in how we approach machine understanding of language.
            </p>
          </div>
          
          <div className="milestone">
            <h3>The Birth of Neural Language Models</h3>
            <p>
              Early language models relied on counting word frequencies and simple probability distributions. 
              The breakthrough came with Word2Vec (2013), which introduced the concept of word embeddings - 
              representing words as dense vectors in a continuous space. This was revolutionary because it 
              captured semantic relationships between words: similar words had similar vector representations.
            </p>
            <div className="example-box">
              <h4>Word Embeddings Example</h4>
              <p>
                In the vector space, relationships emerge naturally:<br />
                King - Man + Woman ≈ Queen<br />
                Paris - France + Italy ≈ Rome
              </p>
              <p className="explanation">
                These relationships aren't programmed explicitly but emerge from the training data, 
                showing how the model learns semantic connections.
              </p>
            </div>
          </div>

          <div className="milestone">
            <h3>The Transformer Revolution</h3>
            <p>
              The introduction of the Transformer architecture in 2017 was a pivotal moment. Unlike previous 
              models that processed text sequentially, Transformers can process entire sequences in parallel 
              and capture long-range dependencies more effectively.
            </p>
            <div className="architecture-diagram">
              <div className="diagram-content">
                <h4>Key Innovation: Self-Attention</h4>
                <p>
                  Self-attention allows each word to directly interact with every other word in the sequence. 
                  For example, in the sentence "The animal didn't cross the street because it was too wide":
                </p>
                <ul className="attention-example">
                  <li>Traditional models struggled to connect "it" with "street"</li>
                  <li>Self-attention creates direct connections between related words</li>
                  <li>The model can learn which connections are important for understanding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technical-deep-dive">
        <h2>How LLMs Actually Work</h2>
        
        <div className="concept">
          <h3>The Training Process</h3>
          <p>
            Training a large language model is similar to teaching a child to complete sentences, but at a 
            massive scale. The model learns patterns from billions of examples, adjusting its understanding 
            through a process called backpropagation.
          </p>
          
          <div className="example-box">
            <h4>Training Example</h4>
            <div className="training-step">
              <p className="input">Input: "The capital of France is"</p>
              <p className="prediction">Initial Prediction: "London" (wrong)</p>
              <p className="correction">Correct Answer: "Paris"</p>
              <p className="learning">The model adjusts its parameters to make "Paris" more likely next time</p>
            </div>
          </div>

          <div className="technical-explanation">
            <h4>Behind the Scenes</h4>
            <p>
              During training, the model isn't just memorizing answers. It's learning to:
            </p>
            <ol>
              <li>
                <strong>Recognize Patterns:</strong> Understanding that capital cities often follow 
                "The capital of [Country] is" pattern.
              </li>
              <li>
                <strong>Build Hierarchical Understanding:</strong> Learning that Paris is not just a city, 
                but a capital city, located in France, with specific attributes.
              </li>
              <li>
                <strong>Form Neural Pathways:</strong> Creating and strengthening connections between 
                related concepts through repeated exposure and correction.
              </li>
            </ol>
          </div>
        </div>

        <div className="concept">
          <h3>The Role of GPU Computing</h3>
          <p>
            GPUs are crucial for LLM training because they excel at parallel matrix operations. Think of it 
            like reading a book: while a CPU reads one word at a time, a GPU can scan entire pages simultaneously.
          </p>
          
          <div className="gpu-explanation">
            <h4>Why Matrix Operations Matter</h4>
            <p>
              When processing the sentence "The cat sat on the mat", the model needs to:
            </p>
            <div className="matrix-example">
              <pre>{`
Word Embedding Matrix:
"the" → [0.2, -0.5, 0.1, ...]  (768 dimensions)
"cat" → [0.8, 0.3, -0.4, ...]
"sat" → [-0.1, 0.7, 0.2, ...]
              `}</pre>
              <p>
                A GPU can process these high-dimensional vectors simultaneously, making thousands of 
                calculations in parallel. This is why training that would take years on a CPU takes 
                days or weeks on modern GPU clusters.
              </p>
            </div>
          </div>
        </div>

        <div className="concept">
          <h3>From Training to Inference</h3>
          <p>
            Once trained, deploying an LLM involves careful optimization to make it practical for real-world use. 
            This is where techniques like quantization and caching become crucial.
          </p>
          
          <div className="optimization-example">
            <h4>Model Optimization Techniques</h4>
            <div className="technique-explanation">
              <h5>Quantization</h5>
              <p>
                Original model weights might use 32 bits per number (FP32). Through quantization, we can 
                reduce this to 8 bits (INT8) while maintaining most of the accuracy. This makes the model 
                4x smaller and faster.
              </p>
              <pre>{`
FP32: 1.2347893 → INT8: 123
Memory: 32 bits → 8 bits
Speed: 1x → ~4x faster
              `}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="practical-implications">
        <h2>Real-World Applications</h2>
        
        <div className="application">
          <h3>Building a Production LLM Service</h3>
          <p>
            Deploying LLMs in production requires careful consideration of infrastructure, scaling, and 
            cost management. Here's a practical example of handling user requests:
          </p>
          
          <div className="code-example">
            <h4>Request Flow Example</h4>
            <pre>{`
1. User Request:
   "Explain quantum computing"
   
2. Load Balancer:
   → Distributes to least busy server
   → Checks rate limits
   
3. Inference Server:
   → Tokenizes input: [token_ids]
   → Loads model weights from GPU memory
   → Generates response tokens
   → Streams back to user
   
4. Caching Layer:
   → Stores frequent responses
   → Reduces computation costs
            `}</pre>
          </div>
        </div>
      </section>

      <section className="future-outlook">
        <h2>The Road Ahead</h2>
        <div className="future-content">
          <p>
            The field of large language models is rapidly evolving. Current challenges being tackled include:
          </p>
          
          <div className="challenge">
            <h3>Efficient Training</h3>
            <p>
              Researchers are exploring techniques like sparse attention and mixture of experts to make 
              models more efficient. Instead of processing everything with the same intensity, these 
              approaches allow models to focus computational resources where they're most needed.
            </p>
            <div className="example-box">
              <h4>Sparse Attention Example</h4>
              <p>
                In a 1000-word document, traditional attention computes 1,000,000 interactions. 
                Sparse attention might compute only 10,000 key interactions while maintaining similar quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LLMTechnical;