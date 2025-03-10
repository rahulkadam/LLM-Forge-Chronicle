import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = (measurementId: string) => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID is not set. Analytics will be disabled.');
    return;
  }
  ReactGA.initialize(measurementId);
};

// Track page views
export const trackPageView = (path: string) => {
  if (!process.env.REACT_APP_GA_MEASUREMENT_ID) return;
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string) => {
  if (!process.env.REACT_APP_GA_MEASUREMENT_ID) return;
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track user timing
export const trackTiming = (category: string, variable: string, value: number, label?: string) => {
  if (!process.env.REACT_APP_GA_MEASUREMENT_ID) return;
  ReactGA.send({
    hitType: "timing",
    timingCategory: category,
    timingVar: variable,
    timingValue: value,
    timingLabel: label,
  });
};

// Track exceptions
export const trackException = (description: string, fatal: boolean = false) => {
  if (!process.env.REACT_APP_GA_MEASUREMENT_ID) return;
  ReactGA.send({
    hitType: "exception",
    exDescription: description,
    exFatal: fatal,
  });
};

// Track user engagement
export const trackUserEngagement = (time: number) => {
  if (!process.env.REACT_APP_GA_MEASUREMENT_ID) return;
  ReactGA.send({
    hitType: "user_engagement",
    engagement_time_msec: time,
  });
}; 