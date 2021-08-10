import Modal from 'react-modal'
import { useState } from 'react';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal/Index';
import { TransactionsContext } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {


  const  [isNewTransactionModalOpen , setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){

      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  // funcion como propiedad para abrir el modal onOpenNewTransactionModal 


  return (
    < TransactionsContext.Provider value={[]}>
    <Header onOpenNewTransactionModal = {handleOpenNewTransactionModal}/>
    <Dashboard/>
    <NewTransactionModal 
     isOpen = {isNewTransactionModalOpen}
     onRequestClose = {handleCloseNewTransactionModal}
    />

    <GlobalStyle />
   </ TransactionsContext.Provider>
  );
}


