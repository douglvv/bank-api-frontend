import { Row, Col, Card, ListGroup } from "react-bootstrap";
import React from "react";

export default function TransactionEntry(props) {

    return (
        <Row as="div">
            <Col sm={16}>
                <Card className={"wrapperTransaction"} bg="dark" text="orange">
                    <Card.Header className="text-light">Transaction id: {props.transaction._id}</Card.Header>
                    <Card.Body>
                        <ListGroup horizontal="sm">
                            <ListGroup.Item className="customListItem">Type: {props.transaction.type}</ListGroup.Item>
                            <ListGroup.Item className="customListItem">Value: R$ {props.transaction.value}</ListGroup.Item>
                            {props.transaction.participants.payer && (
                                <ListGroup.Item className="customListItem">Payer: {props.transaction.participants.payer.name}</ListGroup.Item>
                            )}
                            <ListGroup.Item className="customListItem">Receiver: {props.transaction.participants.receiver.name}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}