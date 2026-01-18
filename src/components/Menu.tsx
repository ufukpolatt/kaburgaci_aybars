'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'
import QRCodeComponent from './QRCode'

interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  popular?: boolean
}

interface CartItem {
  id: number
  name: string
  description: string
  image: string
  popular?: boolean
  quantity: number
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('baslangic')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const [orderData, setOrderData] = useState<string>('')
  const [itemQuantities, setItemQuantities] = useState<{ [key: number]: number }>({})

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
        image: '/images/corba.jpg'
      },
      {
        id: 2,
        name: 'Fırında Demleme Bulgur Pilavı',
        description: '',
        image: '/images/pilav.jpg'
      },
      {
        id: 3,
        name: 'İçli Köfte Kızartma',
        description: '',
        image: '/images/icli-kofte.jpg'
      },
      {
        id: 4,
        name: 'Babagannuş',
        description: '',
        image: '/images/babagannus.jpg'
      }
    ],
    salata: [
      {
        id: 5,
        name: 'Tablacı Salata',
        description: '',
        image: '/images/tablaci-salata.jpg'
      },
      {
        id: 6,
        name: 'Gavurdağı Salata',
        description: '',
        image: '/images/gavurdagi-salata.jpg'
      }
    ],
    lahmacun: [
      {
        id: 7,
        name: 'Adana İşi Tabak Altı Lahmacun 3\'lü',
        description: 'Maydanoz Domates/ Turp Limon İle Servis',
        image: '/images/lahmacun-3lu.jpg'
      },
      {
        id: 8,
        name: 'Adana İşi Tabak Altı Lahmacun 5\'li',
        description: 'Maydanoz Domates/ Turp Limon İle Servis',
        image: '/images/lahmacun-5li.jpg'
      }
    ],
    aperatif: [
      {
        id: 9,
        name: 'Böbrek Şiş',
        description: '130 Gr',
        image: '/images/bobrek-sis.jpg'
      },
      {
        id: 10,
        name: 'Billur Şiş',
        description: '130 Gr',
        image: '/images/billur-sis.jpg'
      },
      {
        id: 11,
        name: 'Yürek Şiş',
        description: '130 Gr',
        image: '/images/yurek-sis.jpg'
      },
      {
        id: 12,
        name: 'Aperatif Karışık',
        description: 'Yarım Böbrek, Yarım Billur, Yarım Yürek (200 Gr)',
        image: '/images/aperatif-karisik.jpg',
        popular: true
      }
    ],
    sis: [
      {
        id: 13,
        name: 'Kıyma Şiş (Acılı/Acisiz)',
        description: '160 Gr',
        image: '/images/kiyma-sis.jpg'
      },
      {
        id: 14,
        name: 'Kaburga Şiş (Kemikli /Kemiksiz)',
        description: '190 Gr',
        image: '/images/kaburga-sis.jpg'
      },
      {
        id: 15,
        name: 'Ciğer Şiş',
        description: '190 Gr',
        image: '/images/ciger-sis.jpg'
      },
      {
        id: 16,
        name: 'Pirzola Şiş',
        description: '180 Gr',
        image: '/images/pirzola-sis.jpg'
      },
      {
        id: 17,
        name: 'Yağlıkara',
        description: '170 Gr',
        image: '/images/yaglikara.jpg'
      },
      {
        id: 18,
        name: 'Kazbaşı Şiş',
        description: '180 Gr',
        image: '/images/kazbasi.jpg'
      },
      {
        id: 19,
        name: 'Yaprak Kanat Şiş',
        description: '300 Gr',
        image: '/images/kanat-sis.jpg'
      },
      {
        id: 20,
        name: 'Kemiksiz Tavuk Sarma',
        description: '300 Gr',
        image: '/images/tavuk-sarma.jpg'
      }
    ],
    menu: [
      {
        id: 21,
        name: 'Tavuk Menü',
        description: 'İki Parça Tavuk Sarma, Bulgur Pilavı, Fırın Patates Yemek sonrası sürpriz yumurta',
        image: '/images/cocuk-menu.jpg'
      },
      {
        id: 22,
        name: 'Et Menü',
        description: 'İki Kalem Pirzola, Bulgur Pilavı, Fırın Patates Yemek sonrası sürpriz yumurta',
        image: '/images/et-menu.jpg',
      },
    ],
    kallavi: [
      {
        id: 24,
        name: 'Basma (Adana İşi Kebap)',
        description: '220 Gr',
        image: '/images/basma.jpg'
      },
      {
        id: 25,
        name: 'Löp (Kuzu Pirzola)',
        description: '210 Gr',
        image: '/images/lop-pirzola.jpg'
      },
      {
        id: 26,
        name: 'Kelebek (Kuzu Sırt)',
        description: '220 Gr',
        image: '/images/kelebek.jpg'
      },
      {
        id: 27,
        name: 'Lokum (Kuzu Küşleme)',
        description: '220 Gr',
        image: '/images/lokum.jpg'
      },
      {
        id: 28,
        name: 'Adana İşi Karışık',
        description: 'Kıyma, Kemiksiz Kaburga, Ciğer - 350 Gr (Tek Kişilik)',
        image: '/images/adana-karisik.jpg'
      },
      {
        id: 29,
        name: 'Löp Karışık',
        description: 'Kazbaşı, Tavuk Sarma, Löp Pirzola - 600 Gr (İki Kişilik)',
        image: '/images/lop-karisik.jpg'
      },
      {
        id: 30,
        name: 'Kemikli Karışık',
        description: 'Kaburga, Pirzola, Kanat - 700 Gr (Üç Kişilik)',
        image: '/images/kemikli-karisik.jpg'
      },
      {
        id: 31,
        name: 'Aybaz Karışık',
        description: 'Kıyma, Yağlıkara, Yaprak Kanat, Kemikli Kaburga - 800 Gr (Dört Kişilik)',
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
        image: '/images/adana-durum.jpg'
      },
      {
        id: 33,
        name: 'Kaburga Şiş Dürüm',
        description: '130 Gr',
        image: '/images/kaburga-durum.jpg'
      },
      {
        id: 34,
        name: 'Tavuk Şiş Dürüm',
        description: '170 Gr',
        image: '/images/tavuk-durum.jpg'
      },
      {
        id: 35,
        name: 'Ciğer Şiş Dürüm',
        description: '130 Gr',
        image: '/images/ciger-durum.jpg'
      }
    ],
    tava: [
      {
        id: 36,
        name: 'Adana İşi Fırın Et Tava',
        description: '320 Gr - Tavalar iki kişilik servis edilir. Pişme süresi 25 dakikadır. Yanında söğüş tabağı ve adana turşu ile servis edilir.',
        image: '/images/et-tava.jpg',
        popular: true
      },
      {
        id: 37,
        name: 'Adana İşi Fırın Tavuk Tava',
        description: '360 Gr - Tavalar iki kişilik servis edilir. Pişme süresi 25 dakikadır. Yanında söğüş tabağı ve adana turşu ile servis edilir.',
        image: '/images/tavuk-tava.jpg'
      }
    ],
    tatli: [
      {
        id: 38,
        name: 'Heybet Fırın Sütlaç',
        description: '',
        image: '/images/sutlac.jpg'
      },
      {
        id: 39,
        name: 'Tepsi Kadayıf',
        description: '',
        image: '/images/tepsi-kadayif.jpg'
      },
      {
        id: 40,
        name: 'Fıstıklı Kesme Baklava',
        description: '2 Dilim',
        image: '/images/baklava.jpg'
      },
      {
        id: 41,
        name: 'Dilim Dondurma',
        description: '',
        image: '/images/dondurma.jpg'
      }
    ],
    icecek: [
      {
        id: 42,
        name: 'Taşkesti Cam Şişe Su',
        description: '330 Ml',
        image: '/images/su.jpg'
      },
      {
        id: 43,
        name: 'Damla Maden Suyu',
        description: '200 Ml',
        image: '/images/maden-suyu.jpg'
      },
      {
        id: 44,
        name: 'Gazlı Şişe Meşrubat',
        description: '300 Ml',
        image: '/images/mesrubat.jpg'
      },
      {
        id: 45,
        name: 'Turnip Şalgam (Acılı/Acisiz)',
        description: '330 Ml',
        image: '/images/salgam.jpg'
      },
      {
        id: 46,
        name: 'Arslan Kara Maya Ayran',
        description: '245 Ml',
        image: '/images/ayran.jpg'
      },
      {
        id: 47,
        name: 'Adana Şalgam (Acılı/Acisiz)',
        description: '450 Ml',
        image: '/images/adana-salgam.jpg'
      },
      {
        id: 48,
        name: 'Köpüklü Yayık Ayran',
        description: '450 Ml',
        image: '/images/yayik-ayran.jpg'
      }
    ]
  }

  // Add item to cart with specified quantity
  const addToCart = (item: MenuItem, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      }
      return [...prevItems, {
        id: item.id,
        name: item.name,
        description: item.description,
        image: item.image,
        popular: item.popular,
        quantity
      }]
    })
  }

  // Remove item from cart
  const removeFromCart = (itemId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId))
  }

  // Update item quantity
  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  // Generate order data for QR code
  const generateOrderData = () => {
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const order = {
      id: orderId, // Changed from orderId to id to match the interface
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        quantity: item.quantity
      })),
      timestamp: new Date().toISOString(),
      status: 'pending'
    }
    
    // In a real app, this would be sent to a server
    // For demo purposes, we'll store in localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    existingOrders.push(order)
    localStorage.setItem('orders', JSON.stringify(existingOrders))
    
    // Create QR code data with full order details embedded
    const qrData = JSON.stringify({
      type: 'order',
      orderId,
      order: order, // Embed the full order data in the QR code
      url: `${window.location.origin}/order/${orderId}#${encodeURIComponent(JSON.stringify({ type: 'order', orderId, order }))}`
    })
    
    setOrderData(qrData)
    setIsQRModalOpen(true)
  }

  // Complete order and clear cart
  const completeOrder = () => {
    generateOrderData()
    setCartItems([])
    setIsCartOpen(false)
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
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popüler
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const currentQty = itemQuantities[item.id] || 1
                        if (currentQty > 1) {
                          setItemQuantities(prev => ({ ...prev, [item.id]: currentQty - 1 }))
                        }
                      }}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {itemQuantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() => {
                        const currentQty = itemQuantities[item.id] || 1
                        setItemQuantities(prev => ({ ...prev, [item.id]: currentQty + 1 }))
                      }}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      const quantity = itemQuantities[item.id] || 1
                      addToCart(item, quantity)
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    Menüye Ekle
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Menümüzdeki tüm ürünler günlük taze olarak hazırlanmaktadır.
          </p>
        </div>
      </div>
      
      {/* Cart Summary Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full h-6 w-6 flex items-center justify-center font-bold text-sm">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Menünüz</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Menünüzde ürün bulunmamaktadır</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Order Complete Button */}
              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <button
                    onClick={completeOrder}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Siparişi Tamamla
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {isQRModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsQRModalOpen(false)}></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setIsQRModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Siparişiniz Alındı!</h2>
                <p className="text-gray-600 mb-6">
                  Lütfen bu QR kodu garsonumuza gösterin
                </p>
                
                {orderData && <QRCodeComponent data={orderData} size={250} />}
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Siparişiniz oluşturuldu. Garson bu QR kodu tarayarak sipariş detaylarını görebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Menu