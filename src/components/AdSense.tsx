import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AdSense.css';

// Declare the global adsbygoogle type
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  className?: string;
  style?: React.CSSProperties;
  adClient?: string;
  adSlot?: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  timeout?: number; // Timeout in milliseconds to check if ads loaded
}

const AdSense: React.FC<AdSenseProps> = ({
  className = '',
  style = {},
  adClient = 'ca-pub-5009079698566743',
  adSlot = '1234567890',
  adFormat = 'auto',
  fullWidthResponsive = true,
  timeout = 2000 // Default 2 seconds to determine if ads loaded
}) => {
  const location = useLocation();
  const [adsLoaded, setAdsLoaded] = useState<boolean | null>(null); // null = unknown, true/false = loaded state
  
  // Detect if we're in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  useEffect(() => {
    // Reset ads loaded state on route change
    setAdsLoaded(null);
    
    try {
      // Check if adsbygoogle is defined
      if (window.adsbygoogle) {
        // Initialize or refresh ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        
        // Set a timeout to check if ads were blocked or failed to load
        const timer = setTimeout(() => {
          // Check if our ad container has children - if not, ads didn't load
          const adContainers = document.querySelectorAll('.adsbygoogle');
          
          // Look for our specific ad container using a data attribute
          const adContainer = document.querySelector(`[data-ad-slot="${adSlot}"]`);
          
          // If the ad container has no children or is empty, ads didn't load
          if (adContainer && 
              (adContainer.children.length === 0 || 
               adContainer.innerHTML.trim() === '')) {
            setAdsLoaded(false);
          } else if (adContainer) {
            setAdsLoaded(true);
          } else {
            // Ad container not found at all
            setAdsLoaded(false);
          }
        }, timeout);
        
        return () => clearTimeout(timer);
      } else {
        // AdSense is not available
        setAdsLoaded(false);
      }
    } catch (error) {
      console.error('AdSense error:', error);
      setAdsLoaded(false);
    }
  }, [location.pathname, adSlot, timeout]);
  
  // If ads failed to load and we're not in development mode, don't render anything
  if (adsLoaded === false && !isDevelopment) {
    return null;
  }
  
  // When we're in development mode and ads are known not to load, show placeholder
  if (isDevelopment) {
    return (
      <div 
        className={`adsense-container adsense-placeholder ${className}`}
        style={{
          ...style,
          // Make the placeholder more subtle
          opacity: 0.7,
          background: '#f5f5f5',
          border: '1px dashed #ccc'
        }}
      >
        <div className="placeholder-content">
          <p><small>AdSense Placeholder (dev only)</small></p>
          <p className="placeholder-details">
            <small>Slot: {adSlot}</small>
          </p>
        </div>
      </div>
    );
  }
  
  // For production, render the regular AdSense code
  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default AdSense;