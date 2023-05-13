import {appDispatch} from "../../index";
import axios from "axios";
import {APIKEY} from "../../../APIKEY";
import {getTop, getTopError, getTopSuccess} from "../TopReted";


export const fetchTop = (lan: string) => async (dispatch: appDispatch) => {
    try {
        dispatch(getTop())
        const url = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${lan}&page=1`)
        const {data} = await url
        dispatch(getTopSuccess(data.results))
    } catch (e) {
        dispatch(getTopError("Error..."))
    }
}