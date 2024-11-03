import AppTextField from '@/components/shared/AppTextField/AppTextField';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import GeoRulesList from './GeoRulesList';

const GeoRulesContainer = styled('div')(() => ({
  padding: '1.25rem',
}));

const GeoRulesSearchContainer = styled('div')(() => ({
  marginBottom: '1.25rem',
}));

const GeoRulesSearchBox = styled(Box)(() => ({
  width: '35%',
  display: 'flex',
})) as typeof Box;

const GeoRulesSearchTextBox = styled(AppTextField)(() => ({
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

const GeoRulesSearchButton = styled(Button)(() => ({
  height: '40px',
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  boxShadow: 'unset',
})) as typeof Button;

const GeoRules = () => {
  const handleClear = () => {};

  return (
    <GeoRulesContainer>
      <GeoRulesSearchContainer>
        <GeoRulesSearchBox>
          <GeoRulesSearchTextBox
            placeholder="Geo Rule Name"
            withClearProps={{ clearHandler: handleClear }}
          />
          <GeoRulesSearchButton size="small" variant="contained">
            Search
          </GeoRulesSearchButton>
        </GeoRulesSearchBox>
      </GeoRulesSearchContainer>

      <GeoRulesList />
    </GeoRulesContainer>
  );
};

export default GeoRules;
