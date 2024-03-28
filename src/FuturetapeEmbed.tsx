import React from 'react';
import './FuturetapeEmbed.css';
import { appTheme } from "./themes/theme";
import tapeImage from './assets/casette-tight.png';

// https://futuretape.xyz/embeds

const FuturetapeEmbed: React.FC = ({}) => {
return (
    <div className='song-main-container'>
        <div className="futuretape-container">
            <iframe src="https://futuretape.xyz/embed/token/0x559fb7d6080ac47a17b2fd23bd725023d5a802ec/1?referral=0xfdd6af85172a18a02651e63929ff2f46e4714156" 
            width="230" 
            height="220"
            allowFullScreen={false} 
            allow="autoplay; clipboard-write;" 
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
            loading="lazy">
            </iframe>
        </div>
        <div className="labels-container">
            <h1 className="title" style={{textAlign: "left", color: appTheme.palette.primary.main }}>Love Me Mixtape</h1>
            <div style={{display: 'inline-flex', justifyContent: 'left', alignItems: 'left'}}>
            <img src={tapeImage} alt="Danc3" style={{ width: '40px', height: '26px', margin: '0 20px'  }} onClick={() => window.location.href = '/'}/>
            <h1 className="subtitle" style={{textAlign: "right", fontSize: "30px" }}>by George Hooks</h1>
            </div>
        </div>
    </div>
);
};

export default FuturetapeEmbed;