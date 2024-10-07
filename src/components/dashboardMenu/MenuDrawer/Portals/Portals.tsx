import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import { FC } from 'react';
import { PortalsPropsInterface } from '../../dashboardmenu.types';
import StyledPortalTab from './PortalStyledComponents/StyledPortalTab.styles';
import { useAppSelector } from '@/libs/redux/hooks';
import * as appSelector from '@/libs/redux/selectors';
import PortalIcon from './PortalIcon';

const Portals: FC<PortalsPropsInterface> = (props) => {
  const { tabIndex, handletabChange } = props;
  const avaliablePortals = useAppSelector(appSelector.selectPortals);
  return (
    <Tabs
      value={tabIndex}
      onChange={handletabChange}
      aria-label="icon tabs example"
      variant="fullWidth">
      {avaliablePortals.map((portal, index) => (
        <Tooltip title={portal.text} arrow key={index}>
          <StyledPortalTab
            icon={<PortalIcon portal={portal.code} />}
            aria-label={portal.text}
          />
        </Tooltip>
      ))}
    </Tabs>
  );
};

export default Portals;
