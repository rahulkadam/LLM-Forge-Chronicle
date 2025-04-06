# BookBuddy Agent Python Implementation

This is the Python implementation of the BookBuddy agent that uses OpenAI's GPT models to provide intelligent book recommendations.

## Features

- OpenAI GPT-4/3.5 integration for smart recommendations
- Preference extraction from natural language
- Robust error handling and retries
- Input validation and response processing
- Async support for better performance
- Type hints for better code maintainability

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up your OpenAI API key:
```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Usage

Basic usage:

```python
from bookbuddy_agent import BookBuddyAgent
import asyncio

async def get_recommendations():
    agent = BookBuddyAgent(api_key='your-api-key')
    recommendations = await agent.get_recommendations(
        "I want to learn about quantum computing for beginners"
    )
    return recommendations

# Run the async function
recommendations = asyncio.run(get_recommendations())
```

## Implementation Details

### LLM Integration

The agent uses OpenAI's Chat Completion API with the following features:

1. System Prompt:
   - Sets the context as an expert librarian
   - Defines the response format
   - Establishes recommendation criteria

2. User Prompt:
   - Formats the user's request
   - Adds specific instructions for recommendation quality
   - Requests JSON formatted response

3. Response Processing:
   - Validates JSON structure
   - Ensures required fields are present
   - Formats recommendations consistently

### Error Handling

- Retry mechanism for API calls
- Input validation
- Response format verification
- Exception handling with meaningful messages

### Type Safety

Uses TypedDict and dataclasses for better type safety:

```python
class Book(TypedDict):
    title: str
    author: str
    description: str
    genre: Optional[str]
    rating: Optional[float]

class BookRecommendation(Book):
    reason: str
```

## Example Response

```python
[
    {
        "title": "Quantum Computing for Beginners",
        "author": "Example Author",
        "description": "An accessible introduction to quantum computing",
        "genre": "Science",
        "reason": "Perfect for beginners in quantum computing, uses clear explanations"
    },
    # ... more recommendations
]
```

## Best Practices

1. Always use environment variables for API keys
2. Implement proper error handling
3. Use type hints for better code maintenance
4. Include retry logic for API calls
5. Validate API responses before processing