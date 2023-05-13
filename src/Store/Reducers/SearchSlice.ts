import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearchTypeState} from "../../Types/SearchType";

const  initialState: ISearchTypeState = {
    search: []
}

export const SearchReducer = createSlice({
    name: "SEARCH",
    initialState,
    reducers: {
        getSearch(state,action: PayloadAction<any>) {
            state.search = action.payload
        }
    }
})


export default SearchReducer.reducer
export const {getSearch} = SearchReducer.actions
