import React from 'react';
import Header from '../../components/header/Header';
import LoginForm from '../../components/loginForm/LoginForm';
import { Container, Card, Row, Col } from 'react-bootstrap';
import imgLogo from '/img/logo.png'
import styles from './styles.module.css'

export default function LoginScreen(props) {
    return (
        <>
            <Header />
            <Container>
                <Row className='d-flex justify-content-center align-items-center m-3'>
                    <Col lg={3}>
                        <Card bg='light' className='align-items-center'>
                            <Card.Img variant="top" src={imgLogo} as={'img'} className={styles.cardImg} />
                            <Card.Subtitle className="mb-2 text-muted">Log-in to Bankly</Card.Subtitle>
                            <LoginForm />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}