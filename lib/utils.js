import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


// utility function to get all years from the current year to 100 years ago
export function getAllYears() {
  return Array.from(
    { length: 100 },
    (_, index) => new Date().getFullYear() - index,
  ).reverse()
}



export function getAllGenres() {
  return (
    'Action,Adventure,Animation,Comedy,Crime,Documentary,Drama,Family,Fantasy,History,Horror,Music,Mystery,Romance,Sci-Fi,Thriller,War,Western'
      .split(',')
      .map(genre => genre.trim())
  )
}