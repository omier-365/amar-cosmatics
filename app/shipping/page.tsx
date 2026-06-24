export default function ShippingPage() {
  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-charcoal font-cairo mb-8">
            سياسة الشحن
          </h1>

          <div className="space-y-6 text-gray-700 font-tajawal leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                الشحن المجاني
              </h2>
              <p>
                نوفر شحن مجاني لجميع الطلبات إلى جميع المحافظات المصرية دون استثناء. لا توجد حدود دنيا للطلب للاستفادة من الشحن المجاني.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                مدة التوصيل
              </h2>
              <p className="mb-4">تختلف مدة التوصيل حسب المحافظة:</p>
              <div className="bg-softGray rounded-xl p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold">القاهرة والجيزة</span>
                  <span className="text-gold font-bold">2-3 أيام عمل</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">المدن الرئيسية (الإسكندرية، طنطا، المنصورة، الزقازيق)</span>
                  <span className="text-gold font-bold">3-4 أيام عمل</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">باقي المحافظات</span>
                  <span className="text-gold font-bold">4-5 أيام عمل</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * أيام العمل لا تشمل أيام الجمعة والعطل الرسمية
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                معالجة الطلب
              </h2>
              <p>
                يتم معالجة الطلبات خلال 24 ساعة من تأكيد الطلب. سنقوم بإعلامك عبر واتساب فور شحن طلبك مع تفاصيل التتبع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                طريقة الشحن
              </h2>
              <p className="mb-2">نتعامل مع أفضل شركات الشحن المحلية لضمان:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>سرعة التوصيل</li>
                <li>أمان المنتجات</li>
                <li>تغليف احترافي يحافظ على المنتج</li>
                <li>خدمة تتبع الشحنة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                التغليف
              </h2>
              <p>
                نهتم بتغليف منتجاتك بعناية فائقة لضمان وصولها بحالة ممتازة. نستخدم مواد تغليف عالية الجودة مع حماية إضافية للمنتجات الزجاجية والحساسة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                تتبع الطلب
              </h2>
              <p>
                بعد شحن طلبك، سنرسل لك رقم التتبع عبر واتساب. يمكنك متابعة حالة شحنتك في أي وقت، أو التواصل معنا للاستفسار عن موقع طلبك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                الاستلام
              </h2>
              <p className="mb-2">عند استلام الطلب:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تأكد من سلامة الطرد الخارجي</li>
                <li>افحص المنتجات أمام مندوب التوصيل</li>
                <li>في حالة وجود أي مشكلة، لا تستلم الطلب وتواصل معنا فوراً</li>
                <li>ادفع المبلغ المستحق بعد التأكد من سلامة المنتجات</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                عدم استلام الطلب
              </h2>
              <p>
                في حالة عدم التمكن من التواصل معك أو عدم وجودك في وقت التوصيل، سيحاول المندوب التواصل معك مرة أخرى. إذا لم يتم الاستلام بعد 3 محاولات، سيتم إرجاع الطلب وقد يتم تحميلك رسوم الشحن.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                التواصل
              </h2>
              <p>
                لأي استفسارات حول الشحن أو لتغيير عنوان التوصيل، تواصل معنا عبر واتساب فوراً.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
