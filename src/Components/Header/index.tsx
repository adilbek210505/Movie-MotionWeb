import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../img/logo.jpg"
import {BiSearchAlt} from "react-icons/bi";
import {useAppDispatch, useAppSelector} from "../../Hooks";
import {getSelectedREC, upDateMode} from "../../Store/Reducers/ActionCreatots/ChildCreators";
const Header = () => {
    const dispatch = useAppDispatch()
    const {mode} = useAppSelector(s => s.ChildWork)
    const {favorite} = useAppSelector(s => s.FavoriteReducer)
    const navigate = useNavigate()

    return (
        <div className="flex my-5 left-[15%]  fixed z-50 -top-2 bg-black/50 text-white px-10  py-2 rounded justify-between w-[70%] font-bold text-lg items-center">
            <Link to={"/"}>
                <img src={logo} alt="" className="rounded w-[70px]"/>
            </Link>
            <div className="flex items-center justify-between w-[150px]">
                <Link to={"/"} className="hover:text-blue-500">
                    main
                </Link>
                <Link to={"/favorite"} className="relative hover:text-blue-500">
                    <h1 style={{display: favorite.length === 0 ? "none" : "flex"}}  className="absolute right-0 -top-4 text-[13px] border-3 rounded-2xl w-[20px] h-[20px] bg-blue-500 flex items-center justify-center">{favorite.length}</h1>
                    favorite
                </Link>
            </div>
            <select name="" id="" onChange={(e) => dispatch(getSelectedREC(e.target.value))} className="bg-transparent text-blue-500">
                <option selected={true} value="en-US">en</option>
                <option value="ru-RU">ru</option>
            </select>
            <div>
                <button onClick={() => dispatch(upDateMode(!mode))} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2  text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">mode</button>
            </div>
            <button onClick={() => navigate("/search")}><BiSearchAlt className="font-bold text-2xl hover:text-blue-500"/></button>
        </div>
    );
};

export default Header;