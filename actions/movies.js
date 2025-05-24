
'use server'

import {db} from "@/lib/db";

//get all movies action 

export const getMovies = async () => {
  try {

    //using fetch to get movies from the server

    const response = await fetch("http://localhost:3000/api/v1/movies", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    if (response.status === 200) {
      return await response.json();
    } else {
      console.log("No movies found");
      return undefined;
    }
  } catch (error) {
    console.log("Error fetching movies", error);
    return undefined;
  }
};


// create movie action

export const createMovie = async (movie) =>{

  try{
    const result = await db.collection('movies_n').insertOne(movie);


    if(result.acknowledged){
      console.log(`movie created with id ${result.insertedId}`);
      return {
        success: true,
        message: `movie created with id ${result.insertedId}`,
      }
    }else {
      return undefined;
    }
  }catch{
    console.log('mongo db insert  error');
  }

}