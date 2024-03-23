import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArtistData, Song } from './types'; // Import the missing type
import ArtistProfile from './ArtistProfile';
import TimelineGrid from './Timeline';


const ArtistHome: React.FC = () => {
  const { artist } = useParams();
  
    const [artistData, setArtistData] = useState<ArtistData | null>(null);
   // const [songData, setSongData] = useState<SongData | null>(null);
  //  const [postsData, setPostsData] = useState<string[]>([]);
    const [gridData, setGridData] = useState<SongData[]>([]);
    const [song, setSong] = useState<Song | null>(null);

    useEffect(() => {
      fetch('/songs.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          console.log(response);
          return response.json();
        }
      })
        .then((data: Song[]) => {
          data.forEach((song: Song) => {
        if (song.artist === artist) {
          setSong(song);
        }
          });
        })
        .catch((error) => console.error("Error loading JSON:", error));
    }, []);
    
    const songData: SongData = {
      imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75', //data.song.imageUrl,
      description: 'This track is very interesting for me because of the experiments that were put into it.  I wanted to make a track with a little vocal sample. But I don\'t have a microphone and I don\'t have a good singing voice. To realize this idea I involved my wife with an iPhone and an open messenger telegram. After a few minutes of experimentation, I got the result you\'ll hear in this track :)', //data.song.description,
      collectLink: 'https://www.sound.xyz/iamgeorgehooks/love-me', //data.song.collectLink,
      title: 'Love Me', // data.song.title
      playLink: '',
      releaseDate: '',
      type: ''
    };

    const fetchData = async () => {
        try {
          //const response = await fetch(`https://musicgm.xyz/danc3/artist-path?artistId=${artist}`);
          const response = await fetch(`http://localhost:4000/danc3/artist-path?artistId=${artist}`);
          const data = await response.json();
          

          // Parse the data into ArtistData and SongData
          const artistData: ArtistData = {
            name: data.artist.name,
            imageUrl: data.artist.imageUrl,
            links: data.artist.links,
            posts: data.artist.posts,
            songs: data.tracks.map((track: any) => ({
              imageUrl: track.imageUrl,
              description: track.description,
              collectLink: track.collectLink,
              title: track.title,
              playLink: track.playLink,
              releaseDate: track.releaseDate,
              type: track.type
            }))
          };

          const path = data.tracks.map((track: any) => ({
            imageUrl: track.imageUrl,
            description: track.description,
            collectLink: track.collectLink,
            title: track.title,
            playLink: track.playLink,
            releaseDate: new Date(track.releaseDate).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }),
            type: track.type
          }));
    /*
          const songData: SongData = {
            imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75', //data.song.imageUrl,
            description: 'This track is very interesting for me because of the experiments that were put into it.  I wanted to make a track with a little vocal sample. But I don\'t have a microphone and I don\'t have a good singing voice. To realize this idea I involved my wife with an iPhone and an open messenger telegram. After a few minutes of experimentation, I got the result you\'ll hear in this track :)', //data.song.description,
            collectLink: 'https://www.sound.xyz/iamgeorgehooks/love-me', //data.song.collectLink,
            title: 'Love Me', // data.song.title
            playLink: '',
            releaseDate: '',
            type: ''
          };
    */
        //  const postsData = ['This is a post', 'This is another post']; //data.posts;

          // Update the state with the parsed data
          setArtistData(artistData);
          //setSongData(songData);
          //setPostsData(postsData);
          setGridData(path);
        } catch (error) {
          // Handle the error
        }
    };

    useEffect(() => {
        fetchData();
      }, [artist]);
    
    return (
      <div>
        {artistData && <ArtistProfile artist={artistData} song={song} />}
        {gridData && <TimelineGrid events={gridData} />} {/* Render the grid with fetched data */}
      </div>
    );
};


export default ArtistHome;
