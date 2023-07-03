import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import posts from './Post/PostReducer';
import auth from './Auth/AuthReducer';
import './index.css';
import App from './App';

const initialStore = configureStore({
    reducer: { auth, posts },
    middleware: [thunk],
  });

ReactDOM.render(<App store={initialStore}/>, document.getElementById('root'));
