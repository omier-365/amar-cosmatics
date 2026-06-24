'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { formatPrice, generateWhatsAppLink } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Phone, MapPin, User, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const EGYPT_GOVERNORATES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'الدقهلية',
  'الشرقية',
  'المنوفية',
  'القليوبية',
  'البحيرة',
  'الغربية',
  'بورسعيد',
  'السويس',
  'الإسماعيلية',
  'دمياط',
  'كفر الشيخ',
  'الفيوم',
  'بني سويف',
  'المنيا',
  'أسيوط',
  'سوهاج',
  'قنا',
  'أسوان',
  'الأقصر',
  'البحر الأحمر',
  'الوادي الجديد',
  'مطروح',
  'شمال سيناء',
  'جنوب سيناء',
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    governorate: '',
    city: '',
    address: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const total = getTotal();

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الرجاء إدخال الاسم الكامل';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'الرجاء إدخال رقم الهاتف';
    } else if (!/^(\+964|0)?7[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }

    if (!formData.governorate) {
      newErrors.governorate = 'الرجاء اختيار المحافظة';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'الرجاء إدخال المدينة';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'الرجاء إدخال العنوان التفصيلي';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare cart items for WhatsApp
    const cartItems = items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    // Generate WhatsApp link
    const whatsappLink = generateWhatsAppLink(
      SITE_CONFIG.whatsappNumber,
      formData.name,
      formData.address,
      `${formData.city} - ${formData.governorate}`,
      cartItems,
      total,
      formData.notes
    );

    // Open WhatsApp
    window.open(whatsappLink, '_blank');

    // Clear cart after a short delay
    setTimeout(() => {
      clearCart();
      router.push('/');
    }, 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen py-12 bg-softGray">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-charcoal font-cairo mb-2">
            إتمام الطلب
          </h1>
          <p className="text-gray-600 font-tajawal">
            أكملي البيانات لإرسال الطلب عبر واتساب
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2 font-cairo">
                  <User className="w-4 h-4" />
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none font-tajawal ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-lavender'
                  }`}
                  placeholder="مثال: أحمد محمد"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 font-tajawal">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2 font-cairo">
                  <Phone className="w-4 h-4" />
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none font-tajawal ${
                    errors.phone
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-lavender'
                  }`}
                  placeholder="مثال: 07XXXXXXXXX"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 font-tajawal">{errors.phone}</p>
                )}
              </div>

              {/* Governorate & City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2 font-cairo">
                    <MapPin className="w-4 h-4" />
                    المحافظة *
                  </label>
                  <select
                    name="governorate"
                    value={formData.governorate}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none font-tajawal ${
                      errors.governorate
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 focus:border-lavender'
                    }`}
                  >
                    <option value="">اختر المحافظة</option>
                    {EGYPT_GOVERNORATES.map((gov) => (
                      <option key={gov} value={gov}>
                        {gov}
                      </option>
                    ))}
                  </select>
                  {errors.governorate && (
                    <p className="text-red-500 text-sm mt-1 font-tajawal">{errors.governorate}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2 font-cairo">
                    <MapPin className="w-4 h-4" />
                    المدينة *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none font-tajawal ${
                      errors.city
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 focus:border-lavender'
                    }`}
                    placeholder="مثال: الكرادة"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1 font-tajawal">{errors.city}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2 font-cairo">
                  <MapPin className="w-4 h-4" />
                  العنوان التفصيلي *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none font-tajawal ${
                    errors.address
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 focus:border-lavender'
                  }`}
                  placeholder="مثال: شارع الرئيسي، قرب الجامع الكبير، بناية رقم 10"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1 font-tajawal">{errors.address}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-charcoal mb-2 font-cairo">
                  <MessageSquare className="w-4 h-4" />
                  ملاحظات (اختياري)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-lavender focus:outline-none font-tajawal resize-none"
                  placeholder="أي ملاحظات إضافية للطلب..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-white py-4 rounded-full hover:bg-charcoal transition-all shadow-lg font-tajawal font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'جاري إرسال الطلب...' : 'تأكيد الطلب وإرسال عبر واتساب'}
              </button>

              <p className="text-sm text-gray-500 text-center font-tajawal">
                بالضغط على &quot;تأكيد الطلب&quot; سيتم فتح واتساب لإرسال تفاصيل طلبك
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24 space-y-6">
              <h2 className="text-2xl font-bold text-charcoal font-cairo">
                ملخص الطلب
              </h2>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-3 border-b">
                    <div className="w-16 h-16 bg-softGray rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                      💄
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-charcoal font-cairo line-clamp-2">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600 font-tajawal">
                        {item.quantity} × {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-gray-600 font-tajawal">
                  <span>المجموع الفرعي</span>
                  <span className="font-bold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-tajawal">
                  <span>الشحن</span>
                  <span className="font-bold text-green-600">مجاني</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold font-cairo border-t pt-4">
                <span>المجموع الكلي</span>
                <span className="text-gold">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
