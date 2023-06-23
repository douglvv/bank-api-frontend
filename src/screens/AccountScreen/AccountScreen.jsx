import { React, useEffect } from "react";
import HeaderLoggedIn from '../../components/headerLoggedIn/HeaderLoggedIn';
import ShowAccount from "../../components/account/ShowAccount";
import { useSelector } from "react-redux";
import AccountService from "../../services/accounts";

export default function AccountScreen() {
    const account = useSelector((state) => state.auth.account);

    useEffect(() => {
        const fetchAccount = async () => {
          if (account) {
            await AccountService.showAccount(account._id);
          }
        };
        fetchAccount();
      }, [account]);
    
    return (
        <>
            <HeaderLoggedIn accountName={account.name} />
            <ShowAccount account={account} />
        </>
    )
}