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
const Favorite = require('./components/favorite');
const SearchCard = require('./components/search-card');
const Choose = require('./components/choose');
const DisplayCard = require('./components/display-cards');
const store = require('./store');

var routes = (
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Choose} />
            <Route path='/pokemon' component={Search}/>
            <Route path='/favorite-pokemon' component={Favorite}/>
            <Route path='/cards' component={SearchCard}/>
            <Route path='/pokemon/:pokemonName' component={DisplayCard}/>
        </Route>
    </Router>
    </Provider>
)

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});