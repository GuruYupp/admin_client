import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import useAppMediaQuery from '@/hooks/useAppMediaQuery';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import { useAppSelector } from '@/libs/redux/hooks';
import { FC, useState } from 'react';
import { MenuDrawerPropsInterface } from '../dashboardmenu.types';
import Portals from './Portals/Portals';
import Configurations from './Configurations/Configurations';

const MenuDrawer: FC<MenuDrawerPropsInterface> = (props) => {
  const { variant, sx, handleDrawerClose, open, onClose, onTransitionEnd } =
    props;
  const { login_client_img } = useAppSelector((state) => state.constsants);
  const isaboveSmallScreen = useAppMediaQuery('sm');

  const [activetab, setActivetab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActivetab(newValue);
  };

  return (
    <Drawer
      onClose={onClose}
      onTransitionEnd={onTransitionEnd}
      variant={variant}
      sx={sx}
      open={open}>
      <div>

        <Toolbar>
          <div
            style={{
              display: 'flex',
              justifyContent: !isaboveSmallScreen ? 'flex-end' : 'center',
              alignItems: 'center',
              width: '100%',
              position: 'relative',
              minHeight: 'inherit',
            }}>
            {login_client_img && (
              <div
                style={{
                  width: !isaboveSmallScreen ? '70%' : '80%',
                  position: 'relative',
                  minHeight: 'inherit',
                  height: 'auto',
                }}>
                <Image
                  src={login_client_img}
                  alt="Yupptv Logo"
                  priority
                  // width={160}
                  // height={46}
                  fill
                  sizes="100%"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            )}
            {!isaboveSmallScreen && (
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft />
              </IconButton>
            )}
          </div>
        </Toolbar>

        <Divider />

        <Portals tabIndex={activetab} handletabChange={handleChange} />
        
        <Divider />

        <Configurations />
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
