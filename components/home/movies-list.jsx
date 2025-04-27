import { Movies } from "@/lib/data";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getMovies } from "@/actions/movies";
export default async function MoviesList() {
  const movies = await getMovies();

  if (!movies) {
    return <div>No movies found</div>;
  }

  console.log(movies);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/*movies loop*/}
      {Movies.map((movie) => (
        <div key={movie.id} className="">
          <Link href={`/movies/${movie.id}`}>
            <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 transition-colors ">
              <div className="aspect-2/3  w-full overflow-hidden">
                <Image
                  width={300}
                  height={450}
                  src={movie.poster || "./placeholder.svg"}
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
                />
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
