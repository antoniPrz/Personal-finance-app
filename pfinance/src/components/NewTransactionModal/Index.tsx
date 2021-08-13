import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/botao_fechar.svg'
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import { Container } from './styles';
import { TransactionTypeContainer, RadioBoxTypeButton } from './styles';


interface NewTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const transactions = useContext(TransactionsContext);

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('income')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        const data = {
            title,
            value,
            category,
            type
        }
        api.post('/transactions', data)
    }



    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img
                    src={closeImg}
                    alt="fechar modal"
                />
            </button>

            {/* componente container estilizado con form */}
            <Container onSubmit={handleCreateNewTransaction}>

                <h2>Registrar Movimiento</h2>

                <input
                    // type="text" 
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />


                <input
                    type="number"
                    placeholder="Monto"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>

                    <RadioBoxTypeButton
                        type="button"
                        onClick={() => { setType('income') }}
                        isActive={type === 'income'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="Entradas" />
                        <span>Entradas</span>
                    </RadioBoxTypeButton>

                    <RadioBoxTypeButton
                        type="button"
                        onClick={() => { setType('outcome') }}
                        isActive={type === 'outcome'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="Salidas" />
                        <span>Salidas</span>
                    </RadioBoxTypeButton>

                </TransactionTypeContainer>

                <input
                    // type="text" 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => { setCategory(event.target.value) }}
                />

                <button
                    type="submit"
                >Registrar
                </button>
            </Container>
        </Modal>
    );


}