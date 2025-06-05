'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { Plus } from 'lucide-react'

import { UpdateMovieForm } from './update-movie-form'

export default function UpdateMovieDialog({ open, onOpenChange, movies }) {
  console.log('movies', movies)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] ">
        <DialogHeader>
          <DialogTitle>Update Movie</DialogTitle>
          <DialogDescription>
            Fill in the details to update to movie.
          </DialogDescription>
        </DialogHeader>
        {/* Add movie form goes here... */}
        <UpdateMovieForm onClose={onOpenChange}  movie={movies} />
      </DialogContent>
    </Dialog>
  )
}
