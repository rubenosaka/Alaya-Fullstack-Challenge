import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import posts from './Post/PostReducer';
import auth from './Auth/AuthReducer';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import App from './App'; 
import rootReducer from './reducers';
import { createStore } from 'redux';

const initialStore = configureStore({
    reducer: { auth, posts },
    middleware: [thunk],
});
const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(<PersistGate loading={null} persistor={persistor}><BrowserRouter><App store={initialStore}/>Potato</BrowserRouter></PersistGate>, document.getElementById('root'));
