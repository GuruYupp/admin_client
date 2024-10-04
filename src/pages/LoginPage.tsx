'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginForm from '@/components/login/LoginForm/LoginForm';
import LoginSlide from '@/components/login/loginSlider/LoginSlide';

const LoginPage = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          width: '100%',
        }}>
        <LoginForm />
        <LoginSlide />
      </Box>
    </Container>
  );
};

export default LoginPage;
