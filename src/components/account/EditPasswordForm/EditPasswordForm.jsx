import { React, useState } from "react";
import { Button, Col, Container, Form, Row} from "react-bootstrap";
import { Store as Notification } from 'react-notifications-component';
import AccountService from '../../../services/accounts';
import Loader from '../../loader/Loader'

export default function EditPasswordForm(props) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);



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
            <h4 className="text-center">Change Password</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="currentPassword"
                            placeholder={props.account.name}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="cpf">
                            <Form.Label>New Password *</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                placeholder={"Enter new password"}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="cpf">
                            <Form.Label>New Password *</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPasswordRepeat"
                                placeholder={"Repeat the new password"}
                                value={newPasswordRepeat}
                                onChange={(e) => setNewPasswordRepeat(e.target.value)}
                                required
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