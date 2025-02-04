import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import PlatformLanguages from './PlatformLanguages';
import DisplayLanguages from './DisplayLanguages';

const LanguagesContainer = styled(Box)(() => ({})) as typeof Box;

const LanguagesHeaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
})) as typeof Box;

const LanguagesBodyContainer = styled(Box)(({ theme }) => ({
  padding: '18px',
  borderColor: theme.palette.background.default,
  borderWidth: '1px',
})) as typeof Box;

interface LanguageButtonProps extends ButtonProps {
  'custom-isActive'?: boolean;
}

const shouldForwardProp = (
  prop: LanguageButtonProps[keyof LanguageButtonProps],
) => !prop.startsWith('custom');

const LanguageButton = styled(Button, {
  shouldForwardProp,
})<LanguageButtonProps>(({ 'custom-isActive': isActive }) => ({
  backgroundColor: '#fff',
  marginLeft: '20px',
  borderRadius: '0px',
  textTransform: 'capitalize',
  ...(isActive
    ? {
        boxShadow: '0 -1px 0 1px #fde9e9',
      }
    : {
        color: '#000',
      }),
})) as typeof Button;

const LanguagesTopContainer = styled(Paper)(({}) => ({
  padding: '.75rem 1.25rem',
  borderBottomLeftRadius: '0px',
  borderBottomRightRadius: '0px',
})) as typeof Paper;

const LanguagesTableContainer = styled(Paper)(({}) => ({
  padding: '.75rem 1.25rem',
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
})) as typeof Paper;

const Languages = () => {
  const [langtype, setLangType] = useState<'platformLang' | 'displayLang'>(
    'platformLang',
  );

  const langBtnhandler = (type: typeof langtype) => {
    setLangType(type);
  };

  return (
    <LanguagesContainer>
      <LanguagesHeaderContainer>
        <LanguageButton
          custom-isActive={langtype === 'platformLang'}
          onClick={() => langBtnhandler('platformLang')}>
          Platform Languages
        </LanguageButton>
        <LanguageButton
          custom-isActive={langtype === 'displayLang'}
          onClick={() => langBtnhandler('displayLang')}>
          Display Languages
        </LanguageButton>
      </LanguagesHeaderContainer>
      <LanguagesBodyContainer>
        <LanguagesTopContainer>
          <Typography>
            {langtype === 'platformLang' ? `Platform` : 'Display'} Languages
          </Typography>
        </LanguagesTopContainer>
        <LanguagesTableContainer>
          {langtype === 'platformLang' ? (
            <PlatformLanguages />
          ) : (
            <DisplayLanguages />
          )}
        </LanguagesTableContainer>
      </LanguagesBodyContainer>
    </LanguagesContainer>
  );
};

export default Languages;
