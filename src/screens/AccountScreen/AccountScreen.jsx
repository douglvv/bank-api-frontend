import React from "react";
import HeaderLoggedIn from '../../components/headerLoggedIn/HeaderLoggedIn';
import { useSelector } from "react-redux";

export default function AccountScreen(){
    const account = useSelector((state) => state.auth.account);
    return(
        <>
            <HeaderLoggedIn accountName={account.name} />
            <h1>Account Screen</h1>
        </>
    )
}