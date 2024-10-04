import styled from "@mui/material/styles/styled";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {  ForwardRefRenderFunction, forwardRef, useState } from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main, // Using theme color
    },
  },
}));

type AppPasswordFieldExtrapropTypes = {
    disableVisibleToggle?:boolean
}

const ForwardRefAppPasswordField: ForwardRefRenderFunction<HTMLInputElement,TextFieldProps & AppPasswordFieldExtrapropTypes> = (props,inputRef) => {
  const {disableVisibleToggle=false} =props
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    if(disableVisibleToggle) return;
    setShowPassword(!showPassword);
  };

  return (
    <StyledTextField
      {...props}
      variant="outlined"
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            !disableVisibleToggle && <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      autoComplete=""
      inputRef={inputRef}
    />
  );
};

const AppPasswordField = forwardRef(ForwardRefAppPasswordField)

export default AppPasswordField;
