import {appDispatch} from "../../index";
import {getMode, getSelected, getValue, upDateMovie} from "../ChildWorkSlice";

export const getValueREC = (value: string) => (dispatch: appDispatch) => {
    dispatch(getValue(value))
}
export const upDateMode = (mode: boolean) => (dispatch: appDispatch) => {
    const modes: any = localStorage.getItem("mode")
    let task = JSON.parse(modes)
    task = mode
    localStorage.setItem("mode", JSON.stringify(task))
    dispatch(getMode(mode))
}

export const getSelectedREC = (value: string) => (dispatch: appDispatch) => {
    const values: any = localStorage.getItem("value")
    let name = JSON.parse(values) || ""
    name = value
    localStorage.setItem("value", JSON.stringify(name))
    dispatch(getSelected(value))
}

export const upDateMovieREC = (mode: boolean) => (dispatch: appDispatch) => {
    dispatch(upDateMovie(mode))
}