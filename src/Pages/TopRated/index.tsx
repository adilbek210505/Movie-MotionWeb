import React, {useEffect} from 'react';
import Slider from "react-slick";
import {addToFavoriteREC} from "../../Store/Reducers/ActionCreatots/favoriteCreators";
import Search from "../Search";
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {fetchTop} from "../../Store/Reducers/ActionCreatots/TopRatedCreators";
import {BsCheckLg} from "react-icons/bs";
import {IPopular} from "../../Types/PopularType";

const TopRated = () => {
    const dispatch = useAppDispatch()
    const {top} = useAppSelector(s => s.TopReducer)
    const {language,upDate} = useAppSelector(s => s.ChildWork)
    const {favorite} = useAppSelector(s => s.FavoriteReducer)
    const fount = (el: IPopular) => favorite.some(e => e.id === el.id)

    useEffect(() => {
        dispatch(fetchTop(language))
    }, [language])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div style={{
            display: upDate ? "none" : "block"
        }}>
            <Search/>
            <Slider {...settings}>
                {
                    top.map(el => (
                        <div key={el.id} className="p-4 cursor-pointer">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                            <h1 className="py-4">{el.title}</h1>
                            <button onClick={() => dispatch(addToFavoriteREC(el))} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                {
                                    fount(el) ? <BsCheckLg/> :  "favorite"
                                }
                            </button>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default TopRated;