import React from 'react';
import { ArtistData, Song } from './types'; // Import the missing ArtistData interface
import soundLogo from '../assets/sound.png';
import catalogLogo from '../assets/catalog.png';
import lensLogo from '../assets/lens.png';
import './ArtistProfile.css';
import '../index.css';

interface ArtistProfileProps {
  artist: ArtistData;
  song: Song | null;
}

// links: twitter, insta, soundcloud, spotify, youtube, website, farcaster, lens, sound, catalog
const getImageFileName = (string: string): string => {
  let imageName = '';

  switch (string) {
    case 'twitter':
      imageName = 'twitter.png';
      break;
    case 'insta':
      imageName = 'instagram.png';
      break;
    case 'soundcloud':
      imageName = 'soundcloud.png';
      break;
    case 'spotify':
      imageName = 'spotify.png';
      break;
    case 'youtube':
      imageName = 'youtube.png';
      break;
    case 'website':
      imageName = 'website.png';
      break;
    case 'farcaster':
      imageName = 'farcaster.png';
      break;
    case 'lens':
      imageName = lensLogo;
      break;
    case 'sound':
      imageName = soundLogo;
      break;
    case 'catalog':
      imageName = catalogLogo;
      break;
    default:
      imageName = 'default.png';
      break;
  }

  return imageName;
};


const ArtistProfile: React.FC<ArtistProfileProps> = ({ artist, song }) => {
  return (
    <div className='artist-profile'>
      <div className='artist-info'>
          <h1>{artist.name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px'}}>
            {artist.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={getImageFileName(link.platformId)} style={{ width: '50px', height: '50px' }} />
              </a>
            ))}
          </div>
      </div>
      {song && (
        <div className='song-info'>
          <h1 style={{ textAlign: 'left', fontSize: '24px' }}>{song.title}</h1>
          <p style={{ textAlign: 'left', fontSize: '16px' }}>{song.description}</p>
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;