import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function MenuPage() {
  return (
    <>
      <SEO 
        title="Menü - Kaburgacı Aybaz"
        description="Özenle seçilen malzemelerle hazırlanan lezzetlerimiz"
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <Menu />
        </main>
        <Footer />
      </div>
    </>
  )
}