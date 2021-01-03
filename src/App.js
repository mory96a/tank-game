import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./AppRoutes/Routes";
import { storeCreator } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const {store, persistor} = storeCreator();

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <Routes/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    );
}


export default App;
