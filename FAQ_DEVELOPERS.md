# ❓ الأسئلة الشائعة للمطورين

## 🚀 البداية

### س: كيف أبدأ بالمشروع؟

```bash
npm install
npm run dev
```

افتح المتصفح على `http://localhost:3000`

---

### س: ما هي المتطلبات الأساسية؟

- Node.js 18 أو أحدث
- npm أو yarn
- محرر نصوص (VS Code موصى به)

---

### س: هل أحتاج قاعدة بيانات من البداية؟

لا! المشروع يعمل بالبيانات التجريبية. يمكنك إضافة Supabase لاحقاً.

---

## 🎨 التصميم

### س: كيف أغير الألوان؟

في `tailwind.config.ts`:

```typescript
colors: {
  lavender: '#YOUR_COLOR',
  gold: '#YOUR_COLOR',
  charcoal: '#YOUR_COLOR',
}
```

---

### س: كيف أضيف خط جديد؟

في `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({
  subsets: ['arabic'],
  variable: '--font-yourfont',
});
```

---

### س: كيف أغير شعار الموقع؟

في `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'اسمك',
  slogan: 'شعارك',
  // ...
};
```

---

## 🛍️ المنتجات

### س: كيف أضيف منتج جديد؟

**بدون قاعدة بيانات** (في `lib/mock-data.ts`):

```typescript
{
  id: 'unique-id',
  name: 'اسم المنتج',
  description: 'الوصف',
  price: 50000,
  category: 'العناية بالبشرة',
  image: 'https://...',
  slug: 'product-slug',
  rating: 4.8,
}
```

**مع Supabase**:

```sql
INSERT INTO products (name, price, category, slug)
VALUES ('اسم المنتج', 50000, 'العناية بالبشرة', 'product-slug');
```

---

### س: كيف أضيف تصنيف جديد؟

في `lib/constants.ts`:

```typescript
export const CATEGORIES = [
  'كل المنتجات',
  'التصنيف الجديد', // أضف هنا
  // ...
];
```

---

### س: كيف أغير عدد المنتجات في الصفحة الرئيسية؟

في `app/page.tsx`:

```typescript
const featuredProducts = MOCK_PRODUCTS.slice(0, 8); // غير الرقم
```

---

## 📱 واتساب

### س: كيف أغير رقم الواتساب؟

في `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+9647XXXXXXXXX
```

**مهم:** استخدم الصيغة الدولية `+964...`

---

### س: كيف أخصص رسالة الواتساب؟

في `lib/utils.ts` - دالة `generateWhatsAppLink`:

```typescript
const message = `
السلام عليكم

رسالتك المخصصة هنا...

${items.map(...)}
`;
```

---

### س: لماذا لا يفتح واتساب؟

تحقق من:
- ✅ الرقم بصيغة دولية `+964...`
- ✅ الرقم في `.env.local`
- ✅ أعد تشغيل `npm run dev`

---

## 🗄️ قاعدة البيانات

### س: هل Supabase إلزامي؟

لا! المشروع يعمل بدون قاعدة بيانات. لكن للطلبات الحقيقية تحتاج Supabase.

---

### س: كيف أربط Supabase؟

1. أنشئ حساب في [supabase.com](https://supabase.com)
2. أنشئ مشروع جديد
3. نفذ `supabase-schema.sql`
4. انسخ المفاتيح إلى `.env.local`

---

### س: كيف أضيف حقل جديد للمنتج؟

في قاعدة البيانات:

```sql
ALTER TABLE products
ADD COLUMN new_field TEXT;
```

في TypeScript (`lib/types.ts`):

```typescript
export interface Product {
  // ...
  new_field?: string;
}
```

---

## ⚡ الأداء

### س: الموقع بطيء في التطوير

هذا طبيعي! استخدم:

```bash
npm run build
npm start
```

للحصول على الأداء الحقيقي.

---

### س: الصور لا تظهر

تأكد من:
- الرابط صحيح
- الصورة متاحة عبر HTTPS
- في `next.config.js`:

```javascript
images: {
  remotePatterns: [{ hostname: '**' }],
}
```

---

### س: كيف أحسن سرعة الموقع؟

- استخدم صور WebP
- قلل حجم الصور (<200KB)
- استخدم Lazy Loading
- قلل من المكتبات الخارجية

---

## 🚀 النشر

### س: كيف أنشر على Vercel؟

1. ارفع على GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. Import من GitHub
4. أضف متغيرات البيئة
5. Deploy!

---

### س: أين أضع متغيرات البيئة في Vercel؟

Settings → Environment Variables → Add New

أضف:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=+9647XXXXXXXXX
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

### س: النشر فشل، ماذا أفعل؟

1. تحقق من Build Logs في Vercel
2. جرب البناء محلياً: `npm run build`
3. تأكد من متغيرات البيئة
4. راجع الأخطاء في console

---

## 🔧 التخصيص

### س: كيف أضيف صفحة جديدة؟

في `app/`:

```bash
app/
  new-page/
    page.tsx
```

في `page.tsx`:

```typescript
export default function NewPage() {
  return <div>المحتوى</div>;
}
```

---

### س: كيف أضيف مكون جديد؟

في `components/`:

```typescript
// components/MyComponent.tsx
export default function MyComponent() {
  return <div>مكون جديد</div>;
}
```

استخدامه:

```typescript
import MyComponent from '@/components/MyComponent';
```

---

### س: كيف أضيف صفحة في Header؟

في `components/Header.tsx`:

```typescript
const navLinks = [
  // ...
  { href: '/new-page', label: 'الصفحة الجديدة' },
];
```

---

## 🐛 حل المشاكل

### س: خطأ: "Module not found"

```bash
npm install
# أو
rm -rf node_modules package-lock.json
npm install
```

---

### س: خطأ TypeScript

```bash
# فحص الأخطاء
npx tsc --noEmit

# إعادة تشغيل VS Code
# Command Palette → Reload Window
```

---

### س: صفحة بيضاء بعد النشر

تحقق من:
- Build logs في Vercel
- Browser console (F12)
- متغيرات البيئة

---

### س: السلة لا تحفظ المنتجات

تأكد من:
- `useCartStore` مستورد بشكل صحيح
- localStorage متاح في المتصفح
- لا توجد أخطاء في Console

---

## 📱 الموبايل

### س: كيف أختبر على الموبايل؟

```bash
# اعرف IP جهازك
ipconfig  # Windows
ifconfig  # Mac/Linux

# شغل المشروع
npm run dev

# افتح على الموبايل
http://YOUR_IP:3000
```

---

### س: التصميم مكسور على الموبايل

استخدم Chrome DevTools:
- F12 → Device Toolbar (Ctrl+Shift+M)
- اختبر أحجام مختلفة
- راجع Tailwind responsive classes

---

## 🔐 الأمان

### س: هل `.env.local` آمن؟

نعم، إذا:
- ✅ لم يُرفع على Git (موجود في `.gitignore`)
- ✅ متغيرات الإنتاج في Vercel فقط

---

### س: كيف أحمي لوحة التحكم؟

أضف authentication:

```typescript
// middleware.ts
export function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // أضف logic التحقق
  }
}
```

---

## 📊 Analytics

### س: كيف أضيف Google Analytics؟

في `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

المشروع يدعم GA تلقائياً!

---

### س: كيف أضيف Meta Pixel؟

في `.env.local`:

```env
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXX
```

---

## 🎨 Styling

### س: كيف أضيف CSS مخصص؟

في `app/globals.css`:

```css
.my-custom-class {
  /* styles */
}
```

---

### س: هل يمكن استخدام CSS Modules؟

نعم! أنشئ ملف `component.module.css`:

```css
.myClass {
  color: red;
}
```

استخدامه:

```typescript
import styles from './component.module.css';
<div className={styles.myClass}>
```

---

## 🔄 التحديثات

### س: كيف أحدث المكتبات؟

```bash
# فحص التحديثات
npm outdated

# تحديث الكل
npm update

# تحديث واحدة
npm update package-name
```

---

### س: كيف أحدث Next.js؟

```bash
npm install next@latest react@latest react-dom@latest
```

---

## 💡 نصائح

### س: أفضل ممارسة للتطوير؟

1. استخدم Git من البداية
2. اعمل commits صغيرة ومتكررة
3. اختبر قبل كل commit
4. اقرأ الوثائق
5. اسأل عند الحاجة

---

### س: كيف أتعلم أكثر؟

- اقرأ ملفات الوثائق في المشروع
- راجع [Next.js Docs](https://nextjs.org/docs)
- راجع [Tailwind Docs](https://tailwindcss.com/docs)
- تصفح الكود وافهمه

---

## 🆘 المساعدة

### س: لم أجد إجابة لسؤالي

1. راجع `README.md`
2. راجع `DEPLOYMENT.md`
3. راجع `BEST_PRACTICES.md`
4. راجع `PROJECT_STRUCTURE.md`
5. افتح issue على GitHub

---

## 📚 مراجع سريعة

### الملفات المهمة

- `README.md` - نظرة عامة
- `QUICK_START.md` - بداية سريعة
- `SETUP.md` - دليل إعداد
- `DEPLOYMENT.md` - دليل نشر
- `COMMANDS.md` - أوامر CLI
- `FEATURES.md` - قائمة المميزات
- `BEST_PRACTICES.md` - أفضل الممارسات

### الروابط المفيدة

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**آخر تحديث:** يناير 2024

💡 **نصيحة:** احفظ هذا الملف في المفضلة! سيوفر عليك الكثير من الوقت.
