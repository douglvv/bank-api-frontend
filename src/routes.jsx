import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen/HomeScreen";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={HomeScreen} /> 
            </Routes>
        </BrowserRouter>
    )
}