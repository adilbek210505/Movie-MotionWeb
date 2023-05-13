import {appDispatch} from "../../index";
import axios from "axios";
import {getPopular, getPopularError, getPopularSuccess} from "../PopularSlice";
import {APIKEY} from "../../../APIKEY";


export const fetchPopular = (lan: string) => async (dispatch: appDispatch) => {
    try {
        dispatch(getPopular())
        const url = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lan}&page=1`)
        const {data} = await url
        dispatch(getPopularSuccess(data.results))
    } catch (e) {
        dispatch(getPopularError("Error..."))
    }
}