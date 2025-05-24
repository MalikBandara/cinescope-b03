import AddMovieDialog from './add-movie-dialog'

export default function MoviePage() {
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
    </div>
  )
}
