import React from "react";
import { useSelector } from 'react-redux';

export default function AccountScreen(){
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const token = useSelector((state) => state.auth.token);
    const account = useSelector((state) => state.auth.account);
    
    return(
        <div>
            <h1>Account Screen</h1>
            <p>{JSON.stringify(isLoggedIn)}</p>
            <p>{JSON.stringify(token)}</p>
            <p>{JSON.stringify(account)}</p>
        </div>
    )
}