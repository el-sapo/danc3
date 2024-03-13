import React from 'react';

interface GridItemProps {
  imageUrl: string;
  labelTop: string;
  labelBottom: string;
}

const GridItem: React.FC<GridItemProps> = ({ imageUrl, labelTop, labelBottom }) => {
  return (
    <div className="grid-item">
      <div className="label-top">{labelTop}</div>
      <img src={imageUrl} alt={labelTop} />
      <div className="label-bottom">{labelBottom}</div>
    </div>
  );
};

export default GridItem;
