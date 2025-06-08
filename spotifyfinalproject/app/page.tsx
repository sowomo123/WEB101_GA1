import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/totoro-logo.jpg" alt="Soptify" className="h-8 w-8 rounded-full" />
            <span className="font-bold text-xl text-white">Soptify</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
                Login
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-gray-600 hover:bg-gray-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="mb-4">
                <img
                  src="/images/logo.jpg"
                  alt="Soptify"
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto shadow-lg"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
                  Welcome to Soptify
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm md:text-base lg:text-xl">
                  The music streaming service where the songs are made up and the playlists don't matter!
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/login">
                  <Button className="bg-gray-600 hover:bg-gray-700 text-white">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">🎧</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">Millions of Songs*</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    *By "millions" we mean about 12, and they're all covers of "Never Gonna Give You Up"
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">⏱️</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">Countdown to Disappointment</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    Our patented countdown timer lets you know exactly when your free trial ends
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">🔒</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">Secure Login</h3>
                  <p className="text-sm md:text-base text-gray-400">
                    We promise to keep your data safe (from everyone except our marketing team)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-800 py-6 bg-black">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-xs md:text-sm text-gray-400">
            © 2025 Soptify. All rights reserved. Not affiliated with any actual music service.
          </p>
        </div>
      </footer>
    </div>
  )
}
