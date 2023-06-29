import React from "react"
import { Row, Col, Button, Card } from "react-bootstrap";
import styles from './styles.module.css'
import { RiBillLine } from 'react-icons/ri'

export default function MainScreenActions(props) {

    return (
        <>

            <Row>
                <h4 className="mb-3" >Actions</h4 >
                <Col sm>
                    <Card bg="dark" text="white" className="m2 p-2 text-center">                        
                        <Card.Title className={`${styles.actionIcon} bg-secondary`}>
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
                <Col sm>
                    <Button size="lg" href="/account/withdraw">
                        Withdraw
                    </Button>
                </Col>
                <Col sm>
                    <Button size="lg" href="/account/deposit">
                        Deposit
                    </Button>
                </Col>
                <Col sm>
                    <Button size="lg" href="/account/transfer">
                        Transfer
                    </Button>
                </Col>
            </Row>
        </>
    )
}