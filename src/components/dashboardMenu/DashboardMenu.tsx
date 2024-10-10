import Box from '@mui/material/Box';
import MenuDrawer from './MenuDrawer/MenuDrawer';
import { FC } from 'react';
import { DashboardMenuPropsInterface } from './dashboardmenu.types';

const DashboardMenu: FC<DashboardMenuPropsInterface> = (props) => {
  const { drawerWidth, mobileOpen, handleDrawerClose } = props;

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders">
      <MenuDrawer
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      />

      <MenuDrawer
        drawerWidth={drawerWidth}
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      />
    </Box>
  );
};

export default DashboardMenu;
