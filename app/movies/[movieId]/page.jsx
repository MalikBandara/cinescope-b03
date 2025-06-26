// ✅ NO 'use client' here — it's a Server Component

import { getMoviesById } from '@/actions/movies'
import React from 'react'

export default async function MovieDetailsPage({ params, searchParams }) {
  const movieId = params.movieId
  const movie = await getMoviesById(movieId)

  console.log('movie ', movie)

  return (
    <main className="flex flex-col justify-center items-center py-16 px-4 mx-auto">
      <h1 className="text-amber-600 text-center font-bold text-xl">
        MovieDetailsPage
      </h1>
      <h2 className="text-center py-5">Movie ID: {movieId}</h2>
      <h2 className="text-center py-5">Title: {movie?.data?.title}</h2>
      <h2 className="text-center py-5">Plot: {movie?.data?.plot}</h2>
      
    </main>
  )
}
