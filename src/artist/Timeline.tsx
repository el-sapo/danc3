// GridItem.tsx
import './Timeline.css';
import { SongData } from './types';
import { appTheme } from '../themes/theme';
import React from 'react';

interface TimelineGridItemProps extends SongData {}


const TimelineGridItem: React.FC<TimelineGridItemProps> = ({ imageUrl, title, releaseDate, collectLink }) => {
    const customColor = appTheme.palette.primary.main;

    return (
        <div className="timeline-grid-item" onClick={() => window.open(collectLink, '_blank')}>
            <p className="timeline-label" style={{ color: customColor }}>{releaseDate}</p>
            <div className="timeline">
                <div className="line" style={{ backgroundColor: customColor }}></div>
                <div className="dot" style={{ backgroundColor: customColor }}></div>
            </div>
            <h1 className="timeline-label" style={{ color: customColor }}>{title}</h1>
            <img src={imageUrl} alt="" className="event-image" />
        </div>
    );
};

export const TimelineGrid = ({ events }: { events: SongData[] }) => {
    return (
        <div className="timeline-grid-container">
            {events.map(event => (
              <TimelineGridItem key={event.collectLink} {...event} />
  ))}
        </div>
    );
};

export default TimelineGrid;
