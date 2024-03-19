import React from 'react';
import { SongData } from '../types';


interface SongPreviewProps extends SongData {}

const SongPreview: React.FC<SongPreviewProps> = ({ imageUrl, title, description, collectLink, playLink }) => {
  return (
    <div>
      <img src={imageUrl} alt="Song Preview" />
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={() => window.open(collectLink, "_blank")}>Collect</button>
      <button>Play</button>
    </div>
  );
};

export default SongPreview;