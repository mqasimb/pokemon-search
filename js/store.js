const redux = require('redux');
const { createStore } = redux;
const applyMiddleware = redux.applyMiddleware;
const thunk = require('redux-thunk').default;
const searchReducer = require('./reducers/index');

const store = createStore(searchReducer, applyMiddleware(thunk));

module.exports = store;