import React from "react"
import { Row, Col, Button, Card } from "react-bootstrap";
import styles from './styles.module.css'
import { RiBillLine } from 'react-icons/ri'
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi'
import { BiTransfer } from 'react-icons/bi'

export default function MainScreenActions(props) {

    return (
        <>

            <Row>
                <h4 className="mb-3" >Actions</h4 >
                <Col sm className="mb-3">
                    <Card bg="dark" text="white" className="m2 p-2 text-center">                        
                        <Card.Title className={`${styles.actionIcon} bg-secondary icon-lg`}>
                            <RiBillLine />
                        </Card.Title>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="orange" href="/account/statement">
                                    Check Statement
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm className="mb-3">
                    <Card bg="dark" text="white" className="m2 p-2 text-center">                        
                        <Card.Title className={`${styles.actionIcon} bg-secondary icon-lg`}>
                            <GiReceiveMoney />
                        </Card.Title>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="orange" href="/account/withdraw">
                                    Withdraw
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm className="mb-3">
                     <Card bg="dark" text="white" className="m2 p-2 text-center">                        
                        <Card.Title className={`${styles.actionIcon} bg-secondary icon-lg`}>
                            <GiPayMoney />
                        </Card.Title>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="orange" href="/account/deposit">
                                    Deposit
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm className="mb-3">
                     <Card bg="dark" text="white" className="m2 p-2 text-center">                        
                        <Card.Title className={`${styles.actionIcon} bg-secondary icon-lg`}>
                            <BiTransfer />
                        </Card.Title>
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="orange" href="/account/transfer">
                                    Transfer
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}