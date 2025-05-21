"use client"

import { useEffect, useState } from "react"
import { Calendar, Music } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock data for upcoming release
const upcomingRelease = {
  title: "The Algorithm's Lament",
  artist: "AI & The Humans",
  album: "Digital Dystopia",
  releaseDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
  coverUrl: "/placeholder.svg?height=80&width=80",
}

export function UpcomingRelease() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = upcomingRelease.releaseDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-none">
      <CardContent className="p-3">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-purple-500" />
            <span className="text-xs font-medium">COMING SOON</span>
          </div>

          <div className="flex gap-3">
            <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
              <img
                src={upcomingRelease.coverUrl || "/placeholder.svg"}
                alt={upcomingRelease.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h4 className="font-bold text-sm truncate">{upcomingRelease.title}</h4>
              <p className="text-xs text-muted-foreground truncate">{upcomingRelease.artist}</p>
              <p className="text-xs text-muted-foreground truncate">{upcomingRelease.album}</p>

              <div className="flex gap-1 mt-1">
                <Button
                  variant="secondary"
                  size="sm"
                  className="h-7 text-xs px-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300"
                >
                  <Music className="h-3 w-3 mr-1" />
                  Remind me
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1 text-center">
            <div className="bg-background rounded p-1">
              <div className="text-sm font-bold">{timeLeft.days}</div>
              <div className="text-[10px] text-muted-foreground">days</div>
            </div>
            <div className="bg-background rounded p-1">
              <div className="text-sm font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="text-[10px] text-muted-foreground">hours</div>
            </div>
            <div className="bg-background rounded p-1">
              <div className="text-sm font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="text-[10px] text-muted-foreground">mins</div>
            </div>
            <div className="bg-background rounded p-1">
              <div className="text-sm font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="text-[10px] text-muted-foreground">secs</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
