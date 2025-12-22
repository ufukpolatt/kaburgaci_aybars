import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="İletişim - Kaburgacı Aybaz"
        description="Bize ulaşın veya rezervasyon yapın"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}