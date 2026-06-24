import Link from 'next/link';
import { ArrowLeft, Sparkles, Truck, MessageCircle, DollarSign } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS, TESTIMONIALS } from '@/lib/mock-data';
import Image from 'next/image';

export default function HomePage() {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 8);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-lavender via-white to-softGray overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-lavender rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal font-cairo leading-tight">
              عَمّار
              <span className="block text-3xl md:text-4xl text-gold mt-2">
                نُعَمِّر جمالك
              </span>
            </h1>

            <p className="text-xl text-gray-700 font-tajawal max-w-2xl mx-auto">
              اكتشفي عالم الجمال الفاخر مع مجموعتنا المختارة من أفضل مستحضرات التجميل والعناية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/products"
                className="group flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full hover:bg-charcoal transition-all shadow-lg hover:shadow-xl font-tajawal font-bold text-lg"
              >
                <span>تسوقي الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 bg-white text-charcoal px-8 py-4 rounded-full hover:bg-lavender transition-all shadow-lg font-tajawal font-bold text-lg border-2 border-lavender"
              >
                تعرفي علينا
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-softGray to-transparent" />
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'منتجات أصلية 100%', desc: 'جميع منتجاتنا أصلية ومضمونة' },
              { icon: Truck, title: 'شحن سريع', desc: 'توصيل لجميع أنحاء العراق' },
              { icon: MessageCircle, title: 'دعم متواصل', desc: 'خدمة عملاء على مدار الساعة' },
              { icon: DollarSign, title: 'أسعار تنافسية', desc: 'أفضل الأسعار والعروض' },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-2xl hover:bg-lavender/10 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender rounded-full group-hover:bg-gold transition-colors">
                  <feature.icon className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-bold text-lg text-charcoal font-cairo">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-tajawal text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-softGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl font-bold text-charcoal font-cairo">
              المنتجات الأكثر مبيعاً
            </h2>
            <p className="text-gray-600 font-tajawal text-lg">
              اختيارات عملائنا المفضلة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full hover:bg-gold transition-all shadow-lg font-tajawal font-bold"
            >
              عرض جميع المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl font-bold text-charcoal font-cairo">
              آراء عملائنا
            </h2>
            <p className="text-gray-600 font-tajawal text-lg">
              ثقة عملائنا هي أغلى ما نملك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-softGray p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-lavender">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal font-cairo">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 font-tajawal">
                      {testimonial.city}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-700 font-tajawal leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lavender to-gold">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-charcoal font-cairo">
              ابدأي رحلة الجمال معنا
            </h2>
            <p className="text-lg text-gray-800 font-tajawal">
              انضمي لآلاف العميلات الراضيات واكتشفي منتجات العناية الفاخرة
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-charcoal text-white px-10 py-4 rounded-full hover:bg-white hover:text-charcoal transition-all shadow-xl font-tajawal font-bold text-lg"
            >
              تصفح المنتجات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
