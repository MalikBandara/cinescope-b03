// ✅ NO 'use client' here — it's a Server Component

import { getMoviesById } from '@/actions/movies'
import { Description } from '@radix-ui/react-dialog'
import React from 'react'
import { resolve } from 'styled-jsx/css'

export async function generateMetadata(props) {
  const { id } = await props.params
  const movie = await getMoviesById(id)

  return {
    title: movie?.data?.title
      ? `CineScope | ${movie.data.title}`
      : 'CinScope movie Details',
    description:
      movie?.data?.plot ?? 'find your favorite movie rating and recommendation',
  }
}

export default async function MovieDetailsPage({ params, searchParams }) {
  const movieId = params.movieId

  // simulate the delay for demonstration
  await new Promise(resolve => setTimeout(resolve, 2000))
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
