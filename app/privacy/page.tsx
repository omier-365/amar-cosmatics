export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-charcoal font-cairo mb-8">
            سياسة الخصوصية
          </h1>

          <div className="space-y-6 text-gray-700 font-tajawal leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                المقدمة
              </h2>
              <p>
                نحن في متجر عَمّار نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                المعلومات التي نجمعها
              </h2>
              <p className="mb-2">نقوم بجمع المعلومات التالية عند قيامك بالطلب:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>الاسم الكامل</li>
                <li>رقم الهاتف</li>
                <li>العنوان (المحافظة، المدينة، العنوان التفصيلي)</li>
                <li>تفاصيل الطلب والمنتجات المختارة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                كيفية استخدام المعلومات
              </h2>
              <p className="mb-2">نستخدم معلوماتك للأغراض التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>معالجة وتوصيل طلباتك</li>
                <li>التواصل معك بخصوص طلبك</li>
                <li>تحسين خدماتنا ومنتجاتنا</li>
                <li>إرسال عروض وتحديثات (يمكنك إلغاء الاشتراك في أي وقت)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                حماية المعلومات
              </h2>
              <p>
                نتخذ جميع الإجراءات الأمنية المناسبة لحماية معلوماتك من الوصول غير المصرح به أو الإفصاح أو التعديل أو الإتلاف. لا نشارك معلوماتك الشخصية مع أي جهات خارجية إلا لغرض توصيل طلبك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                الكوكيز
              </h2>
              <p>
                نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على موقعنا، مثل تذكر سلة التسوق الخاصة بك. يمكنك تعطيل الكوكيز من إعدادات المتصفح.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                حقوقك
              </h2>
              <p className="mb-2">لديك الحق في:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح أي معلومات غير دقيقة</li>
                <li>طلب حذف معلوماتك</li>
                <li>الاعتراض على معالجة معلوماتك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                التواصل معنا
              </h2>
              <p>
                إذا كان لديك أي استفسارات حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر واتساب أو صفحة التواصل.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                التحديثات
              </h2>
              <p>
                قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ التحديث.
              </p>
            </section>

            <div className="pt-6 border-t mt-8 text-sm text-gray-500">
              آخر تحديث: يناير 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
