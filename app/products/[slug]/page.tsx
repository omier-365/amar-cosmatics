'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, ArrowLeft, Check } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    notFound();
  }

  const images = product.images || [product.image];
  const relatedProducts = MOCK_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 font-tajawal">
          <Link href="/" className="text-gray-500 hover:text-gold transition-colors">
            الرئيسية
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/products" className="text-gray-500 hover:text-gold transition-colors">
            المنتجات
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-charcoal font-medium">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-softGray">
                {!imageError ? (
                  <Image
                    src={images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-9xl">
                    💄
                  </div>
                )}
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedImage(index);
                        setImageError(false);
                      }}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? 'border-gold shadow-md'
                          : 'border-gray-200 hover:border-lavender'
                      }`}
                    >
                      <Image src={img} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-lavender text-charcoal rounded-full text-sm font-tajawal mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal font-cairo mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-gold text-gold" />
                    <span className="font-bold text-lg text-charcoal">{product.rating}</span>
                    <span className="text-gray-500 text-sm font-tajawal">(156 تقييم)</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed font-tajawal">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-b py-6">
                <div className="text-3xl font-bold text-gold font-cairo mb-4">
                  {formatPrice(product.price)}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <label className="font-bold text-charcoal font-cairo">الكمية:</label>
                  <div className="flex items-center gap-3 bg-softGray rounded-full px-4 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center hover:bg-lavender rounded-full transition-colors font-bold"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-lavender rounded-full transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className={`w-full flex items-center justify-center gap-3 bg-gold text-white py-4 rounded-full hover:bg-charcoal transition-all font-tajawal font-bold text-lg shadow-lg ${
                      isAdding ? 'scale-95 bg-charcoal' : ''
                    }`}
                  >
                    {isAdding ? (
                      <>
                        <Check className="w-6 h-6" />
                        <span>تمت الإضافة للسلة</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-6 h-6" />
                        <span>أضف إلى السلة</span>
                      </>
                    )}
                  </button>

                  <Link
                    href="/cart"
                    className="w-full flex items-center justify-center gap-3 bg-lavender text-charcoal py-4 rounded-full hover:bg-gold transition-all font-tajawal font-bold text-lg"
                  >
                    عرض السلة
                  </Link>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 font-tajawal">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>منتج أصلي 100%</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>شحن سريع لجميع المحافظات</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>إمكانية الاسترجاع خلال 7 أيام</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.ingredients && (
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-cairo">
                    المكونات
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-tajawal">
                    {product.ingredients}
                  </p>
                </div>
              )}

              {product.usage && (
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-cairo">
                    طريقة الاستخدام
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-tajawal">
                    {product.usage}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-8 font-cairo">
              منتجات مشابهة
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
