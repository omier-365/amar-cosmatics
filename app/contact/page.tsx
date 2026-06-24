import { Phone, Facebook, Instagram, Mail, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <h1 className="text-5xl font-bold text-charcoal font-cairo">
            تواصل معنا
          </h1>
          <p className="text-lg text-gray-700 font-tajawal leading-relaxed">
            نحن هنا للإجابة على استفساراتك ومساعدتك في أي وقت
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-6">
                معلومات التواصل
              </h2>

              <div className="space-y-6">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-lavender/20 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal font-cairo mb-1">
                      واتساب
                    </h3>
                    <p className="text-gray-600 font-tajawal" dir="ltr">
                      {SITE_CONFIG.whatsappNumber}
                    </p>
                    <p className="text-sm text-gray-500 font-tajawal">
                      متاح على مدار الساعة
                    </p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-lavender/20 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal font-cairo mb-1">
                      فيسبوك
                    </h3>
                    <p className="text-gray-600 font-tajawal">
                      @ammar.beauty
                    </p>
                    <p className="text-sm text-gray-500 font-tajawal">
                      تابعنا لآخر العروض والمنتجات
                    </p>
                  </div>
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-lavender/20 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal font-cairo mb-1">
                      إنستجرام
                    </h3>
                    <p className="text-gray-600 font-tajawal">
                      @ammar.beauty
                    </p>
                    <p className="text-sm text-gray-500 font-tajawal">
                      شاهدي إطلالات العميلات ونصائح الجمال
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lavender to-gold rounded-2xl shadow-md p-8">
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4">🕐</div>
                <h3 className="text-2xl font-bold text-charcoal font-cairo">
                  ساعات العمل
                </h3>
                <p className="text-lg text-gray-800 font-tajawal">
                  خدمة العملاء متاحة على مدار الساعة
                </p>
                <p className="text-gray-700 font-tajawal">
                  نرد على استفساراتك في أسرع وقت ممكن
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-charcoal font-cairo mb-6">
              أرسل لنا رسالة
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-charcoal mb-2 font-cairo">
                  الاسم *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal"
                  placeholder="اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-charcoal mb-2 font-cairo">
                  البريد الإلكتروني أو رقم الهاتف *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal"
                  placeholder="example@email.com أو 07XXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-charcoal mb-2 font-cairo">
                  الموضوع *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal"
                  placeholder="موضوع الرسالة"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-charcoal mb-2 font-cairo">
                  الرسالة *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold text-lg"
              >
                إرسال الرسالة
              </button>

              <p className="text-sm text-gray-500 text-center font-tajawal">
                أو تواصل معنا مباشرة عبر واتساب للرد الفوري
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-charcoal font-cairo mb-4">
            هل لديك سؤال شائع؟
          </h3>
          <p className="text-gray-600 font-tajawal mb-6">
            ربما تجد إجابتك في صفحة الأسئلة الشائعة
          </p>
          <a
            href="/faq"
            className="inline-flex items-center gap-2 bg-lavender text-charcoal px-8 py-3 rounded-full hover:bg-gold transition-all font-tajawal font-bold"
          >
            الأسئلة الشائعة
          </a>
        </div>
      </div>
    </div>
  );
}
