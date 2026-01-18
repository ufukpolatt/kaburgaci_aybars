'use client'

import { useState, useEffect } from 'react'
import QRCodeComponent from './QRCode'
import QRScanner from './QRScanner'

interface OrderItem {
  id: number
  name: string
  description: string
  quantity: number
}

interface Order {
  id: string
  items: OrderItem[]
  timestamp: string
  status: 'pending' | 'preparing' | 'ready' | 'completed'
}

const WaiterOrderView = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [showQRModal, setShowQRModal] = useState(false)
  const [selectedOrderId, setSelectedOrderId] = useState<string>('')
  const [showScanner, setShowScanner] = useState(false)
  const [scannedOrder, setScannedOrder] = useState<Order | null>(null)

  useEffect(() => {
    // Load orders from localStorage
    const loadOrders = () => {
      try {
        const storedOrders = localStorage.getItem('orders')
        if (storedOrders) {
          const parsedOrders = JSON.parse(storedOrders)
          setOrders(parsedOrders)
        }
      } catch (error) {
        console.error('Siparişler yüklenirken hata:', error)
      }
    }

    // Initial load
    loadOrders()

    // Set up interval to check for new orders
    const interval = setInterval(loadOrders, 5000) // Check every 5 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem('orders', JSON.stringify(orders))
    }
  }, [orders])

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prev => 
      prev.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )
  }

  // Show all orders without filtering by status
  const allOrders = orders

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'preparing': return 'bg-blue-100 text-blue-800'
      case 'ready': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Beklemede'
      case 'preparing': return 'Hazırlanıyor'
      case 'ready': return 'Hazır'
      case 'completed': return 'Tamamlandı'
    }
  }

  // Generate QR code for a specific order
  const generateOrderQR = (orderId: string) => {
    setSelectedOrderId(orderId)
    setShowQRModal(true)
  }

  // Close QR modal
  const closeQRModal = () => {
    setShowQRModal(false)
    setSelectedOrderId('')
  }

  // Handle QR code scan success
  const handleScanSuccess = (data: string) => {
    setShowScanner(false)
    
    try {
      const qrData = JSON.parse(data)
      
      if (qrData.type === 'order' && qrData.orderId) {
        let foundOrder: Order | null = null
        
        // First, try to find the order in the existing orders
        foundOrder = orders.find(order => order.id === qrData.orderId) || null
        
        // If not found in current orders, check if order data is embedded in QR code
        if (!foundOrder && qrData.order) {
          foundOrder = qrData.order
          // Add to current orders if not already there
          if (!orders.find(o => o.id === foundOrder!.id)) {
            setOrders(prev => [...prev, foundOrder!])
          }
        }
        
        // If still not found, try to load from localStorage
        if (!foundOrder) {
          const storedOrders = localStorage.getItem('orders')
          if (storedOrders) {
            const parsedOrders = JSON.parse(storedOrders)
            const orderFromStorage = parsedOrders.find((o: Order) => o.id === qrData.orderId)
            if (orderFromStorage) {
              foundOrder = orderFromStorage
              // Add to current orders if not already there
              if (!orders.find(o => o.id === orderFromStorage.id)) {
                setOrders(prev => [...prev, orderFromStorage])
              }
            }
          }
        }
        
        if (foundOrder) {
          setScannedOrder(foundOrder)
        } else {
          alert('Sipariş bulunamadı! QR kodu kontrol edip tekrar deneyin.')
        }
      } else {
        alert('Geçersiz QR kod formatı!')
      }
    } catch (error) {
      console.error('QR kod işlenirken hata:', error)
      alert('QR kod okunamadı!')
    }
  }

  // Handle QR code scan error
  const handleScanError = (error: Error) => {
    console.error('QR tarama hatası:', error)
    alert('QR kod taranamadı. Lütfen tekrar deneyin.')
    setShowScanner(false)
  }

  // Close scanned order modal
  const closeScannedOrderModal = () => {
    setScannedOrder(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Garson Paneli</h1>
        
        {/* QR Scanner Button */}
        <div className="mb-6 text-center">
          <button
            onClick={() => setShowScanner(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            QR Kod Tara
          </button>
        </div>
        
        {/* Orders List */}
        <div className="space-y-4">
          {allOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Henüz sipariş bulunmamaktadır</p>
            </div>
          ) : (
            allOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Sipariş #{order.id}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.timestamp).toLocaleString('tr-TR')}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Sipariş Detayları:</h4>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-sm text-gray-600">{item.description}</p>
                          )}
                        </div>
                        <span className="font-medium text-red-600">x{item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => generateOrderQR(order.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    QR Kod Oluştur
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeQRModal}></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={closeQRModal}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Sipariş QR Kodu</h2>
                <p className="text-gray-600 mb-6">
                  Sipariş #{selectedOrderId}
                </p>
                
                <div className="mb-6">
                  <QRCodeComponent
                    data={JSON.stringify({
                      type: 'order',
                      orderId: selectedOrderId,
                      url: `${window.location.origin}/order/${selectedOrderId}`
                    })}
                    size={250}
                  />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Bu QR kodu müşteriye göstererek sipariş detaylarını görüntüleyebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Scanner Modal */}
      {showScanner && (
        <QRScanner
          onScanSuccess={handleScanSuccess}
          onScanError={handleScanError}
          onClose={() => setShowScanner(false)}
        />
      )}

      {/* Scanned Order Modal */}
      {scannedOrder && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeScannedOrderModal}></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
              <button
                onClick={closeScannedOrderModal}
                className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Sipariş Bulundu!</h2>
                <p className="text-gray-600 mb-6">
                  Sipariş #{scannedOrder.id}
                </p>
                
                <div className="mb-6 text-left">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-gray-500">
                        {new Date(scannedOrder.timestamp).toLocaleString('tr-TR')}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(scannedOrder.status)}`}>
                      {getStatusText(scannedOrder.status)}
                    </span>
                  </div>

                  <h4 className="font-medium text-gray-700 mb-2">Sipariş Detayları:</h4>
                  <div className="space-y-2">
                    {scannedOrder.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          {item.description && (
                            <p className="text-sm text-gray-600">{item.description}</p>
                          )}
                        </div>
                        <span className="font-medium text-red-600">x{item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      updateOrderStatus(scannedOrder.id, 'preparing')
                      setScannedOrder({...scannedOrder, status: 'preparing'})
                    }}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Hazırlanıyor
                  </button>
                  <button
                    onClick={() => {
                      updateOrderStatus(scannedOrder.id, 'ready')
                      setScannedOrder({...scannedOrder, status: 'ready'})
                    }}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Hazır
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WaiterOrderView