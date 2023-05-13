import React from 'react';
import {fetchSearchMovie} from "../../Store/Reducers/ActionCreatots/searchCreators";
import Search from "../Search";
import {useAppDispatch, useAppSelector} from "../../Hooks";

const HeaderSearch = () => {
    const dispatch = useAppDispatch()
    const {search} = useAppSelector(s => s.SearchReducer)



    return (
        <div style={{
            background: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/${search.map(el => el.backdrop_path)}") no-repeat center/cover`
        }}>
            <div className="py-20">
                <input onChange={(e) => dispatch(fetchSearchMovie(e.target.value))} type="search"
                       className="block my-10 w-[90%] mx-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search"/>
                <Search/>
            </div>
        </div>
    );
};

export default HeaderSearch;