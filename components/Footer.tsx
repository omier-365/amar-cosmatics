import Link from 'next/link';
import { Facebook, Instagram, Phone } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold font-cairo text-lavender mb-2">
                عَمّار
              </h3>
              <p className="text-sm text-gray-300 font-tajawal">
                {SITE_CONFIG.slogan}
              </p>
            </div>
            <p className="text-sm text-gray-400">
              متجر مستحضرات التجميل الفاخر - منتجات عالية الجودة للعناية بالبشرة والشعر
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 font-cairo text-lg">روابط سريعة</h4>
            <ul className="space-y-2 font-tajawal">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-lavender transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-lavender transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-lavender transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-lavender transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-4 font-cairo text-lg">السياسات</h4>
            <ul className="space-y-2 font-tajawal">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-lavender transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-lavender transition-colors">
                  سياسة الشحن
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-lavender transition-colors">
                  سياسة الاسترجاع
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 font-cairo text-lg">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-lavender transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-tajawal">واتساب</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-lavender transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-tajawal">فيسبوك</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-lavender transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-tajawal">إنستجرام</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 font-tajawal">
            © {currentYear} عَمّار. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
