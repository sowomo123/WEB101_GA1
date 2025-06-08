"use client"

import { useState } from "react"
import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Playlist {
  id: number
  title: string
  description: string
  imageUrl: string
  songs: number
}

interface PlaylistCardProps {
  playlist: Playlist
  onClick?: () => void
  onPlay?: () => void
}

// Helper function to handle image loading with fallback
const ImageWithFallback = ({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg?height=64&width=64",
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

export function PlaylistCard({ playlist, onClick, onPlay }: PlaylistCardProps) {
  return (
    <div
      className="group relative flex items-center gap-2 md:gap-4 bg-accent/50 rounded-md overflow-hidden hover:bg-accent transition-colors cursor-pointer"
      onClick={onClick}
    >
      <ImageWithFallback
        src={playlist.imageUrl || "/placeholder.svg"}
        alt={playlist.title}
        className="h-12 w-12 md:h-16 md:w-16 object-cover flex-shrink-0"
        fallbackSrc="/placeholder.svg?height=64&width=64"
      />
      <div className="flex-1 min-w-0 pr-10">
        <h3 className="font-medium truncate text-sm md:text-base">{playlist.title}</h3>
        <p className="text-xs text-muted-foreground">{playlist.songs} songs</p>
      </div>
      <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={(e) => {
            e.stopPropagation()
            if (onPlay) {
              onPlay()
            } else if (onClick) {
              onClick()
            }
          }}
        >
          <Play className="h-4 w-4 md:h-5 md:w-5 text-white ml-0.5" />
          <span className="sr-only">Play</span>
        </Button>
      </div>
    </div>
  )
}
