import React from 'react';

interface GridItemProps {
  mainImage: string; // URL of the main image
  smallImage1: string; // URL of the first small circular image
  smallImage2: string; // URL of the second small circular image
  label1: string;
  label2: string;
  label3: string;
  label4: string;
}

const GridItem: React.FC<GridItemProps> = ({
  mainImage,
  smallImage1,
  smallImage2,
  label1,
  label2,
  label3,
  label4
}) => {
  return (
    <div className="grid-item">
      <img src={mainImage} alt="Main" className="main-image" />
      <div className="sidebar">
        <div className="label">{label1}</div>
        <div className="label-line">
          <img src={smallImage1} alt="Small 1" className="small-image" />
          <div className="label-small">by {label2}</div>
        </div>
        <div className="label-line top-collector">
          <div className="label-small">Top collector</div>
          <img src={smallImage2} alt="Small 2" className="small-image" />
        </div>
        <div className="flex-right">
          <div className="label-small">released {label3}</div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
