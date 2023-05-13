import {appDispatch} from "../../index";
import axios from "axios";
import {getSearch} from "../SearchSlice";
import {APIKEY} from "../../../APIKEY";


export const fetchSearchMovie = (value: string) => async (dispatch: appDispatch) => {
    const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${value}`)
    const {data} = await url
    dispatch(getSearch(data.results))
}