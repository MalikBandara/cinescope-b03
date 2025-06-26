import AddMovieDialog from './add-movie-dialog'
import MovieData from './movie-data'
import MovieSelectors from './movie-selectors'

export default async function MoviePage(props) {



  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";


  // console.log("query" , query)
  return (
    // space-y-4 = 16px
    <div className="space-y-4  ">
      <div className="flex items-center justify-between  ">
        <div>
          {/* // tracking tight = letter space  */}
          <h2 className="text-3xl font-bold tracking-normal">Movies</h2>

          {/* less the text color  */}
          <p className="text-muted-foreground">Manage your movie catalog</p>
        </div>

        <AddMovieDialog />
      </div>

      <MovieSelectors/>


      <MovieData query={query}  />
    </div>
  )
}
