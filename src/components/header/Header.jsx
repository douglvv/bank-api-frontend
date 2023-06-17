import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import styles from './styles.module.css';

export default function Header(props) {
    return (
        <>
            <Navbar bg="light" expand="md" data-bs-theme="light">
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
                            <Button href="#" variant="custom-gray" className='mx-2'>Register</Button>
                            <Button href="#" variant="outline-orange" className='mx-2'>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
