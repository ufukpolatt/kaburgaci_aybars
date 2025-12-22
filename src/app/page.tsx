import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="Kaburgacı Aybaz - 1995'ten Beri Lezzetin Adresi"
        description="28 yıllık tecrübemizle Türkiye'nin en lezzetli kaburga tarifleri"
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Footer />
      </main>
    </>
  )
}