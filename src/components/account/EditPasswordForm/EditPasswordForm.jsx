import { React, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Store as Notification } from 'react-notifications-component';
import AccountService from '../../../services/accounts';
import Loader from '../../loader/Loader'

export default function EditPasswordForm(props) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [isInvalid, setIsInvalid] = useState(false)
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (newPassword !== newPasswordRepeat) setIsInvalid(true);
        if (newPassword === newPasswordRepeat) setIsInvalid(false);

    }, [newPassword, newPasswordRepeat])

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);

            const formData = { currentPassword: currentPassword, newPassword: newPassword };
            const response = await AccountService.changePassword(props.account._id, formData);
            if (response.status === 200) {
                Notification.addNotification({
                    title: "Success",
                    message: "Password changed successfuly!",
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
                <h4 className="text-center">Change Password</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="currentPassword">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="currentPassword"
                            placeholder={"Enter current password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} sm={true} className="mb-3" controlId="newPassword">
                            <Form.Label>New Password *</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                placeholder={"Enter new password"}
                                value={newPassword}
                                onChange={(e) => { setNewPassword(e.target.value); }}
                                required
                                isInvalid={isInvalid}
                            />
                            <Form.Control.Feedback type="invalid">
                                The passwords don't match.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} sm={true} className="mb-3" controlId="newPasswordRepeat">
                            <Form.Label>New Password *</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPasswordRepeat"
                                placeholder={"Repeat the new password"}
                                value={newPasswordRepeat}
                                onChange={(e) => { setNewPasswordRepeat(e.target.value); }}
                                required
                                isInvalid={isInvalid}
                            />
                        </Form.Group>
                    </Row>

                    <div className="d-flex justify-content-center align-items-center">
                        <Button disabled={isInvalid} className="w-100" variant="orange" type="submit" >
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