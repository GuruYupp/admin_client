import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import { useAppSelector } from '@/libs/redux/hooks';
import Search from './DashBoardHeaderStyles/Search.styles';
import SearchIconWrapper from './DashBoardHeaderStyles/SearchIconWrapper.styles';
import StyledInputBase from './DashBoardHeaderStyles/StyledInputBase.styles';
import { FC, MouseEvent, useState } from 'react';
import { DashBoardHeadrPropsInterface } from './dashboardheader.types';
import * as appSelector from '@/libs/redux/selectors'

const settings = [
  { text: 'My Profile', icon: <PersonIcon /> },
  { text: 'Logout', icon: <LogoutIcon /> },
];

const DashBoardHeader: FC<DashBoardHeadrPropsInterface> = (props) => {
  const { drawerWidth ,handleDrawerToggle} = props;

  const userDetails = useAppSelector(appSelector.selectuserDetails);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      color="secondary"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* <Typography variant="h6" noWrap component="div"  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
        Responsive drawer
      </Typography> */}

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Feature…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: '#d24667' }}>
                {userDetails?.userName[0].toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map(({ text, icon }, index) => (
              <MenuItem key={index} onClick={handleCloseUserMenu}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {userDetails?.userName && (
          <Typography sx={{ display: 'inline-block', marginLeft: '0.5%' }}>
            {userDetails?.userName}
          </Typography>
        )}
      </Toolbar>
      <Divider />
    </AppBar>
  );
};

export default DashBoardHeader;
