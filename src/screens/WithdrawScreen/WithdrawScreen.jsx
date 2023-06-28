import React from 'react';
import HeaderLoggedIn from '../../components/headerLoggedIn/HeaderLoggedIn';
import WithdrawForm from '../../components/account/WithdrawForm/WithdrawForm';
import { Container, Card, Row, Col } from 'react-bootstrap';
import imgLogo from '/img/logo.png'
import styles from './styles.module.css'
import { useSelector } from "react-redux";

export default function WithdrawScreen(props) {
    const account = useSelector((state) => state.auth.account);

    return (
        <>
            <HeaderLoggedIn account={account} />
            <Container>
                <Row className='d-flex justify-content-center align-items-center m-3'>
                    <Col lg={3}>
                        <Card bg='light' className='align-items-center'>
                            <Card.Img variant="top" src={imgLogo} as={'img'} className={styles.cardImg} />
                            <Card.Subtitle className="mb-2 text-muted">Withdraw</Card.Subtitle>
                            <WithdrawForm account={account} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}