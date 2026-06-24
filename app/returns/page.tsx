export default function ReturnsPage() {
  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h1 className="text-4xl font-bold text-charcoal font-cairo mb-8">
            سياسة الاسترجاع والاستبدال
          </h1>

          <div className="space-y-6 text-gray-700 font-tajawal leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                مدة الاسترجاع
              </h2>
              <p>
                يمكنك استرجاع أو استبدال المنتج خلال 7 أيام من تاريخ الاستلام، بشرط أن يكون المنتج في حالته الأصلية وغير مفتوح.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                شروط الاسترجاع
              </h2>
              <p className="mb-2">لقبول طلب الاسترجاع، يجب توفر الشروط التالية:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>أن يكون المنتج غير مفتوح وبحالته الأصلية</li>
                <li>أن يكون في علبته الأصلية مع جميع الملحقات</li>
                <li>عدم مرور أكثر من 7 أيام على تاريخ الاستلام</li>
                <li>تقديم فاتورة الشراء أو إثبات الطلب</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                المنتجات غير القابلة للاسترجاع
              </h2>
              <p className="mb-2">لا يمكن استرجاع المنتجات التالية لأسباب صحية:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>منتجات العناية الشخصية المفتوحة</li>
                <li>مستحضرات التجميل المستخدمة</li>
                <li>المنتجات ذات الختم الأمني المكسور</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                الاستبدال
              </h2>
              <p>
                يمكنك استبدال المنتج بآخر بنفس القيمة أو أعلى (مع دفع الفرق). الاستبدال متاح خلال 7 أيام من تاريخ الاستلام بنفس شروط الاسترجاع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                المنتج التالف أو الخاطئ
              </h2>
              <p className="mb-2">في حالة استلام منتج تالف أو مختلف عن المطلوب:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>تواصل معنا فوراً عبر واتساب</li>
                <li>أرسل صوراً واضحة للمنتج والعبوة</li>
                <li>سنقوم بالاستبدال الفوري أو استرجاع المبلغ كاملاً</li>
                <li>نتحمل كافة تكاليف الشحن في هذه الحالة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                كيفية طلب الاسترجاع
              </h2>
              <div className="bg-softGray rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                  <p>تواصل معنا عبر واتساب أو صفحة التواصل</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                  <p>قدم رقم الطلب وسبب الاسترجاع</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </span>
                  <p>أرسل صوراً للمنتج في حالته الحالية</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                  <p>بعد الموافقة، سنرسل مندوباً لاستلام المنتج</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                استرجاع المبلغ
              </h2>
              <p>
                بعد استلام المنتج المرتجع وفحصه، سيتم استرجاع المبلغ خلال 3-5 أيام عمل عبر نفس طريقة الدفع أو حسب الاتفاق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                تكاليف الشحن
              </h2>
              <p>
                العميل يتحمل تكلفة شحن الإرجاع في حالة تغيير الرأي. أما في حالة المنتج التالف أو الخاطئ، نتحمل نحن كافة التكاليف.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-charcoal font-cairo mb-4">
                التواصل
              </h2>
              <p>
                لأي استفسارات حول الاسترجاع أو الاستبدال، تواصل معنا عبر واتساب وسنكون سعداء بمساعدتك.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
