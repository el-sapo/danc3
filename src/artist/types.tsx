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
}

export interface SongData {
    imageUrl: string;
    title: string;
    description: string;
    collectLink: string;
    playLink: string;
}