import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={HomeScreen} />
                <Route exact path="/register" Component={RegisterScreen} />
                <Route exact path="/login" Component={LoginScreen} />
            </Routes>
        </BrowserRouter>
    )
}