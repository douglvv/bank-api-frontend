import React, { useRef } from "react";
import { Row, Col, Stack, Card } from 'react-bootstrap';
import { useClipboard } from "use-clipboard-copy";
import { FiCopy, FiCheck } from 'react-icons/fi';
import styles from './styles.module.css';

export default function AccountBalanceCard(props) {
    const clipboard = useClipboard({
        copiedTimeout: 3000,
    });

    const accountIdRef = useRef(null);

    return (
        <Row as={'div'}  className={`m-3 wrapperAccount`}>
            <h4 className="">Hello, {props.account.name}</h4>

            <Col sm={4} className={`wrapperNav bg-light text-orange p-3 `}>
                <div className="d-grid gap-1">
                    <h1>${props.account.balance}</h1>
                    <h4>Balance</h4>
                </div>
            </Col>
            <Col sm={8} className={`wrapperContent bg-dark text-white p-3`}>
                <Stack gap={2}>
                    <Card bg="secondary" text="light">
                        <Card.Body >
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="fw-bold">Account Number</div>

                                <button
                                    onClick={() => clipboard.copy(accountIdRef.current.textContent)}
                                    title="Copy Account's Number"
                                    className={styles.iconButton}
                                >
                                    {clipboard.copied ? <FiCheck /> : <FiCopy />}
                                </button>

                            </div>
                            <div>
                                <p ref={accountIdRef}>
                                    {props.account._id}
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Stack>
            </Col>
        </Row>
    )
}
