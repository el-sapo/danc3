// types.ts

export interface Link {
    platformId: string;
    url: string;
}

export interface ArtistData {
    name: string;
    imageUrl: string;
    links: Link[];
    posts: string[];
    songs: SongData[];
}

export interface SongData {
    imageUrl: string;
    title: string;
    description: string;
    collectLink: string;
    playLink: string;
    releaseDate: string;
    type: string;
}

export interface Song {
    artist: string;
    avatar: string;
    title: string;
    description: string;
    cover: string;
    order: string;
    date: string;
    top_minter: string;
    comment: string;
  }