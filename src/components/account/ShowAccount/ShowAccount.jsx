import { Container, Card, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import logout from '../../../auth/authSlice'

export default function ShowAccount(props) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <Container className="bg-secondary vh-100" fluid='sm'>
                <h3 className="mx-3">Account</h3>
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
                                <ListGroup>
                                    <ListGroup.Item>{props.account.name}</ListGroup.Item>
                                    <ListGroup.Item>{props.account.cpf}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <h3>Transactions</h3>
                <Row className="m-3 vw-100">

                </Row>
            </Container>
        </>
    )
}