import { adminLoginUserDetailsInterface } from "@/global.types";
import { getAllPortalsData, readFromLocalStorage, saveToLocalStorage } from "@/services/utils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface intialLoginState{
    isLoggedin:boolean;
    userDetails:adminLoginUserDetailsInterface | undefined;
    portals:string[];
    isMasteruser:boolean;
    isSuperuser:boolean;
    features:adminLoginUserDetailsInterface["features"][0]["code"][]
}

const initialState:intialLoginState={
    isLoggedin:false,
    userDetails:undefined,
    portals:[],
    isMasteruser:false,
    isSuperuser:false,
    features:[]
}

const authSlice = createSlice({
    name:"authReducer",
    initialState,
    reducers:{
        loginVerify:(state)=>{
            const isLoggedin = readFromLocalStorage("isLoggedin")
            if(isLoggedin === "true"){
                const userDetails = readFromLocalStorage("userDetails")
                state.isLoggedin = true;
                if(userDetails){
                    state.userDetails = JSON.parse(userDetails)

                    state.userDetails?.roles.map((role)=>{
                        if(role.code === 'master_user')state.isMasteruser=true;
                        else if(role.code === 'superuser')state.isSuperuser = true;
                   })

                   if(state.isSuperuser){
                    state.portals = Object.keys(getAllPortalsData())
                   }else{
                    state.userDetails?.portals.map((portal)=>{
                        state.portals.push(portal.code)
                    })
                }

                    

                    state.userDetails?.features.map((feature)=>{
                        state.features.push(feature.code);
                    })
                }

                
            }
        },
        UserLoginData:(state,action:PayloadAction<intialLoginState["userDetails"]>)=>{
            const userDetails = action.payload;
            state.isLoggedin = true;
            state.userDetails = userDetails;
            saveToLocalStorage("isLoggedin","true");
            saveToLocalStorage("userDetails",JSON.stringify(userDetails))
        },
    }
})
export const {loginVerify,UserLoginData} = authSlice.actions
export default authSlice.reducer