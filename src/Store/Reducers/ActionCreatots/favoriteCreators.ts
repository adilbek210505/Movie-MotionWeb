import {appDispatch} from "../../index";
import {addToFavorite} from "../FavoriteSlice";


export const addToFavoriteREC = (el: any) => (dispatch: appDispatch) => {
    const fav: any = localStorage.getItem("favorite")
    let task = JSON.parse(fav) || []
    const fount = task.find((e: any) => e.id === el.id)
    if (fount) {
        task = task.filter((e: any) => e.id !== el.id)
    } else {
        task = [...task, {...el}]
    }
    localStorage.setItem("favorite", JSON.stringify(task))
    dispatch(addToFavorite(el))
}

