import { Box } from '@mui/material';
import Feature from './Features/Features';
import { FC, useState } from 'react';
import { useAppSelector } from '@/libs/redux/hooks';
import { selectActiveConfigurations } from '@/libs/redux/selectors';

const Configurations: FC = () => {
  const [activePanelIndex, setActivePanelIndex] = useState<number>(-1);

  const configurations = useAppSelector(selectActiveConfigurations);
  const handlePanelClick = (index: number) => {
    if (activePanelIndex === index) {
      setActivePanelIndex(-1);
    } else {
      setActivePanelIndex(index);
    }
  };

  return (
    <Box component="nav" aria-labelledby="nested-list-subheader">
      {configurations.map((configuration, index) => (
        <Feature
          open={activePanelIndex === index}
          handleClick={handlePanelClick}
          key={index}
          panelIndex={index}
          configuration={configuration}
        />
      ))}
    </Box>
  );
};

export default Configurations;
