'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export default function AddMovieDialog() {
  const [showAddMovie, setShowAddMovie] = useState(false)

  return (
    <Dialog open={showAddMovie} onOpenChange={setShowAddMovie}>
      <DialogTrigger asChild>
        <Button><Plus className='mr-2 h-4 w-4'/>Add Movie</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
