import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPopular} from "../../Types/PopularType";
import {ITopRatedTypes} from "../../Types/TopRetedTypes";


const  initialState: ITopRatedTypes = {
    top: [],
    loader: false,
    error: ""
}

export const TopReducer = createSlice({
    name: "TOP",
    initialState,
    reducers: {
        getTop(state) {
            state.loader = true
        },
        getTopSuccess(state,action: PayloadAction<IPopular[]>) {
            state.loader = false
            state.top = action.payload
            state.error = ""
        },
        getTopError(state,action: PayloadAction<string>) {
            state.error = action.payload
            state.loader = false
            state.top = []
        }
    }
})

export const {getTopSuccess,getTop,getTopError} = TopReducer.actions
export default TopReducer.reducer