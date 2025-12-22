'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('baslangic')

  const menuCategories = [
    { id: 'baslangic', name: 'BAŞLANGIÇ', icon: '🥗' },
    { id: 'salata', name: 'SALATALAR', icon: '🥬' },
    { id: 'lahmacun', name: 'LAHMACUN', icon: '🫓' },
    { id: 'aperatif', name: 'APERATİFLER', icon: '🍢' },
    { id: 'sis', name: 'ŞİŞ KEBAPLAR', icon: '🍖' },
    { id: 'menu', name: 'AYBAZ ÇOCUK MENÜ', icon: '🍽️' },
    { id: 'kallavi', name: 'KALLAVİ ŞİŞLER', icon: '🥩' },
    { id: 'durum', name: 'DÜRÜMLER', icon: '🌯' },
    { id: 'tava', name: 'TAVALAR', icon: '🍳' },
    { id: 'tatli', name: 'TATLILAR', icon: '🍰' },
    { id: 'icecek', name: 'İÇECEKLER', icon: '🥤' }
  ]

  const menuItems = {
    baslangic: [
      {
        id: 1,
        name: 'Kemik Suyunda Fırın Güveç Çorba',
        description: '',
        price: '150,00 ₺',
        image: '/images/corba.jpg'
      },
      {
        id: 2,
        name: 'Fırında Demleme Bulgur Pilavı',
        description: '',
        price: '130,00 ₺',
        image: '/images/pilav.jpg'
      },
      {
        id: 3,
        name: 'İçli Köfte Kızartma',
        description: '',
        price: '150,00 ₺',
        image: '/images/icli-kofte.jpg'
      },
      {
        id: 4,
        name: 'Babagannuş',
        description: '',
        price: '130,00 ₺',
        image: '/images/babagannus.jpg'
      }
    ],
    salata: [
      {
        id: 5,
        name: 'Tablacı Salata',
        description: '',
        price: '230,00 ₺',
        image: '/images/tablaci-salata.jpg'
      },
      {
        id: 6,
        name: 'Gavurdağı Salata',
        description: '',
        price: '270,00 ₺',
        image: '/images/gavurdagi-salata.jpg'
      }
    ],
    lahmacun: [
      {
        id: 7,
        name: 'Adana İşi Tabak Altı Lahmacun 3\'lü',
        description: 'Maydanoz Domates/ Turp Limon İle Servis',
        price: '330,00 ₺',
        image: '/images/lahmacun-3lu.jpg'
      },
      {
        id: 8,
        name: 'Adana İşi Tabak Altı Lahmacun 5\'li',
        description: 'Maydanoz Domates/ Turp Limon İle Servis',
        price: '550,00 ₺',
        image: '/images/lahmacun-5li.jpg'
      }
    ],
    aperatif: [
      {
        id: 9,
        name: 'Böbrek Şiş',
        description: '130 Gr',
        price: '290,00 ₺',
        image: '/images/bobrek-sis.jpg'
      },
      {
        id: 10,
        name: 'Billur Şiş',
        description: '130 Gr',
        price: '270,00 ₺',
        image: '/images/billur-sis.jpg'
      },
      {
        id: 11,
        name: 'Yürek Şiş',
        description: '130 Gr',
        price: '310,00 ₺',
        image: '/images/yurek-sis.jpg'
      },
      {
        id: 12,
        name: 'Aperatif Karışık',
        description: 'Yarım Böbrek, Yarım Billur, Yarım Yürek (200 Gr)',
        price: '450,00 ₺',
        image: '/images/aperatif-karisik.jpg',
        popular: true
      }
    ],
    sis: [
      {
        id: 13,
        name: 'Kıyma Şiş (Acılı/Acisiz)',
        description: '160 Gr',
        price: '570,00 ₺',
        image: '/images/kiyma-sis.jpg'
      },
      {
        id: 14,
        name: 'Kaburga Şiş (Kemikli /Kemiksiz)',
        description: '190 Gr',
        price: '590,00 ₺',
        image: '/images/kaburga-sis.jpg'
      },
      {
        id: 15,
        name: 'Ciğer Şiş',
        description: '190 Gr',
        price: '610,00 ₺',
        image: '/images/ciger-sis.jpg'
      },
      {
        id: 16,
        name: 'Pirzola Şiş',
        description: '180 Gr',
        price: '690,00 ₺',
        image: '/images/pirzola-sis.jpg'
      },
      {
        id: 17,
        name: 'Yağlıkara',
        description: '170 Gr',
        price: '690,00 ₺',
        image: '/images/yaglikara.jpg'
      },
      {
        id: 18,
        name: 'Kazbaşı Şiş',
        description: '180 Gr',
        price: '720,00 ₺',
        image: '/images/kazbasi.jpg'
      },
      {
        id: 19,
        name: 'Yaprak Kanat Şiş',
        description: '300 Gr',
        price: '530,00 ₺',
        image: '/images/kanat-sis.jpg'
      },
      {
        id: 20,
        name: 'Kemiksiz Tavuk Sarma',
        description: '300 Gr',
        price: '490,00 ₺',
        image: '/images/tavuk-sarma.jpg'
      }
    ],
    menu: [
      {
        id: 21,
        name: 'Tavuk Menü',
        description: 'İki Parça Tavuk Sarma, Bulgur Pilavı, Fırın Patates Yemek sonrası sürpriz yumurta',
        price: '550,00 ₺',
        image: '/images/cocuk-menu.jpg'
      },
      {
        id: 22,
        name: 'Et Menü',
        description: 'İki Kalem Pirzola, Bulgur Pilavı, Fırın Patates Yemek sonrası sürpriz yumurta',
        price: '650,00 ₺',
        image: '/images/et-menu.jpg',
      },
      {
        id: 23,
        name: 'Tavuk Menü',
        description: 'İki Parça Tavuk Sarma, Bulgur Pilavı, Fırın Patates',
        price: '550,00 ₺',
        image: '/images/tavuk-menu.jpg'
      }
    ],
    kallavi: [
      {
        id: 24,
        name: 'Basma (Adana İşi Kebap)',
        description: '220 Gr',
        price: '750,00 ₺',
        image: '/images/basma.jpg'
      },
      {
        id: 25,
        name: 'Löp (Kuzu Pirzola)',
        description: '210 Gr',
        price: '850,00 ₺',
        image: '/images/lop-pirzola.jpg'
      },
      {
        id: 26,
        name: 'Kelebek (Kuzu Sırt)',
        description: '220 Gr',
        price: '850,00 ₺',
        image: '/images/kelebek.jpg'
      },
      {
        id: 27,
        name: 'Lokum (Kuzu Küşleme)',
        description: '220 Gr',
        price: '950,00 ₺',
        image: '/images/lokum.jpg'
      },
      {
        id: 28,
        name: 'Adana İşi Karışık',
        description: 'Kıyma, Kemiksiz Kaburga, Ciğer - 350 Gr (Tek Kişilik)',
        price: '1.150,00 ₺',
        image: '/images/adana-karisik.jpg'
      },
      {
        id: 29,
        name: 'Löp Karışık',
        description: 'Kazbaşı, Tavuk Sarma, Löp Pirzola - 600 Gr (İki Kişilik)',
        price: '1.750,00 ₺',
        image: '/images/lop-karisik.jpg'
      },
      {
        id: 30,
        name: 'Kemikli Karışık',
        description: 'Kaburga, Pirzola, Kanat - 700 Gr (Üç Kişilik)',
        price: '1.950,00 ₺',
        image: '/images/kemikli-karisik.jpg'
      },
      {
        id: 31,
        name: 'Aybaz Karışık',
        description: 'Kıyma, Yağlıkara, Yaprak Kanat, Kemikli Kaburga - 800 Gr (Dört Kişilik)',
        price: '2.250,00 ₺',
        image: '/images/aybaz-karisik.jpg',
        popular: true
      }
    ],
    karisik: [],
    durum: [
      {
        id: 32,
        name: 'Adana Dürüm (Acılı/Acisiz)',
        description: '130 Gr',
        price: '430,00 ₺',
        image: '/images/adana-durum.jpg'
      },
      {
        id: 33,
        name: 'Kaburga Şiş Dürüm',
        description: '130 Gr',
        price: '450,00 ₺',
        image: '/images/kaburga-durum.jpg'
      },
      {
        id: 34,
        name: 'Tavuk Şiş Dürüm',
        description: '170 Gr',
        price: '390,00 ₺',
        image: '/images/tavuk-durum.jpg'
      },
      {
        id: 35,
        name: 'Ciğer Şiş Dürüm',
        description: '130 Gr',
        price: '450,00 ₺',
        image: '/images/ciger-durum.jpg'
      }
    ],
    tava: [
      {
        id: 36,
        name: 'Adana İşi Fırın Et Tava',
        description: '320 Gr - Tavalar iki kişilik servis edilir. Pişme süresi 25 dakikadır. Yanında söğüş tabağı ve adana turşu ile servis edilir.',
        price: '1.500,00 ₺',
        image: '/images/et-tava.jpg',
        popular: true
      },
      {
        id: 37,
        name: 'Adana İşi Fırın Tavuk Tava',
        description: '360 Gr - Tavalar iki kişilik servis edilir. Pişme süresi 25 dakikadır. Yanında söğüş tabağı ve adana turşu ile servis edilir.',
        price: '1.100,00 ₺',
        image: '/images/tavuk-tava.jpg'
      }
    ],
    tatli: [
      {
        id: 38,
        name: 'Heybet Fırın Sütlaç',
        description: '',
        price: '170,00 ₺',
        image: '/images/sutlac.jpg'
      },
      {
        id: 39,
        name: 'Tepsi Kadayıf',
        description: '',
        price: '190,00 ₺',
        image: '/images/tepsi-kadayif.jpg'
      },
      {
        id: 40,
        name: 'Fıstıklı Kesme Baklava',
        description: '2 Dilim',
        price: '270,00 ₺',
        image: '/images/baklava.jpg'
      },
      {
        id: 41,
        name: 'Dilim Dondurma',
        description: '',
        price: '70,00 ₺',
        image: '/images/dondurma.jpg'
      }
    ],
    icecek: [
      {
        id: 42,
        name: 'Taşkesti Cam Şişe Su',
        description: '330 Ml',
        price: '45,00 ₺',
        image: '/images/su.jpg'
      },
      {
        id: 43,
        name: 'Damla Maden Suyu',
        description: '200 Ml',
        price: '50,00 ₺',
        image: '/images/maden-suyu.jpg'
      },
      {
        id: 44,
        name: 'Gazlı Şişe Meşrubat',
        description: '300 Ml',
        price: '80,00 ₺',
        image: '/images/mesrubat.jpg'
      },
      {
        id: 45,
        name: 'Turnip Şalgam (Acılı/Acisiz)',
        description: '330 Ml',
        price: '80,00 ₺',
        image: '/images/salgam.jpg'
      },
      {
        id: 46,
        name: 'Arslan Kara Maya Ayran',
        description: '245 Ml',
        price: '80,00 ₺',
        image: '/images/ayran.jpg'
      },
      {
        id: 47,
        name: 'Adana Şalgam (Acılı/Acisiz)',
        description: '450 Ml',
        price: '90,00 ₺',
        image: '/images/adana-salgam.jpg'
      },
      {
        id: 48,
        name: 'Köpüklü Yayık Ayran',
        description: '450 Ml',
        price: '90,00 ₺',
        image: '/images/yayik-ayran.jpg'
      }
    ]
  }

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Menümüz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Özenle seçilen malzemelerle hazırlanan lezzetlerimiz
          </p>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-2xl mb-1">{category.icon}</span>
                <span className="text-xs sm:text-sm text-center">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <ScrollAnimation
              key={item.id}
              delay={index * 0.1}
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover"
            >
              <div className="relative">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Resim Yükleniyor...</span>
                </div>
                {'popular' in item && item.popular && (
                  <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popüler
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {item.price}
                  </span>
                  <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Menümüzdeki tüm ürünler günlük taze olarak hazırlanmaktadır.
          </p>
          <button className="btn-primary">
            Tam Menüyü İndir
          </button>
        </div>
      </div>
    </section>
  )
}

export default Menu