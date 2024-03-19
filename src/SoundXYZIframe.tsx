import React from 'react';

interface SoundXYZIframeProps {
  src: string;
}

const SoundXYZIframe: React.FC<SoundXYZIframeProps> = ({ src }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={src}
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