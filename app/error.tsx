'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-softGray px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-charcoal font-cairo">
          حدث خطأ ما
        </h1>
        
        <p className="text-xl text-gray-700 font-tajawal">
          عذراً، حدث خطأ غير متوقع. نحن نعمل على حل المشكلة
        </p>

        <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-600 font-mono break-words">
          {error.message || 'خطأ غير معروف'}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <button
            onClick={reset}
            className="flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold"
          >
            <RefreshCw className="w-5 h-5" />
            <span>حاول مرة أخرى</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 bg-lavender text-charcoal px-8 py-4 rounded-full hover:bg-gold transition-all shadow-lg font-tajawal font-bold"
          >
            <span>العودة للرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
