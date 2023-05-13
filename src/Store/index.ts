import {combineReducers, configureStore} from "@reduxjs/toolkit";
import PopularSlice from "./Reducers/PopularSlice";
import ChildWork from "./Reducers/ChildWorkSlice";
import SearchReducer from "./Reducers/SearchSlice";
import FavoriteReducer from "./Reducers/FavoriteSlice";
import TopReducer from "./Reducers/TopReted";


const rootState = combineReducers({
    PopularSlice,
    ChildWork,
    SearchReducer,
    FavoriteReducer,
    TopReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootReducer = ReturnType<typeof rootState>
type appState = ReturnType<typeof setUpStore>
export type appDispatch = appState['dispatch']
