import React from 'react';
import { SongData } from './types';


interface SongPreviewProps extends SongData {}

const SongPreview: React.FC<SongPreviewProps> = ({ imageUrl, title, description, collectLink, playLink }) => {
  return (
    <div style={{ width: '900px' }}>
    <div style={{ display: 'flex', alignItems: 'start' }}>
      <img src={imageUrl} alt="Song Preview" style={{ borderRadius: '10px', width: '200px', height: '200px' }} />
      <div style={{ marginLeft: '20px' }}>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{title}</p>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{description}</p>
        <button onClick={() => window.open(collectLink, "_blank")}>Collect</button>
        <button>Play</button>
      </div>
    </div>
    </div>

  );
};

export default SongPreview;