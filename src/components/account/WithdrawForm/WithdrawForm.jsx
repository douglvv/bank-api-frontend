import { React, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Store as Notification } from 'react-notifications-component';
import AccountService from "../../../services/accounts";
import Loader from "../../loader/Loader";


export default function WithdrawForm(props) {
    const [withdrawValue, setWithdrawValue] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          setLoading(true);
          setError(false);
          setWithdrawValue("");
          
          const response = await AccountService.withdraw(props.account._id, {
            value: withdrawValue
        });
      
          if (response.status === 200) {
            Notification.addNotification({
              title: "Success",
              message: "Withdrawal successful",
              type: "success",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 3000,
              },
            });
          }
        } catch (error) {
          setError(true);
          setErrorMessage(error.response.data);
        } finally {
          setLoading(false);
        }
      }


    return (
        <>
            <Container fluid="sm">
                <Form onSubmit={handleSubmit}>

                    <InputGroup className="mb-3">                        
                        <InputGroup.Text id="addon">$</InputGroup.Text>
                        <Form.Control
                            type="text"
                            name="value"
                            placeholder="Enter value"
                            value={withdrawValue}
                            onChange={(e) => setWithdrawValue(e.target.value)}
                            required
                            aria-describedby="addon"
                        />
                    </InputGroup>

                    <div className="d-flex justify-content-center align-items-center">
                        <Button className="w-100 mb-3" variant="orange" type="submit">
                            Withdraw
                        </Button>
                    </div>
                    {error && <p className="text-danger small">{errorMessage}</p>}
                    {loading && <Loader />}
                </Form>
            </Container>
        </>
    )
}