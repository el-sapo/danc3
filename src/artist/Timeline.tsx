// GridItem.tsx
import './Timeline.css';
import { SongData } from './types';
import { appTheme } from '../themes/theme';
import React from 'react';

interface TimelineGridItemProps extends SongData {}


const TimelineGridItem: React.FC<TimelineGridItemProps> = ({ imageUrl, title, releaseDate }) => {
    const customColor = appTheme.palette.primary.main;

    return (
        <div className="timeline-grid-item">
            <p className="timeline-label top-label" style={{ color: customColor }}>{releaseDate}</p>
            <div className="timeline">
                <div className="line" style={{ backgroundColor: customColor }}></div>
                <div className="dot" style={{ backgroundColor: customColor }}></div>
            </div>
            <h1 className="timeline-label bottom-label" style={{ color: customColor }}>{title}</h1>
            <img src={imageUrl} alt="" className="event-image" />
        </div>
    );
};

export const TimelineGrid = ({ events }: { events: SongData[] }) => {
    return (
        <div className="timeline-grid-container">
            {events.map(event => (
              <TimelineGridItem {...event} />
  ))}
        </div>
    );
};

export default TimelineGrid;
