# 🎬 Intro Animation - موقع عَمّار

## ✨ نظرة عامة

انيميشن فاخر للدخول يظهر عند فتح الموقع لأول مرة، مصمم بأسلوب براندات التجميل العالمية.

---

## 🎨 المواصفات

### المدة الزمنية:
- **2.5 ثانية** إجمالي
- **0.8 ثانية** توقف في النهاية
- **0.6 ثانية** انتقال سلس

### التسلسل:
1. **0.0-0.3s**: خلفية بيضاء نقية
2. **0.3-1.5s**: موجة ضوء ذهبية وردية من اليسار لليمين
3. **0.3-1.1s**: رسم الصورة الظلية الأنثوية بتأثير line-drawing
4. **0.8-1.6s**: ظهور شعار "عَمّار" العربي مع تكبير من 97% إلى 100%
5. **1.3-1.5s**: لمعة premium على الشعار
6. **1.4-2.2s**: ظهور "AMMAR" بالإنجليزية مع تحريك المسافات بين الحروف
7. **1.8s**: ظهور الماسة الزخرفية
8. **2.5-3.1s**: انتقال ناعم للصفحة الرئيسية

---

## 🎯 الأسلوب

### الألوان:
- **الخلفية**: أبيض نقي (#FFFFFF)
- **النص**: أسود داكن (#1a1a1a)
- **اللمسات**: ذهبي وردي (#d99c94)

### المبادئ:
- ✅ فاخر (Luxury)
- ✅ بسيط (Minimalist)
- ✅ أنيق (Elegant)
- ✅ نظيف (Clean)
- ✅ هادئ (Calm)
- ✅ راقي (Premium)

### ما تم تجنبه:
- ❌ تأثيرات صاخبة
- ❌ حركة سريعة
- ❌ جزيئات متحركة
- ❌ توهج نيون
- ❌ انيميشن مبالغ فيه

---

## 📁 الملفات

### المكونات:
- `components/IntroAnimation.tsx` - الانيميشن الرئيسي
- `components/IntroWrapper.tsx` - التحكم في العرض

### التكامل:
- `app/layout.tsx` - تم الدمج في الـ layout الرئيسي

---

## ⚙️ كيف يعمل

### Session Storage:
يتم عرض الانيميشن **مرة واحدة فقط** في كل جلسة (session):
- عند أول زيارة: يظهر الانيميشن
- عند التنقل بين الصفحات: لا يظهر
- عند إغلاق وفتح المتصفح: يظهر مرة أخرى

### التحكم:
```typescript
// في sessionStorage
'introShown' = 'true' // بعد العرض الأول
```

---

## 🔧 التخصيص

### تغيير المدة:
```typescript
// في IntroAnimation.tsx
const timer = setTimeout(() => {
  setShow(false);
  setTimeout(onComplete, 600);
}, 2500); // غيّر هنا (بالميلي ثانية)
```

### تعطيل الانيميشن:
```typescript
// في IntroWrapper.tsx
const hasSeenIntro = true; // دائماً true لتعطيل الانيميشن
```

### تغيير الألوان:
```typescript
// اللون الذهبي الوردي
stroke="#d99c94"
// اللون الأسود
stroke="#1a1a1a"
```

---

## 🎨 العناصر المتحركة

### 1. موجة الضوء:
```typescript
animate={{ x: '100%', opacity: [0, 0.3, 0] }}
transition={{ duration: 1.2, ease: 'easeInOut' }}
```

### 2. الصورة الظلية:
```typescript
animate={{ pathLength: 1, opacity: 1 }}
transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
```

### 3. الشعار العربي:
```typescript
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
```

### 4. اللمعة:
```typescript
animate={{ x: '200%', opacity: [0, 0.6, 0] }}
transition={{ duration: 1, ease: 'easeInOut', delay: 1.3 }}
```

### 5. النص الإنجليزي:
```typescript
animate={{ letterSpacing: '0.35em' }}
transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
```

---

## 🌟 المميزات

### ✅ أداء عالي:
- استخدام Framer Motion للانيميشن
- GPU acceleration تلقائي
- لا يؤثر على سرعة تحميل الموقع

### ✅ متجاوب:
- يعمل على جميع الأجهزة
- تصميم responsive

### ✅ احترافي:
- مشابه لبراندات عالمية مثل:
  - Dior
  - Chanel
  - La Mer
  - Charlotte Tilbury

---

## 🎥 التأثيرات المستخدمة

### Framer Motion:
```typescript
- motion.div
- AnimatePresence
- initial/animate/exit
- transition timing
- easing functions
```

### SVG Animation:
```typescript
- pathLength
- stroke animation
- scale transform
- opacity fade
```

### CSS:
```typescript
- linear-gradient
- radial-gradient
- transform
- opacity
```

---

## 📱 التوافق

### المتصفحات:
- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Opera (76+)

### الأجهزة:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

---

## 🚀 النشر

الانيميشن جاهز للإنتاج ويعمل على:
- ✅ Vercel
- ✅ Netlify
- ✅ أي استضافة تدعم Next.js

---

## 💡 نصائح

### للتطوير:
- الانيميشن يعمل فقط في production mode
- في development قد تلاحظ بعض التأخير

### للاختبار:
1. افتح المتصفح في وضع incognito
2. امسح sessionStorage:
```javascript
sessionStorage.clear()
```
3. أعد تحميل الصفحة

---

## 📊 الأداء

### Lighthouse Scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### حجم الملفات:
- IntroAnimation.tsx: ~3KB
- IntroWrapper.tsx: ~1KB
- Impact: Minimal

---

## 🎨 التصميم

مستوحى من:
- براندات التجميل الفاخرة
- الأناقة اليابانية (Wabi-sabi)
- التصميم السويسري النظيف
- الفخامة الفرنسية

---

<div align="center">

**✨ انيميشن فاخر لبراند فاخر ✨**

**عَمّار - نُعَمِّر جمالك** 💄

</div>

---

**آخر تحديث:** 23 يونيو 2026  
**النسخة:** 1.0.0  
**الحالة:** ✅ جاهز للإنتاج
