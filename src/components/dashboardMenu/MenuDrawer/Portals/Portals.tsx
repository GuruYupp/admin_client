import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import { FC } from 'react';
import { PortalTypes, PortalsPropsInterface } from '../../dashboardmenu.types';
import StyledPortalTab from './PortalStyledComponents/StyledPortalTab.styles';
import { getAllPortalsData } from '@/services/utils';
import { useAppSelector } from '@/libs/redux/hooks';
import * as appSelector from '@/libs/redux/selectors';
import PortalIcon from './PortalIcon';

const portalsData = getAllPortalsData();

const Portals: FC<PortalsPropsInterface> = (props) => {
  const { tabIndex, handletabChange } = props;
  const adminPortals = useAppSelector(appSelector.selectPortals);
  return (
    <Tabs
      value={tabIndex}
      onChange={handletabChange}
      aria-label="icon tabs example"
      variant="fullWidth">
      {adminPortals.map((portal, index) => (
        <Tooltip
          title={portalsData[portal as PortalTypes]['text']}
          arrow
          key={index}>
          <StyledPortalTab
            icon={
              <PortalIcon portal={portalsData[portal as PortalTypes]['code']} />
            }
            aria-label={portalsData[portal as PortalTypes]['text']}
          />
        </Tooltip>
      ))}
    </Tabs>
  );
};

export default Portals;
