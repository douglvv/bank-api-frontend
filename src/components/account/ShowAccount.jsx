import { Container, Card, Row, Col, ListGroup, Badge } from "react-bootstrap";

export default function ShowAccount(props) {
    return (
        <>
            <Container fluid='sm'>
                <h1 className="mx-3">Account</h1>
                <Row className="m-3">
                    <Col sm={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title className="fs-2">$ {props.account.balance}</Card.Title>
                                <Card.Subtitle className="fs-4 text-muted">Balance</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title>
                                    Account <Badge bg="orange-dark" className='bagde-custom' pill='false'>{props.account._id}</Badge>
                                </Card.Title>
                                <Card.Text className="text-muted">
                                    <ListGroup>
                                        <ListGroup.Item>{props.account.name}</ListGroup.Item>
                                        <ListGroup.Item>{props.account.cpf}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}