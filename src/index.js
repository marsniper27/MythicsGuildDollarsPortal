import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {store,persistor} from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import IpfsRouter from 'ipfs-react-router';
import { Container } from 'react-bootstrap';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <IpfsRouter> 
        <Provider store={store}>            
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </IpfsRouter>,
    document.getElementById('root'));