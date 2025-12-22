'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  const [activeTab, setActiveTab] = useState('misyon')

  const tabs = [
    { id: 'misyon', name: 'Misyonumuz', icon: '🎯' },
    { id: 'vizyon', name: 'Vizyonumuz', icon: '🔮' },
    { id: 'degerler', name: 'Değerlerimiz', icon: '💎' }
  ]

  const tabContent = {
    misyon: {
      title: 'Misyonumuz',
      content: [
        'Kaburgacı Aybaz olarak misyonumuz; ustalıkla hazırlanan kaburgayı, en kaliteli malzemelerle, geleneksel lezzet anlayışını bozmadan misafirlerimize sunmak; her lokmada samimiyeti, doyuruculuğu ve gerçek et lezzetini hissettirmektir.',
        'Misafirlerimizin yalnızca karınlarını değil, lezzet hafızalarını da doyurmayı amaçlıyoruz.'
      ],
      image: '/images/about-mission.jpg'
    },
    vizyon: {
      title: 'Vizyonumuz',
      content: [
        'Türkiye\'de kaburga denince akla gelen, lezzetiyle, hizmetiyle ve kalitesiyle fark yaratan öncü bir marka olmak.',
        'Gelenekten kopmadan yeniliğe açık, her şubede aynı lezzeti sunan, kaburgayı bir "yemek"ten öte bir deneyim haline getiren bir marka olmayı hedefliyoruz.'
      ],
      image: '/images/about-vision.jpg'
    },
    degerler: {
      title: 'Değerlerimiz',
      content: [
        'Kalite: Et seçiminden pişirme sürecine kadar taviz vermediğimiz kalite anlayışı',
        'Ustalık: İşimizi bilen ellerden çıkan, sabırla pişirilen gerçek kaburga',
        'Samimiyet: Misafirlerimizi müşteri değil, soframıza oturan dost olarak görmek',
        'Gelenek: Türk mutfağının köklü lezzetlerini yaşatmak',
        'Hijyen: Temizlik ve gıda güvenliğinde en yüksek standartlar',
        'Süreklilik: Bugün olduğu gibi yarın da aynı lezzeti sunma sözü'
      ],
      image: '/images/about-values.jpg'
    }
  }

  const features = [
    {
      icon: '🥩',
      title: 'Kaliteli Et',
      description: 'Sadece en kaliteli ve taze etler kullanıyoruz'
    },
    {
      icon: '👨‍🍳',
      title: 'Usta Şefler',
      description: 'Yılların tecrübesine sahip profesyonel şefler'
    },
    {
      icon: '🌿',
      title: 'Doğal Malzemeler',
      description: 'Hiçbir katkı maddesi kullanmadan doğal lezzet'
    },
    {
      icon: '⏰',
      title: '6 Saat Pişirim',
      description: 'Her kaburga 6 saat boyunca özel tekniklerle pişirilir'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Hakkımızda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Misyonumuz, vizyonumuz ve değerlerimizle Türkiye'nin en lezzetli kaburga deneyimini sunuyoruz
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`m-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h3>
            <div className="space-y-4">
              {tabContent[activeTab as keyof typeof tabContent].content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Resim Yükleniyor...</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              delay={index * 0.1}
              className="text-center p-6 bg-gray-50 rounded-xl card-hover"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </ScrollAnimation>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-primary-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
           
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5K+</div>
              <div className="text-primary-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Özel Lezzet</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-primary-100">Müşteri Puanı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About