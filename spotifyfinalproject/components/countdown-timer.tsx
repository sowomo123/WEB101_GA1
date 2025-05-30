"use client"

import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 34,
    seconds: 56,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer complete
                clearInterval(timer)
                return prev
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-between text-center">
      <div>
        <div className="text-lg font-bold">{timeLeft.days}</div>
        <div className="text-xs">Days</div>
      </div>
      <div>
        <div className="text-lg font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
        <div className="text-xs">Hours</div>
      </div>
      <div>
        <div className="text-lg font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
        <div className="text-xs">Mins</div>
      </div>
      <div>
        <div className="text-lg font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
        <div className="text-xs">Secs</div>
      </div>
    </div>
  )
}
