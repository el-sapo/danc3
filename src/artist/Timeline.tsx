// GridItem.tsx
import './Timeline.css';
import { SongData } from './types';
import { appTheme } from '../themes/theme';
import React from 'react';

interface TimelineGridItemProps extends SongData {}

const TimelineGridItem: React.FC<TimelineGridItemProps> = ({ imageUrl, title, releaseDate }) => {
      // Access the custom color from the theme
    
      const customColor = appTheme.palette.primary.main;
    return (
        <div className="timeline-grid-item">
            <div className="timeline-label top-label" style={{ color: customColor }}>{releaseDate}</div>
            <div className="timeline">
                <div className="line" style={{ backgroundColor: customColor }}></div>
                <div className="dot" style={{ backgroundColor: customColor }}></div>
            </div>
            <div className="timeline-label bottom-label" style={{ color: customColor }}>{title}</div>
            <img src={imageUrl} alt="" className="event-image" />
        </div>
    );
};



const TimelineGrid = ({ events }: { events: SongData[] }) => {
    return (
        <div className="timeline-grid-container">
            {events.map(event => (
              <TimelineGridItem {...event} />
  ))}
        </div>
    );
};

export default TimelineGrid;
