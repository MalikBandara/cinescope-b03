'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { useState } from 'react'
import { Skeleton } from '../ui/skeleton'

export default function MovieCard({ movie }) {
  const [posterUrl, setPosterUrl] = useState(movie.poster)

  // return <MovieCardSkeleton />

  return (
    <Link href={`/movies/${movie._id}`}>
      <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 transition-colors ">
        <div className="aspect-2/3  w-full overflow-hidden">
          <Image
            width={300}
            height={450}
            src={posterUrl || '/images/movie-placeholder.png'}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
            priority // Load first 3 images with priority
            onError={() => setPosterUrl('/images/movie-placeholder.png')}
          />
        </div>
        <CardContent className="p-4 ">
          <h3 className="line-clamp-1 font-semibold">{movie.title}</h3>
          <p className="text-muted-foreground text-sm">
            {movie.year} • {movie.runtime} min
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {movie.genres.slice(0, 2).map((genre, index) => (
              <Badge
                key={`${genre}-${index}`}
                variant="outline"
                className="border-primary/30 bg-primary/5 text-xs"
              >
                {genre}
              </Badge>
            ))}
            {movie.genres?.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{movie.genres.length - 2}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <div className="flex items-center ">
            <span className="text-primary text-sm font-medium">
              {movie.imdb?.rating}/10
            </span>
          </div>
          <Button variant="ghost" size="sm" className="hover:text-primary">
            Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export function MovieCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg">
      <Skeleton className="aspect-2/3 w-full " />
      <div className="space-y-2 p-4">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="flex gap-2 p-2 justify-between">
        <Skeleton className="h-6 w-12 rounded-full" />
        <Skeleton className="h-6 w-12 rounded-full" />
      </div>
    </div>
  )
}
