import { React, useEffect } from "react";
import HeaderLoggedIn from '../../components/headerLoggedIn/HeaderLoggedIn';
import ShowAccount from "../../components/account/ShowAccount";
import { useSelector } from "react-redux";
import AccountService from "../../services/accounts";

export default function AccountScreen() {
  const account = useSelector((state) => state.auth.account);
  
  const fetchAccount = async () => {
      await AccountService.showAccount(account._id);
  };

  useEffect(() => {
    fetchAccount();
  }, []); // Colocar account para update infinito

  return (
    <>
      <HeaderLoggedIn accountName={account.name} />
      <ShowAccount account={account} />
    </>
  )
}