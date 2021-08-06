import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


interface Transaction{

    id: number;
    title: string;
    category: string;
    type: string;
    value: number;
    createdAt: string

}


export function TransactionTable(){
    const [transactions , setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        
        .then(response => setTransactions(response.data.transactions))

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
                   {transactions.map(transaction => {

                       return (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}> 
                            {new Intl.NumberFormat('pt-BR',{
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.value)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                                
                            </td>
                        </tr>
                       )
                   })}
                    
                </tbody>
            </table>
           </Container> );

}