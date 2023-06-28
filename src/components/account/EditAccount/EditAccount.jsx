import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import styles from './styles.module.css';
import EditAccountForm from "../EditAccountForm/EditAccountForm";
import EditPasswordForm from "../EditPasswordForm/EditPasswordForm";
import { useDispatch } from "react-redux";
import { logout } from "../../../auth/authSlice"
import { BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";


export default function EditAccount(props) {
    const [activeKey, setActiveKey] = useState('personal')
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    const renderContent = () => {
        return activeKey === 'personal' ? (
            <EditAccountForm account={props.account} />
        ) : activeKey === 'password' ? (
            <EditPasswordForm account={props.account} />
        ) : null;
    };

    return (
        <>
            <Container fluid="sm" className="d-flex justify-content-center align-items-center">

                <Row as={'div'} className={`m-3 ${styles.wrapperAccount}`}>
                    <h4 className="text-center">Account Settings</h4>

                    <Col sm={4} className={`${styles.wrapperNav} bg-dark text-white p-3`}>
                        <h5 className="text-center">{props.account.name}</h5>

                        <div className="d-grid gap-2">
                            <Button variant="secondary" onClick={() => setActiveKey("personal")}>
                                <BsPersonCircle /> Personal Info
                            </Button>
                            <Button variant="secondary" onClick={() => setActiveKey("password")}>
                                <RiLockPasswordLine /> Password
                            </Button>
                            <Button variant="secondary" onClick={handleLogout}>
                                <BsBoxArrowRight /> Logout
                            </Button>
                        </div>
                    </Col>
                    <Col sm={8} className={`${styles.wrapperContent} bg-light text-orange p-3`}>
                        {renderContent()}
                    </Col>
                </Row>


            </Container>
        </>
    )


}