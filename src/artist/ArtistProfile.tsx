import React from 'react';
import { ArtistData, Song } from './types'; // Import the missing ArtistData interface
import soundLogo from '../assets/sound.png';
import catalogLogo from '../assets/catalog.png';
import lensLogo from '../assets/lens.png';

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
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '320px', width: 'auto',marginRight: '60px' }}>
          <h1>{artist.name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {artist.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={getImageFileName(link.platformId)} style={{ width: '50px', height: '50px' }} />
              </a>
            ))}
          </div>
      </div>
      {song && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', flex: '1' }}>
          <label style={{ textAlign: 'left', fontSize: '24px' }}>{song.title}</label>
          <label style={{ textAlign: 'left', fontSize: '14px' }}>{song.description}</label>
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;