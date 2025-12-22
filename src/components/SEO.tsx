import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
}

const SEO = ({
  title = 'Kaburgacı Aybaz - En Lezzetli Kaburgalar',
  description = 'Kaburgacı Aybaz, Türkiye\'nin en lezzetli kaburga çeşitlerini sunan premium bir restorandır. Taze etler, özel soslar ve unutulmaz tatlar.',
  keywords = 'kaburga, et, restoran, lezzet, yemek, Türk mutfağı, Aybaz',
  image = '/images/og-image.jpg',
  url = 'https://kaburgaciaybaz.com',
  type = 'website',
  siteName = 'Kaburgacı Aybaz'
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kaburgacı Aybaz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@kaburgaciaybaz" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#dc2626" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": siteName,
            "description": description,
            "image": image,
            "url": url,
            "telephone": "0216 555 12 34",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mehmet Yavaş Bulvarı No:123",
              "addressLocality": "Kadıköy",
              "addressRegion": "İstanbul",
              "addressCountry": "Türkiye"
            },
            "servesCuisine": "Turkish",
            "priceRange": "$$",
            "openingHours": [
              "Mo-Fr 11:00-23:00",
              "Sa-Su 12:00-00:00"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }}
      />
    </Head>
  )
}

export default SEO