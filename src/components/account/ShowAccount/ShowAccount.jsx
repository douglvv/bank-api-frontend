import { Container, Card, Row, Col, Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import logout from '../../../auth/authSlice'

export default function ShowAccount(props) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <Container fluid='sm'>
                <h3 className="mx-3">Account: {props.account._id}</h3>
                <Row className="m-3">
                    <Col sm={4}>
                        <Card className="mb-3">
                            <Card.Body>
                                <Card.Title className="fs-2">$ {parseFloat(props.account.balance).toFixed(2)}</Card.Title>
                                <Card.Subtitle className="fs-4 text-muted">Balance</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr />
                <h3 className="mx-3">Actions</h3>
                <Row className="m-3 d-flex justify-content-center align-items-center">
                <Col className="d-grid gap-2"sm={3}>
                    <Button size="lg" href="/account/statement">
                        Statement
                    </Button>
                </Col>
                <Col className="d-grid gap-2"sm={3}>
                    <Button size="lg" href="/account/withdraw">
                        Withdraw
                    </Button>
                </Col>
                <Col className="d-grid gap-2"sm={3}>
                    <Button size="lg">
                        Depósito
                    </Button>
                </Col>
                <Col className="d-grid gap-2"sm={3}>
                    <Button size="lg">
                        Transferência
                    </Button>
                </Col>
                </Row>
            </Container>
        </>
    )
}