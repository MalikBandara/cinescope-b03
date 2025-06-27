// SSR - Server Side Rendered - Server Component
import HeaderNav from '@/components/header-nav' //alias import
import FeaturedMovies from '@/components/home/featured-moives'
import HeroBanner from '@/components/home/hero-banner'
import Footer from '@/components/home/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>

      <Footer />
    </div>
  )
}
