'use client';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import styles from './LoginForm.module.scss';
import useAppMediaQuery from '@/hooks/useAppMediaQuery';
import LoginHookForm from './LoginHookForm/LoginHookForm';
import { useAppSelector } from '@/libs/redux/hooks';

const LoginForm = () => {
  const islargeScreen = useAppMediaQuery('lg');
  const { loginClientImg } = useAppSelector((state) => state.constsants);
  return (
    <Box className={styles.login_box_container}>
      {loginClientImg && (
        <Image
          src={loginClientImg}
          alt="Yupptv Logo"
          width={175}
          height={60}
          priority
          style={{ marginBottom: '60px' }}
        />
      )}
      <Box
        className={`${styles.login_box_form_container} ${
          !islargeScreen ? styles.responsive : ''
        }`}>
        <Paper variant="elevation" square={false} elevation={6}>
          <Box sx={{ padding: '2rem' }}>
            <h2 className={`roboto-regular ${styles.login_heading}`}>Login</h2>
            <LoginHookForm />
          </Box>
        </Paper>
      </Box>
      <span className={`${styles.copy_rights_text} roboto-regular`}>
        © 2024 YuppTV (Pvt) Ltd. All rights reserved.
      </span>
    </Box>
  );
};

export default LoginForm;
