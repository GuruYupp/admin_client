import { Box } from '@mui/material';
import Feature from './Features/Features';
import { FC, useState } from 'react';

const Configurations:FC = () => {
  const [activePanelIndex, setActivePanelIndex] = useState<number>(-1);

  const handlePanelClick = (index: number) => {
    if(activePanelIndex === index){
      setActivePanelIndex(-1);
    }else{
      setActivePanelIndex(index);
    }
  };

  return (
    <Box component="nav" aria-labelledby="nested-list-subheader">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <Feature
          open={activePanelIndex === index}
          handleClick={handlePanelClick}
          key={index}
          panelIndex={index}
        />
      ))}
    </Box>
  );
};

export default Configurations;
