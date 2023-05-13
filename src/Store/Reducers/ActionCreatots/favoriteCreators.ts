import {appDispatch} from "../../index";
import {addToFavorite} from "../FavoriteSlice";


export const addToFavoriteREC = (el: any) => (dispatch: appDispatch) => {
    dispatch(addToFavorite(el))
}

