'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const WelcomeItem = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0190fe',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
  color: '#fff',
  fontSize: '2rem',
  fontWeight: '450',
  // ...theme.applyStyles('dark', {
  //   backgroundColor: '#1A2027',
  // }),
}));

const FooterItem = styled(Paper)(({ theme }) => ({
  // backgroundColor: '#0190fe',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
  // color:'#fff',
  fontSize: '.8rem',
  // fontWeight:'450'
  // ...theme.applyStyles('dark', {
  //   backgroundColor: '#1A2027',
  // }),
  display: 'flex',
  justifyContent: 'space-between',
}));

const DashboardDefalutPage = () => {
  return (
    <Box height="90%">
      <Stack direction="column" justifyContent="space-between" height="100%">
        <WelcomeItem>Welcome</WelcomeItem>
        <FooterItem>
          <span>Version:2.0 Release Date:07-Oct-2024 07-55</span>
          <span>© 2024 YuppTV (Pvt) Ltd. All rights reserved.</span>
        </FooterItem>
      </Stack>
    </Box>
  );
};

export default DashboardDefalutPage;
