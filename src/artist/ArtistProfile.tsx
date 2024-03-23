import React from 'react';
import { ArtistData } from './types'; // Import the missing ArtistData interface

interface ArtistProfileProps extends ArtistData {}

// links: twitter, insta, soundcloud, spotify, youtube, website, farcaster, lens, sound, catalog

const ArtistProfile: React.FC<ArtistProfileProps> = ({ name, links }) => {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>{name}</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.iconUrl} alt={link.altText} style={{ width: '50px', height: '50px' }} />
              </a>
            ))}
          </div>
      </div>
  );
};

export default ArtistProfile;