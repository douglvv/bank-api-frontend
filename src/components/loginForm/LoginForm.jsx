import { React, useState, useEffect } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AccountService from '../../services/accounts';
import Loader from '../loader/Loader'


export default function LoginForm(props) {    
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToAccount, setRedirectToAccount] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (redirectToAccount) {
            navigate('/');
        }
    }, [redirectToAccount, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);
            const account = await AccountService.register({
                name: name,
                cpf: cpf,
                password: password
            });
            setRedirectToAccount(true);
        } catch (error) {
            setError(true);
            if (error.response && error.response.data) setErrorMessage(error.response.data);
            else setErrorMessage(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Container fluid="lg">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="cpf"
                            placeholder="Enter CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center align-items-center">
                        <Stack gap={2}>
                            <Button className="w-100" variant="orange" type="submit">
                                Login
                            </Button>
                            <p className="col text-center small">
                                Don't have an account? <Link to="/register">Sign-in</Link>
                            </p>
                        </Stack>
                    </div>
                    {error && <p className="text-danger small">{errorMessage}</p>}
                    {loading && <Loader />}
                </Form>
            </Container>
        </>
    )
}