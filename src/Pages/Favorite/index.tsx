import React from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {addToFavoriteREC} from "../../Store/Reducers/ActionCreatots/favoriteCreators";
import {useNavigate} from "react-router-dom";

const Favorite = () => {
    const dispatch = useAppDispatch()
    const {favorite} = useAppSelector(s => s.FavoriteReducer)
    const navigate = useNavigate()
    return (
        <div className="flex items-center flex-wrap justify-evenly py-32">
            {
                favorite.map(el => (
                        <div key={el.id} className="p-4 cursor-pointer">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h1 className="py-4">{el.title}</h1>
                            <button type="button" onClick={() => dispatch(addToFavoriteREC(el))} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Delete favorite
                            </button>
                        </div>
                ))
            }
            {
                favorite.length === 0 &&
                <div onClick={() => navigate("/")} className="text-4xl font-bold border-2 bg-black/50 w-[70%] flex items-center justify-center cursor-pointer h-[100px]">
                    open main
                </div>
            }

        </div>
    );
};

export default Favorite;