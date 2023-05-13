import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPopular, IPopularState} from "../../Types/PopularType";


const  initialState: IPopularState = {
    popular: [],
    loader: false,
    error: ""
}

export const PopularSlice = createSlice({
    name: "POPULAR",
    initialState,
    reducers: {
        getPopular(state) {
            state.loader = true
        },
        getPopularSuccess(state,action: PayloadAction<IPopular[]>) {
            state.loader = false
            state.popular = action.payload
            state.error = ""
        },
        getPopularError(state,action: PayloadAction<string>) {
            state.error = action.payload
            state.loader = false
            state.popular = []
        }
    }
})

export const {getPopular,getPopularSuccess,getPopularError} = PopularSlice.actions
export default PopularSlice.reducer