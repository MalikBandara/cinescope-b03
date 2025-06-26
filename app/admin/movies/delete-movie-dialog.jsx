'use client'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'

import { Plus } from 'lucide-react'

export default function DeleteMovieDialog({
  open,
  onOpenChange,
  onConfirm,
  movies,
  isLoading = false,
}) {
  // console.log('movies', movies)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] ">
        <DialogHeader>
          <DialogTitle>Delete Movie</DialogTitle>
          <DialogDescription className="text-sm text-gray-500 text-center">
            Are you sure you want to delete this movie?{' '}
            <strong>
              {movies?.title} ({movies?.year})
            </strong>{' '}
            ?<br />
            <span className="text-xs ">
              Note : this action cannot be undone.
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => onConfirm(movies.id)}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin"></Loader2>}Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
