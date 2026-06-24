'use client';

import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-20 bg-softGray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="text-8xl mb-4">🛍️</div>
            <h1 className="text-4xl font-bold text-charcoal font-cairo">
              السلة فارغة
            </h1>
            <p className="text-gray-600 font-tajawal text-lg">
              لم تقومي بإضافة أي منتجات إلى السلة بعد
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold text-lg"
            >
              تصفح المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal font-cairo mb-2">
            سلة المشتريات
          </h1>
          <p className="text-gray-600 font-tajawal">
            لديك {items.length} منتج في السلة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-6 flex gap-6 animate-fade-in"
              >
                <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-softGray">
                  {!imageErrors[item.id] ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      onError={() => setImageErrors({ ...imageErrors, [item.id]: true })}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      💄
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-bold text-lg text-charcoal hover:text-gold transition-colors font-cairo line-clamp-2 mb-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 font-tajawal mb-2">
                      {item.category}
                    </p>
                    <p className="text-xl font-bold text-gold font-cairo">
                      {formatPrice(item.price)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-softGray rounded-full px-4 py-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-lavender rounded-full transition-colors font-bold"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-lavender rounded-full transition-colors font-bold"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      title="حذف"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-charcoal font-cairo">
                ملخص الطلب
              </h2>

              <div className="space-y-3 border-t border-b py-4">
                <div className="flex justify-between text-gray-600 font-tajawal">
                  <span>المجموع الفرعي</span>
                  <span className="font-bold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-tajawal">
                  <span>الشحن</span>
                  <span className="font-bold text-green-600">مجاني</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold font-cairo">
                <span>المجموع الكلي</span>
                <span className="text-gold">{formatPrice(total)}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-gold text-white py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold text-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>إتمام الطلب</span>
              </Link>

              <Link
                href="/products"
                className="w-full flex items-center justify-center gap-2 bg-lavender text-charcoal py-3 rounded-full hover:bg-gold transition-all font-tajawal font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>متابعة التسوق</span>
              </Link>

              <div className="text-sm text-gray-500 font-tajawal text-center pt-4 border-t">
                ✓ شحن مجاني لجميع المحافظات
                <br />
                ✓ منتجات أصلية 100%
                <br />
                ✓ الدفع عند الاستلام
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
