import React from 'react';
import Header from "../Components/Header";


interface ILayout {
    children: any
}
const Layout = ({children}: ILayout) => {
    return (
        <div className={"containers"}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;