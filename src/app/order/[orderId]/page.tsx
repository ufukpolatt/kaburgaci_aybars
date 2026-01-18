'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import SEO from '@/components/SEO'

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

export default function OrderPage() {
  const params = useParams()
  const orderId = params.orderId as string
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load order from localStorage
    const loadOrder = () => {
      try {
        const storedOrders = localStorage.getItem('orders')
        if (storedOrders) {
          const parsedOrders = JSON.parse(storedOrders)
          const foundOrder = parsedOrders.find((o: Order) => o.id === orderId)
          if (foundOrder) {
            setOrder(foundOrder)
          }
        }
      } catch (error) {
        console.error('Sipariş yüklenirken hata:', error)
      } finally {
        setLoading(false)
      }
    }

    loadOrder()
  }, [orderId])

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!order) {
    return (
      <>
        <SEO 
          title="Sipariş Bulunamadı - Kaburgacı Aybaz"
          description="Aradığınız sipariş bulunamadı"
        />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Sipariş Bulunamadı</h1>
            <p className="text-gray-600 mb-6">
              Aradığınız sipariş bulunamadı. Lütfen QR kodunu kontrol edin veya garsona danışın.
            </p>
            <a 
              href="/" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO 
        title={`Sipariş #${order.id} - Kaburgacı Aybaz`}
        description="Sipariş detayları"
      />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Sipariş #{order.id}</h1>
                <p className="text-gray-500">
                  {new Date(order.timestamp).toLocaleString('tr-TR')}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {getStatusText(order.status)}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Sipariş Detayları</h2>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      )}
                    </div>
                    <span className="font-bold text-red-600 text-lg">x{item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <a 
                href="/" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}