import { MoreHorizontal } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
// import { Movies } from '@/lib/data'
import Image from 'next/image'
export default function MovieTable({movies}) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption className="sr-only">Admin Movies Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">#</TableHead>

            <TableHead>Title</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movies.map((movies, key) => (
            <TableRow key={movies.id}>
              <TableCell>{key + 1}</TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src={movies.poster || '/images/movie-placeholder.png'}
                    alt={movies.title}
                    height={40}
                    width={28}
                    className="h-10 w-7 rounded object-cover"
                  />
                  <span className="font-medium">{movies.title}</span>
                </div>
              </TableCell>
              <TableCell>{movies.year}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1 ">
                  {movies.genres.map(genres => (
                    <Badge key={genres} variant="outline" className="text-xs">
                      {genres}{' '}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{movies.rating}</TableCell>
              <TableCell className="capitalize">
                <Badge className="bg-green-100 text-green-800">
                  {movies.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 ">
                      <span className="sr-only ">Open Menu</span>
                      <MoreHorizontal className="h-4 w-4 " />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Movie Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
