import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import { FC } from 'react';
import { PortalsPropsInterface } from '../../dashboardmenu.types';
import StyledPortalTab from './PortalStyledComponents/StyledPortalTab.styles';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import * as appSelector from '@/libs/redux/selectors';
import PortalIcon from './PortalIcon';
import { updateConfigurations } from '@/libs/redux/features/auth/authSlice';

const Portals: FC<PortalsPropsInterface> = (props) => {
  const { tabIndex, handletabChange } = props;
  const Portals = useAppSelector(appSelector.selectPortals);
  const activePortal = useAppSelector(appSelector.selectActivePortal);
  const dispatch = useAppDispatch();
  return (
    <Tabs
      value={tabIndex}
      onChange={handletabChange}
      aria-label="icon tabs example"
      variant="fullWidth">
      {Portals.map((portal, index) => (
        <Tooltip title={portal.text} arrow key={index}>
          <StyledPortalTab
            icon={<PortalIcon portal={portal.code} />}
            aria-label={portal.text}
            onClick={() =>
              activePortal.code !== portal.code &&
              dispatch(updateConfigurations(portal))
            }
          />
        </Tooltip>
      ))}
    </Tabs>
  );
};

export default Portals;
