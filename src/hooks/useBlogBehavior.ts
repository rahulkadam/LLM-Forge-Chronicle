import { useEffect } from 'react';

/**
 * Hook for managing blog functionality like scroll behavior and header visibility
 */
export const useBlogBehavior = () => {
  useEffect(() => {
    // Scroll to top when the blog loads
    window.scrollTo(0, 0);

    // Add smooth scrolling to anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
            // Update URL without reloading the page
            window.history.pushState(null, '', `#${id}`);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};

export default useBlogBehavior;