"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, Library, LogOut, Menu, Play, Search, X } from "lucide-react"

import { AudioPlayer } from "@/components/audio-player"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Import the mock data from dashboard
import { allSongs, type Song } from "@/lib/data"

// Helper function to handle image loading with fallback
const ImageWithFallback = ({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg?height=40&width=40",
}: {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return <img src={imgSrc || "/placeholder.svg"} alt={alt} className={className} onError={handleError} loading="lazy" />
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Song[]>([])
  const [currentSong, setCurrentSong] = useState({
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    album: "Whenever You Need Somebody",
    duration: 213, // in seconds
    coverUrl: "/images/spotify-logo.jpg",
    audioUrl: "/audio/lovely.mp3",
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
      coverUrl: song.coverUrl || "/images/spotify-logo.jpg",
      audioUrl: song.audioUrl || "/audio/lovely.mp3",
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

  const handleSongEnd = () => {
    setIsPlaying(false)
  }

  const handleSearch = () => {
    // Trigger search if there's a query
    if (searchQuery.trim()) {
      // Search is already handled by useEffect, but we could add analytics here
      console.log("Search triggered for:", searchQuery)
    }
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
          <ImageWithFallback
            src="/images/spotify-logo.jpg"
            alt="Soptify"
            className="h-6 w-6 rounded-full object-cover"
          />
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
          <ImageWithFallback
            src="/images/spotify-logo.jpg"
            alt="Soptify"
            className="h-5 w-5 rounded-full object-cover"
          />
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
                <ImageWithFallback
                  src="/images/spotify-logo.jpg"
                  alt="Soptify"
                  className="h-6 w-6 rounded-full object-cover"
                />
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
          {/* Top Search Bar */}
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">Search</h1>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="What do you want to listen to?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch()
                    }
                  }}
                  className="pl-10 pr-20"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  {searchQuery && (
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleClearSearch}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Clear search</span>
                    </Button>
                  )}
                  <Button
                    variant="default"
                    size="sm"
                    className="h-8 px-3 bg-green-500 hover:bg-green-600"
                    onClick={handleSearch}
                  >
                    <Search className="h-3 w-3 mr-1" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Search Input (Original) */}
          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search for songs, artists, or albums..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
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
              <ScrollArea className="h-[calc(100vh-300px)] pr-4">
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
                        <ImageWithFallback
                          src={song.coverUrl || "/images/spotify-logo.jpg"}
                          alt={song.title}
                          className="h-full w-full object-cover rounded-md"
                          fallbackSrc="/placeholder.svg?height=40&width=40"
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
              <ImageWithFallback
                src="/images/spotify-logo.jpg"
                alt="No results"
                className="h-24 w-24 rounded-full mx-auto mb-4 opacity-50 object-cover"
                fallbackSrc="/placeholder.svg?height=96&width=96"
              />
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
        <AudioPlayer song={currentSong} isPlaying={isPlaying} onPlayPause={handlePlayPause} onSongEnd={handleSongEnd} />
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
