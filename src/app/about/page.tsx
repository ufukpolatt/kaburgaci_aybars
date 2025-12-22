import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Hakkımızda - Kaburgacı Aybaz"
        description="Misyonumuz, vizyonumuz ve değerlerimizle Türkiye'nin en lezzetli kaburga deneyimini sunuyoruz"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <About />
        </main>
        <Footer />
      </div>
    </>
  )
}