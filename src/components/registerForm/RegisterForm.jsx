import { React, useState, useEffect } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import AccountService from '../../services/accounts';
import { Link, useNavigate } from "react-router-dom";


export default function RegisterForm(props) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (redirectToLogin) {
            navigate('/login');
        }
    }, [redirectToLogin, navigate]);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const account = await AccountService.register({
                name: name,
                cpf: cpf,
                password: password
            });
            setRedirectToLogin(true);
        } catch (error) {
            // console.log(error)
            setError(true);
            if (error.response && error.response.data) setErrorMessage(error.response.data);
            else setErrorMessage(error.message);
        }
    }

    return (
        <>
            <Container fluid="lg">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

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
                                Register
                            </Button>
                            <p className="col text-center small">
                                Already registered? <Link to="/login">Log-in</Link>
                            </p>
                        </Stack>
                    </div>
                    {error && <p className="text-danger small">{errorMessage}</p>}
                </Form>
            </Container>
        </>
    )
}