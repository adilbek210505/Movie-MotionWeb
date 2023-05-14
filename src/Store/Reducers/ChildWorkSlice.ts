import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IChildWorkState} from "../../Types/ChildWorkTypes";


const modes: any = localStorage.getItem("mode")
const values: any = localStorage.getItem("value")
const initialState: IChildWorkState = {
    value: "",
    mode: JSON.parse(modes) || false,
    language:  JSON.parse(values) || "en-US",
    upDate: false
}

export const ChildWork = createSlice({
    name: "CHILD",
    initialState,
    reducers: {
        getValue(state,action: PayloadAction<string>) {
            state.value = action.payload
        },
        getMode(state,{payload}: PayloadAction<boolean>) {
            state.mode = payload
        },
        getSelected(state,{payload}: PayloadAction<string>) {
            state.language = payload
        },
        upDateMovie(state,action: PayloadAction<boolean>) {
            state.upDate = action.payload
        }
     }
})

export const {upDateMovie,getValue,getMode,getSelected} = ChildWork.actions
export default ChildWork.reducer