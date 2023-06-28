import AccountService from "../../../services/accounts";
import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TransactionEntry from "../../TransactionEntry/TransactionEntry";

export default function ShowStatement(props) {
    const [statement, setStatement] = useState([]);

    const fetchStatement = async () => {
        const statement = await AccountService.showStatement(props.account._id);
        setStatement(statement);
    };

    useEffect(() => {
        fetchStatement();
    }, [props.account]);

    return (
        <>
            <Container fluid="sm">
                <h3 className="text-center">Statement</h3>
                {statement.slice().reverse().map((transaction) => (
                    <TransactionEntry key={transaction._id} transaction={transaction} />
                ))}

            </Container>
        </>
    )

}