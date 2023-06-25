import { React } from "react";
import HeaderLoggedIn from '../../components/headerLoggedIn/HeaderLoggedIn';
import EditAccount from "../../components/account/EditAccount/EditAccount";
import { useSelector } from "react-redux";

export default function EditAcountScreen() {
  const account = useSelector((state) => state.auth.account);

  return (
    <>
      <HeaderLoggedIn account={account} />
      <EditAccount account={account} />
    </>
  )
}