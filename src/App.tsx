import React from 'react';
import {Route, Routes} from "react-router-dom";
import Popular from "./Pages/Popular";
import {useAppSelector} from "./Hooks";
import Favorite from "./Pages/Favorite";
import HeaderSearch from "./Pages/HeaderSearch";

const App = () => {
    const {mode} = useAppSelector(s => s.ChildWork)

    return (
        <div className={mode ? "text-white bg-black/50" : "bg-white text-black"}>
            <div className="containers">
                <Routes>
                    <Route path={"/"} element={<Popular/>}/>
                    <Route path={"/favorite"} element={<Favorite/>}/>
                    <Route path={"/search"} element={<HeaderSearch/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;