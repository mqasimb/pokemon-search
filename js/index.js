require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');

const App = require('./components/app')
const Search = require('./components/search');
const store = require('./store');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Provider store={store}><Search /></Provider>, document.getElementById('app'));
});