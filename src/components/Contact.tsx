'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'
import GoogleMap from './GoogleMap'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })

  const [formType, setFormType] = useState('reservation') // 'reservation' or 'contact'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    // Form doğrulama
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Lütfen zorunlu alanları doldurunuz.')
      return
    }
    
    // Simüle edilmiş API çağrısı
    setTimeout(() => {
      if (formType === 'reservation') {
        alert(`Rezervasyonunuz başarıyla alındı!\n\nAd: ${formData.name}\nTarih: ${formData.date}\nSaat: ${formData.time}\nKişi Sayısı: ${formData.guests}\n\nEn kısa sürede size dönüş yapacağız.`)
      } else {
        alert(`Mesajınız başarıyla gönderildi!\n\nAd: ${formData.name}\nE-posta: ${formData.email}\n\nEn kısa sürede size dönüş yapacağız.`)
      }
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Adres',
      content: 'Mehmet Yavaş Bulvarı No:123\nKadıköy/İstanbul'
    },
    {
      icon: '📞',
      title: 'Telefon',
      content: '336 58 29'
    },
    {
      icon: '⏰',
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 11:00 - 23:00\nCumartesi - Pazar: 12:00 - 00:00'
    },
    {
      icon: '✉️',
      title: 'E-posta',
      content: 'info@kaburgaciaybaz.com\nrezervasyon@kaburgaciaybaz.com'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            İletişim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bize ulaşın veya rezervasyon yapın
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ScrollAnimation
              key={index}
              delay={index * 0.1}
              className="bg-white p-6 rounded-xl shadow-md text-center card-hover"
            >
              <div className="text-3xl mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {info.title}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">
                {info.content}
              </p>
            </ScrollAnimation>
          ))}
        </div>

        {/* Form Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
            <button
              onClick={() => setFormType('reservation')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                formType === 'reservation'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Rezervasyon Yap
            </button>
            <button
              onClick={() => setFormType('contact')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                formType === 'contact'
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              İletişim Formu
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {formType === 'reservation' ? 'Rezervasyon Formu' : 'İletişim Formu'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  {formType === 'reservation' && (
                    <>
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Tarih
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Saat
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Seçiniz</option>
                          <option value="11:00">11:00</option>
                          <option value="12:00">12:00</option>
                          <option value="13:00">13:00</option>
                          <option value="14:00">14:00</option>
                          <option value="15:00">15:00</option>
                          <option value="16:00">16:00</option>
                          <option value="17:00">17:00</option>
                          <option value="18:00">18:00</option>
                          <option value="19:00">19:00</option>
                          <option value="20:00">20:00</option>
                          <option value="21:00">21:00</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                          Kişi Sayısı
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Seçiniz</option>
                          <option value="1">1 Kişi</option>
                          <option value="2">2 Kişi</option>
                          <option value="3">3 Kişi</option>
                          <option value="4">4 Kişi</option>
                          <option value="5">5 Kişi</option>
                          <option value="6">6 Kişi</option>
                          <option value="7">7 Kişi</option>
                          <option value="8">8 Kişi</option>
                          <option value="9+">9+ Kişi</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {formType === 'reservation' ? 'Notunuz (Varsa)' : 'Mesajınız'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  {formType === 'reservation' ? 'Rezervasyon Yap' : 'Mesaj Gönder'}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Konumumuz
              </h3>
              <div className="relative w-full" style={{ height: '450px' }}>
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact