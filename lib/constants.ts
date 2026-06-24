export const SITE_CONFIG = {
  name: 'عَمّار',
  slogan: 'نُعَمِّر جمالك',
  description: 'متجر مستحضرات التجميل الفاخر - منتجات عالية الجودة للعناية بالبشرة والشعر',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ammar-beauty.netlify.app',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+201202119847',
};

export const CATEGORIES = [
  'كل المنتجات',
  'العناية بالبشرة',
  'العناية بالشعر',
  'المكياج',
  'العطور',
  'منتجات طبيعية',
];

export const FEATURES = [
  {
    title: 'منتجات أصلية 100%',
    description: 'جميع منتجاتنا أصلية ومضمونة',
    icon: '✨',
  },
  {
    title: 'شحن سريع',
    description: 'توصيل لجميع أنحاء مصر',
    icon: '🚚',
  },
  {
    title: 'دعم متواصل',
    description: 'خدمة عملاء متاحة على مدار الساعة',
    icon: '💬',
  },
  {
    title: 'أسعار تنافسية',
    description: 'أفضل الأسعار والعروض الحصرية',
    icon: '💰',
  },
];

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}`,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/ammar.beauty',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/ammar.beauty',
};
