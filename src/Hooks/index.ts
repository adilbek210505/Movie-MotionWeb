import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootReducer} from "../Store";


// useAppSelector

export const useAppSelector: TypedUseSelectorHook<rootReducer> = useSelector

// useAppDispatch

export const useAppDispatch = () => useDispatch<appDispatch>()