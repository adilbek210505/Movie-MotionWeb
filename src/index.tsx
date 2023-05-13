import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from "./Layout";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setUpStore} from "./Store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={setUpStore()}>
            <Layout>
                <App/>
            </Layout>
        </Provider>
    </BrowserRouter>
)