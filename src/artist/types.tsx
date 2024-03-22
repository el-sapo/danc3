// types.ts

export interface Link {
    url: string;
    iconUrl: string;
    altText: string;
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