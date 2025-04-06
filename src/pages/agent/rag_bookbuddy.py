import json
from typing import List, Dict, Any
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

class RAGBookBuddy:
    """
    Retrieval Augmented Generation (RAG) implementation for BookBuddy
    Uses local knowledge base and sentence embeddings for semantic search
    """

    def __init__(self, knowledge_base_path: str):
        """
        Initialize the RAG system
        Args:
            knowledge_base_path: Path to the JSON knowledge base file
        """
        # Load knowledge base
        with open(knowledge_base_path, 'r') as f:
            self.knowledge_base = json.load(f)
        
        # Initialize the embedding model
        self.model = SentenceTransformer('all-MiniLM-L6-v2')
        
        # Pre-compute embeddings for books
        self.book_embeddings = self._compute_book_embeddings()

    def _compute_book_embeddings(self) -> Dict[str, np.ndarray]:
        """
        Compute embeddings for each book's searchable content
        """
        book_embeddings = {}
        
        for book in self.knowledge_base['books']:
            # Combine relevant book information for embedding
            searchable_content = f"{book['title']} {book['author']} {book['description']} {' '.join(book['topics'])} {' '.join(book['keyIdeas'])}"
            # Generate embedding
            embedding = self.model.encode(searchable_content)
            book_embeddings[book['title']] = embedding
            
        return book_embeddings

    def _get_relevant_books(self, query: str, top_k: int = 3) -> List[Dict[str, Any]]:
        """
        Retrieve the most relevant books based on the query
        Args:
            query: User's input query
            top_k: Number of books to retrieve
        Returns:
            List of most relevant books
        """
        # Get query embedding
        query_embedding = self.model.encode(query)
        
        # Calculate similarities
        similarities = {}
        for title, book_embedding in self.book_embeddings.items():
            similarity = cosine_similarity(
                query_embedding.reshape(1, -1),
                book_embedding.reshape(1, -1)
            )[0][0]
            similarities[title] = similarity
        
        # Sort by similarity
        sorted_books = sorted(similarities.items(), key=lambda x: x[1], reverse=True)
        
        # Get top-k books
        relevant_books = []
        for title, score in sorted_books[:top_k]:
            book = next(b for b in self.knowledge_base['books'] if b['title'] == title)
            book['relevance_score'] = float(score)
            relevant_books.append(book)
            
        return relevant_books

    def generate_recommendations(self, query: str) -> List[Dict[str, Any]]:
        """
        Generate book recommendations using RAG
        Args:
            query: User's input query
        Returns:
            List of recommendations with explanations
        """
        # Step 1: Retrieve relevant books
        relevant_books = self._get_relevant_books(query)
        
        # Step 2: Generate personalized recommendations
        recommendations = []
        for book in relevant_books:
            # Create a personalized explanation based on the query and book details
            explanation = self._generate_recommendation_explanation(query, book)
            
            recommendation = {
                'title': book['title'],
                'author': book['author'],
                'description': book['description'],
                'genre': book['genre'],
                'reason': explanation,
                'topics': book['topics'],
                'keyIdeas': book['keyIdeas'],
                'rating': book['rating']
            }
            recommendations.append(recommendation)
            
        return recommendations

    def _generate_recommendation_explanation(self, query: str, book: Dict[str, Any]) -> str:
        """
        Generate a personalized explanation for why this book is recommended
        Args:
            query: User's input query
            book: Book information
        Returns:
            Personalized explanation
        """
        # Extract key terms from the query
        query_lower = query.lower()
        matching_topics = [topic for topic in book['topics'] if topic in query_lower]
        
        # Generate explanation based on matching topics and book features
        reasons = []
        
        if matching_topics:
            reasons.append(f"Matches your interest in {', '.join(matching_topics)}")
        
        if book.get('rating', 0) >= 4.7:
            reasons.append("Highly rated by readers")
            
        # Add a key idea if relevant
        if book['keyIdeas']:
            reasons.append(f"Features important insight: {book['keyIdeas'][0]}")
            
        if book.get('relevance_score', 0) > 0.8:
            reasons.append("Strongly aligns with your interests")
            
        return ". ".join(reasons)

# Example usage
if __name__ == "__main__":
    # Initialize the RAG system
    rag_buddy = RAGBookBuddy('knowledge_base.json')
    
    # Example queries
    example_queries = [
        "I want to learn about psychology and decision making",
        "Looking for books about building good habits",
        "Interested in science fiction with scientific accuracy",
        "Need help with personal finance and investment psychology"
    ]
    
    # Test recommendations
    for query in example_queries:
        print(f"\nQuery: {query}")
        recommendations = rag_buddy.generate_recommendations(query)
        
        print("\nRecommendations:")
        for i, rec in enumerate(recommendations, 1):
            print(f"\n{i}. {rec['title']} by {rec['author']}")
            print(f"Genre: {rec['genre']}")
            print(f"Reason: {rec['reason']}")
            print(f"Key Ideas: {', '.join(rec['keyIdeas'][:2])}")