'use client'

import { useEffect, useRef, useState } from 'react'

interface QRScannerProps {
  onScanSuccess: (data: string) => void
  onScanError?: (error: Error) => void
  onClose?: () => void
}

const QRScanner = ({ onScanSuccess, onScanError, onClose }: QRScannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [scanner, setScanner] = useState<any>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let qrScanner: any = null

    const initializeScanner = async () => {
      try {
        const QrScannerModule = await import('qr-scanner')
        if (videoRef.current) {
          qrScanner = new QrScannerModule.default(
            videoRef.current,
            (result: any) => {
              onScanSuccess(result.data)
              setIsScanning(false)
              if (qrScanner) {
                qrScanner.stop()
              }
            },
            {
              returnDetailedScanResult: true,
              highlightScanRegion: true,
              highlightCodeOutline: true,
            }
          )
          
          setScanner(qrScanner)
          setIsScanning(true)
          await qrScanner.start()
        }
      } catch (err) {
        console.error('QR scanner initialization error:', err)
        setError('Kamera başlatılamadı. Lütfen kamera izinlerini kontrol edin.')
        if (onScanError) {
          onScanError(err as Error)
        }
      }
    }

    initializeScanner()

    return () => {
      if (qrScanner) {
        qrScanner.stop()
        qrScanner.destroy()
      }
    }
  }, [onScanSuccess, onScanError])

  const handleStopScanning = () => {
    if (scanner) {
      scanner.stop()
    }
    setIsScanning(false)
    if (onClose) {
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={handleStopScanning}
          className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">QR Kod Tara</h2>
          <p className="text-gray-600">
            Sipariş QR kodunu kameraya gösterin
          </p>
        </div>
        
        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        ) : (
          <div className="relative mb-4">
            <video
              ref={videoRef}
              className="w-full h-64 object-cover rounded-lg bg-gray-100"
            />
            {!isScanning && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-center">
          <button
            onClick={handleStopScanning}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
          >
            İptal
          </button>
        </div>
      </div>
    </div>
  )
}

export default QRScanner