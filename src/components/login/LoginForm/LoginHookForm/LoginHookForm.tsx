import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import AppTextField from '@/components/shared/AppTextField/AppTextField';
import AppPasswordField from '@/components/shared/AppPasswordField/AppPasswordField';
import AppSubmitButton from '@/components/shared/AppSubmitButton/AppSubmitButton';
import styles from './LoginHookForm.module.scss';
import { LoginFormInterface } from './LoginHookFormtypes';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { appConfigsInstance, setAppConfigsAfterRender } from '@/appConfig';
import { setAdminConstants } from '@/libs/redux/features/constants/constsSlice';
import { useAppDispatch } from '@/libs/redux/hooks';
import {
  adminLoginUserDetailsInterface,
  validClientType,
} from '@/global.types';
import { makeLogin } from '@/services/datamanager';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  UserLoginData,
  loginVerify,
  setConfigurations,
} from '@/libs/redux/features/auth/authSlice';
import { saveToLocalStorage } from '@/services/utils';
import { fetchResourceProfiles } from '@/libs/redux/features/commonConfigs/CommonConfigsSlice';

const LoginHookForm = () => {
  const { handleSubmit, control } = useForm<LoginFormInterface>();
  const dispatch = useAppDispatch();
  const [loginerror, setLoginError] = useState<string>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInterface> = async (data) => {
    try {
      const postData: Partial<LoginFormInterface> = { ...data };
      console.log(postData);
      delete postData.rememberme;
      if (postData.client) {
        appConfigsInstance.updateConfigs(postData.client as validClientType);
        dispatch(setAdminConstants(postData.client as validClientType));
      }
      const loginResponse = await makeLogin(`service/admin/v1/login`, postData);
      if (loginResponse.status === false) {
        if (loginResponse.error) {
          if (loginResponse.error.code === 404) {
            setLoginError(loginResponse.error.type);
          } else {
            setLoginError(loginResponse.error.message);
          }
        } else {
          setLoginError('Something went wrong');
        }
      } else if (loginResponse.status) {
        saveToLocalStorage('tenant', postData.client as string);
        dispatch(
          UserLoginData(
            loginResponse.response as adminLoginUserDetailsInterface,
          ),
        );
        setAppConfigsAfterRender();
        dispatch(loginVerify());
        dispatch(setConfigurations());
        dispatch(fetchResourceProfiles());
        router.replace('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className={styles.form_inner_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={styles.input_form_control}>
          <Controller
            name="emailId"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <AppTextField
                placeholder="Email"
                fullWidth
                autoComplete=""
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl className={styles.input_form_control}>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AppPasswordField
                placeholder="password"
                fullWidth
                autoComplete=""
                {...field}
              />
            )}
          />
        </FormControl>

        <FormControl className={styles.input_form_control}>
          <Controller
            name="client"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AppTextField
                placeholder="client"
                fullWidth
                autoComplete=""
                {...field}
              />
            )}
          />
        </FormControl>

        <FormGroup className={styles.bottom_form_group}>
          <Controller
            name="rememberme"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox color="primary" {...field} />}
                label="Remember Me"
              />
            )}
          />

          <Link underline="none" className={styles.forgot_link}>
            Forgotten Password?
          </Link>
        </FormGroup>

        {loginerror && <p className={styles.err_message}>{loginerror}</p>}

        <FormControl className={styles.submit_form_control}>
          <AppSubmitButton type="submit">Submit</AppSubmitButton>
        </FormControl>
      </form>

      <DevTool control={control} />
    </Box>
  );
};

export default LoginHookForm;
