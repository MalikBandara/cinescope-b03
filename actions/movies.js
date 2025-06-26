'use server'

import { db } from '@/lib/db'
import { ObjectId } from 'mongodb'

//get all movies action

export const getMovies = async () => {
  try {
    //using fetch to get movies from the server

    const response = await fetch('http://localhost:3000/api/v1/movies', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    if (response.status === 200) {
      return await response.json()
    } else {
      console.log('No movies found')
      return undefined
    }
  } catch (error) {
    console.log('Error fetching movies', error)
    return undefined
  }
}

export const getMoviesById = async movieId => {
  try {
    const result = await db
      .collection('movies')
      .findOne({ _id: ObjectId.createFromHexString(movieId) })

    if (result && Object.keys(result).length > 0) {
      console.log(`movie found Successfully ${result._id}`)
      return {
        success: true,
        message: `movie fetched Successfully `,
        data: result,
      }
    } else {
      return undefined
    }
  } catch {
    console.log('mongo db fetched  error')
  }
}

// create movie action

export const createMovie = async movie => {
  try {
    const result = await db.collection('movies_n').insertOne(movie)

    if (result.acknowledged) {
      console.log(`movie created with id ${result.insertedId}`)
      return {
        success: true,
        message: `movie created with id ${result.insertedId}`,
      }
    } else {
      return undefined
    }
  } catch {
    console.log('mongo db insert  error')
  }
}

//update movie action
export const UpdateMovie = async (movieId, movieDoc) => {
  try {
    const result = await db
      .collection('movies_n')
      .updateOne(
        { _id: ObjectId.createFromHexString(movieId) },
        { $set: movieDoc },
        { upsert: true },
      )

    if (result.acknowledged) {
      console.log(`movie update Successfully}`)
      return {
        success: true,
        message: `movie update Successfully`,
      }
    } else {
      return undefined
    }
  } catch {
    console.log('mongo db Update  error')
  }
}

//get all movies with filters action
export const searchMovies = async query => {
  try {
    //
    const movies = await db
      .collection('movies')
      .find({ title: { $regex: query, $options: 'i' } })
      .limit(50)
      .toArray()

    // console.log('search movies ', movies.length, query)

    if (movies && movies.length > 0) {
      return {
        success: true,
        message: 'Movies successfully fetched',
        data: movies,
      }
    } else {
      return {
        success: false,
        message: 'No movies found',
        data: [],
      }
    }
  } catch (error) {
    //
    console.log('mongo db fetch failed', error)
    return {
      success: false,
      message: 'Error fetching movies ',
      data: [],
    }
  }
}

// delete movie action
export const DeleteMovie = async movieId => {
  try {
    const result = await db
      .collection('movies_n')
      .deleteOne({ _id: ObjectId.createFromHexString(movieId) })

    if (result.acknowledged) {
      console.log(`movie Delete Successfully}`)
      return {
        success: true,
        message: `movie Delete Successfully`,
      }
    } else {
      return undefined
    }
  } catch {
    console.log('mongo db Delete  error')
  }
}
