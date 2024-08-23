import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

function App() {

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

export default App;
