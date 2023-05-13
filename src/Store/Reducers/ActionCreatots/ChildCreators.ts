import {appDispatch} from "../../index";
import {getMode, getSelected, getValue, upDateMovie} from "../ChildWorkSlice";

export const getValueREC = (value: string) => (dispatch: appDispatch) => {
    dispatch(getValue(value))
}
export const upDateMode = (mode: boolean) => (dispatch: appDispatch) => {
    dispatch(getMode(mode))
}

export const getSelectedREC = (value: string) => (dispatch: appDispatch) => {
    dispatch(getSelected(value))
}

export const upDateMovieREC = (mode: boolean) => (dispatch: appDispatch) => {
    dispatch(upDateMovie(mode))
}