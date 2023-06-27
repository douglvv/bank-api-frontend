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
                <h4 className="text-center">Statement</h4>
                {statement.map((transaction) => (
                    <>
                        <Row as={"div"}>
                            <Col sm={16} className={`${styles.wrapper}`}>
                                <Card key={transaction._id}>
                                    <Card.Header>Transaction id: {transaction._id}</Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Type: {transaction.type}</ListGroup.Item>
                                            <ListGroup.Item>Value: {transaction.value}</ListGroup.Item>
                                            <ListGroup.Item>Receiver: {transaction.participants.receiver.name}</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </>
                ))}

            </Container>
        </>
    )

}