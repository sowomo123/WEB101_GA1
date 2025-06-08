"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Library, LogOut, Menu, Search, Play } from "lucide-react"

import { CountdownTimer } from "@/components/countdown-timer"
import { MusicPlayer } from "@/components/music-player"
import { PlaylistCard } from "@/components/playlist-card"
import { SongDetailsDialog, type PlaylistDetails, type Song } from "@/components/song-details-dialog"
import { UpcomingRelease } from "@/components/upcoming-release"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Import the mock data
import { funnyPlaylists, detailedPlaylists } from "@/lib/data"

// Helper function to handle image loading with fallback
const ImageWithFallback = ({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg?height=150&width=150",
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

export default function DashboardPage() {
  const [currentSong, setCurrentSong] = useState({
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
    album: "Whenever You Need Somebody",
    duration: 213, // in seconds
    coverUrl: "/images/totoro-logo.jpg",
  })

  const [selectedPlaylist, setSelectedPlaylist] = useState<PlaylistDetails | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlaylistClick = (playlistId: number) => {
    const playlist = detailedPlaylists[playlistId]
    if (playlist) {
      setSelectedPlaylist(playlist)
      setIsDialogOpen(true)
    }
  }

  const handlePlaySong = (song: Song) => {
    // Update the current song in the player
    setCurrentSong({
      ...currentSong,
      title: song.title,
      artist: song.artist,
      coverUrl: selectedPlaylist?.imageUrl || "/images/totoro-logo.jpg",
    })
    setIsPlaying(true)
    setIsDialogOpen(false)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:flex w-64 flex-col border-r bg-card p-4">
        <div className="flex items-center gap-2 mb-6">
          <ImageWithFallback
            src="/images/totoro-logo.jpg"
            alt="Soptify"
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="font-bold text-xl">Soptify</span>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start bg-accent" asChild>
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
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
          <ImageWithFallback
            src="/images/totoro-logo.jpg"
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
                  src="/images/totoro-logo.jpg"
                  alt="Soptify"
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="font-bold text-xl">Soptify</span>
              </div>

              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start bg-accent" asChild>
                  <Link href="/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
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
          <div className="flex items-center gap-3 mb-6">
            <ImageWithFallback
              src="/images/totoro-logo.jpg"
              alt="Totoro"
              className="h-12 w-12 rounded-full object-cover"
            />
            <h1 className="text-2xl md:text-3xl font-bold">Good Afternoon, Forest Friend!</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {funnyPlaylists.slice(0, 6).map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                playlist={playlist}
                onClick={() => handlePlaylistClick(playlist.id)}
                onPlay={() => {
                  // Play the first song in the playlist
                  const playlistDetails = detailedPlaylists[playlist.id]
                  if (playlistDetails && playlistDetails.songs.length > 0) {
                    handlePlaySong(playlistDetails.songs[0])
                  }
                }}
              />
            ))}
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-4">Made For You (Specifically to Annoy You)</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {funnyPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-card rounded-md overflow-hidden hover:bg-accent transition-colors cursor-pointer group"
                onClick={() => handlePlaylistClick(playlist.id)}
              >
                <div className="p-4">
                  <div className="aspect-square bg-muted rounded-md mb-4 overflow-hidden relative group">
                    <ImageWithFallback
                      src={playlist.imageUrl || "/placeholder.svg"}
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                      fallbackSrc="/placeholder.svg?height=200&width=200"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        size="icon"
                        className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation()
                          const playlistDetails = detailedPlaylists[playlist.id]
                          if (playlistDetails && playlistDetails.songs.length > 0) {
                            handlePlaySong(playlistDetails.songs[0])
                          }
                        }}
                      >
                        <Play className="h-6 w-6 text-white ml-0.5" />
                        <span className="sr-only">Play</span>
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-medium truncate text-sm md:text-base">{playlist.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">{playlist.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Music player - add padding bottom for mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-card p-2 pb-16 md:pb-2">
        <MusicPlayer song={currentSong} isPlaying={isPlaying} onPlayPause={handlePlayPause} />
      </div>

      {/* Mobile navigation bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background flex justify-around p-2">
        <Button variant="ghost" size="sm" className="flex flex-col items-center bg-accent/50 rounded-md" asChild>
          <Link href="/dashboard">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center" asChild>
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

      {/* Song details dialog */}
      <SongDetailsDialog
        playlist={selectedPlaylist}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onPlaySong={handlePlaySong}
      />
    </div>
  )
}
