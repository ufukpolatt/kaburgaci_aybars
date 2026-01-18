'use client'

import { useEffect, useState } from 'react'
import QRCode from 'qrcode'

interface QRCodeProps {
  data: string
  size?: number
}

const QRCodeComponent = ({ data, size = 200 }: QRCodeProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('')

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const url = await QRCode.toDataURL(data, {
          width: size,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        })
        setQrCodeUrl(url)
      } catch (err) {
        console.error('QR kod oluşturulurken hata:', err)
      }
    }

    generateQRCode()
  }, [data, size])

  if (!qrCodeUrl) {
    return (
      <div className="flex items-center justify-center" style={{ width: size, height: size }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <img src={qrCodeUrl} alt="Sipariş QR Kodu" className="border-2 border-gray-200 rounded-lg" />
    </div>
  )
}

export default QRCodeComponent