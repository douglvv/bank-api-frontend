import AccountService from "../../../services/accounts";
import { React, useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import styles from './styles.module.css'

export default function ShowStatement(props) {
    const [statement, setStatement] = useState([]);

    const fetchStatement = async () => {
        const statement = await AccountService.showStatement(props.account._id);
        setStatement(statement);
    };

    useEffect(() => {
        fetchStatement();
    }, [props.account]);

    return (
        <>
            <Container fluid="sm">
                <h3 className="text-center">Statement</h3>
                {statement.slice().reverse().map((transaction) => (
                    <Row as="div" key={transaction._id}>
                        <Col sm={16}>
                            <Card className={`${styles.wrapper}`} bg="dark" text="orange">
                                <Card.Header className="text-light">Transaction id: {transaction._id}</Card.Header>
                                <Card.Body>
                                    <ListGroup horizontal="sm">
                                        <ListGroup.Item className="customListItem">Type: {transaction.type}</ListGroup.Item>
                                        <ListGroup.Item className="customListItem">Value: R$ {transaction.value}</ListGroup.Item>
                                        {transaction.participants.payer && (
                                            <ListGroup.Item className="customListItem">Payer: {transaction.participants.payer.name}</ListGroup.Item>
                                        )}
                                        <ListGroup.Item className="customListItem">Receiver: {transaction.participants.receiver.name}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}

            </Container>
        </>
    )

}