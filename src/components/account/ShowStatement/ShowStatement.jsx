import AccountService from "../../../services/accounts";
import { React, useEffect, useState } from "react";

export default function ShowStatement(props) {
    const [statement, setStatement] = useState("");

    const fetchStatement = async () => {
        const statement = await AccountService.showStatement(props.account._id);
        setStatement(JSON.stringify(statement));
    };

    useEffect(() => {
        fetchStatement();
    }, []); // Colocar account para update infinito

    return (
        <>
            <h1>Ok</h1>
            <div>
                <p>{statement}</p>
            </div>
        </>
    )

}