import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import imgLogo from '/img/logo.png'
import { BsPersonFillGear, BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";

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
                    <Navbar.Collapse className="justify-content-end" id="navbar-nav">
                        <Nav>
                            <NavDropdown
                                menuVariant="light"
                                title={
                                    <>
                                        <BsPersonCircle /> {props.accountName}
                                    </>
                                }
                            >
                                <NavDropdown.Item href="#"><BsPersonFillGear /> Edit account</NavDropdown.Item>
                                <NavDropdown.Item href="#"><BsBoxArrowRight /> Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
