import styled from "@mui/material/styles/styled"
import TextField ,{TextFieldProps} from "@mui/material/TextField";
import {  forwardRef, ForwardRefRenderFunction } from "react";

const StyledTextField = styled(TextField)(({theme})=>({
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: theme.palette.primary.main, // Using theme color
        },
      },
}))

const  ForwardRefAppTextField:ForwardRefRenderFunction<HTMLInputElement,TextFieldProps> = (props,inputRef) => {
  return (
   <StyledTextField {...props} variant="outlined" inputRef={inputRef}/>
  )
}

const AppTextField = forwardRef(ForwardRefAppTextField)

export default AppTextField