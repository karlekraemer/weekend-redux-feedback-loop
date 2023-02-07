import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//more imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// feeling reducer for page one
const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return state;
}

// understanding reducer for page two
const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return state;
}

// support reducer for page three
const support = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state;
}

// comments reducer for page four
const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}

// feedback reducer
const feedbackResult = (state = [], action) => {
    if(action.type === 'ADD_FEEDBACK') {
        console.log(`added feedback ${action.payload}`);
        return [...state, action.payload];
    }
    return state;
}

//Redux store tracks all reducers
const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
            feedbackResult,
            //etc
        }
    ),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();

