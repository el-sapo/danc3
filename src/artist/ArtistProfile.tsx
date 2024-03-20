import React from 'react';
import { ArtistData } from './types'; // Import the missing ArtistData interface

interface ArtistProfileProps extends ArtistData {}

// links: twitter, insta, soundcloud, spotify, youtube, website, farcaster, lens, sound, catalog

const ArtistProfile: React.FC<ArtistProfileProps> = ({ imageUrl, links }) => {
    return (
        <div>
            <img src={imageUrl} alt="Danc3 Artist" />
            <div>
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <img src={link.iconUrl} alt={link.altText} width="50" height="50" />
                </a>
              ))}
            </div>
        </div>
    );
};

export default ArtistProfile;