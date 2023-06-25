import { React, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Store as Notification } from 'react-notifications-component';
import AccountService from '../../../services/accounts';
import Loader from '../../loader/Loader'

export default function EditAccountForm(props) {
    const [name, setName] = useState();
    const [cpf, setCpf] = useState();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);
            const formData = { name: name, cpf: cpf };
            const response = await AccountService.editAccount(props.account._id, formData);
            if (response.status === 200) {
                Notification.addNotification({
                    title: "Success",
                    message: "Account updated successfuly!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                    }
                });
            }

        } catch (error) {
            setError(true);
            if (error.response && error.response.data) setErrorMessage(error.response.data.error);
            else setErrorMessage(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Container fluid="sm">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder={props.account.name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            name="cpf"
                            placeholder={props.account.cpf}
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center align-items-center">
                        <Button className="w-100" variant="orange" type="submit">
                            Update
                        </Button>
                    </div>
                    {error && <p className="text-danger small">{errorMessage}</p>}
                    {loading && <Loader />}
                </Form>
            </Container>
        </>
    )
}