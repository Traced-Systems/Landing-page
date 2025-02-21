
export type CookieCategory = 'necessary' | 'functional' | 'statistical' | 'marketing';

export interface CookieConsent {
  necessary: boolean; // Always true as these are essential
  functional: boolean;
  statistical: boolean;
  marketing: boolean;
  timestamp: string;
}

export const defaultConsent: CookieConsent = {
  necessary: true,
  functional: false,
  statistical: false,
  marketing: false,
  timestamp: new Date().toISOString()
};

export const getCookieConsent = (): CookieConsent | null => {
  const consent = localStorage.getItem('cookie-consent');
  return consent ? JSON.parse(consent) : null;
};

export const saveCookieConsent = (consent: CookieConsent): void => {
  localStorage.setItem('cookie-consent', JSON.stringify({
    ...consent,
    timestamp: new Date().toISOString()
  }));
  
  // Update cookie settings based on consent
  if (consent.statistical) {
    // Enable Google Analytics
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted'
    });
  } else {
    // Disable Google Analytics
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied'
    });
  }
};
