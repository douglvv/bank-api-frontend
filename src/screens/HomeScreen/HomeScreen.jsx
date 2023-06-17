import React from 'react';
import Header from '../../components/header/Header';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function HomeScreen(props) {
    return (
        <>
            <Header />
            <Container fluid="md" cl>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col md={5}>
                        <h1 className='fs-2 text-light'>Lorem ipsum dolor sit amet consectetur</h1>
                        <h4 className='fs-5 text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis vitae, delectus nostrum nam non eveniet aliquid earum itaque, officia doloremque voluptatibus aperiam deleniti culpa id rem quos, ipsa ex quasi.</h4>
                    </Col>
                    <Col md={7}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}