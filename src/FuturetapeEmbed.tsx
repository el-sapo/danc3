import React from 'react';
import './FuturetapeEmbed.css';
import { appTheme } from "./themes/theme";

// https://futuretape.xyz/embeds

const FuturetapeEmbed: React.FC = ({}) => {
return (
    <div className='song-main-container'>
        <div className="futuretape-container">
            <iframe src="https://futuretape.xyz/embed/token/0x559fb7d6080ac47a17b2fd23bd725023d5a802ec/1" 
            width="220" 
            height="220"
            allowFullScreen={false} 
            allow="autoplay; clipboard-write;" 
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
            loading="lazy">
            </iframe>
        </div>
        <div className="labels-container">
            <h1 className="title" style={{textAlign: "left", color: appTheme.palette.primary.main }}>Love Me Mixtape</h1>
            <h1 className="subtitle" style={{textAlign: "right", fontSize: "30px" }}>by George Hooks</h1>
        </div>
    </div>
);
};

export default FuturetapeEmbed;