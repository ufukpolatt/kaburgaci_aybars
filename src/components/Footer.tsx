import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Menü', href: '#menu' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'İletişim', href: '#contact' }
  ]


  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Kaburgacı <span className="text-secondary-500">Aybaz</span>
            </h3>
            <p className="text-gray-400 mb-4">
              1995\'ten beri Türkiye\'nin en lezzetli kaburgalarını sunuyoruz. 
              Geleneksel lezzet, modern sunum.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-secondary-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Turgut Özal Cd. No:7, 34788 Çekmeköy/İstanbul</p>
              <p>📞 0216 555 12 34</p>
              <p>📧 info@kaburgaciaybaz.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {currentYear} Kaburgacı Aybaz. Tüm hakları saklıdır. | 
            <Link href="#" className="hover:text-secondary-500 transition-colors duration-300">
              Gizlilik Politikası
            </Link> | 
            <Link href="#" className="hover:text-secondary-500 transition-colors duration-300">
              Kullanım Koşulları
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer