
import Link from "next/link"
export default function HeaderNav() {
  return (
    <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b">
        <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary text-xl font-bold">CineScope</span>
        </Link>
        </div>
        
      </header>
  )
}
