import { Movies } from "@/lib/data";
import { NextResponse } from "next/server";


//our first api ro
export const GET = async () =>{

    try{
        // const res = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1', )
        return NextResponse.json(Movies, {status : 200 });
    }catch( error ){
        console.log("Error fetching movies", error);
        return NextResponse.json({error: "Internal server error"}, {status : 500 });
    }
};