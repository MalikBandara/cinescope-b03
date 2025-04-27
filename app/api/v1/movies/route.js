import { db } from "@/lib/db";
import { NextResponse } from "next/server";

//our first api ro
export const GET = async () => {
  try {
    // const res = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1', )
    const movies = await db
      .collection("movies")
      .find({})
      .sort({metacritic: -1})
      .limit(20)
      .toArray();
    return NextResponse.json(movies);
  } catch (error) {
    console.log("Error fetching movies", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
