import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Film,
  Users,
  MessageSquare,
  Eye,
  TrendingUp,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { movies, users, reviews } from '@/lib/data'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  const pendingReviews = reviews.filter(
    review => review.status === 'pending',
  ).length

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to the CineScope admin dashboard.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Movies</CardTitle>
            <Film className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{movies.length}</div>
            <p className="text-muted-foreground text-xs">
              {movies.filter(movie => movie.status === 'published').length}{' '}
              published
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-muted-foreground text-xs">
              {users.filter(user => user.status === 'active').length} active
              users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Reviews
            </CardTitle>
            <MessageSquare className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingReviews}</div>
            <p className="text-muted-foreground text-xs">
              {reviews.filter(review => review.status === 'approved').length}{' '}
              approved reviews
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="text-primary h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.4K</div>
            <p className="text-muted-foreground text-xs">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <Film className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Add New Movie</h3>
                  <p className="text-muted-foreground text-sm">
                    Create a new movie entry
                  </p>
                </div>
                <Link href="/admin/movies">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <MessageSquare className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Moderate Reviews</h3>
                  <p className="text-muted-foreground text-sm">
                    {pendingReviews} reviews pending
                  </p>
                </div>
                <Link href="/admin/reviews">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Manage Users</h3>
                  <p className="text-muted-foreground text-sm">
                    {users.length} users total
                  </p>
                </div>
                <Link href="/admin/users">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="border-primary/20 hover:bg-primary/5 flex items-center gap-4 rounded-md border p-4 transition-colors">
                <div className="bg-primary/10 rounded-full p-2">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">View Analytics</h3>
                  <p className="text-muted-foreground text-sm">
                    Platform performance metrics
                  </p>
                </div>
                <Link href="/admin/analytics">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">New movie added</p>
                  <p className="text-muted-foreground text-xs">
                    10 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">User role updated</p>
                  <p className="text-muted-foreground text-xs">
                    30 minutes ago
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">New review submitted</p>
                  <p className="text-muted-foreground text-xs">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">User registered</p>
                  <p className="text-muted-foreground text-xs">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent-movies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent-movies">Recent Movies</TabsTrigger>
          <TabsTrigger value="recent-users">Recent Users</TabsTrigger>
          <TabsTrigger value="recent-reviews">Recent Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="recent-movies" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {movies.slice(0, 6).map(movie => (
              <Card key={movie.id} className="overflow-hidden py-0">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={movie.poster || '/placeholder.svg'}
                    alt={movie.title}
                    className="h-full w-full object-cover"
                    width={200}
                    height={400}
                    priority
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{movie.title}</CardTitle>
                  <CardDescription>
                    {movie.year} • {movie.genre.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between">
                    <span className="text-sm">Rating: {movie.rating}/10</span>
                    <Link
                      href={`/admin/movies/${movie.id}`}
                      className="text-primary text-sm hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Link
              href="/admin/movies"
              className="text-primary text-sm hover:underline"
            >
              View All Movies →
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="recent-users" className="space-y-4">
          <div className="rounded-md border">
            <div className="p-4">
              <h3 className="text-lg font-medium">Recent Users</h3>
              <p className="text-muted-foreground text-sm">
                Recently registered users on the platform.
              </p>
            </div>
            <div className="divide-y">
              {users.slice(0, 5).map(user => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        user.role === 'admin'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                          : user.role === 'moderator'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                      }`}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 text-right">
              <Link
                href="/admin/users"
                className="text-primary text-sm hover:underline"
              >
                View All Users →
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="recent-reviews" className="space-y-4">
          <div className="rounded-md border">
            <div className="p-4">
              <h3 className="text-lg font-medium">Recent Reviews</h3>
              <p className="text-muted-foreground text-sm">
                Latest reviews submitted by users.
              </p>
            </div>
            <div className="divide-y">
              {reviews.slice(0, 5).map(review => {
                const movie = movies.find(m => m.id === review.movieId)
                return (
                  <div key={review.id} className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={review.userAvatar}
                            alt={review.userName}
                          />
                          <AvatarFallback>
                            {review.userName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          {review.userName}
                        </span>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          review.status === 'approved'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : review.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}
                      >
                        {review.status}
                      </span>
                    </div>
                    <p className="mb-1 text-sm">
                      <span className="font-medium">Movie:</span> {movie?.title}
                    </p>
                    <p className="mb-2 text-sm">
                      <span className="font-medium">Rating:</span>{' '}
                      {review.rating}/10
                    </p>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {review.comment}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="p-4 text-right">
              <Link
                href="/admin/reviews"
                className="text-primary text-sm hover:underline"
              >
                View All Reviews →
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
