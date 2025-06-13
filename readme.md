# WEB101_GA1

app (page.tsx)

### **1. Imports Section**

line 1-4

```
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
```

- **`Link`**: Next.js component for client-side navigation (better than **`<a>`** tags)
- **`ArrowRight`**: Right arrow icon from Lucide React icons library
- **`Button`**: Pre-styled button component from a UI library

---

### **2. Main Component Structure**

line 5-7

```
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      {/* Main Content */}
      {/* Footer */}
    </div>)
}
```

- Wraps everything in a black (**`bg-black`**) full-height container (**`min-h-screen`**)
- Uses flexbox (**`flex`**) in column direction (**`flex-col`**)

---

### **3. Header Section**

line 8-27

```
<header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
  <div className="container flex h-14 items-center">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img src="/images/totoro-logo.jpg" alt="Soptify" className="h-8 w-8 rounded-full" />
      <span className="font-bold text-xl text-white">Soptify</span>
    </div>

    {/* Auth Buttons */}
    <div className="flex flex-1 items-center justify-end space-x-2">
      <Link href="/login">
        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
          Login
        </Button>
      </Link>
      <Button size="sm" className="bg-gray-600 hover:bg-gray-700 text-white">
        Sign Up
      </Button>
    </div>
  </div>
</header>
```

- **Sticky header** that stays at top when scrolling
- Contains:
    - Logo ( + "Soptify" text)
    - Login/Signup buttons on the right
- Uses **`hover:`** states for button interactions

---

### **4. Hero Section**

line 29 58

```
<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center">
      {/* Logo */}
      <img src="/images/logo.jpg" className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto" />

      {/* Headings */}
      <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
        Welcome to Soptify
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-300">
        The music streaming service where the songs are made up and the playlists don't matter!
      </p>

      {/* CTA Button */}
      <Button className="bg-gray-600 hover:bg-gray-700 text-white">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</section>
```

- Gradient background (**`from-gray-900 to-black`**)
- Responsive padding (**`py-12 md:py-24 lg:py-32`**)
- Contains:
    - Large circular logo
    - Main headline
    - Funny subtitle
    - "Get Started" button with arrow icon

---

### **5. Features Section**

60-74

```
<section className="w-full py-12 md:py-24 lg:py-32 bg-black">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {/* Feature 1 */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center">
          <span>🎧</span>
        </div>
        <h3 className="text-lg font-bold text-white">Millions of Songs*</h3>
        <p className="text-sm text-gray-400">
          *By "millions" we mean about 12...
        </p>
      </div>

      {/* Feature 2 & 3 similar structure */}
    </div>
  </div>
</section>
```

- 3-column grid on desktop, 2-column on tablet, 1-column on mobile
- Each feature has:
    - Emoji in a gray circle
    - Feature title
    - Funny description text

---

### **6. Footer Section**

101-102

```
<footer className="w-full border-t border-gray-800 py-6 bg-black">
  <div className="container flex flex-col items-center justify-center">
    <p className="text-center text-xs text-gray-400">
      © 2025 Soptify. All rights reserved...
    </p>
  </div>
</footer>
```

- Simple footer with copyright text
- Gray top border matching header

---

### **Key Technical Notes:**

1. **Responsive Design**:
    - Uses **`md:`** and **`lg:`** prefixes for different screen sizes
    - Example: **`py-12 md:py-24`** means 12 units padding on mobile, 24 on tablet+
2. **Hover States**:
    - Buttons change color on hover (**`hover:bg-gray-700`**)
3. **Layout System**:
    - **`container`** class handles max-width and horizontal padding
    - **`flex`** and **`grid`** create responsive layouts
4. **Visual Hierarchy**:
    - White for important text, gray for secondary
    - Larger text for headings, smaller for body

### Sonam Wangmo

let me explain to you by how i have created this

side bar (dashboard page.tsx)

1. **Sidebar (Left)**
    - Visible on computers, hidden on phones
    - Has navigation links: Home, Search, Library
    - Logout button at the bottom
2. **Mobile Menu**
    - Appears as a hamburger menu on phones
    - Slides in from the side with same options as desktop
3. **Playlist Display**
    - Shows funny playlist cards in a grid
    - Examples: "Songs to Cry in the Shower To", "Guilty Pleasures"
    - Click any to see song details
4. **Music Player (Bottom)**
    - Always visible at bottom of screen
    - Shows current song, play/pause button
    - Progress bar showing song position
5. **Mobile Navigation (Bottom)**
    - Simple tabs for Home, Search, Library (phone only)
6. bottom Nevigation
7. play pause

### **1. Imports and Setup**

1- 14

```
"use client" // Marks this as a Client Component in Next.js
import { useState } from "react" // For state management
import { Home, Library, LogOut, Menu, Search, Play } from "lucide-react" // Icons
import { AudioPlayer, PlaylistCard, SongDetailsDialog } from "@/components/*" // Custom components
import { funnyPlaylists, detailedPlaylists } from "@/lib/data" // Mock data
```

- This is a client-side component that needs React state
- Uses various icons and custom components
- Imports mock playlist data

### **3. Main Component State**

41 -53

```
export default function DashboardPage() {
  const [currentSong, setCurrentSong] = useState({...}) // Current playing song
  const [selectedPlaylist, setSelectedPlaylist] = useState(null) // Selected playlist
  const [isDialogOpen, setIsDialogOpen] = useState(false) // Song details visibility
  const [isPlaying, setIsPlaying] = useState(false) // Play/pause state
```

- Tracks what's currently playing
- Manages which playlist is selected
- Controls popup dialog visibility
- Handles play/pause state

### **4. Playback Control Functions**

55 - 78

```
const handlePlaylistClick = (playlistId) => {
  // Show songs when playlist clicked
  setSelectedPlaylist(detailedPlaylists[playlistId])
  setIsDialogOpen(true)
}

const handlePlaySong = (song) => {
  // Update player with new song
  setCurrentSong({...song, coverUrl: selectedPlaylist?.imageUrl})
  setIsPlaying(true)
  setIsDialogOpen(false)
}

const handlePlayPause = () => {
  // Toggle play/pause
  setIsPlaying(!isPlaying)
}
```

- Handles playlist selection
- Manages song playback
- Toggles play/pause state

### **5. Sidebar Navigation (Desktop)**

93-110

```
<div className="hidden md:flex w-64 flex-col border-r bg-card p-4">
  {/* Logo */}
  <div className="flex items-center gap-2 mb-6">...</div>

  {/* Navigation Links */}
  <div className="space-y-1">
    <Button variant="ghost" className="w-full justify-start" asChild>
      <Link href="/dashboard">
        <Home className="mr-2 h-4 w-4" />
        Home
      </Link>
    </Button>
    {/* Other nav items */}
  </div>

  {/* Logout */}
  <div className="mt-auto">...</div>
</div>
```

- Desktop-only sidebar
- Contains logo, navigation links, and logout
- Uses Tailwind for responsive hiding (**`hidden md:flex`**)

### **6. Mobile Header & Menu ***

133

```
<div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-background border-b p-3">
  {/* Mobile header with menu button */}
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon">
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-64 p-0">
      {/* Mobile menu content */}
    </SheetContent>
  </Sheet>
</div>
```

- Mobile header with hamburger menu
- Uses Radix UI's Sheet component for mobile menu
- Slides in from the side on mobile

### **7. Playlist Display**

202-225

```
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
  {funnyPlaylists.slice(0, 6).map((playlist) => (
    <PlaylistCardkey={playlist.id}playlist={playlist}onClick={() => handlePlaylistClick(playlist.id)}onPlay={() => {/* Play first song */}}/>))}
</div>
```

- Responsive grid layout
- Shows first 6 playlists using PlaylistCard component
- Click handlers for viewing playlist and playing songs

### **8. Audio Player Component ***

277-282

```
<div className="fixed bottom-0 left-0 right-0 border-t bg-card p-2 pb-16 md:pb-2">
  <AudioPlayersong={currentSong}isPlaying={isPlaying}onPlayPause={handlePlayPause}onSongEnd={handleSongEnd}/>
</div>
```

- Fixed position at bottom
- Shows current song and controls
- Handles play/pause and song ending

# search

### **1. Core Functionality**

41-44

```
const [searchQuery, setSearchQuery] = useState("")
const [searchResults, setSearchResults] = useState<Song[]>([])
const [currentSong, setCurrentSong] = useState({...}) // Default: Rick Astley
```

- **Search System**: Tracks what you type and shows matching songs
- **Music Player**: Remembers what's currently playing
- ex soso search bay dep dha song dhi still play bay day wong may na

### **2. Search Logic**

56 - 71

```
useEffect(() => {
  if (searchQuery.trim() === "") {
    setSearchResults([])
    return
  }

  const results = allSongs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)

  setSearchResults(results)
}, [searchQuery])
```

- Automatically searches when you type
- Looks at song titles, artists, and albums
- Clears results if search box is empty

### **D. Search Results Display**

337 and up

```
{searchResults.length > 0 ? (
  <ScrollArea className="h-[calc(100vh-300px)]">
    {searchResults.map((song) => (
      <div onClick={() => handlePlaySong(song)}>
        <img src={song.coverUrl} />
        <div>{song.title}</div>
        <div>{song.artist}</div>
      </div>))}
  </ScrollArea>) : searchQuery ? (
  /* "No results" message */
) : (
  /* Browse categories */
)}
```

- Shows matching songs in scrollable list
- Displays "no results" if search fails
- Shows funny categories when no search (e.g., "Shower Songs", "Dad Jokes")

# components (audio-player.tsx)

### **.1.Core Features**

This component handles all music playback functionality with:

- **Play/Pause** controls
- **Seekbar** for navigating through songs
- **Volume** control with mute toggle
- **Song info** display (cover, title, artist)
- **Responsive** layouts for mobile & desktop
- **Loading states** when buffering

### **3. State Management**

The player manages several state variables:

59-64

```
const [isPlaying, setIsPlaying] = useState(externalIsPlaying || false)
const [currentTime, setCurrentTime] = useState(0)
const [duration, setDuration] = useState(song.duration)
const [volume, setVolume] = useState([75]) // Slider expects array
const [isMuted, setIsMuted] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const audioRef = useRef<HTMLAudioElement>(null
```

### **5. play and pause**

### **Playback Control**

115 121

```
const togglePlay = () => {
  const newPlayingState = !isPlaying
  setIsPlaying(newPlayingState)
  onPlayPause?.() // Optional callback
}
```

Handles the play/pause toggle and syncs with external state if provided.

### **Time Seeking**

141 146

```
const handleSeek = (value: number[]) => {
  const newTime = value[0]
  setCurrentTime(newTime)
  audioRef.current!.currentTime = newTime
}
```

Updates both the visual slider and actual audio position.

### **Volume Control**

149 156

```
const handleVolumeChange = (value: number[]) => {
  setVolume(value)
  setIsMuted(false)
  audioRef.current!.volume = value[0] / 100
}

const toggleMute = () => {
  setIsMuted(!isMuted)
  audioRef.current!.volume = isMuted ? volume[0] / 100 : 0
}
```

Manages both volume slider and mute toggle.

### **7. Image Handling loading**

Custom **`ImageWithFallback`** component provides:

257

```
const ImageWithFallback = ({ src, alt, className, fallbackSrc }) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc)
    }
  }

  return <img src={imgSrc} onError={handleError} />}
```

Features:

- Lazy loading
- Error fallback
- Customizable placeholder
- Proper alt text support

Time formatting utility:

typescript (time minute )

311

```
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`}
```

# music -players

### **What This Music Player Can Do 🎵**

1. **Play/Pause Songs** ▶️⏸️
    - Click the play button to start "playing" a song
    - Click again to pause
    - (Note: This is just a UI demo - it doesn't play real audio)
2. **See Song Information** 📄
    - Shows the song cover image
    - Displays:
        - Song title
        - Artist name
        - Album name (if available)
3. **Track Progress** ⏱️
    - Shows how much of the song has "played"
    - Displays time in minutes:seconds (like 2:30)
    - Progress bar moves as the song plays
4. **Skip Songs** ⏮️⏭️
    - Previous/Next buttons (just for show in this demo)
    - Would control playlist in a real app
5. **Adjust Volume** 🔊
    - Volume slider to make it louder/quieter
    - Volume icon shows current state
6. **Like Songs** ❤️
    - Heart button to "favorite" tracks
    - (Just visual in this demo)
7. **Works on Phones & Computers** 📱💻
    - Changes layout automatically:
        - Compact on small screens
        - Expanded on larger screens
8. **Handles Errors Gracefully** 🛟
    - Shows placeholder if album art fails to load
    - Won't break if song data is missing

### **1. Volume side bar Desktop Layout (Horizontal)**

```
<div className="flex items-center justify-between">
  {/* Left: Song info */}
  {/* Center: Controls + progress */}
  {/* Right: Volume */}
</div>
```

https://i.imgur.com/5XwDQgG.png

Three sections:

1. **Left (25%)**: Expanded song info with cover art and like button
2. **Center (50%)**:
    - Transport controls (prev/play/next)
    - Progress bar with time indicators
3. **Right (25%)**: Volume slider

# playlist-card.tsx

1. **Shows a Music Playlist**
    - Displays a playlist cover image
    - Shows the playlist name
    - Tells you how many songs are in it
2. **Interactive Features**
    - Click anywhere on the card to view the playlist
    - Hover to reveal a play button ▶️
    - Click the play button to start playing
3. **Smart Image Handling**
    - If the playlist image fails to load, it shows a placeholder
    - Images load lazily (only when visible on screen)
4. **Works on All Devices**
    - Adjusts size for phones and computers
    - Play button appears nicely on hover (desktop)
5. **Clean Design**
    - Rounded corners
    - Smooth color changes when you interact
    - Text doesn't overflow (shows "..." if too long)

# song details dialog.tsx

### **3. State Management**

35 37

```
const [hoveredSongId, setHoveredSongId] = useState<number | null>(null)
const [playingSongId, setPlayingSongId] = useState<number | null>(null)
```

- Tracks which song is being hovered
- Tracks which song is currently playing

### 2. song play bay dha back ground green

49.66

```
<div className="bg-gradient-to-b from-green-500/90 to-green-700/90 p-6">
  {/* Cover Image */}
  <div className="w-40 h-40 shadow-xl">
    <img src={playlist.imageUrl} alt={playlist.title} />
  </div>

  {/* Metadata */}
  <div className="text-white">
    <div>PLAYLIST</div>
    <DialogTitle>{playlist.title}</DialogTitle>
    <p>{playlist.description}</p>
    <div>Soptify • {playlist.totalSongs} songs</div>
  </div>
</div>
```

- Green gradient background
- Cover image with shadow
- Playlist title and description

### **C. Control Buttons like share**

70 -93

```
<div className="flex gap-4 mb-6">
  <Button className="bg-green-500 hover:bg-green-600">
    <Play /> {/* Main play button */}
  </Button>
  <Button variant="outline"><Heart /></Button> {/* Like */}
  <Button variant="outline"><Share2 /></Button> {/* Share */}
  <Button variant="outline" className="ml-auto"><MoreHorizontal /></Button> {/* Menu */}
</div>
```

- Primary play button
- Secondary action buttons
- Right-aligned menu button

### **E. Songs List**

scroll contain

135

```
<ScrollArea className="h-[300px]">
  {playlist.songs.map((song, index) => (
    <div
      key={song.id}onMouseEnter={() => setHoveredSongId(song.id)}onClick={() => handlePlaySong(song)}>
      {/* Song row content */}
    </div>))}
</ScrollArea>
```

- Scrollable container
- Hover and click handlers
- Maps through songs array

# theme provider.tsx

change the background color

# hook

use-media-query.ts

### **How It Works**

1. **You Give It a Rule**
    - Example rule: **`"(min-width: 768px)"`** (which means "screen is tablet size or larger")
2. **It Checks Your Screen**
    - Immediately says **`true`** (matches) or **`false`** (doesn't match)
    - Keeps watching if you resize your browser
3. **Updates Automatically**
    - Changes from **`true`** to **`false`** (or vice versa) when you resize the window

# use-mobile.tsx

### **How It Works**

1. **Sets Up a Checkpoint**
    - Anything below 768px width = mobile (**`true`**)
    - Anything 768px or above = not mobile (**`false`**)
2. **Listens for Screen Changes**
    - Automatically updates if you rotate your phone or resize your browser
    - Removes the listener when your component unmounts (to prevent memory leaks)
3. **Returns a Simple True/False**
    - **`true`** = mobile device
    - **`false`** = desktop/tablet

# use-toast.ts

### **What This Code Does**

This creates a popup notification system (like tiny message bubbles that appear on screen) with these features:

- Show temporary alerts ("Toasts")
- Update existing toasts
- Auto-dismiss after delay
- Limit how many can appear at once (just 1 in this case)

### **What This Is**

This is a collection of **fake music playlists** (like Spotify playlists) with songs, artists, and album info - all stored as JavaScript data.

### MP3 and MP4

| **Feature** | **MP3** | **MP4** |
| --- | --- | --- |
| **Content** | Audio only | Audio + Video + Subtitles |
| **Quality** | Good for music | Higher quality (video) |
| **Size** | Smaller (audio-only) | Larger (video included) |
| **Flexibility** | Only sound | Supports interactive media |

### **1. All Digital Audio is Stored as Binary ( network wifi sing show example)**

- Songs are converted into **binary numbers** (1s and 0s) during recording:
    - **Analog sound waves** → **Digital samples** (numbers) → **Binary storage**
    - Example: **`01001001 01101100 01101111 01110110 01100101 00100000 01101101 01110101 01110011 01101001 01100011`** (says "I love music" in binary)

### **3. How Binary Becomes Sound**

1. **Decoding**:
    - Your audio player (e.g., Spotify, browser) reads the binary MP3 file.
    - Decodes it back into **digital audio samples** (numbers).
2. **Conversion to Analog**:
    - The DAC (Digital-to-Analog Converter) in your device turns these numbers into **electrical signals**.
3. **Sound Waves**:
    - Your speaker vibrates to recreate the original sound wave.

---

### **4. Why You Don’t Hear Binary**

- The **1s and 0s are just storage**—your player converts them to sound in real-time.
- It’s like reading a recipe (binary) to bake a cake (sound). You eat the cake, not the recipe!

