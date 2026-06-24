'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { CATEGORIES } from '@/lib/constants';
import SkeletonCard from '@/components/SkeletonCard';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('كل المنتجات');
  const [sortBy, setSortBy] = useState('default');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = [...MOCK_PRODUCTS];

    // Filter by category
    if (selectedCategory !== 'كل المنتجات') {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return products;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal font-cairo">
            جميع المنتجات
          </h1>
          <p className="text-gray-600 font-tajawal text-lg">
            اكتشفي مجموعتنا الكاملة من منتجات العناية الفاخرة
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-bold text-charcoal mb-2 font-cairo">
                التصنيف
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-tajawal transition-all ${
                      selectedCategory === category
                        ? 'bg-gold text-white shadow-md'
                        : 'bg-lavender/20 text-charcoal hover:bg-lavender'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-bold text-charcoal mb-2 font-cairo">
                ترتيب حسب
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal"
              >
                <option value="default">الافتراضي</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">التقييم الأعلى</option>
                <option value="name">الاسم: أ-ي</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600 font-tajawal">
          <span className="font-bold text-charcoal">{filteredProducts.length}</span> منتج
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-charcoal mb-2 font-cairo">
              لا توجد نتائج
            </h3>
            <p className="text-gray-600 font-tajawal">
              حاول تغيير معايير البحث أو الفلتر
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
