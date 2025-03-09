import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import AdSense from './AdSense';
import '../styles/AdSense.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // State to track if AdSense is available
  const [adSenseAvailable, setAdSenseAvailable] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check if AdSense might be working
    const checkAdSense = () => {
      // If the AdSense script is loaded
      if (window.adsbygoogle) {
        setAdSenseAvailable(true);
      } else {
        setAdSenseAvailable(false);
      }
    };
    
    // Try to check immediately
    checkAdSense();
    
    // Also check after a delay (script might load late)
    const timer = setTimeout(checkAdSense, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Main content */}
      <main>
        {children}
      </main>
      
      {/* Only show footer ad if AdSense might be available */}
      {adSenseAvailable !== false && (
        <AdSense 
          adSlot="9876543210" 
          className="adsense-footer"
        />
      )}
      
      {/* Footer content */}
      <footer style={{ 
        padding: '20px', 
        textAlign: 'center', 
        marginTop: '40px', 
        borderTop: '1px solid #eaeaea',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} LLM Forge Chronicle. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;