import React from 'react';
import {useAppSelector} from "../../Hooks";

const Search = () => {
    const {search} = useAppSelector(s => s.SearchReducer)

    return (
        <div className="flex items-center flex-wrap justify-between">
            {
                search.map(el => (
                    <div>
                        <div key={el.id} className="p-4 w-[250px] cursor-pointer">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h1>{el.title}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Search;