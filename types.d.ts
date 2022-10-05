export interface Song {
  title: string;
  artist: string;
  album: string;
  year: number;
  duration: number;
  genre: string;
  path: string;
}

export interface SongList {
  [key: string]: Song;
}
