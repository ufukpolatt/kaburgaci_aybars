'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Check if current page has light background
  const isLightPage = pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightPage
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/images/1.jpg"
              alt="Kaburgacı Aybaz Logo"
              className="h-10 w-10 mr-3 rounded-full object-cover"
            />
            <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
              isScrolled || isLightPage ? 'text-primary-700' : 'text-white'
            }`}>
              Kaburgacı <span className="text-red-500">Aybaz</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
                }`}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
                }`}
              >
                Menü
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
                }`}
              >
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
                }`}
              >
                İletişim
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden focus:outline-none transition-colors duration-300 ${
              isScrolled || isLightPage ? 'text-gray-800' : 'text-white'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-4 py-4 px-6 absolute top-full left-0 right-0 w-full z-40">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-800 font-medium hover:text-primary-500 transition-colors duration-300 py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="block text-gray-800 font-medium hover:text-primary-500 transition-colors duration-300 py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menü
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-800 font-medium hover:text-primary-500 transition-colors duration-300 py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-800 font-medium hover:text-primary-500 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header