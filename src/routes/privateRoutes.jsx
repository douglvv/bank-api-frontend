import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    );
};

export default PrivateRoutes;
 