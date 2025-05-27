"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, Library, LogOut, Menu, Music, Play, Search, X } from "lucide-react"

import { CountdownTimer } from "@/components/countdown-timer"
import { MusicPlayer } from "@/components/music-player"
import { UpcomingRelease } from "@/components/upcoming-release"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Import the mock data from dashboard
import { allSongs, type Song } from "@/lib/data"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Song[]>([])
  const [currentSong, setCurrentSong] = useState({
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    album: "Whenever You Need Somebody",
    duration: 213, // in seconds
    coverUrl: "/placeholder.svg?height=60&width=60",
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [playingSongId, setPlayingSongId] = useState<number | null>(null)

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const results = allSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        (song.album && song.album.toLowerCase().includes(query)),
    )

    setSearchResults(results)
  }, [searchQuery])

  const handlePlaySong = (song: Song) => {
    setCurrentSong({
      title: song.title,
      artist: song.artist,
      album: song.album || "",
      duration: convertDurationToSeconds(song.duration),
      coverUrl: song.coverUrl || "/placeholder.svg?height=60&width=60",
    })
    setIsPlaying(true)
    setPlayingSongId(song.id)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  // Helper function to convert duration string (e.g., "3:45") to seconds
  const convertDurationToSeconds = (duration: string): number => {
    const [minutes, seconds] = duration.split(":").map(Number)
    return minutes * 60 + seconds
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:flex w-64 flex-col border-r bg-card p-4">
        <div className="flex items-center gap-2 mb-6">
          <Music className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl">Soptify</span>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start bg-accent" asChild>
            <Link href="/search">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Library className="mr-2 h-4 w-4" />
            Your Library
          </Button>
        </div>

        <Separator className="my-4" />

        <div className="mt-4 space-y-4">
          {/* Upcoming Release */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Upcoming Release</h3>
            <UpcomingRelease />
          </div>

          {/* Premium Countdown */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Your Premium Countdown</h3>
            <div className="bg-green-100 p-3 rounded-md">
              <p className="text-xs text-green-800 mb-1">Free trial ends in:</p>
              <CountdownTimer />
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-background border-b p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5 text-green-600" />
          <span className="font-bold text-lg">Soptify</span>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex flex-col h-full p-4">
              <div className="flex items-center gap-2 mb-6">
                <Music className="h-6 w-6 text-green-600" />
                <span className="font-bold text-xl">Soptify</span>
              </div>

              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start bg-accent" asChild>
                  <Link href="/search">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Library className="mr-2 h-4 w-4" />
                  Your Library
                </Button>
              </div>

              <Separator className="my-4" />

              <div className="mt-4 space-y-4">
                {/* Upcoming Release */}
                <div>
                  <h3 className="mb-2 text-sm font-medium">Upcoming Release</h3>
                  <UpcomingRelease />
                </div>

                {/* Premium Countdown */}
                <div>
                  <h3 className="mb-2 text-sm font-medium">Your Premium Countdown</h3>
                  <div className="bg-green-100 p-3 rounded-md">
                    <p className="text-xs text-green-800 mb-1">Free trial ends in:</p>
                    <CountdownTimer />
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto pt-0 md:pt-0">
        {/* Add padding top on mobile for the fixed header */}
        <div className="p-6 pt-16 md:pt-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Search</h1>

          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search for songs, artists, or albums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={handleClearSearch}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>

          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-xl font-bold mb-4">Search Results</h2>
              <ScrollArea className="h-[calc(100vh-250px)] pr-4">
                <div className="space-y-1">
                  {searchResults.map((song) => (
                    <div
                      key={song.id}
                      className={`flex items-center p-2 rounded-md hover:bg-accent/50 cursor-pointer ${
                        playingSongId === song.id ? "bg-accent/70" : ""
                      }`}
                      onClick={() => handlePlaySong(song)}
                    >
                      <div className="relative h-10 w-10 mr-3 flex-shrink-0">
                        <img
                          src={song.coverUrl || "/placeholder.svg?height=40&width=40"}
                          alt={song.title}
                          className="h-full w-full object-cover rounded-md"
                        />
                        {playingSongId === song.id && (
                          <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                            <Play className="h-5 w-5 text-white fill-white" />
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium truncate">{song.title}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {song.artist} {song.album ? `• ${song.album}` : ""}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground ml-3">{song.duration}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-bold mb-2">No results found</h2>
              <p className="text-muted-foreground">
                We couldn't find anything matching "{searchQuery}". Try something else?
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: "Funny", color: "bg-pink-500", emoji: "😂" },
                  { name: "Shower Songs", color: "bg-blue-500", emoji: "🚿" },
                  { name: "Cooking", color: "bg-yellow-500", emoji: "🍳" },
                  { name: "Work Tunes", color: "bg-purple-500", emoji: "💼" },
                  { name: "Elevator Music", color: "bg-gray-500", emoji: "🛗" },
                  { name: "Throwbacks", color: "bg-red-500", emoji: "⏪" },
                  { name: "Meme Songs", color: "bg-green-500", emoji: "🎭" },
                  { name: "Awkward Silence", color: "bg-indigo-500", emoji: "😶" },
                  { name: "Dad Jokes", color: "bg-orange-500", emoji: "👨" },
                  { name: "Cringe", color: "bg-teal-500", emoji: "😬" },
                  { name: "Fake Genres", color: "bg-cyan-500", emoji: "🎭" },
                  { name: "Parodies", color: "bg-lime-500", emoji: "🎤" },
                ].map((category) => (
                  <div
                    key={category.name}
                    className={`${category.color} aspect-square rounded-md p-4 flex flex-col items-center justify-center text-white cursor-pointer hover:opacity-90 transition-opacity`}
                  >
                    <div className="text-3xl mb-2">{category.emoji}</div>
                    <div className="font-medium text-sm">{category.name}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Music player - add padding bottom for mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-card p-2 pb-16 md:pb-2">
        <MusicPlayer song={currentSong} isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      </div>

      {/* Mobile navigation bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background flex justify-around p-2">
        <Button variant="ghost" size="sm" className="flex flex-col items-center" asChild>
          <Link href="/dashboard">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center bg-accent/50 rounded-md" asChild>
          <Link href="/search">
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Search</span>
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center">
          <Library className="h-5 w-5" />
          <span className="text-xs mt-1">Library</span>
        </Button>
      </div>
    </div>
  )
}
