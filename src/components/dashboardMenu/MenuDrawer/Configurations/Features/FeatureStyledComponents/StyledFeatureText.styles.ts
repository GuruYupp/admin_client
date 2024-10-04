import { ListItemText, styled } from "@mui/material";


const StyledFeatureText = styled(ListItemText)(()=>({
    '& .MuiTypography-root': {
        fontSize: '0.8rem', // Set your desired font size here
    },
})) as typeof ListItemText

export default StyledFeatureText 