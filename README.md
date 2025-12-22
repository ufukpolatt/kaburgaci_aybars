# Kaburgacı Aybaz - Restoran Tanıtım Sitesi

Kaburgacı Aybaz restoranı için modern ve responsive Next.js tabanlı tanıtım sitesi.

## 🚀 Özellikler

- **Modern Tasarım**: Tailwind CSS ile güncel ve şık tasarım
- **Responsive**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile akıcı geçiş efektleri
- **SEO Optimizasyonu**: Arama motorları için tam optimizasyon
- **İnteraktif Menü**: Kategorilere ayrılmış dinamik menü sistemi
- **İletişim Formu**: Rezervasyon ve mesaj gönderme özellikleri
- **Harita Entegrasyonu**: Google Maps ile konum gösterimi

## 🛠️ Teknolojiler

- **Next.js 16**: React tabanlı framework
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animasyon kütüphanesi
- **React Hooks**: State management ve effects

## 📱 Responsive Tasarım

- **Mobil**: 320px ve üzeri
- **Tablet**: 768px ve üzeri
- **Masaüstü**: 1024px ve üzeri
- **Büyük Ekran**: 1280px ve üzeri

## 🎨 Renk Paleti

- **Primary (Kırmızı)**: #dc2626 - #991b1b
- **Secondary (Sarı)**: #f59e0b - #78350f
- **Neutral**: #f8fafc - #1f2937

## 📁 Proje Yapısı

```
kaburgaci-aybaz/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global stiller
│   │   ├── layout.tsx          # Ana layout
│   │   └── page.tsx           # Ana sayfa
│   ├── components/
│   │   ├── Header.tsx          # Navigasyon bileşeni
│   │   ├── Hero.tsx            # Ana banner
│   │   ├── Menu.tsx            # Menü bölümü
│   │   ├── About.tsx           # Hakkımızda bölümü
│   │   ├── Contact.tsx         # İletişim bölümü
│   │   ├── Footer.tsx           # Alt bilgi bileşeni
│   │   ├── ScrollAnimation.tsx # Animasyon bileşeni
│   │   ├── GoogleMap.tsx       # Harita bileşeni
│   │   └── SEO.tsx             # SEO bileşeni
│   └── lib/
├── public/
│   └── images/               # Görsel dosyaları
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

## 🚀 Kurulum ve Çalıştırma

1. **Gerekli paketleri yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 📦 Build ve Dağıtım

1. **Production build oluştur:**
   ```bash
   npm run build
   ```

2. **Production sunucusunu başlatın:**
   ```bash
   npm start
   ```

## 🔧 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.js` dosyasındaki renk paletini özelleştirin:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Renkleri burada özelleştirin
      },
      secondary: {
        // Renkleri burada özelleştirin
      }
    }
  }
}
```

### Fontları Değiştirme
`globals.css` dosyasındaki font importlarını değiştirin:

```css
@import url('https://fonts.googleapis.com/css2?family=FONT_NAME:wght@400;700;900&display=swap');
```

## 🌐 SEO Özellikleri

- **Meta Etiketleri**: Title, description, keywords
- **Open Graph**: Facebook ve sosyal medya paylaşımı
- **Twitter Cards**: Twitter paylaşımı
- **Structured Data**: Google arama sonuçları
- **Canonical URL**: Yinelenen içerik önleme
- **Robots**: Arama motoru direktifleri

## 📱 Mobil Optimizasyon

- **Touch-friendly**: Dokunmatik ekranlar için optimize
- **Fast Loading**: Performans için kod bölme
- **Progressive Enhancement**: Temel özellikler öncelikli
- **Viewport Meta**: Tüm cihazlarda düzgün görünüm

## 🎯 Performans

- **Image Optimization**: Next.js Image komponenti
- **Code Splitting**: Otomatik kod bölme
- **Lazy Loading**: Gereksiz yüklemeleri önleme
- **Minification**: CSS ve JS minifikasyonu

## 🔍 Browser Desteği

- **Chrome**: En son sürüm
- **Firefox**: En son sürüm
- **Safari**: En son sürüm
- **Edge**: En son sürüm
- **Mobile**: iOS ve Android tarayıcıları

## 📞 İletişim

- **Adres**: Mehmet Yavaş Bulvarı No:123, Kadıköy/İstanbul
- **Telefon**: 0216 555 12 34
- **E-posta**: info@kaburgaciaybaz.com
- **Çalışma Saatleri**: 11:00 - 23:00 (Hafta içi)

## 📄 Lisans

Bu proje ticari kullanım için lisanslıdır. Tüm hakları saklıdır.

---

**Kaburgacı Aybaz © 2024 - En Lezzetli Kaburgalar**