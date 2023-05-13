import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {fetchPopular} from "../../Store/Reducers/ActionCreatots/PopularCrearor";
import Slider from "react-slick";
import Search from "../Search";
import {fetchSearchMovie} from "../../Store/Reducers/ActionCreatots/searchCreators";
import {addToFavoriteREC} from "../../Store/Reducers/ActionCreatots/favoriteCreators";
import TopRated from "../TopRated";
import {upDateMovieREC} from "../../Store/Reducers/ActionCreatots/ChildCreators";
import {BsCheckLg} from "react-icons/bs";
import {IPopular} from "../../Types/PopularType";

const Popular = () => {
    const dispatch = useAppDispatch()
    const {popular, error, loader} = useAppSelector(s => s.PopularSlice)
    const {language, upDate,mode} = useAppSelector(s => s.ChildWork)
    const {search} = useAppSelector(s => s.SearchReducer)
    const {favorite} = useAppSelector(s => s.FavoriteReducer)
    const fount = (el: IPopular) => favorite.some(e => e.id === el.id)

    useEffect(() => {
        dispatch(fetchPopular(language))
    }, [language])

    if (loader) {
        return <h2 className="w-full h-[1000px] text-5xl font-bold flex justify-center items-center">Loading...</h2>
    }
    if (error) {
        return <h2 className="w-full h-[1000px] text-5xl font-bold flex justify-center items-center">{error}</h2>
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    const Settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const state = Math.floor(Math.random() * 20)

    const lang = (lan: string ,text: string, xl: string | number) => {
        if (lan === language) {
            return <h1 className={`text-${xl}xl font-bold py-2 text-white px-10`}>{text}</h1>
        }
    }

    return (
        <div>
            <div className="w-full h-[400px] flex flex-col justify-end" style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/${popular.map(el => el.backdrop_path)[state]}") no-repeat center/cover`}}>
                {lang("en-US", "Welcome.", "5")}
                {lang("en-US", "Millions of movies, TV shows and people", "2")}
                {lang("ru-RU", "", "")}
                {lang("ru-RU", "", "")}
                <input onChange={(e) => dispatch(fetchSearchMovie(e.target.value))} type="search" className="block mb-10 mt-5 w-[90%] mx-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"/>
            </div>
            <div className="py-7 px-5 relative">
                <button onClick={() => dispatch(upDateMovieREC(!upDate))} className={`w-[160px] h-[35px] border-2 ${mode ? "border-white" : "border-black"} rounded-lg`}>
                    <span  className={`absolute p-1 font-mono rounded-lg transition-shadow bg-blue-500 ${upDate ? "left-[21px] transition-shadow " : "left-[110px] transition-shadow"}  top-[30px]`}>
                       {
                           upDate ? "top Rated" : "popular"
                       }
                    </span>
                </button>
            </div>
            <Search/>
            {
                search.length === 0 &&
                <TopRated/>
            }
            <div style={{display: upDate ? "block" : "none",}} className="flex-wrap flex">
                {
                    search.length === 0 &&
                    <Slider {...Settings}>
                        {
                            popular.map(el => (
                                <div key={el.id} className="p-4 cursor-pointer">
                                    <img title={el.title} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                         alt=""/>
                                    <h1 title={el.title} className="py-4">{el.title}</h1>
                                    <button onClick={() => dispatch(addToFavoriteREC(el))} type="button"
                                            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            {
                                                fount(el) ? <BsCheckLg/> :  "favorite"
                                            }
                                    </button>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>
        </div>
    );
};

export default Popular;