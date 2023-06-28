import { React, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Store as Notification } from 'react-notifications-component';
import AccountService from '../../../services/accounts';
import Loader from '../../loader/Loader'

export default function EditAccountForm(props) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);
            setError(false);
            
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
            setErrorMessage(error.response.data);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Container fluid="sm">
                <h4 className="text-center">Edit Personal Info</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="id">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="id"
                            value={props.account._id}
                            readOnly
                        />
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col} sm={true} className="mb-3" controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                name="cpf"
                                placeholder={props.account.cpf}
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group as={Col} sm={true} className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder={props.account.name}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Row>


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