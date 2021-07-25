import Modal from 'react-modal';
import closeImg from '../../assets/botao_fechar.svg'
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';


import { Container } from './styles';
import {TransactionTypeContainer} from './styles';





interface NewTransactionModalProps{

    isOpen : boolean;
    onRequestClose: () => void
}

export function NewTransactionModal( {isOpen, onRequestClose}:NewTransactionModalProps){

return(
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
        <Container>

        <h2>Registrar Movimiento</h2>

        <input 
        // type="text" 
        placeholder="Titulo"
        />


        <input 
        type="number"
        placeholder="Monto"
        />

        <TransactionTypeContainer>
            <button type= "button">
                <img src={incomeImg} alt="Entradas" />
                <span>Entradas</span>
            </button>

            <button type= "button">
                <img src={outcomeImg} alt="Salidas" />
                <span>Salidas</span>
            </button>

        </TransactionTypeContainer>

        <input 
        // type="text" 
        placeholder="Categoria"
        />

        <button 
        type="submit"
        >Registrar
        </button>
        </Container>
    </Modal>
);


}