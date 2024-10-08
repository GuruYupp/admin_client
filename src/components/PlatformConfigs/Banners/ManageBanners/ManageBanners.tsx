import AppTextField from '@/components/shared/AppTextField/AppTextField';
import { styled } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useAppDispatch } from '@/libs/redux/hooks';
import { fetchBanners } from '@/libs/redux/features/paltformConfigs/ManageBannersSlice';

const ManageBannersForm = styled('div')(({ theme }) => ({
  '& form': {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
    'label': {
      // width: '25%',
      // minWidth:'25%',
      boxSizing: 'border-box',
      fontSize: '0.8rem',
      padding: '10px',
      [theme.breakpoints.between('md', 'xl')]: {
        flex: '0 0 25%',
        maxWidth: '25%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        flex: '0 0 50%',
        maxWidth: '50%',
      },
      [theme.breakpoints.down('sm')]: {
        flex: '0 0 100%',
        maxWidth: '100%',
      },
    },
  },
}));

const ManageBannersTextField = styled(AppTextField)(() => ({
  width: '100%',
  '.MuiInputBase-root': {
    height: '35px',
  },
}));

const ManageBannersSearchButton = styled(Button)(({}) => ({
  alignSelf: 'end',
  height: '35px',
  marginBottom: '10px',
  marginLeft: '10px',
}));

const ManageBannersSelect = styled(Select)(() => ({
  Width: '100%',
  display: 'block',
  height: '35px',
})) as unknown as typeof Select;

const ManageBanners = () => {
  const [age, setAge] = React.useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  return (
    <div>
      <ManageBannersForm>
        <form>
          <label htmlFor="content partner">
            {' '}
            <strong>Contet Partner</strong>
            <ManageBannersSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              size="small">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </ManageBannersSelect>
          </label>
          <label htmlFor="Banner Id">
            {' '}
            <strong>Banner Id</strong>
            <ManageBannersTextField size="small" placeholder="Banner Id" />
          </label>
          <label htmlFor="Banner Title">
            {' '}
            <strong>Banner Title</strong>
            <ManageBannersTextField size="small" placeholder="Banner Title" />
          </label>
          {/* <label htmlFor="Banner Search Button"> */}
          <ManageBannersSearchButton size="small" variant="contained">
            Search
          </ManageBannersSearchButton>
          {/* </label> */}
        </form>
      </ManageBannersForm>
    </div>
  );
};

export default ManageBanners;
