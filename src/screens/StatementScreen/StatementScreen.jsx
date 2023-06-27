import { React } from "react";
import HeaderLoggedIn from '../../components/headerLoggedIn/HeaderLoggedIn';
import ShowStatement from "../../components/account/ShowStatement/ShowStatement";
import { useSelector } from "react-redux";

export default function StatementScreen() {
  const account = useSelector((state) => state.auth.account);

  return (
    <>
      <HeaderLoggedIn account={account} />
      <ShowStatement account={account} />
    </>
  )
}