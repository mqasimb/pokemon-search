const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const PokemonList = require('./pokemon-list')
const browserHistory = require('react-router').browserHistory;
var router = require('react-router');
var Link = router.Link;
var Button = require('react-bootstrap/lib/Button');


class Search extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex));
    }
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
    }
    formSubmitted(event) {
        event.preventDefault();
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
        this.props.dispatch(actions.inputSubmit());
    }
    //viewAllClick() {
    //    this.props.dispatch(actions.fetchPokemon(this.props.currentIndex));
    //}
    nextButtonClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex+36));
        this.props.dispatch(actions.changeOffset(this.props.currentIndex+36));
    }
    previousButtonClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex-36));
        this.props.dispatch(actions.changeOffset(this.props.currentIndex-36));
    }
    
    render() {
        var previousButton = (this.props.currentIndex >= 36) ? (<Button bsStyle="success" onClick={this.previousButtonClick.bind(this)}>Previous</Button>) : (<Button bsStyle="success" onClick={this.previousButtonClick.bind(this)} disabled>Previous</Button>); 
        var nextButton = ((this.props.currentPokemon.length > 35)) ? (<Button bsStyle="success" onClick={this.nextButtonClick.bind(this)}>Next</Button>) : (<Button bsStyle="success" onClick={this.nextButtonClick.bind(this)} disabled>Next</Button>);
        return(
            <div className='search-card'>
            <Button bsStyle="success" onClick={browserHistory.goBack}>Go Back</Button>
            <Link to='/favorite-pokemon'><Button bsStyle='success' bsSize="large">Favorite Pokemon</Button></Link>
            {/*<Button bsStyle="info" onClick={this.viewAllClick.bind(this)}>View All</Button>*/}
            {previousButton}{nextButton}
            <PokemonList />
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        inputValue: state.inputValue,
        currentCards: state.currentCards,
        previousPage: state.previousPage,
        nextPage: state.nextPage,
        currentPokemon: state.currentPokemon,
        currentIndex: state.currentIndex
    })
}

var Container = connect(mapStateToProps)(Search);

module.exports = Container;