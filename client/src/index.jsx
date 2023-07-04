import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import posts from './Post/PostReducer';
import auth from './Auth/AuthReducer';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const initialStore = configureStore({
    reducer: { auth, posts },
    middleware: [thunk],
  });

ReactDOM.render(<BrowserRouter><App store={initialStore}/>Potato</BrowserRouter>, document.getElementById('root'));
