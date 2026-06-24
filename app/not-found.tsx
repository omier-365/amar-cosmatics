import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-white to-softGray px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="text-9xl font-bold text-gold font-cairo">404</div>
        
        <h1 className="text-4xl font-bold text-charcoal font-cairo">
          الصفحة غير موجودة
        </h1>
        
        <p className="text-xl text-gray-700 font-tajawal">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/"
            className="flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold"
          >
            <Home className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-2 bg-lavender text-charcoal px-8 py-4 rounded-full hover:bg-gold transition-all shadow-lg font-tajawal font-bold"
          >
            <span>تصفح المنتجات</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>

        <div className="pt-8 text-6xl animate-bounce">
          🔍
        </div>
      </div>
    </div>
  );
}
