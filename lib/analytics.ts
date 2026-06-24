// Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// تتبع مشاهدات الصفحات
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// تتبع الأحداث
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// أحداث التجارة الإلكترونية
export const trackAddToCart = (product: {
  id: string;
  name: string;
  price: number;
  category: string;
}) => {
  event({
    action: 'add_to_cart',
    category: 'ecommerce',
    label: product.name,
    value: product.price,
  });
};

export const trackRemoveFromCart = (product: {
  id: string;
  name: string;
}) => {
  event({
    action: 'remove_from_cart',
    category: 'ecommerce',
    label: product.name,
  });
};

export const trackPurchase = (total: number, items: number) => {
  event({
    action: 'purchase',
    category: 'ecommerce',
    label: 'checkout',
    value: total,
  });
};

export const trackViewProduct = (product: {
  id: string;
  name: string;
  category: string;
}) => {
  event({
    action: 'view_item',
    category: 'ecommerce',
    label: product.name,
  });
};

// Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const fbPixelEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && META_PIXEL_ID) {
    window.fbq('track', eventName, data);
  }
};

export const fbTrackAddToCart = (product: {
  name: string;
  price: number;
  currency?: string;
}) => {
  fbPixelEvent('AddToCart', {
    content_name: product.name,
    value: product.price,
    currency: product.currency || 'IQD',
  });
};

export const fbTrackPurchase = (total: number, currency?: string) => {
  fbPixelEvent('Purchase', {
    value: total,
    currency: currency || 'IQD',
  });
};

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}
