import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFavoriteState} from "../../Types/FavoriteTypes";
import {IPopular} from "../../Types/PopularType";

const  initialState: IFavoriteState = {
    favorite: []
}
export const FavoriteReducer = createSlice({
    name: "FAVORITE",
    initialState,
    reducers: {
        addToFavorite(state,action: PayloadAction<IPopular>) {
            const fount = state.favorite.find(el => el.id === action.payload.id)
            if (fount) {
                state.favorite = state.favorite.filter(el => el.id !== fount.id)
            } else {
                state.favorite = [...state.favorite, {...action.payload}]
            }
        }
    }
})

export default FavoriteReducer.reducer
export const {addToFavorite} = FavoriteReducer.actions