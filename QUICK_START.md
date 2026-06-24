# 🚀 البدء السريع - موقع عَمّار

## ⚡ في 3 خطوات فقط!

### 1️⃣ التثبيت (دقيقة واحدة)

```bash
npm install
```

### 2️⃣ الإعداد (30 ثانية)

انسخ وعدّل:

```bash
copy .env.example .env.local
```

افتح `.env.local` وضع رقم الواتساب:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+201202119847
```

### 3️⃣ التشغيل (10 ثوانٍ)

```bash
npm run dev
```

افتح: **http://localhost:3000**

---

## 🎉 مبروك!

موقعك يعمل الآن! 🎊

---

## 📋 ماذا بعد؟

### للنشر على الإنترنت:

1. **ارفع على GitHub**
   ```bash
   git init
   git add .
   git commit -m "First commit"
   git remote add origin https://github.com/username/repo.git
   git push -u origin main
   ```

2. **اذهب إلى Vercel**
   - [vercel.com](https://vercel.com)
   - Import من GitHub
   - أضف متغير البيئة (رقم الواتساب)
   - Deploy!

3. **جاهز!**
   - موقعك على الإنترنت خلال 2 دقيقة
   - رابط مجاني: `your-project.vercel.app`

---

## 🔧 تخصيص سريع

### تغيير الألوان

في `tailwind.config.ts`:

```typescript
colors: {
  lavender: '#E8DDFD', // لونك هنا
  gold: '#D4AF37',     // لونك هنا
}
```

### إضافة منتج

في `lib/mock-data.ts`:

```typescript
{
  name: 'اسم المنتج',
  price: 50000,
  category: 'العناية بالبشرة',
  // ... باقي التفاصيل
}
```

---

## 📞 الدعم

- **الدليل الكامل:** `DEPLOYMENT.md`
- **المميزات:** `FEATURES.md`
- **المشاكل:** `BEST_PRACTICES.md`

---

## ✅ قائمة تحقق

قبل النشر:

- [ ] غيّرت رقم الواتساب؟
- [ ] اختبرت الموقع؟
- [ ] جربت إضافة منتج للسلة؟
- [ ] جربت إرسال طلب؟

إذا نعم لكل شيء ← **انشر!** 🚀

---

**وقت الإعداد الإجمالي:** ~5 دقائق  
**الصعوبة:** سهل جداً 😊

---

بالتوفيق! 💪
