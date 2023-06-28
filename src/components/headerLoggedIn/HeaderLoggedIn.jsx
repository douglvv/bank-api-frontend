import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import imgLogo from '/img/logo.png'
import { BsPersonFillGear, BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/authSlice';

export default function HeaderLoggedIn(props) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

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
                        className="justify-content-end"
                        id="navbar-nav"
                    >
                        <Nav variant='underline'>
                            <NavDropdown
                                menuVariant="light"
                                title={
                                    <>
                                        <BsPersonCircle /> {props.account.name}
                                    </>
                                }
                            >
                                <NavDropdown.Item href="/account/edit">
                                    <BsPersonFillGear /> Settings
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Button} onClick={handleLogout} >
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
