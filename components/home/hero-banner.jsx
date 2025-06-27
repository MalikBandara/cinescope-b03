// HeroBanner section
import { Button } from '../ui/button'
import { Play } from 'lucide-react'

export default function HeroBanner({
  title = 'Discover Amazing Movies',
  description = 'Explore our collection of the best movies from around the world.',
}) {
  return (
    <section id="overview" className="relative min-h-[100vh] overflow-hidden flex justify-center items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-60 dark:opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container flex flex-col items-center justify-center px-4 py-32 gap-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white ">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white max-w-2xl">{description}</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
            <Play className="w-4 h-4" />
            Browse Movies
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-white hover:text-white backdrop-blur-sm"
          >
            Latest Releases
          </Button>
        </div>
      </div>
    </section>
  )
}
