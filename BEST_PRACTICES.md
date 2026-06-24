# أفضل الممارسات - موقع عَمّار

## 📋 نصائح عامة

### ✅ قبل النشر

1. **اختبر جميع الصفحات**
   - تأكد من عمل جميع الروابط
   - اختبر على أحجام شاشات مختلفة
   - تأكد من سرعة التحميل

2. **راجع البيانات**
   - تحديث رقم الواتساب
   - مراجعة معلومات التواصل
   - التأكد من صحة المحتوى

3. **الأمان**
   - لا تنشر ملف `.env.local`
   - استخدم متغيرات بيئة في Vercel
   - احفظ نسخة احتياطية من القاعدة

---

## 🎨 التصميم

### الألوان

```css
/* التزم بألوان البراند */
--lavender: #E8DDFD;
--gold: #D4AF37;
--charcoal: #2B2B2B;
--soft-gray: #F7F7F7;
```

### الخطوط

- استخدم **Cairo** للعناوين
- استخدم **Tajawal** للنصوص العادية
- حجم الخط الأدنى: 14px

### المسافات

```css
/* استخدم مضاعفات 4px */
padding: 4px, 8px, 12px, 16px, 20px, 24px...
margin: 4px, 8px, 12px, 16px, 20px, 24px...
```

---

## 💾 إدارة البيانات

### المنتجات

#### إضافة منتج جديد

```typescript
// في lib/mock-data.ts أو قاعدة البيانات
{
  id: 'unique-id',
  name: 'اسم المنتج',
  description: 'وصف تفصيلي للمنتج',
  price: 50000,
  category: 'العناية بالبشرة',
  image: 'https://image-url.com/image.jpg',
  images: ['url1', 'url2'], // اختياري
  rating: 4.8,
  ingredients: 'المكونات',
  usage: 'طريقة الاستخدام',
  slug: 'product-name', // يجب أن يكون فريد
}
```

#### التصنيفات المتاحة

```typescript
const CATEGORIES = [
  'كل المنتجات',
  'العناية بالبشرة',
  'العناية بالشعر',
  'المكياج',
  'العطور',
  'منتجات طبيعية',
];
```

### الصور

#### أفضل الممارسات

- **الحجم الموصى به:** 800x800px
- **الصيغة:** WebP أو JPEG
- **الحجم الأقصى:** 200 KB
- **الجودة:** 80-90%

#### مصادر الصور المجانية

- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

---

## 📱 واتساب

### تنسيق الرقم

```env
# ✅ صحيح
NEXT_PUBLIC_WHATSAPP_NUMBER=+9647XXXXXXXXX

# ❌ خطأ
NEXT_PUBLIC_WHATSAPP_NUMBER=07XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=9647XXXXXXXXX
```

### تخصيص الرسالة

في `lib/utils.ts` - دالة `generateWhatsAppLink`:

```typescript
const message = `
السلام عليكم

[محتوى مخصص هنا]

شكراً 🌸
`;
```

---

## 🔍 SEO

### العناوين

```typescript
// في كل صفحة
export const metadata = {
  title: 'عنوان الصفحة - عَمّار',
  description: 'وصف الصفحة (150-160 حرف)',
  keywords: ['كلمة1', 'كلمة2'],
};
```

### الصور

```jsx
// استخدم alt دائماً
<Image
  src="/image.jpg"
  alt="وصف الصورة"
  width={800}
  height={600}
/>
```

### الروابط الداخلية

```jsx
// استخدم Link من Next.js
import Link from 'next/link';

<Link href="/products">المنتجات</Link>
```

---

## ⚡ الأداء

### الصور

```jsx
// استخدم next/image دائماً
import Image from 'next/image';

<Image
  src={product.image}
  alt={product.name}
  fill
  loading="lazy" // للتحميل الكسول
/>
```

### الاستيراد

```typescript
// ✅ جيد - استيراد محدد
import { useState } from 'react';

// ❌ تجنب - استيراد كامل
import * as React from 'react';
```

### الحالة

```typescript
// استخدم Zustand للحالة العامة
import { useCartStore } from '@/lib/store';

// استخدم useState للحالة المحلية
const [isOpen, setIsOpen] = useState(false);
```

---

## 🗄️ قاعدة البيانات

### Supabase

#### النسخ الاحتياطي

```sql
-- اعمل نسخة احتياطية منتظمة
-- من لوحة Supabase → Database → Backups
```

#### الاستعلامات

```typescript
// ✅ جيد - استعلام محدد
const { data } = await supabase
  .from('products')
  .select('id, name, price')
  .eq('category', 'العناية بالبشرة');

// ❌ تجنب - جلب كل البيانات
const { data } = await supabase
  .from('products')
  .select('*');
```

---

## 🔒 الأمان

### متغيرات البيئة

```bash
# ✅ افعل
- استخدم .env.local للتطوير
- أضف المفاتيح في Vercel للإنتاج
- لا تشارك المفاتيح أبداً

# ❌ لا تفعل
- لا تضع المفاتيح في الكود
- لا ترفع .env.local على Git
- لا تستخدم مفاتيح الإنتاج في التطوير
```

### التحقق من البيانات

```typescript
// تحقق دائماً من المدخلات
const validatePhone = (phone: string) => {
  return /^(\+964|0)?7[0-9]{9}$/.test(phone);
};
```

---

## 🧪 الاختبار

### قبل كل نشر

- [ ] اختبر على Chrome
- [ ] اختبر على Safari
- [ ] اختبر على Firefox
- [ ] اختبر على موبايل
- [ ] اختبر إضافة منتج للسلة
- [ ] اختبر إرسال طلب واتساب
- [ ] اختبر جميع الروابط
- [ ] اختبر النماذج

### أدوات الاختبار

```bash
# بناء المشروع
npm run build

# تشغيل الإنتاج محلياً
npm start

# اختبار ESLint
npm run lint
```

---

## 📊 التحليلات

### Google Analytics

```typescript
// في app/layout.tsx
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

{GA_ID && (
  <Script
    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
    strategy="afterInteractive"
  />
)}
```

### Meta Pixel

```typescript
// في app/layout.tsx
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

{PIXEL_ID && (
  <Script id="meta-pixel" strategy="afterInteractive">
    {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){...};
      fbq('init', '${PIXEL_ID}');
    `}
  </Script>
)}
```

---

## 🚀 النشر

### Vercel

#### خطوات النشر

1. **الربط بـ GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **استيراد المشروع**
   - اذهب إلى vercel.com
   - استورد من GitHub
   - اختر المستودع

3. **إعدادات البيئة**
   - أضف `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - أضف مفاتيح Supabase
   - أضف مفاتيح Analytics

4. **النشر**
   - اضغط Deploy
   - انتظر (1-2 دقيقة)
   - جاهز! 🎉

#### التحديثات

```bash
# ادفع التحديثات
git add .
git commit -m "Update: description"
git push origin main

# Vercel ستنشر تلقائياً
```

---

## 📝 الصيانة

### يومياً

- [ ] راجع الطلبات الجديدة
- [ ] رد على الاستفسارات
- [ ] تحديث حالة المنتجات

### أسبوعياً

- [ ] راجع التحليلات
- [ ] تحديث المنتجات
- [ ] نسخة احتياطية للقاعدة

### شهرياً

- [ ] تحديث المكتبات
- [ ] مراجعة الأداء
- [ ] تحليل المبيعات

---

## 🆘 حل المشاكل الشائعة

### المشكلة: صفحة بيضاء بعد النشر

**الحل:**
```bash
# تحقق من سجلات الأخطاء في Vercel
# تأكد من متغيرات البيئة
# أعد بناء المشروع
npm run build
```

### المشكلة: الصور لا تظهر

**الحل:**
```javascript
// تحقق من next.config.js
images: {
  remotePatterns: [{
    protocol: 'https',
    hostname: '**',
  }],
}
```

### المشكلة: واتساب لا يفتح

**الحل:**
```env
# تحقق من صيغة الرقم
NEXT_PUBLIC_WHATSAPP_NUMBER=+9647XXXXXXXXX
# يجب أن يبدأ بـ +964
```

---

## 📚 مصادر مفيدة

### الوثائق

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

### المجتمع

- [Next.js Discord](https://discord.gg/nextjs)
- [Vercel Support](https://vercel.com/support)
- [Stack Overflow](https://stackoverflow.com)

---

## ✨ نصائح احترافية

### 1. الأداء

- استخدم Image Optimization
- قلل من استخدام الحالة العامة
- استخدم Lazy Loading
- قسّم الكود بذكاء

### 2. UX/UI

- استجب بسرعة للمستخدم
- أظهر حالات التحميل
- اعرض رسائل نجاح وفشل واضحة
- اجعل الأزرار كبيرة للمس

### 3. SEO

- استخدم عناوين وصفية
- أضف alt للصور
- استخدم structured data
- حسّن سرعة الموقع

### 4. التسويق

- استخدم عروض محدودة
- أضف شهادات العملاء
- استخدم صور عالية الجودة
- وضّح سياسة الإرجاع

---

## 🎯 الأهداف المستقبلية

### قريباً

- [ ] نظام تقييمات حقيقي
- [ ] برنامج ولاء
- [ ] كوبونات خصم
- [ ] تتبع الطلبات

### متوسط المدى

- [ ] تطبيق موبايل
- [ ] دفع إلكتروني
- [ ] متعدد اللغات
- [ ] مدونة محتوى

### طويل المدى

- [ ] AI للتوصيات
- [ ] Chatbot ذكي
- [ ] واقع معزز للمنتجات
- [ ] توسع إقليمي

---

## 💡 تذكر دائماً

> **"الجودة أهم من السرعة"**
> 
> خذ وقتك في الاختبار والتأكد من كل شيء قبل النشر

> **"العميل أولاً"**
> 
> اجعل تجربة المستخدم سلسة وممتعة

> **"التحسين المستمر"**
> 
> لا تتوقف عن تطوير الموقع بناءً على ملاحظات العملاء

---

**أخر تحديث:** يناير 2024  
**النسخة:** 1.0.0

---

🎉 **بالتوفيق في رحلتك مع عَمّار!**
