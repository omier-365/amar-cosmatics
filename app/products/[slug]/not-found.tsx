import Link from 'next/link';
import { Search, ArrowLeft } from 'lucide-react';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-softGray px-4 py-20">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="text-8xl mb-4">🔍</div>
        
        <h1 className="text-4xl font-bold text-charcoal font-cairo">
          المنتج غير موجود
        </h1>
        
        <p className="text-xl text-gray-700 font-tajawal">
          عذراً، المنتج الذي تبحث عنه غير موجود أو تم حذفه
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/products"
            className="flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold"
          >
            <Search className="w-5 h-5" />
            <span>تصفح جميع المنتجات</span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 bg-lavender text-charcoal px-8 py-4 rounded-full hover:bg-gold transition-all shadow-lg font-tajawal font-bold"
          >
            <span>العودة للرئيسية</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
