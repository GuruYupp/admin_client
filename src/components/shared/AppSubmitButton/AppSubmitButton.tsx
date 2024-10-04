import styled from '@mui/material/styles/styled'
import Button,{ButtonProps} from '@mui/material/Button'
import { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from 'react'

const StyledButton = styled(Button)(({})=>({}))



const ForwardRefAppSubmitButton:ForwardRefRenderFunction<HTMLButtonElement, PropsWithChildren<ButtonProps>> = (props,buttonRef) => {
  return (
    <StyledButton {...props} variant="contained" ref={buttonRef}>
        {props.children}
    </StyledButton>
  )
}

const AppSubmitButton = forwardRef(ForwardRefAppSubmitButton)

export default AppSubmitButton