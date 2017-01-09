require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('redux');

const App = require('./components/app')

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App>Hello World</App>, document.getElementById('app'));
});