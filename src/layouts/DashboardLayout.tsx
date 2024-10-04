import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { FC, PropsWithChildren, useState } from 'react';
import DashBoardHeader from '@/components/dashboardHeader/DashBoardHeader';
import DashboardMenu from '@/components/dashboardMenu/DashboardMenu';

const drawerWidth = 202;

const DashBoardLayout: FC<PropsWithChildren> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <DashBoardHeader
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <DashboardMenu
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />

        {props.children}
      </Box>
    </Box>
  );
};

export default DashBoardLayout;
