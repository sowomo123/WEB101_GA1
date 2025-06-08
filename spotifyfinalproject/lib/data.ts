// Mock data for playlists - simplified to 5 playlists and 5 artists
export const funnyPlaylists = [
  {
    id: 1,
    title: "High Notes I'll Never Hit",
    description: "Featuring songs that will destroy your vocal cords",
    imageUrl: "/images/arh.webp",
    songs: 5,
  },
  {
    id: 2,
<<<<<<< HEAD
    title: "WOMEN",
    description: "You're not as good as you think",
    imageUrl: "/placeholder.svg?height=150&width=150",
    songs: 8,
  },
  {
    id: 3,
    title: "BTS",
    description: "Burning dinner never sounded so good",
    imageUrl: "/placeholder.svg?height=150&width=150",
    songs: 15,
=======
    title: "3AM Sad Boy Hours",
    description: "When you're feeling like The Weeknd but it's Tuesday",
    imageUrl: "/images/doja.webp",
    songs: 5,
  },
  {
    id: 3,
    title: "Songs That Make Me Think I'm Cute",
    description: "Main character energy playlist",
    imageUrl: "/images/ice.webp",
    songs: 5,
>>>>>>> 07b05549275d6206032ab0561ed13a1435e7453a
  },
  {
    id: 4,
    title: "Whispering So My Neighbors Don't Complain",
    description: "Billie Eilish taught us volume control",
    imageUrl: "/images/kenny.webp",
    songs: 5,
  },
  {
    id: 5,
    title: "Forest Spirit Vibes",
    description: "Totoro-approved chill beats",
    imageUrl: "/images/saya.png",
    songs: 5,
  },

  {
    id: 6,
    title: "Forest Spirit Vibes",
    description: "Totoro-approved chill beats",
    imageUrl: "/images/week.webp",
    songs: 5,
  },
]

export interface Song {
  id: number
  title: string
  artist: string
  duration: string
  album?: string
  explicit?: boolean
  coverUrl?: string
}

export interface PlaylistDetails {
  id: number
  title: string
  description: string
  imageUrl: string
  songs: Song[]
  totalSongs: number
}

// Mock data for detailed playlists with songs - only 5 playlists with 5 songs each
export const detailedPlaylists: Record<number, PlaylistDetails> = {
  1: {
    id: 1,
    title: "High Notes I'll Never Hit",
    description: "Featuring songs that will destroy your vocal cords",
    imageUrl: "/images/ariana-playlist.jpg",
    totalSongs: 5,
    songs: [
      {
        id: 101,
        title: "Whistle Note Wannabe",
        artist: "Cracked Voice",
        duration: "3:45",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Vocal Destruction",
      },
      {
        id: 102,
        title: "Seven Octaves (In My Dreams)",
        artist: "Delusional Singer",
        duration: "4:12",
        explicit: true,
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Impossible Range",
      },
      {
        id: 103,
        title: "Ponytail Power Ballad",
        artist: "Hair Flip",
        duration: "3:33",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Signature Looks",
      },
      {
        id: 104,
        title: "Thank U, Next (Vocal Coach)",
        artist: "Fired Instructor",
        duration: "2:58",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Career Changes",
      },
      {
        id: 105,
        title: "Breathing Technique Fail",
        artist: "Out of Breath",
        duration: "1:45",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Cardio Required",
      },
    ],
  },
  2: {
    id: 2,
    title: "3AM Sad Boy Hours",
    description: "When you're feeling like The Weeknd but it's Tuesday",
    imageUrl: "/images/weeknd-playlist.webp",
    totalSongs: 5,
    songs: [
      {
        id: 201,
        title: "Crying in My Honda Civic",
        artist: "Budget Sadness",
        duration: "4:15",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Economy Emotions",
      },
      {
        id: 202,
        title: "Red Jacket, Black Feelings",
        artist: "Fashion Statement",
        duration: "3:33",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Style Over Substance",
      },
      {
        id: 203,
        title: "Can't Feel My Face (It's Just Cold)",
        artist: "Weather Victim",
        duration: "3:28",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Seasonal Depression",
      },
      {
        id: 204,
        title: "Blinding Lights (My Phone Screen)",
        artist: "Social Media Addiction",
        duration: "3:20",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Digital Age Problems",
      },
      {
        id: 205,
        title: "The Hills (Are My Student Loans)",
        artist: "Financial Anxiety",
        duration: "4:02",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Adult Responsibilities",
      },
    ],
  },
  3: {
    id: 3,
    title: "Songs That Make Me Think I'm Cute",
    description: "Main character energy playlist",
    imageUrl: "/images/doja-playlist.webp",
    totalSongs: 5,
    songs: [
      {
        id: 301,
        title: "Mirror Selfie Confidence",
        artist: "Ring Light Goddess",
        duration: "3:22",
        coverUrl: "/images/doja-playlist.webp",
        album: "Filtered Reality",
      },
      {
        id: 302,
        title: "Pink Hair, Don't Care",
        artist: "Color Chameleon",
        duration: "2:55",
        coverUrl: "/images/doja-playlist.webp",
        album: "Hair Transformation",
      },
      {
        id: 303,
        title: "Say So (To My Reflection)",
        artist: "Bathroom Dancer",
        duration: "3:58",
        explicit: true,
        coverUrl: "/images/doja-playlist.webp",
        album: "Solo Performance",
      },
      {
        id: 304,
        title: "Boss Bitch (Of My Living Room)",
        artist: "Domestic Royalty",
        duration: "3:20",
        explicit: true,
        coverUrl: "/images/doja-playlist.webp",
        album: "Home Ruler",
      },
      {
        id: 305,
        title: "Like That (My Outfit Today)",
        artist: "Fashion Confidence",
        duration: "2:48",
        coverUrl: "/images/doja-playlist.webp",
        album: "Style Statement",
      },
    ],
  },
  4: {
    id: 4,
    title: "Whispering So My Neighbors Don't Complain",
    description: "Billie Eilish taught us volume control",
    imageUrl: "/images/billie-playlist.webp",
    totalSongs: 5,
    songs: [
      {
        id: 401,
        title: "Bad Guy (Quietly)",
        artist: "Considerate Rebel",
        duration: "3:14",
        coverUrl: "/images/billie-playlist.webp",
        album: "Polite Mischief",
      },
      {
        id: 402,
        title: "When the Party's Over (At 9 PM)",
        artist: "Early Bedtime",
        duration: "3:16",
        coverUrl: "/images/billie-playlist.webp",
        album: "Responsible Fun",
      },
      {
        id: 403,
        title: "Everything I Wanted (Was a Nap)",
        artist: "Sleep Deprived",
        duration: "4:05",
        coverUrl: "/images/billie-playlist.webp",
        album: "Rest Goals",
      },
      {
        id: 404,
        title: "Happier Than Ever (After Coffee)",
        artist: "Caffeine Dependent",
        duration: "4:58",
        coverUrl: "/images/billie-playlist.webp",
        album: "Morning Ritual",
      },
      {
        id: 405,
        title: "Therefore I Am (Overthinking)",
        artist: "Anxious Thoughts",
        duration: "2:53",
        coverUrl: "/images/billie-playlist.webp",
        album: "Mental Gymnastics",
      },
    ],
  },
  5: {
    id: 5,
    title: "Forest Spirit Vibes",
    description: "Totoro-approved chill beats",
    imageUrl: "/images/totoro-logo.jpg",
    totalSongs: 5,
    songs: [
      {
        id: 501,
        title: "My Neighbor Totoro (But He Won't Text Back)",
        artist: "Forest Spirit",
        duration: "3:33",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Studio Ghibli Feels",
      },
      {
        id: 502,
        title: "Cat Bus (Missed My Stop)",
        artist: "Public Transportation",
        duration: "2:45",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Magical Commute",
      },
      {
        id: 503,
        title: "Soot Sprites (In My Room)",
        artist: "Dust Bunnies",
        duration: "3:12",
        explicit: true,
        coverUrl: "/images/totoro-logo.jpg",
        album: "Cleaning Avoidance",
      },
      {
        id: 504,
        title: "Acorns (My Savings Account)",
        artist: "Financial Planning",
        duration: "4:20",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Adult Responsibilities",
      },
      {
        id: 505,
        title: "Umbrella (Forgot It Again)",
        artist: "Weather Victim",
        duration: "3:05",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Rainy Day Blues",
      },
    ],
  },
}

// Create a flattened array of all songs for search functionality
export const allSongs: Song[] = Object.values(detailedPlaylists).flatMap((playlist) =>
  playlist.songs.map((song) => ({
    ...song,
    coverUrl: song.coverUrl || playlist.imageUrl,
    album: song.album || playlist.title,
  })),
)
