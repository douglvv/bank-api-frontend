import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import imgLogo from '/img/logo.png'
import { BsPersonFillGear, BsBoxArrowRight, BsPersonCircle, BsBoxArrowInDownRight, BsWallet2 } from "react-icons/bs";
import { BiMoneyWithdraw, BiTransfer } from 'react-icons/bi'

export default function Header(props) {
    return (
        <>
            <Navbar bg="light" expand="sm" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/account">
                        <img
                            src={imgLogo}
                            className={`${styles.imgBrand} d-inline-block align-top`}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse
                        className="justify-content-between"
                        id="navbar-nav"
                    >
                        <Nav variant='underline'>
                            <Nav.Link href="#">
                                <BsWallet2 /> Account
                            </Nav.Link>
                            <Nav.Link href="#">
                                <BsBoxArrowInDownRight /> Deposit
                            </Nav.Link>
                            <Nav.Link href="#">
                                <BiMoneyWithdraw /> Withdraw
                            </Nav.Link>
                            <Nav.Link href="#">
                                <BiTransfer /> Transfer
                            </Nav.Link>

                            <NavDropdown
                                menuVariant="light"
                                title={
                                    <>
                                        <BsPersonCircle /> {props.accountName}
                                    </>
                                }
                            >
                                <NavDropdown.Item href="#">
                                    <BsPersonFillGear /> Settings
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    <BsBoxArrowRight /> Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
