import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './styles.module.css'

export default function Header(props) {
    return (
        <>
            <Navbar bg="light" expand="lg" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            src="/img/logo.png"
                            className={`${styles.imgBrand} d-inline-block align-top`}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Create Account</Nav.Link>
                            <Nav.Link href='#'>Login</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

