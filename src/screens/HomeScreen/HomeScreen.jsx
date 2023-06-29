import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Container, Button, Row, Col, Image } from 'react-bootstrap'
import homePageImg from '/img/home-page-img.png'
import styles from './styles.module.css'

export default function HomeScreen(props) {
    return (
        <>
            <Header />
            <Container className='vh-100'>
                <Row className='d-flex justify-content-center align-items-center m-3'>
                    <Col lg={5}>
                        <h1 className='fs-3 text-light mb-3'>Discover a Better Banking Experience</h1>
                        <h4 className='fs-5 text-light mb-3'>Experience the convenience, security, and personalized service of our bank. Join today and start managing your finances with ease.</h4>
                        <div className="text-center">
                            <Button variant="orange" size="lg" as='a' href='/register' >Create an account</Button>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Image src={homePageImg} className={styles.dropShadow} rounded fluid />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}