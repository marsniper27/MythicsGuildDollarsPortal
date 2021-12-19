import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {store,persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { BootstrapNavbar, Footer, Home, DC, Slots, Swap, Account } from "./components";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import IpfsRouter from 'ipfs-react-router'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
    <GlobalStyles/>
    <div className="App">
      <IpfsRouter>
        <Provider store={store}>            
          <PersistGate loading={null} persistor={persistor}>
            <BootstrapNavbar />
            <Routes>
                <Route path="/" element={<App />}/>
                <Route index element={<Home />} />
                <Route path="/DC" element={ <DC />} />
                <Route path="/slots" element={ <Slots />} />
                <Route path="/Swap" element={<Swap />} />
                <Route path="/Account" element={<Account />} />
            </Routes>
            <Footer />
          </PersistGate>
        </Provider>
      </IpfsRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
