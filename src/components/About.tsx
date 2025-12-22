'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  const [activeTab, setActiveTab] = useState('hikaye')

  const tabs = [
    { id: 'hikaye', name: 'Hikayemiz', icon: '📖' },
    { id: 'misyon', name: 'Misyonumuz', icon: '🎯' },
    { id: 'vizyon', name: 'Vizyonumuz', icon: '🔮' },
    { id: 'degerler', name: 'Değerlerimiz', icon: '💎' }
  ]

  const tabContent = {
    hikaye: {
      title: '1995\'ten Beri Lezzetin Adresi',
      content: [
        'Kaburgacı Aybaz, 1995 yılında küçük bir aile işletmesi olarak başladı. Kurucumuz Aybaz Bey, yıllar süren mutfak deneyimini ve et işleme konusundaki ustalığını birleştirerek Türkiye\'nin en lezzetli kaburga tariflerini oluşturdu.',
        'İlk günlerde sadece birkaç çeşit kaburga ile hizmet veren restoranımız, zamanla müşterilerimizin talepleri doğrultusunda menüsünü genişletti. Özellikle "Aybaz Özel Kaburga" tarifi, kısa sürede müşterilerimizin favorisi haline geldi.',
        'Bugün, 28 yıllık tecrübemizle Türkiye\'nin dört bir yanından gelen misafirlerimize en kaliteli hizmeti sunmaya devam ediyoruz. Her bir lokmada yılların birikimini ve ailemizin lezzet sırrını bulabilirsiniz.'
      ],
      image: '/images/about-story.jpg'
    },
    misyon: {
      title: 'Misyonumuz',
      content: [
        'Müşterilerimize en kaliteli ve taze malzemelerle hazırlanmış, lezzetli yemekler sunmak.',
        'Geleneksel Türk mutfağını modern sunum teknikleriyle birleştirerek benzersiz bir deneyim yaşatmak.',
        'Her müşteriyi ailemizin bir üyesi gibi karşılayarak sıcak ve samimi bir ortam oluşturmak.',
        'Sürdürülebilir ve etik üretim anlayışıyla çevreye ve topluma karşı sorumluluklarımızı yerine getirmek.'
      ],
      image: '/images/about-mission.jpg'
    },
    vizyon: {
      title: 'Vizyonumuz',
      content: [
        'Türkiye\'nin en çok tercih edilen kaburga restoranı olmak.',
        'Uluslararası alanda Türk mutfağını temsil eden bir marka haline gelmek.',
        'Yenilikçi lezzetler ve sunumlarla sektörde lider konumunu korumak.',
        'Franchising sistemiyle Türkiye ve dünyada daha fazla noktada hizmet vermek.'
      ],
      image: '/images/about-vision.jpg'
    },
    degerler: {
      title: 'Değerlerimiz',
      content: [
        'Kalite: Her zaman en kaliteli malzemeleri kullanırız.',
        'Müşteri Odaklılık: Müşteri memnuniyetini her şeyin üstünde tutarız.',
        'Geleneksel: Geleneksel tariflerimizi korurken modernize ederiz.',
        'Samimiyet: Her müşteriyi ailemizin bir üyesi gibi karşılarız.',
        'Sürdürülebilirlik: Doğaya ve topluma karşı sorumluluğumuz bilincindeyiz.'
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
            28 yıllık lezzet serüvenimiz ve bizi özel kılan değerlerimiz
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">28+</div>
              <div className="text-primary-100">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
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