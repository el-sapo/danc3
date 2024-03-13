import React from 'react';

const SoundXYZIframe: React.FC = () => {
  return (
    <div className="iframe-container">
        <iframe 
            src="https://embed.sound.xyz/v1/release/796a1542-8fe7-437a-88b7-cebdcad91421?referral=0x54c3283577c40eaa637d35106b7c5c6b387c5ab0&referral_source=embed-sound" 
            style={{ borderRadius: '8px' }} 
            width="600px" 
            height="200px" 
            allow="clipboard-write" 
            sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
    </div>
  );
};

export default SoundXYZIframe;
