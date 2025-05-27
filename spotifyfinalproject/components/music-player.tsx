"use client"

import { useState, useEffect } from "react"
import { Heart, Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Song {
  title: string
  artist: string
  album?: string
  duration: number
  coverUrl: string
  isPlaying?: boolean
}

interface MusicPlayerProps {
  song: Song
  onPlayPause?: () => void
  isPlaying?: boolean
}

export function MusicPlayer({ song, onPlayPause, isPlaying: externalIsPlaying }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(externalIsPlaying || false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState([75])
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Sync with external isPlaying state if provided
  useEffect(() => {
    if (externalIsPlaying !== undefined) {
      setIsPlaying(externalIsPlaying)
    }
  }, [externalIsPlaying])

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

    // If we start playing, simulate progress
    if (newPlayingState) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= song.duration) {
            clearInterval(interval)
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)

      // Clean up interval
      return () => clearInterval(interval)
    }
  }

  // Reset progress when song changes
  useEffect(() => {
    setCurrentTime(0)
  }, [song.title, song.artist])

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={song.coverUrl || "/placeholder.svg"}
              alt={`${song.title} cover`}
              className="h-10 w-10 rounded-md"
            />
            <div>
              <div className="font-medium text-sm line-clamp-1">{song.title}</div>
              <div className="text-xs text-muted-foreground line-clamp-1">{song.artist}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Button onClick={togglePlay} variant="ghost" size="icon" className="h-8 w-8">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-full">
          <div className="text-xs w-8 text-right">{formatTime(currentTime)}</div>
          <Slider
            value={[currentTime]}
            max={song.duration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="flex-1"
          />
          <div className="text-xs w-8">{formatTime(song.duration)}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 w-1/4">
        <img src={song.coverUrl || "/placeholder.svg"} alt={`${song.title} cover`} className="h-12 w-12 rounded-md" />
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
          <Button onClick={togglePlay} variant="outline" size="icon" className="h-10 w-10 rounded-full">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
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
            max={song.duration}
            step={1}
            onValueChange={(value) => setCurrentTime(value[0])}
            className="flex-1"
          />
          <div className="text-xs w-10">{formatTime(song.duration)}</div>
        </div>
      </div>

      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <Volume2 className="h-4 w-4" />
        <Slider value={volume} max={100} step={1} onValueChange={setVolume} className="w-24" />
      </div>
    </div>
  )
}
