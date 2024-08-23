import React from 'react';
import './App.css';
import {Outlet, useLocation} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import homeImage from './preview.png';

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div>
            <HeaderComponent/>
            {isHomePage &&
                <div className={'preview-container'}>
                    <img src={homeImage} alt="Home Page Image" className="home-image"/>
                </div>}
            <Outlet/>
        </div>
    );
}

export default App;
