# 🚂 دليل النشر على Railway - كامل ومفصل

## ✅ المشروع جاهز 100% للنشر على Railway

**تم تكوين المشروع بالكامل ليعمل مع Railway مباشرة بدون أي تعديلات!**

---

## 📋 المتطلبات المحققة

### ✅ Next.js Configuration
- ✅ Next.js 14.2.18 (stable)
- ✅ TypeScript
- ✅ App Router
- ✅ Production-ready configuration
- ✅ Standalone output enabled
- ✅ No Vercel-specific features
- ✅ No vercel.json file

### ✅ Build Requirements
- ✅ `npm install` يعمل بنجاح
- ✅ `npm run build` يعمل بنجاح
- ✅ `npm start` يعمل بنجاح
- ✅ Production build جاهز بدون تعديلات

### ✅ Railway Requirements
- ✅ PORT يُكتشف تلقائياً من `process.env.PORT`
- ✅ لا يوجد hardcoded ports
- ✅ package.json صالح
- ✅ جميع الـ scripts موجودة
- ✅ Standalone deployment compatible
- ✅ Server يبدأ بشكل صحيح

### ✅ Environment Variables Support
```env
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_FACEBOOK_URL
NEXT_PUBLIC_INSTAGRAM_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
- ✅ المشروع لا يتعطل إذا كانت المتغيرات مفقودة

### ✅ Code Quality
- ✅ No broken imports
- ✅ No missing assets
- ✅ No missing dependencies
- ✅ No unresolved paths
- ✅ No placeholder code
- ✅ No TypeScript errors
- ✅ No ESLint errors

---

## 🚀 طرق النشر على Railway

### الطريقة 1: Standard Node.js Deployment (موصى بها) ⭐

هذه هي الطريقة الأسهل والأسرع:

#### الخطوة 1: رفع المشروع على GitHub

**باستخدام GitHub Desktop:**
```
1. حمّل GitHub Desktop: https://desktop.github.com
2. File → Add Local Repository
3. اختر: D:\عمار  git init
4. اضغط "Push origin"
```

**أو Terminal:**
```bash
git push -u origin main
```

#### الخطوة 2: إنشاء مشروع Railway

1. **اذهب إلى Railway:**
   - افتح: https://railway.app
   - سجّل دخول (يمكنك استخدام حساب GitHub)

2. **إنشاء مشروع جديد:**
   - اضغط "New Project"
   - اختر "Deploy from GitHub repo"
   - اختر repository: `omier-365/amarcosmatics`
   - Railway سيكتشف Next.js تلقائياً ✅

3. **إضافة المتغيرات البيئية (اختياري):**
   
   اذهب إلى **Variables** وأضف:
   
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-app.railway.app
   NEXT_PUBLIC_WHATSAPP_NUMBER=+201202119847
   NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/ammar.beauty
   NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/ammar.beauty
   ```

4. **النشر:**
   - Railway سيبدأ النشر تلقائياً
   - انتظر 3-5 دقائق
   - ستحصل على URL مثل: `https://your-app.railway.app`

---

### الطريقة 2: Docker Deployment

إذا أردت استخدام Docker:

#### الخطوة 1: نفس خطوات الرفع على GitHub

#### الخطوة 2: في Railway

1. **إنشاء مشروع:**
   - New Project → Deploy from GitHub repo
   - اختر المشروع

2. **تفعيل Docker:**
   - Railway سيكتشف `Dockerfile` تلقائياً
   - أو: اذهب إلى Settings → Build → Docker

3. **البناء والنشر:**
   - Railway سيبني Docker image
   - سينشر تلقائياً

---

## 📁 الملفات المُنشأة للنشر

### 1. `package.json`
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p ${PORT:-3000}",
    "lint": "next lint"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```
**ملاحظة:** الـ start script يستخدم `${PORT:-3000}` للتوافق مع Railway

### 2. `next.config.js`
```javascript
const nextConfig = {
  output: 'standalone',
  // ... إعدادات أخرى
}
```
**ملاحظة:** `output: 'standalone'` ضروري للنشر على Railway

### 3. `Dockerfile`
ملف Docker جاهز للاستخدام المباشر

### 4. `railway.json`
```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### 5. `.dockerignore`
لتحسين أداء Docker build

---

## 🔧 المتغيرات البيئية

### المتغيرات الأساسية (موصى بها):
```env
NEXT_PUBLIC_SITE_URL=https://your-app.railway.app
NEXT_PUBLIC_WHATSAPP_NUMBER=+201202119847
```

### المتغيرات الاختيارية:
```env
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/ammar.beauty
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/ammar.beauty
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

**ملاحظة مهمة:** المشروع يعمل بشكل كامل **بدون** إضافة أي متغيرات! جميعها اختيارية.

---

## 🎯 بعد النشر

### 1. الحصول على الـ URL
- اذهب إلى Railway Dashboard
- افتح مشروعك
- اذهب إلى Settings → Domains
- انسخ الـ URL (مثل: `your-app.railway.app`)

### 2. تحديث NEXT_PUBLIC_SITE_URL
- ارجع إلى Variables
- عدّل `NEXT_PUBLIC_SITE_URL` بالـ URL الجديد
- Railway سيعيد النشر تلقائياً

### 3. اختبار الموقع
- افتح الـ URL
- تأكد من:
  - ✅ الصفحة الرئيسية تعمل
  - ✅ صفحة المنتجات تعمل
  - ✅ سلة المشتريات تعمل
  - ✅ WhatsApp يعمل

### 4. ربط Domain مخصص (اختياري)
- اذهب إلى Settings → Domains
- اضغط "Add Custom Domain"
- أدخل domain الخاص بك
- اتبع تعليمات DNS

---

## 🔍 استكشاف الأخطاء

### المشكلة: Build Failed

**الحل:**
```bash
# جرّب البناء محلياً أولاً
npm install
npm run build

# إذا نجح محلياً، المشكلة في Railway settings
```

### المشكلة: Application Crashed

**الحل:**
1. افحص Logs في Railway Dashboard
2. تحقق من المتغيرات البيئية
3. تأكد من أن PORT غير hardcoded

### المشكلة: الموقع بطيء

**الحل:**
1. ترقية Railway plan إذا لزم الأمر
2. تفعيل caching في next.config.js
3. تحسين الصور والـ assets

---

## 💰 التكلفة

### Railway Pricing:
- **Free Tier:** $5 credit شهرياً (كافي للمشاريع الصغيرة)
- **Developer Plan:** $10-20/شهر (للمشاريع المتوسطة)
- **Pro Plan:** $20+/شهر (للمشاريع الكبيرة)

**توقعات الاستخدام:**
- موقع صغير: ~$3-5/شهر (ضمن Free Tier)
- موقع متوسط: ~$10-15/شهر
- موقع كبير: $20+/شهر

---

## 📊 مقارنة الطرق

| الميزة | Node.js | Docker |
|--------|---------|--------|
| **السرعة** | ⚡ أسرع | 🐢 أبطأ قليلاً |
| **الحجم** | 📦 أصغر | 📦 أكبر |
| **البساطة** | ✅ سهل | ⚙️ متوسط |
| **التحكم** | 🎚️ محدود | 🎛️ كامل |
| **موصى به** | ✅ نعم | ⚪ حسب الحاجة |

---

## 🎉 الخلاصة

### ✅ ما تم تجهيزه:
- ✅ Next.js 14 stable
- ✅ TypeScript configuration
- ✅ App Router
- ✅ Standalone build
- ✅ Railway.json
- ✅ Dockerfile
- ✅ Docker ignore
- ✅ Environment variables
- ✅ Port detection
- ✅ Production-ready

### 📝 خطوات النشر السريعة:
```
1️⃣ ارفع على GitHub
2️⃣ اذهب إلى railway.app
3️⃣ New Project → Deploy from GitHub
4️⃣ اختر المشروع
5️⃣ (اختياري) أضف متغيرات البيئة
6️⃣ انتظر النشر
7️⃣ ✅ موقعك شغال!
```

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع Railway Logs
2. تحقق من [Railway Docs](https://docs.railway.app)
3. راجع هذا الملف

---

**تاريخ الإنشاء:** 24 يونيو 2026  
**النسخة:** 1.0.0  
**الحالة:** ✅ Railway Ready 🚂
