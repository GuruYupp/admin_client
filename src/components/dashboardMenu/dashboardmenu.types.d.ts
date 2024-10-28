import { configurationType, configurationsType } from '@/global.types';
import { DrawerProps } from '@mui/material';
import { SyntheticEvent } from 'react';

export interface DashboardMenuPropsInterface {
  drawerWidth: number;
  handleDrawerClose: () => void;
  // handleDrawerTransitionEnd:()=>void;
  mobileOpen: boolean;
}
export interface MenuDrawerPropsInterface extends DrawerProps {
  drawerWidth: number;
  handleDrawerClose?: () => void;
}

export interface PortalsPropsInterface {
  tabIndex: number;
  handletabChange: (event: SyntheticEvent, newValue: number) => void;
}

export interface FeaturesPropsInterface {
  open: boolean;
  handleClick: (index: number) => void;
  panelIndex: number;
  configuration: configurationsType[configurationType];
}
export type PortalTypes =
  | 'content'
  | 'subscriber'
  | 'site_config'
  | 'reports'
  | 'analytics';
export interface PortalIconPropsInterface {
  portal: PortalTypes;
}
