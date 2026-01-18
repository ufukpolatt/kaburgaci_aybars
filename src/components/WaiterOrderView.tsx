'use client'

import { useState, useEffect } from 'react'

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
  const [activeTab, setActiveTab] = useState<'pending' | 'preparing' | 'ready' | 'completed'>('pending')

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

  const filteredOrders = orders.filter(order => order.status === activeTab)

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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Garson Paneli</h1>
        
        {/* Status Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {(['pending', 'preparing', 'ready', 'completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === status
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getStatusText(status)} ({orders.filter(o => o.status === status).length})
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Bu durumda sipariş bulunmamaktadır</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
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
                  {order.status === 'pending' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'preparing')}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Hazırlanıyor
                    </button>
                  )}
                  {order.status === 'preparing' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'ready')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Hazır
                    </button>
                  )}
                  {order.status === 'ready' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'completed')}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Teslim Edildi
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default WaiterOrderView