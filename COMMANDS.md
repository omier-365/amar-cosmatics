# 📝 دليل الأوامر - موقع عَمّار

## 🚀 أوامر التطوير

### تشغيل المشروع

```bash
# تشغيل في وضع التطوير
npm run dev

# تشغيل على منفذ مخصص
npm run dev -- -p 3001

# فتح المتصفح تلقائياً
npm run dev -- --turbo
```

### البناء والإنتاج

```bash
# بناء المشروع للإنتاج
npm run build

# تشغيل النسخة المبنية
npm start

# بناء وتشغيل
npm run build && npm start
```

### الفحص والتنظيف

```bash
# فحص الأخطاء
npm run lint

# إصلاح الأخطاء تلقائياً
npm run lint -- --fix

# فحص TypeScript
npx tsc --noEmit
```

---

## 📦 إدارة المكتبات

### التثبيت

```bash
# تثبيت جميع المكتبات
npm install

# تثبيت مكتبة جديدة
npm install package-name

# تثبيت مكتبة تطوير
npm install -D package-name

# تثبيت نسخة محددة
npm install package-name@1.0.0
```

### التحديث

```bash
# تحديث جميع المكتبات
npm update

# تحديث مكتبة محددة
npm update package-name

# فحص المكتبات القديمة
npm outdated

# تحديث Next.js
npm install next@latest react@latest react-dom@latest
```

### الإزالة

```bash
# إزالة مكتبة
npm uninstall package-name

# إزالة مع تنظيف
npm uninstall package-name && npm prune
```

---

## 🗄️ قاعدة البيانات (Supabase)

### الاتصال

```bash
# تثبيت Supabase CLI (اختياري)
npm install -g supabase

# تسجيل الدخول
supabase login

# ربط المشروع
supabase link --project-ref your-project-ref
```

### السكربتات

```bash
# تنفيذ السكربت الأساسي
# من لوحة Supabase → SQL Editor
# الصق محتوى supabase-schema.sql

# أو باستخدام CLI
supabase db push
```

---

## 🔧 Git

### الإعداد الأولي

```bash
# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# أول commit
git commit -m "Initial commit: Ammar Beauty Store"

# إضافة remote
git remote add origin https://github.com/username/ammar-beauty.git

# رفع على GitHub
git push -u origin main
```

### العمل اليومي

```bash
# فحص الحالة
git status

# إضافة ملفات محددة
git add file1.tsx file2.ts

# إضافة كل التغييرات
git add .

# عمل commit
git commit -m "feat: add new feature"

# رفع التغييرات
git push

# سحب التحديثات
git pull
```

### الفروع (Branches)

```bash
# إنشاء فرع جديد
git checkout -b feature/new-feature

# التبديل بين الفروع
git checkout main

# دمج فرع
git merge feature/new-feature

# حذف فرع
git branch -d feature/new-feature
```

### التراجع

```bash
# التراجع عن التغييرات غير المحفوظة
git checkout -- filename

# التراجع عن آخر commit
git reset --soft HEAD~1

# التراجع الكامل (حذر!)
git reset --hard HEAD~1

# التراجع عن push (حذر!)
git revert HEAD
```

---

## 🚀 Vercel

### CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر للتجربة
vercel

# النشر للإنتاج
vercel --prod

# فحص معلومات المشروع
vercel inspect

# حذف deployment
vercel rm deployment-url
```

### متغيرات البيئة

```bash
# إضافة متغير بيئة
vercel env add VARIABLE_NAME

# عرض المتغيرات
vercel env ls

# إزالة متغير
vercel env rm VARIABLE_NAME
```

---

## 🧪 الاختبار

### فحص المشروع

```bash
# بناء المشروع
npm run build

# فحص الأخطاء
npm run lint

# فحص الأنواع
npx tsc --noEmit

# كل الفحوصات
npm run build && npm run lint && npx tsc --noEmit
```

### اختبار الأداء

```bash
# تحليل حجم Bundle
npm run build

# فحص Lighthouse (يدوي)
# افتح Chrome DevTools → Lighthouse → Generate Report
```

---

## 🔍 التشخيص

### مشاكل الأداء

```bash
# تحليل Bundle
npm run build

# فحص الاعتماديات
npm ls

# فحص حجم node_modules
du -sh node_modules

# تنظيف الذاكرة المؤقتة
npm cache clean --force
```

### مشاكل TypeScript

```bash
# فحص الأنواع
npx tsc --noEmit

# إنشاء tsconfig جديد
npx tsc --init
```

### مشاكل Next.js

```bash
# تنظيف .next
rm -rf .next

# إعادة البناء
npm run build

# فحص معلومات Next.js
npx next info
```

---

## 🛠️ أدوات مساعدة

### تنسيق الكود

```bash
# تنسيق جميع الملفات
npx prettier --write .

# فحص التنسيق
npx prettier --check .
```

### تحليل الكود

```bash
# تحليل ESLint
npx eslint . --ext .ts,.tsx

# إصلاح تلقائي
npx eslint . --ext .ts,.tsx --fix
```

### تحسين الصور

```bash
# ضغط الصور (يدوي)
# استخدم أدوات مثل:
# - TinyPNG.com
# - Squoosh.app
# - ImageOptim (Mac)
```

---

## 📊 التحليل والمراقبة

### معلومات المشروع

```bash
# حجم المشروع
du -sh .

# عدد الملفات
find . -type f | wc -l

# عدد أسطر الكود
find . -name '*.tsx' -o -name '*.ts' | xargs wc -l
```

### الأداء

```bash
# بناء وتحليل
npm run build

# معلومات Build
cat .next/build-manifest.json
```

---

## 🔄 النسخ الاحتياطي

### نسخة احتياطية محلية

```bash
# نسخ المشروع
cp -r . ../ammar-beauty-backup

# أرشفة
tar -czf ammar-beauty-backup.tar.gz .

# استخراج
tar -xzf ammar-beauty-backup.tar.gz
```

### نسخة احتياطية لقاعدة البيانات

```bash
# من لوحة Supabase:
# Database → Backups → Create Backup

# أو باستخدام CLI
supabase db dump -f backup.sql
```

---

## 🚨 أوامر الطوارئ

### إصلاح سريع

```bash
# حذف node_modules وإعادة التثبيت
rm -rf node_modules package-lock.json
npm install

# حذف .next وإعادة البناء
rm -rf .next
npm run build

# إعادة ضبط Git (حذر!)
git reset --hard HEAD
git clean -fd
```

### استعادة الحالة

```bash
# الرجوع لآخر commit
git stash
git pull

# استعادة ملف محدد
git checkout HEAD -- filename

# الرجوع لنقطة محددة
git checkout commit-hash
```

---

## 📝 أوامر مخصصة (يمكن إضافتها)

### في package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next out node_modules",
    "reinstall": "npm run clean && npm install",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "validate": "npm run typecheck && npm run lint && npm run build"
  }
}
```

### تنفيذ الأوامر المخصصة

```bash
npm run clean
npm run reinstall
npm run typecheck
npm run format
npm run validate
```

---

## 🎯 سير العمل الموصى به

### كل يوم

```bash
# 1. سحب التحديثات
git pull

# 2. تثبيت المكتبات الجديدة
npm install

# 3. تشغيل المشروع
npm run dev

# 4. العمل على المشروع...

# 5. حفظ التغييرات
git add .
git commit -m "description"
git push
```

### قبل النشر

```bash
# 1. فحص شامل
npm run lint
npx tsc --noEmit

# 2. بناء المشروع
npm run build

# 3. اختبار النسخة المبنية
npm start

# 4. نشر على Vercel
vercel --prod
```

### أسبوعياً

```bash
# 1. فحص التحديثات
npm outdated

# 2. تحديث المكتبات
npm update

# 3. نسخة احتياطية
git tag -a v1.0.1 -m "Backup"
git push --tags
```

---

## 📚 مراجع سريعة

### Next.js

```bash
# تشغيل
npm run dev

# بناء
npm run build

# معلومات
npx next info
```

### npm

```bash
# تثبيت
npm install

# تحديث
npm update

# تنظيف
npm prune
```

### Git

```bash
# حفظ
git add . && git commit -m "msg" && git push

# سحب
git pull

# حالة
git status
```

---

## 💡 نصائح

### سرعة التطوير

- استخدم `npm run dev -- --turbo` لتشغيل أسرع
- نظف `.next` عند مواجهة مشاكل غريبة
- استخدم Git بانتظام
- اعمل نسخ احتياطية دورية

### تجنب المشاكل

- لا تحذف `package-lock.json` إلا عند الضرورة
- لا تستخدم `--force` إلا عند الحاجة
- اختبر قبل النشر
- راجع الكود قبل الـ commit

---

## 🆘 الحصول على المساعدة

```bash
# معلومات Next.js
npx next --help

# معلومات npm
npm help

# معلومات Git
git --help

# معلومات Vercel
vercel --help
```

---

**آخر تحديث:** يناير 2024

احفظ هذا الملف كمرجع سريع! 📌
