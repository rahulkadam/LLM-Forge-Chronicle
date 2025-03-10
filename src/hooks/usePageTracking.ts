import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if GA is initialized
    if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
      trackPageView(location.pathname);
    }
  }, [location]);
};

export default usePageTracking; 