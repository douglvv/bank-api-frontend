import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';

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
                        <Nav className="ms-auto">
                            <Button href="#" variant="secondary" className='mx-1'>Register</Button>
                            <Button href="#" variant="orange" className='mx-1'>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
