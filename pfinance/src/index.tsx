import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({

      transactions: [
        {
          id: 1,
          title: 'sueldo del mes',
          type: 'deposit',
          category: 'trabajos',
          value: 510000,
          createdAt: new Date('2021-05-30 09:00:00')

        },
        {
          id: 2,
          title: 'venta de pantalla',
          type: 'deposit',
          category: 'ventas',
          value: 50000,
          createdAt: new Date('2021-08-30 09:00:00')

        },
        {
          id: 3,
          title: 'arriendo',
          type: 'retiro',
          category: ' gastos fijos-casa',
          value: 200000,
          createdAt: new Date('2021-05-12 09:00:00')

        }

      ],
    })

  },


  //rutas 
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {

      return this.schema.all('transaction')


    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)

    })

  }
})



///////////////////////////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

