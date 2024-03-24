import React from 'react';
import { Song } from './artist/types'; // Import the 'Song' interface
import './index.css';

interface GridItemProps extends Song { }
/*  mainImage: string; // URL of the main image
  smallImage1: string; // URL of the first small circular image
  smallImage2: string; // URL of the second small circular image
  label1: string;
  label2: string;
  label3: string;
  label4: string;
}*/

function formatDate(date: string): string {
  new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  return date
}

const GridItem: React.FC<GridItemProps> = ({
  artist,
  avatar,
  title,
  cover,
  date,
  top_minter,
}) => {
  return (
    <div className="grid-item">
      <img src={cover} alt="Main" className="main-image" />
      <div className="sidebar">
      <div className="top-aligned-items">

        <h1 className="label">{title}</h1>
        <div className="label-line">
          <img src={avatar} alt="Small 1" className="small-image" />
          <p className="label-small">by {artist}</p>
        </div>
        </div>
        <div className="spacer"></div>

        <div className="bottom-aligned-items">
        <div className="label-line top-collector">
          <h1 className="label-small">Top collector</h1>
          <img src={top_minter} alt="Small 2" className="small-image" />
        </div>
        <div className="flex-right">
          <p className="label-small">{formatDate(date)}</p>
        </div>
        </div>

      </div>
    </div>
  );
};

export default GridItem;
