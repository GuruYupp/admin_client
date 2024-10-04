import {  styled } from "@mui/material";
import List from "@mui/material/List"

const StyledFeatureList = styled(List)(()=>({
    width:"100%",
    paddingTop:"0px",
})) as typeof List

export default StyledFeatureList;