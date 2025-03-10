declare module 'react-ga4' {
  interface GA4Event {
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    nonInteraction?: boolean;
    [key: string]: any;
  }

  interface GA4Options {
    testMode?: boolean;
    gaOptions?: {
      siteSpeedSampleRate?: number;
      cookieDomain?: string;
      [key: string]: any;
    };
  }

  interface GA4Instance {
    initialize: (measurementId: string, options?: GA4Options) => void;
    send: (params: { hitType: string; [key: string]: any }) => void;
    event: (params: GA4Event) => void;
    pageview: (path: string) => void;
    set: (params: { [key: string]: any }) => void;
    ga: (command: string, ...args: any[]) => void;
  }

  const ReactGA: GA4Instance;
  export default ReactGA;
} 