import React from "react";
import { Container, Nav, Col, Row } from "react-bootstrap";
import styles from './styles.module.css';
import EditAccountForm from "../EditAccountForm/EditAccountForm";
import { useDispatch } from "react-redux";

export default function EditAccount(props) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <Container fluid="sm" className="d-flex justify-content-center align-items-center">

                <Row as={'div'} className={`m-3 ${styles.wrapper}`}>
                    <h4 className="text-center">Account Settings</h4>
                    <Col sm={4} className={`${styles.wrapperNav} bg-dark text-white p-3`}>
                        <h5 className="text-center">{props.account.name}</h5>
                        <Nav fill justify variant="underline" defaultActiveKey={'personal'} className="flex-sm-column">
                            <Nav.Link className="text-white" eventKey={'personal'}>Personal Info</Nav.Link>
                            <Nav.Link className="text-white" eventKey={'cancel'}>Password</Nav.Link>
                            <Nav.Link className="text-white" eventKey={'logout'} onClick={handleLogout}>Logout</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={8} className={`${styles.wrapperContent} bg-light text-orange p-3`}>
                        <EditAccountForm account={props.account} />
                    </Col>
                </Row>


            </Container>
        </>
    )


}