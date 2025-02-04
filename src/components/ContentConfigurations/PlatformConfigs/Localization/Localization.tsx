import AppTextField from '@/components/shared/AppTextField/AppTextField';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import LocalizationList from './LocalizationList';

const LocalizationContainer = styled('div')(() => ({
  padding: '1.25rem',
}));

const LocalizationSearchContainer = styled('div')(() => ({
  marginBottom: '1.25rem',
}));

const LocalizationSearchBox = styled(Box)(() => ({
  width: '35%',
  display: 'flex',
})) as typeof Box;

const LocalizationSearchTextBox = styled(AppTextField, {
  shouldForwardProp: (prop) => prop !== 'withClearProps',
})(() => ({
  flex: 1,
  '.MuiInputBase-root': {
    height: '40px',
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    '.MuiOutlinedInput-notchedOutline': {
      borderRight: 'none',
    },
  },
})) as unknown as typeof AppTextField;

const LocalizationSearchButton = styled(Button)(() => ({
  height: '40px',
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  boxShadow: 'unset',
})) as typeof Button;

const Localization = () => {
  const handleClear = () => {};

  return (
    <LocalizationContainer>
      <LocalizationSearchContainer>
        <LocalizationSearchBox>
          <LocalizationSearchTextBox
            placeholder="Localization Resource"
            withClearProps={{ clearHandler: handleClear }}
          />
          <LocalizationSearchButton size="small" variant="contained">
            Search
          </LocalizationSearchButton>
        </LocalizationSearchBox>
      </LocalizationSearchContainer>
      <LocalizationList />
    </LocalizationContainer>
  );
};

export default Localization;
