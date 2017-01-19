require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const IndexRoute = router.IndexRoute;
const browserHistory = router.browserHistory;

const App = require('./components/app')
const Search = require('./components/search');
const SearchCard = require('./components/search-card');
const Choose = require('./components/choose');
const store = require('./store');

var routes = (
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search} />
            <Route path='/pokemon' component={Search}/>
            <Route path='/card' component={SearchCard}/>
        </Route>
    </Router>
    </Provider>
)

{/*document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Provider store={store}><App><Search /><SearchCard /></App></Provider>, document.getElementById('app'));
});*/}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});