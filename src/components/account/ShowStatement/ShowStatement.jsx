import AccountService from "../../../services/accounts";
import { React, useEffect, useState } from "react";

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
           <>
      <h1>Statement</h1>
      <div>
        {statement.map((transaction) => (
          <div key={transaction._id}>
            <p>Transaction id: {transaction._id}</p>
            <p>Type: {transaction.type}</p>
            <p>Value: {transaction.value}</p>
            <p>Receiver: {transaction.participants.receiver.name}</p>
          </div>
        ))}
      </div>
    </>
        </>
    )

}