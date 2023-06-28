import { React, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Store as Notification } from 'react-notifications-component';
import AccountService from "../../../services/accounts";
import Loader from "../../loader/Loader";


export default function TransferForm(props) {
  const [transferValue, setTransferValue] = useState("");
  const [idReceiver, setIdReceiver] = useState("")
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(false);
      setTransferValue("");

      const response = await AccountService.transfer(props.account._id, {
        idReceiver: idReceiver,
        value: transferValue
      });

      if (response.status === 200) {
        Notification.addNotification({
          title: "Success",
          message: "Transfer successful",
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
              value={transferValue}
              onChange={(e) => setTransferValue(e.target.value)}
              required
              aria-describedby="addon"
            />
          </InputGroup>

          <Form.Control
              type="text"
              name="idReceiver"
              placeholder="Enter receiver's account id"
              value={idReceiver}
              onChange={(e) => setIdReceiver(e.target.value)}
              required
              className="mb-3"
            />

          <div className="d-flex justify-content-center align-items-center">
            <Button className="w-100 mb-3" variant="orange" type="submit">
              Transfer
            </Button>
          </div>
          {error && <p className="text-danger small">{errorMessage}</p>}
          {loading && <Loader />}
        </Form>
      </Container>
    </>
  )
}