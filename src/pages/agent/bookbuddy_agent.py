import os
from typing import List, Dict, TypedDict, Optional
from dataclasses import dataclass
import openai
from tenacity import retry, stop_after_attempt, wait_exponential

class Book(TypedDict):
    title: str
    author: str
    description: str
    genre: Optional[str]
    rating: Optional[float]

class BookRecommendation(Book):
    reason: str

@dataclass
class BookBuddyAgent:
    """
    An LLM-powered book recommendation agent using OpenAI's API.
    """
    api_key: str
    model: str = "gpt-4"  # Can be configured to use different models
    
    def __post_init__(self):
        openai.api_key = self.api_key

    @retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
    async def get_recommendations(self, user_input: str) -> List[BookRecommendation]:
        """
        Get book recommendations based on user input using OpenAI's API.
        
        Args:
            user_input: User's description of what they're looking for
            
        Returns:
            List of book recommendations
        """
        # Craft the prompt
        system_prompt = """You are an expert librarian and book recommendation agent.
        Analyze the user's request and recommend 3 books that best match their interests and preferences.
        Consider reading level, themes, and specific requirements mentioned.
        
        Format your response as a JSON array with exactly 3 books, each containing:
        - title: The book's title
        - author: The author's name
        - description: A brief description
        - genre: The primary genre
        - reason: Why this book matches the user's interests
        """

        user_prompt = f"""Based on the following request, recommend 3 books:
        "{user_input}"
        
        Remember to:
        1. Consider the user's specific interests and preferences
        2. Match the complexity level they're looking for
        3. Include a mix of well-known and possibly lesser-known books
        4. Explain why each book matches their interests
        
        Respond only with the JSON array of recommendations."""

        try:
            response = await openai.ChatCompletion.acreate(
                model=self.model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                temperature=0.7,
                max_tokens=1000,
                response_format={ "type": "json_object" }
            )

            # Extract and validate recommendations
            recommendations = response.choices[0].message.content
            return self._process_recommendations(recommendations)

        except Exception as e:
            print(f"Error getting recommendations: {e}")
            raise

    def _process_recommendations(self, llm_response: str) -> List[BookRecommendation]:
        """Process and validate the LLM response."""
        try:
            import json
            recs = json.loads(llm_response)
            
            # Ensure we have the expected structure
            if not isinstance(recs, dict) or 'recommendations' not in recs:
                raise ValueError("Invalid response format")
                
            recommendations = recs['recommendations']
            if not isinstance(recommendations, list):
                raise ValueError("Recommendations must be a list")

            # Validate each recommendation
            validated_recs = []
            for rec in recommendations:
                if not all(k in rec for k in ['title', 'author', 'description', 'reason']):
                    continue
                    
                validated_recs.append({
                    'title': rec['title'],
                    'author': rec['author'],
                    'description': rec['description'],
                    'genre': rec.get('genre', ''),
                    'reason': rec['reason']
                })

            return validated_recs[:3]  # Ensure we return at most 3 recommendations

        except json.JSONDecodeError:
            raise ValueError("Invalid JSON response from LLM")
        except Exception as e:
            raise ValueError(f"Error processing recommendations: {e}")

    @staticmethod
    def extract_preferences(user_input: str) -> Dict[str, List[str]]:
        """
        Extract reading preferences from user input.
        This can be used to validate/enhance LLM recommendations.
        """
        preferences = {
            'genres': [],
            'themes': [],
            'complexity': 'intermediate'
        }
        
        # Genre detection
        genre_keywords = {
            'fiction': ['fiction', 'novel', 'fantasy', 'sci-fi', 'mystery'],
            'non-fiction': ['non-fiction', 'biography', 'self-help', 'history'],
            'technical': ['technical', 'programming', 'science', 'academic'],
            'business': ['business', 'finance', 'management', 'leadership']
        }
        
        # Theme detection
        theme_keywords = {
            'educational': ['learn', 'study', 'understand', 'educational'],
            'practical': ['practical', 'hands-on', 'applied', 'tutorial'],
            'theoretical': ['theory', 'concepts', 'principles', 'academic'],
            'inspirational': ['inspiration', 'motivation', 'success', 'growth']
        }
        
        input_lower = user_input.lower()
        
        # Extract genres
        for genre, keywords in genre_keywords.items():
            if any(keyword in input_lower for keyword in keywords):
                preferences['genres'].append(genre)
        
        # Extract themes
        for theme, keywords in theme_keywords.items():
            if any(keyword in input_lower for keyword in keywords):
                preferences['themes'].append(theme)
        
        # Determine complexity
        if any(word in input_lower for word in ['beginner', 'basic', 'simple']):
            preferences['complexity'] = 'beginner'
        elif any(word in input_lower for word in ['advanced', 'expert', 'complex']):
            preferences['complexity'] = 'advanced'
            
        return preferences

# Example usage:
async def main():
    # Initialize the agent
    agent = BookBuddyAgent(
        api_key=os.getenv('OPENAI_API_KEY'),
        model="gpt-4"  # or "gpt-3.5-turbo" for faster, cheaper responses
    )
    
    # Example user request
    user_input = "I'm looking for advanced books on machine learning and AI, preferably with practical examples"
    
    try:
        # Get preferences (optional, can be used to validate LLM responses)
        preferences = agent.extract_preferences(user_input)
        print("Extracted preferences:", preferences)
        
        # Get recommendations
        recommendations = await agent.get_recommendations(user_input)
        
        # Display recommendations
        print("\nRecommended Books:")
        for i, rec in enumerate(recommendations, 1):
            print(f"\n{i}. {rec['title']} by {rec['author']}")
            print(f"Description: {rec['description']}")
            print(f"Genre: {rec.get('genre', 'N/A')}")
            print(f"Recommended because: {rec['reason']}")
            
    except Exception as e:
        print(f"Error: {e}")

# Run the example
if __name__ == "__main__":
    import asyncio
    asyncio.run(main())