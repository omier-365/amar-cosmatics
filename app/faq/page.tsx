'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    category: 'الطلب والشراء',
    questions: [
      {
        q: 'كيف يمكنني الطلب من متجر عَمّار؟',
        a: 'يمكنك تصفح المنتجات، إضافتها للسلة، ثم الذهاب لصفحة الدفع وإكمال البيانات. سيتم إرسال طلبك مباشرة عبر واتساب لتأكيد الطلب.',
      },
      {
        q: 'هل المنتجات أصلية؟',
        a: 'نعم، جميع منتجاتنا أصلية 100% ونضمن لك ذلك. نحن نستورد من مصادر موثوقة ومعتمدة.',
      },
      {
        q: 'ما هي طرق الدفع المتاحة؟',
        a: 'نوفر الدفع عند الاستلام لراحتك وأمانك. يمكنك فحص المنتج قبل الدفع.',
      },
    ],
  },
  {
    category: 'الشحن والتوصيل',
    questions: [
      {
        q: 'كم تستغرق مدة التوصيل؟',
        a: 'عادة نقوم بالتوصيل خلال 2-5 أيام عمل حسب المحافظة. القاهرة والجيزة والمدن الرئيسية خلال 2-3 أيام.',
      },
      {
        q: 'هل الشحن مجاني؟',
        a: 'نعم، الشحن مجاني لجميع المحافظات المصرية دون استثناء.',
      },
      {
        q: 'هل يمكنني تغيير عنوان التوصيل؟',
        a: 'نعم، يمكنك التواصل معنا عبر واتساب فوراً بعد الطلب لتغيير أي معلومات.',
      },
    ],
  },
  {
    category: 'الاسترجاع والاستبدال',
    questions: [
      {
        q: 'ما هي سياسة الاسترجاع؟',
        a: 'يمكنك استرجاع المنتج خلال 7 أيام من تاريخ الاستلام إذا كان المنتج غير مفتوح وبحالته الأصلية.',
      },
      {
        q: 'ماذا لو وصل المنتج تالفاً؟',
        a: 'في حالة وصول منتج تالف، نرجو التواصل معنا فوراً مع صور للمنتج وسنقوم بالاستبدال أو الاسترجاع الفوري.',
      },
      {
        q: 'هل يمكنني استبدال منتج بآخر؟',
        a: 'نعم، يمكنك استبدال المنتج بآخر بنفس القيمة أو أعلى خلال 7 أيام من الاستلام بشرط عدم فتحه.',
      },
    ],
  },
  {
    category: 'المنتجات والاستخدام',
    questions: [
      {
        q: 'كيف أعرف المنتج المناسب لنوع بشرتي؟',
        a: 'يمكنك قراءة وصف المنتج والمكونات بعناية، أو التواصل معنا للحصول على استشارة مجانية لاختيار المنتج المناسب.',
      },
      {
        q: 'هل المنتجات مناسبة للبشرة الحساسة؟',
        a: 'لدينا مجموعة واسعة من المنتجات المخصصة للبشرة الحساسة. تأكدي من قراءة المكونات أو استشيرينا.',
      },
      {
        q: 'ما هي مدة صلاحية المنتجات؟',
        a: 'جميع منتجاتنا جديدة وبصلاحية طويلة. تاريخ الإنتاج والانتهاء موضح على كل منتج.',
      },
    ],
  },
  {
    category: 'الحساب والخصوصية',
    questions: [
      {
        q: 'هل أحتاج لإنشاء حساب للشراء؟',
        a: 'لا، يمكنك الشراء مباشرة دون الحاجة لإنشاء حساب. فقط أضف المنتجات للسلة وأكمل الطلب.',
      },
      {
        q: 'هل بياناتي آمنة؟',
        a: 'نعم، نحن نحترم خصوصيتك ولا نشارك بياناتك مع أي جهة خارجية. نستخدمها فقط لإتمام طلبك.',
      },
      {
        q: 'كيف أتابع طلبي؟',
        a: 'بعد تأكيد الطلب عبر واتساب، سنبقيك على اطلاع دائم بحالة الطلب والشحن.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl font-bold text-charcoal font-cairo">
            الأسئلة الشائعة
          </h1>
          <p className="text-lg text-gray-700 font-tajawal leading-relaxed">
            إجابات على الأسئلة الأكثر شيوعاً حول منتجاتنا وخدماتنا
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {FAQS.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-lavender to-gold/20 p-6">
                <h2 className="text-2xl font-bold text-charcoal font-cairo">
                  {category.category}
                </h2>
              </div>

              <div className="divide-y">
                {category.questions.map((item, itemIndex) => {
                  const id = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[id];

                  return (
                    <div key={itemIndex}>
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full text-right p-6 hover:bg-lavender/10 transition-colors flex items-start justify-between gap-4"
                      >
                        <span className="font-bold text-lg text-charcoal font-cairo flex-1">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-6 h-6 text-gold flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <p className="text-gray-700 font-tajawal leading-relaxed text-lg bg-softGray p-4 rounded-xl">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-lavender via-white to-gold rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-charcoal font-cairo mb-4">
            لم تجد إجابة لسؤالك؟
          </h3>
          <p className="text-gray-700 font-tajawal mb-6">
            تواصل معنا مباشرة عبر واتساب وسنكون سعداء بمساعدتك
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full hover:bg-gold transition-all shadow-lg font-tajawal font-bold text-lg"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
}
