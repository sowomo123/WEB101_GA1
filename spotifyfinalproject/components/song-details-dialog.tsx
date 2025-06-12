"use client"

import { useState } from "react"
import { Clock, Heart, MoreHorizontal, Play, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export interface Song {
  id: number
  title: string
  artist: string
  duration: string
  explicit?: boolean
}

export interface PlaylistDetails {
  id: number
  title: string
  description: string
  imageUrl: string
  songs: Song[]
  totalSongs: number
}

interface SongDetailsDialogProps {
  playlist: PlaylistDetails | null
  isOpen: boolean
  onClose: () => void
  onPlaySong: (song: Song) => void
}

export function SongDetailsDialog({ playlist, isOpen, onClose, onPlaySong }: SongDetailsDialogProps) {
  const [hoveredSongId, setHoveredSongId] = useState<number | null>(null)
  const [playingSongId, setPlayingSongId] = useState<number | null>(null)

  const handlePlaySong = (song: Song) => {
    setPlayingSongId(song.id)
    onPlaySong(song)
  }

  if (!playlist) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] p-0 overflow-hidden">
        <div className="bg-gradient-to-b from-green-500/90 to-green-700/90 p-6 flex flex-col md:flex-row gap-6 items-center md:items-end">
          <div className="w-40 h-40 min-w-40 shadow-xl">
            <img
              src={playlist.imageUrl || "/placeholder.svg?height=160&width=160"}
              alt={playlist.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white text-center md:text-left">
            <div className="text-sm font-medium mb-1">PLAYLIST</div>
            <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">{playlist.title}</DialogTitle>
            <p className="text-sm md:text-base opacity-90 mb-2">{playlist.description}</p>
            <div className="text-sm">
              <span className="font-semibold">Soptify</span> • {playlist.totalSongs} songs •
              <span className="opacity-75"> Mostly ridiculous songs</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-background">
          <div className="flex gap-4 mb-6">
            <Button
              className="rounded-full bg-green-500 hover:bg-green-600 h-14 w-14 flex-shrink-0"
              onClick={() => {
                if (playlist.songs.length > 0) {
                  handlePlaySong(playlist.songs[0])
                }
              }}
            >
              <Play className="h-7 w-7 text-white ml-1" />
              <span className="sr-only">Play</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full ml-auto">
              <MoreHorizontal className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </div>

          <div className="px-4 py-2 grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 text-sm text-muted-foreground font-medium">
            <div className="w-8 text-center">#</div>
            <div>TITLE</div>
            <div className="hidden md:block">ARTIST</div>
            <div className="flex items-center justify-end">
              <Clock className="h-4 w-4" />
            </div>
          </div>

          <Separator className="my-2" />

          <ScrollArea className="h-[300px] pr-4">
            {playlist.songs.map((song, index) => (
              <div
                key={song.id}
                className="group px-4 py-2 grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_1fr_auto] gap-4 items-center rounded-md hover:bg-accent/50 cursor-pointer"
                onMouseEnter={() => setHoveredSongId(song.id)}
                onMouseLeave={() => setHoveredSongId(null)}
                onClick={() => handlePlaySong(song)}
              >
                <div className="w-8 text-center flex justify-center">
                  {hoveredSongId === song.id || playingSongId === song.id ? (
                    <Play className={`h-4 w-4 ${playingSongId === song.id ? "text-green-500" : "text-foreground"}`} />
                  ) : (
                    <span className="text-muted-foreground">{index + 1}</span>
                  )}
                </div>
                <div className="min-w-0 flex items-center gap-3">
                  <div className="flex-1 truncate">
                    <div className="font-medium text-foreground truncate">{song.title}</div>
                    <div className="text-xs text-muted-foreground md:hidden truncate">{song.artist}</div>
                  </div>
                  {song.explicit && (
                    <div className="bg-muted text-muted-foreground text-xs px-1.5 py-0.5 rounded">E</div>
                  )}
                </div>
                <div className="hidden md:block text-muted-foreground truncate">{song.artist}</div>
                <div className="text-muted-foreground text-right">{song.duration}</div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
