// Google Analytics 4
// Замените G-XXXXXXXXXX на ваш Measurement ID из Google Analytics.
// Пример ID: G-ABC123DEF4

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export function initGA() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('GA4 Measurement ID не задан. Замените G-XXXXXXXXXX в src/analytics.js');
    return;
  }

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true
  });
}

export function trackPageView(pageName) {
  if (!window.gtag || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  window.gtag('event', 'page_view', {
    page_title: pageName,
    page_path: `/${pageName}`,
    page_location: window.location.href
  });
}

export function trackDownload(fileName) {
  if (!window.gtag || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  window.gtag('event', 'file_download', {
    file_name: fileName
  });
}
