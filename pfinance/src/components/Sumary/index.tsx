import { useContext } from 'react';

import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';


import { Container } from "./styles";



export function Sumary() {

    const transactions = useContext(TransactionsContext);

    console.log(transactions);




    return (<Container>

        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas<" />
            </header>
            <strong>$ 1000,00</strong>
        </div>
        <div>
            <header>
                <p>Salidas</p>
                <img src={outcomeImg} alt="Salidas" />
            </header>
            <strong>$ -500,00</strong>
        </div>
        <div className="total">
            <header>
                <p>Total</p>
                <img src={total} alt="Total" />
            </header>
            <strong>$ 500,00</strong>
        </div>
    </Container>);
}