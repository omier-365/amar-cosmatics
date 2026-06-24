# دليل النشر - موقع عَمّار

## المتطلبات الأساسية

- Node.js 18+ مثبت على جهازك
- حساب على [Supabase](https://supabase.com)
- حساب على [Vercel](https://vercel.com) (اختياري للنشر)
- حساب GitHub (لرفع الكود)

---

## 1. إعداد المشروع محلياً

### تثبيت المكتبات

```bash
npm install
```

### إنشاء ملف البيئة

انسخ ملف `.env.example` إلى `.env.local`:

```bash
copy .env.example .env.local
```

---

## 2. إعداد قاعدة البيانات (Supabase)

### خطوات الإعداد:

1. اذهب إلى [Supabase](https://supabase.com) وأنشئ حساب جديد
2. أنشئ مشروع جديد (Project)
3. من قائمة المشروع، اذهب إلى **SQL Editor**
4. انسخ محتوى ملف `supabase-schema.sql` والصقه في المحرر
5. اضغط **Run** لتنفيذ السكربت

### الحصول على المفاتيح:

1. من قائمة المشروع، اذهب إلى **Settings** → **API**
2. انسخ القيم التالية:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon/public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. ضع القيم في ملف `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_WHATSAPP_NUMBER=+9647XXXXXXXXX
```

---

## 3. تشغيل المشروع محلياً

```bash
# وضع التطوير
npm run dev

# فتح المتصفح على
http://localhost:3000
```

### البناء للإنتاج

```bash
npm run build
npm start
```

---

## 4. رفع الكود على GitHub

### إنشاء مستودع جديد:

```bash
git init
git add .
git commit -m "Initial commit - Ammar Beauty Store"
git branch -M main
git remote add origin https://github.com/your-username/ammar-beauty.git
git push -u origin main
```

---

## 5. النشر على Vercel

### الطريقة الأولى: عبر واجهة Vercel

1. اذهب إلى [Vercel](https://vercel.com)
2. اضغط **New Project**
3. استورد مستودع GitHub الخاص بك
4. أضف متغيرات البيئة:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. اضغط **Deploy**

### الطريقة الثانية: عبر CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# النشر للإنتاج
vercel --prod
```

---

## 6. إعدادات ما بعد النشر

### تحديث رقم الواتساب

في ملف `.env.local` أو في إعدادات Vercel:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+9647XXXXXXXXX
```

تأكد من استخدام الصيغة الدولية: `+964` متبوعة بالرقم

### تحديث Sitemap

في ملف `public/sitemap.xml`، غيّر الرابط:

```xml
<loc>https://your-domain.com/</loc>
```

### تحديث Robots.txt

في ملف `public/robots.txt`:

```txt
Sitemap: https://your-domain.com/sitemap.xml
```

---

## 7. إضافة Analytics (اختياري)

### Google Analytics

1. أنشئ حساب GA4
2. احصل على Measurement ID
3. أضفه في `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Meta Pixel

1. أنشئ Pixel في Facebook Business
2. احصل على Pixel ID
3. أضفه في `.env.local`:

```env
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

---

## 8. إدارة المنتجات

### إضافة منتجات جديدة

يمكنك إضافة المنتجات بطريقتين:

#### 1. عبر Supabase Dashboard

1. اذهب إلى **Table Editor** → **products**
2. اضغط **Insert** → **Insert row**
3. املأ البيانات واضغط **Save**

#### 2. عبر SQL

```sql
INSERT INTO products (name, description, price, category, image, slug, rating)
VALUES (
  'اسم المنتج',
  'وصف المنتج',
  50000,
  'العناية بالبشرة',
  'https://image-url.com/image.jpg',
  'product-slug',
  4.8
);
```

---

## 9. اختبار الموقع

### قبل النشر:

- ✅ اختبر جميع الصفحات
- ✅ اختبر إضافة المنتجات للسلة
- ✅ اختبر إتمام الطلب وإرسال الواتساب
- ✅ اختبر على الموبايل
- ✅ اختبر سرعة الموقع

### أدوات الاختبار:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## 10. الصيانة والتحديثات

### تحديث المكتبات:

```bash
npm update
```

### التحديث إلى آخر إصدار Next.js:

```bash
npm install next@latest react@latest react-dom@latest
```

---

## الدعم والمساعدة

إذا واجهت أي مشاكل:

1. راجع ملف `README.md`
2. تحقق من ملفات `.env.local`
3. راجع سجلات الأخطاء في Vercel Dashboard
4. تحقق من اتصال Supabase

---

## ملاحظات مهمة

⚠️ **لا تنشر ملف `.env.local` على GitHub**

⚠️ **احتفظ بنسخة احتياطية من قاعدة البيانات**

⚠️ **غيّر رقم الواتساب قبل النشر**

✅ **الموقع جاهز للنشر دون أي تعديلات إضافية**

---

🎉 **مبروك! موقع عَمّار جاهز للإنطلاق**
