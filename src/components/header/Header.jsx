import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';
import imgLogo from '/img/logo.png'

export default function Header(props) {
    return (
        <>
            <Navbar bg="light" expand="sm" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={imgLogo}
                            className={`${styles.imgBrand} d-inline-block align-top`}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Button href="/register" variant="custom-gray" className='mx-2'>Register</Button>
                            <Button href="/login" variant="outline-orange" className='mx-2'>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
