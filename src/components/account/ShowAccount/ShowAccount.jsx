import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import logout from '../../../auth/authSlice'
import AccountBalanceCard from "../AccountBalanceCard/AccountBalanceCard";
import MainScreenActions from "../../mainScreenActions/MainScreenActions";

export default function ShowAccount(props) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <Container fluid='sm'>
                <AccountBalanceCard account={props.account} />
                <hr />
                <MainScreenActions />
            </Container>
        </>
    )
}