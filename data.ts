
export const funnyPlaylists = [
  {
    id: 1,
    title: "Happier Than Ever",
    description: "all things billi!",
    imageUrl: "/images/billi.jpg",
    songs: 5,
  },
  {
    id: 2,
    title: " i can't lose ",
    description: "when i with u",
    imageUrl: "/images/sza.jpg",
    songs: 5,
  },
  {
    id: 3,
    title: "Songs That Make Me Think I'm Cute",
    description: "Main character energy playlist",
    imageUrl: "/images/ari.webp",
    songs: 5,
  },
  {
    id: 4,
    title: "Whispering So My Neighbors Don't Complain",
    description: "Billie Eilish taught us volume control",
    imageUrl: "/images/lungten.jpg",
    songs: 5,
  },
  {
    id: 5,
    title: "Forest Spirit Vibes",
    description: "Totoro-approved chill beats",
    imageUrl: "/images/selena.jpg",
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
  audioUrl?: string // Add audio URL field
}

export interface PlaylistDetails {
  id: number
  title: string
  description: string
  imageUrl: string
  songs: Song[]
  totalSongs: number
}


export const detailedPlaylists: Record<number, PlaylistDetails> = {
  1: {
    id: 1,
    title: "High Notes I'll Never Hit",
    description: "Featuring songs that will destroy your vocal cords",
    imageUrl: "/images/billi.jpg",
    totalSongs: 5,
    songs: [
      {
        id: 101,
        title: "When the party's over ",
        artist: "Billi Ellish",
        duration: "3:13",
        coverUrl: "/images/billi.jpg",
        album: "Vocal Destruction",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
      {
        id: 102,
        title: "BIRDS OF THE FEATHER",
        artist: "Billi Eillie ",
        duration: "3:18",
        explicit: true,
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Impossible Range",
        audioUrl: "/audio/ara.mp3",
      },
      {
        id: 103,
        title: "What was I Made For",
        artist: "Billi Eillie",
        duration: "3:33",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Signature Looks",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
      {
        id: 104,
        title: "idontwaanabeanymore",
        artist: "Billi Eillie",
        duration: "2:58",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Career Changes",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 105,
        title: "Bad Guys",
        artist: "Billi Eillie",
        duration: "1:45",
        coverUrl: "/images/ariana-playlist.jpg",
        album: "Cardio Required",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
    ],
  },
  2: {
    id: 2,
    title: "Sza",
    description: "Vibes with Sza",
    imageUrl: "/images/sza.jpg",
    totalSongs: 5,
    songs: [
      {
        id: 201,
        title: "Snozee",
        artist: "Sza and Justin Biber",
        duration: "3:49",
        coverUrl: "/images/sza.jpg",
        album: "Economy Emotions",
        audioUrl: "/audio/sza.mp3", 
      },
      {
        id: 202,
        title: "Kill Bill",
        artist: "Sza",
        duration: "3:33",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Style Over Substance",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 203,
        title: "All the star",
        artist: "Sza",
        duration: "3:28",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Seasonal Depression",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
      {
        id: 204,
        title: "Luther",
        artist: "Sza and Kandric lama",
        duration: "3:20",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Digital Age Problems",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 205,
        title: "30 by 30",
        artist: "Sza and kandric lama",
        duration: "4:02",
        coverUrl: "/images/weeknd-playlist.webp",
        album: "Adult Responsibilities",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
    ],
  },
  3: {
    id: 3,
    title: "Ariana Grande",
    description: "Main character energy playlist",
    imageUrl: "/images/ari.webp",
    totalSongs: 5,
    songs: [
      {
        id: 301,
        title: "One last Time ",
        artist: "Ariana Grade",
        duration: "3:18",
        coverUrl: "/images/ari.webp",
        album: "Filtered Reality",
        audioUrl: "/audio/ara.mp3", 
      },
      {
        id: 302,
        title: "we cant be friends",
        artist: "Ariana Grade",
        duration: "2:55",
        coverUrl: "/images/doja-playlist.webp",
        album: "Hair Transformation",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 303,
        title: "7 Rings",
        artist: "Ariana Grade",
        duration: "3:58",
        explicit: true,
        coverUrl: "/images/doja-playlist.webp",
        album: "Solo Performance",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
      {
        id: 304,
        title: "position",
        artist: "Ariana Grade",
        duration: "3:20",
        explicit: true,
        coverUrl: "/images/doja-playlist.webp",
        album: "Home Ruler",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 305,
        title: "Bloodline",
        artist: "Ariana Grade",
        duration: "2:48",
        coverUrl: "/images/doja-playlist.webp",
        album: "Style Statement",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
    ],
  },
  4: {
    id: 4,
    title: "The Lungten",
    description: "nagsa the tale of Ashi ",
    imageUrl: "/images/lungten.jpg",
    totalSongs: 5,
    songs: [
      {
        id: 401,
        title: "Nangsa",
        artist: "The Lungten",
        duration: "3:10",
        coverUrl: "/images/lungten.jpg",
        album: "Polite Mischief",
        audioUrl: "/audio/lung.mp3", 
      },
      {
        id: 402,
        title: "Thamara",
        artist: "the lungten",
        duration: "3:24",
        coverUrl: "/images/billie-playlist.webp",
        album: "Responsible Fun",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 403,
        title: "Yaangtse Ashi",
        artist: "The Lungten",
        duration: "4:05",
        coverUrl: "/images/billie-playlist.webp",
        album: "Rest Goals",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
      {
        id: 404,
        title: "Yar La Aee",
        artist: "The Lungten",
        duration: "4:58",
        coverUrl: "/images/billie-playlist.webp",
        album: "Morning Ritual",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 405,
        title: "Jatshen",
        artist: "the Lungten and Sonam Wangchen",
        duration: "2:53",
        coverUrl: "/images/billie-playlist.webp",
        album: "Mental Gymnastics",
        audioUrl: "/audio/lovely.mp3", // 
      },
    ],
  },
  5: {
    id: 5,
    title: "Selena",
    description: "Mentally heals you",
    imageUrl: "/images/selena.jpg",
    totalSongs: 5,
    songs: [
      {
        id: 501,
        title: "We dont talk anymore",
        artist: "Selena",
        duration: "3:37",
        coverUrl: "/images/selena.jpg",
        album: "Studio Ghibli Feels",
        audioUrl: "/audio/sele.mp3", 
      },
      {
        id: 502,
        title: "Same Old Love )",
        artist: "Selena",
        duration: "2:45",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Magical Commute",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 503,
        title: "hands To My self",
        artist: "Selena ",
        duration: "3:12",
        explicit: true,
        coverUrl: "/images/totoro-logo.jpg",
        album: "Cleaning Avoidance",
        audioUrl: "/audio/lovely.mp3", // Updated to new audio
      },
      {
        id: 504,
        title: "I cant Get enough",
        artist: "Selena",
        duration: "4:20",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Adult Responsibilities",
        audioUrl: "/audio/sample-song.mp3",
      },
      {
        id: 505,
        title: "Taki Taki",
        artist: "selena",
        duration: "3:05",
        coverUrl: "/images/totoro-logo.jpg",
        album: "Rainy Day Blues",
        audioUrl: "/audio/lovely.mp3", 
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
