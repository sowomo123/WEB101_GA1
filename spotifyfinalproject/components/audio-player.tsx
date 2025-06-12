"use client"

import { useState, useEffect, useRef } from "react"
import { Heart, Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Song {
  title: string
  artist: string
  album?: string
  duration: number
  coverUrl: string
  audioUrl?: string // Add audio URL to song interface
}

interface AudioPlayerProps {
  song: Song
  onPlayPause?: () => void
  isPlaying?: boolean
  onSongEnd?: () => void
  onTimeUpdate?: (currentTime: number) => void
}

// Helper function to handle image loading with fallback
const ImageWithFallback = ({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg?height=48&width=48",
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

export function AudioPlayer({
  song,
  onPlayPause,
  isPlaying: externalIsPlaying,
  onSongEnd,
  onTimeUpdate,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(externalIsPlaying || false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(song.duration)
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Sync with external isPlaying state if provided
  useEffect(() => {
    if (externalIsPlaying !== undefined) {
      setIsPlaying(externalIsPlaying)
    }
  }, [externalIsPlaying])

  // Handle audio element play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error playing audio:", error)
            setIsPlaying(false)
          })
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume[0] / 100
    }
  }, [volume, isMuted])

  // Reset when song changes
  useEffect(() => {
    setCurrentTime(0)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }, [song.audioUrl])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = () => {
    const newPlayingState = !isPlaying
    setIsPlaying(newPlayingState)

    if (onPlayPause) {
      onPlayPause()
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      setCurrentTime(current)
      if (onTimeUpdate) {
        onTimeUpdate(current)
      }
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
      setIsLoading(false)
    }
  }

  const handleSeek = (value: number[]) => {
    const newTime = value[0]
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value)
    setIsMuted(false)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    if (onSongEnd) {
      onSongEnd()
    }
  }

  const handleLoadStart = () => {
    setIsLoading(true)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2">
        {/* Hidden audio element */}
        {song.audioUrl && (
          <audio
            ref={audioRef}
            src={song.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            onLoadStart={handleLoadStart}
            onCanPlay={handleCanPlay}
            preload="metadata"
          />
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ImageWithFallback
              src={song.coverUrl || "/placeholder.svg"}
              alt={`${song.title} cover`}
              className="h-10 w-10 rounded-md object-cover"
              fallbackSrc="/placeholder.svg?height=40&width=40"
            />
            <div>
              <div className="font-medium text-sm line-clamp-1">{song.title}</div>
              <div className="text-xs text-muted-foreground line-clamp-1">{song.artist}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              onClick={togglePlay}
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              disabled={!song.audioUrl || isLoading}
            >
              {isLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
              <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-full">
          <div className="text-xs w-8 text-right">{formatTime(currentTime)}</div>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="flex-1"
            disabled={!song.audioUrl}
          />
          <div className="text-xs w-8">{formatTime(duration)}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between">
      {/* Hidden audio element */}
      {song.audioUrl && (
        <audio
          ref={audioRef}
          src={song.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          preload="metadata"
        />
      )}

      <div className="flex items-center space-x-4 w-1/4">
        <ImageWithFallback
          src={song.coverUrl || "/placeholder.svg"}
          alt={`${song.title} cover`}
          className="h-12 w-12 rounded-md object-cover"
          fallbackSrc="/placeholder.svg?height=48&width=48"
        />
        <div>
          <div className="font-medium line-clamp-1">{song.title}</div>
          <div className="text-xs text-muted-foreground line-clamp-1">{song.artist}</div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Like</span>
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-2 w-2/4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SkipBack className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button
            onClick={togglePlay}
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            disabled={!song.audioUrl || isLoading}
          >
            {isLoading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 ml-0.5" />
            )}
            <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SkipForward className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="flex items-center space-x-2 w-full max-w-md">
          <div className="text-xs w-10 text-right">{formatTime(currentTime)}</div>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="flex-1"
            disabled={!song.audioUrl}
          />
          <div className="text-xs w-10">{formatTime(duration)}</div>
        </div>
      </div>

      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleMute}>
          {isMuted || volume[0] === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
        </Button>
        <Slider value={volume} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />
      </div>
    </div>
  )
}
