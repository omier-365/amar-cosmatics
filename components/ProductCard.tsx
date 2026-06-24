'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-softGray">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              💄
            </div>
          )}
          <div className="absolute top-4 right-4 bg-lavender/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm font-bold text-charcoal">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-5 space-y-3">
        <Link href={`/products/${product.slug}`}>
          <span className="text-xs text-gray-500 font-tajawal">{product.category}</span>
          <h3 className="font-bold text-lg text-charcoal group-hover:text-gold transition-colors font-cairo line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2 font-tajawal">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-xl font-bold text-gold font-cairo">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex items-center gap-2 bg-lavender hover:bg-gold text-charcoal px-4 py-2 rounded-full transition-all font-tajawal font-medium ${
              isAdding ? 'scale-95 bg-gold' : ''
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{isAdding ? 'تمت الإضافة' : 'أضف للسلة'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
