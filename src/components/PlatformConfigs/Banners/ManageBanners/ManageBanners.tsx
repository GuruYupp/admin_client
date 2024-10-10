import AppTextField from '@/components/shared/AppTextField/AppTextField';
import { styled } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useAppDispatch } from '@/libs/redux/hooks';
import { fetchBanners } from '@/libs/redux/features/paltformConfigs/ManageBannersSlice';

const ManageBannersForm = styled('div')(() => ({
  '& form': {
    width: '100%',
    display: 'flex',
    padding: 10,
    gap: 20,
    'label': {
      width: '25%',
      fontSize: '0.8rem',
    },
  },
}));

const ManageBannersTextField = styled(AppTextField)(() => ({
  width: '100%',
  '.MuiInputBase-root': {
    height: '35px',
  },
}));

const ManageBannersSearchButton = styled(Button)(() => ({
  alignSelf: 'end',
  height: '35px',
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
          <ManageBannersSearchButton size="small" variant="contained">
            Search
          </ManageBannersSearchButton>
        </form>
      </ManageBannersForm>
    </div>
  );
};

export default ManageBanners;
