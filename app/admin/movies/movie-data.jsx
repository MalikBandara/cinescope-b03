import React from 'react'

// import { db } from '@/lib/db'
import MovieTable from './movie-table'
import { searchMovies } from '@/actions/movies'

export default async function MovieData({ query = '' }) {
  try {
    // const movies = await db.collection('movies_n').find({}).limit(50).toArray()

    const { data: moviesData = [] } = await searchMovies(query)

    // console.log(movies)

    if (!moviesData.length) throw new Error('No movies found in the database.')

    if (moviesData.length > 0) {
      const refineMovies = moviesData.map((movie, key) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rated: movie.rated,
        genres: movie.genres,
        poster: movie.poster,
        imdb: movie.imdb,
        runtime: movie.runtime,
        status: movie.status ?? 'published',
        directors: movie.directors,
        backdrop: movie.backdrop,
      }))
      return <MovieTable movies={refineMovies} />
    } else {
      return (
        <div className="flex items-center justify-center h-[200px]">
          <p className="text-destructive font-medium animate-pulse duration-1000">
            No movies Found on the Database
          </p>
        </div>
      )
    }
  } catch (error) {
    console.log('Error fetching movies:', error)
    return (
      <div className="flex items-center justify-center h-[400px]">
        <p className="text-destructive font-medium animate-pulse duration-1000">
          No movies Available
        </p>
      </div>
    )
  }
}
