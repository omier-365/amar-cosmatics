import { Heart, Award, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl font-bold text-charcoal font-cairo">
            من نحن
          </h1>
          <p className="text-2xl text-gold font-cairo">
            نُعَمِّر جمالك
          </p>
          <p className="text-lg text-gray-700 font-tajawal leading-relaxed">
            عَمّار هو أكثر من مجرد متجر لمستحضرات التجميل، نحن وجهتك الموثوقة للعناية الفاخرة والجمال الطبيعي
          </p>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-charcoal font-cairo mb-6 text-center">
              قصتنا
            </h2>
            <div className="space-y-4 text-gray-700 font-tajawal leading-relaxed text-lg">
              <p>
                انطلقت رحلتنا من إيمان عميق بأن كل امرأة تستحق أن تشعر بالجمال والثقة. في عالم مليء بالخيارات، أردنا أن نكون الخيار الذي يجمع بين الجودة العالية والأسعار المنصفة.
              </p>
              <p>
                اسم &quot;عَمّار&quot; يحمل في طياته معاني البناء والازدهار، وشعارنا &quot;نُعَمِّر جمالك&quot; يعكس التزامنا بتقديم منتجات لا تجمّل فقط، بل تبني وتعتني بجمالك الطبيعي على المدى الطويل.
              </p>
              <p>
                نختار منتجاتنا بعناية فائقة من أفضل العلامات التجارية العالمية والمكونات الطبيعية، لنضمن لك تجربة عناية فاخرة تليق بك.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Heart,
              title: 'الجودة أولاً',
              description: 'نختار فقط المنتجات الأصلية ذات الجودة العالية المضمونة',
              color: 'bg-red-50',
              iconColor: 'text-red-500',
            },
            {
              icon: Shield,
              title: 'الثقة والمصداقية',
              description: 'نبني علاقة طويلة الأمد مع عملائنا قائمة على الثقة',
              color: 'bg-blue-50',
              iconColor: 'text-blue-500',
            },
            {
              icon: Award,
              title: 'التميز',
              description: 'نسعى للتميز في كل تفاصيل تجربتك معنا',
              color: 'bg-gold/10',
              iconColor: 'text-gold',
            },
            {
              icon: Sparkles,
              title: 'الابتكار',
              description: 'نواكب أحدث صيحات التجميل والعناية في العالم',
              color: 'bg-lavender/30',
              iconColor: 'text-purple-600',
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`${value.color} rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${value.iconColor} bg-white rounded-full`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-charcoal font-cairo">
                {value.title}
              </h3>
              <p className="text-gray-700 font-tajawal">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-lavender to-white rounded-3xl shadow-xl p-8">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
              رؤيتنا
            </h2>
            <p className="text-gray-700 font-tajawal leading-relaxed">
              أن نكون الوجهة الأولى والموثوقة لمستحضرات التجميل والعناية في العراق، ونلهم كل امرأة لتكتشف جمالها الطبيعي وتحتفي به.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold/20 to-white rounded-3xl shadow-xl p-8">
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
              رسالتنا
            </h2>
            <p className="text-gray-700 font-tajawal leading-relaxed">
              تقديم منتجات عناية وتجميل عالية الجودة بأسعار منصفة، مع خدمة عملاء استثنائية تجعل تجربة التسوق معنا ممتعة ومريحة.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-charcoal font-cairo mb-8 text-center">
            لماذا تختارين عَمّار؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'منتجات أصلية 100% مضمونة من مصادر موثوقة',
              'أسعار تنافسية وعروض حصرية مستمرة',
              'شحن سريع ومجاني لجميع المحافظات',
              'خدمة عملاء متاحة على مدار الساعة',
              'إمكانية الاسترجاع والاستبدال بسهولة',
              'تشكيلة واسعة تناسب جميع الأذواق والاحتياجات',
              'استشارات مجانية للعناية بالبشرة والشعر',
              'برنامج ولاء ومكافآت للعملاء الدائمين',
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700 font-tajawal">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-lavender via-white to-gold rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-charcoal font-cairo mb-4">
            انضمي لعائلة عَمّار اليوم
          </h2>
          <p className="text-lg text-gray-700 font-tajawal mb-8 max-w-2xl mx-auto">
            ابدأي رحلة العناية والجمال معنا واستمتعي بتجربة تسوق فريدة
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-charcoal text-white px-10 py-4 rounded-full hover:bg-gold transition-all shadow-lg font-tajawal font-bold text-lg"
          >
            تسوقي الآن
          </Link>
        </div>
      </div>
    </div>
  );
}
