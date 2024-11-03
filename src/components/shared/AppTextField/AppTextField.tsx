import styled from '@mui/material/styles/styled';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface AppTextFieldPropsInterface {
  withClearProps?: {
    clearHandler: () => void;
  };
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main, // Using theme color
    },
  },
}));

const ForwardRefAppTextField: ForwardRefRenderFunction<
  HTMLInputElement,
  TextFieldProps & AppTextFieldPropsInterface
> = (props, inputRef) => {
  return (
    <StyledTextField
      {...props}
      variant="outlined"
      slotProps={{
        ...(props.withClearProps && {
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear text"
                  onClick={props.withClearProps.clearHandler}
                  edge="end">
                  <CancelIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }),
      }}
      inputRef={inputRef}
    />
  );
};

const AppTextField = forwardRef(ForwardRefAppTextField);

export default AppTextField;
