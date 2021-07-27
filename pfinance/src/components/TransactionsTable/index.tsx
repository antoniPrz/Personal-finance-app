import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


export function TransactionTable(){
    const [transactions , setTransactions] = useState([]);

    useEffect(() => {
        api.get('transactions')
        
        .then(response => setTransactions(response.data))

    }, [])

    return( <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Fecha</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desarrollo de aplicacion</td>
                        <td className="deposit" >$ 10.00,00</td>
                        <td>Tabajo</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Alquiler</td>
                        <td className="retiro">$ -10.00,00</td>
                        <td>Tabajo</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Desarrollo de aplicacion</td>
                        <td className="deposit"> $ 10.00,00</td>
                        <td>Tabajo</td>
                        <td>20/04/2021</td>
                    </tr>
                </tbody>
            </table>
           </Container> );

}