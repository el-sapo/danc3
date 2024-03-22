import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArtistData, SongData } from './types'; // Import the missing type
import ArtistProfile from './ArtistProfile';
import WrittenPosts from './WrittenPosts';
import SongPreview from './SongPreview';
import TimelineGrid from './Timeline';


const ArtistHome: React.FC = () => {
    const { param1 } = useParams<{ param1: string }>();
  
    const [artistData, setArtistData] = useState<ArtistData | null>(null);
    const [songData, setSongData] = useState<SongData | null>(null);
    const [postsData, setPostsData] = useState<string[]>([]);
    const [gridData, setGridData] = useState<SongData[]>([]);

    const fetchData = async () => {
        try {
          //const response = await fetch(`https://musicgm.xyz/api/artist-path?param1=${param1}`);
          //const data = await response.json();
    
          // Parse the data into ArtistData and SongData
          const artistData: ArtistData = {
            name: 'George Hooks',
            imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FAVATAR_IMAGE%2F4944886-newImage.png&w=256&q=75', //data.artist.imageUrl,
            links: [],
            posts: [],
            songs: []
          };
    
          const songData: SongData = {
            imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75', //data.song.imageUrl,
            description: 'This track is very interesting for me because of the experiments that were put into it.  I wanted to make a track with a little vocal sample. But I don\'t have a microphone and I don\'t have a good singing voice. To realize this idea I involved my wife with an iPhone and an open messenger telegram. After a few minutes of experimentation, I got the result you\'ll hear in this track :)', //data.song.description,
            collectLink: 'https://www.sound.xyz/iamgeorgehooks/love-me', //data.song.collectLink,
            title: 'Love Me', // data.song.title
            playLink: '',
            releaseDate: '',
            type: ''
          };
    
          const postsData = ['This is a post', 'This is another post']; //data.posts;

          // Update the state with the parsed data
          setArtistData(artistData);
          setSongData(songData);
          setPostsData(postsData);
          const events: SongData[] = [
            {
              imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75',
              title: 'DRIVE ME MAD.',
              description: '',
              collectLink: '',
              playLink: '',
              releaseDate: '8 Jan 2024',
              type: '' // Add the missing 'type' property
            },
            {
              imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75',
              title: 'Butterflies (with Georgie O’Brien)',
              description: '',
              collectLink: '',
              playLink: '',
              releaseDate: '13 Nov 2023',
              type: '' // Add the missing 'type' property
            },
            {
              imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75',
              title: 'DRIVE ME MAD.',
              description: '',
              collectLink: '',
              playLink: '',
              releaseDate: '8 Jan 2024',
              type: '' // Add the missing 'type' property
            },
            {
              imageUrl: 'https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2Fb8ddfb21-88a7-401e-a99a-061e1291c291%2FRELEASE_COVER_IMAGE%2F1812817-newImage.png&w=750&q=75',
              title: 'Butterflies (with Georgie O’Brien)',
              description: '',
              collectLink: '',
              playLink: '',
              releaseDate: '13 Nov 2023',
              type: '' // Add the missing 'type' property
            },
          ];
          setGridData(events);
        } catch (error) {
          // Handle the error
        }
    };

    useEffect(() => {
        fetchData();
      }, [param1]);
    
    return (
        <div>
            {artistData && <ArtistProfile {...artistData} />}
            {songData && <SongPreview {...songData} />}
            {postsData && <WrittenPosts posts={postsData} />}
            {gridData && <TimelineGrid events={gridData} />} {/* Render the grid with fetched data */}
        </div>
    );
};


export default ArtistHome;