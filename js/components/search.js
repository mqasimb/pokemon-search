const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const PokemonList = require('./pokemon-list')

class Search extends React.Component {
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
    }
    formSubmitted(event) {
        event.preventDefault();
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
        this.props.dispatch(actions.inputSubmit());
    }
    viewAllClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex));
    }
    nextButtonClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex+36));
        this.props.dispatch(actions.changeOffset(this.props.currentIndex+36));
    }
    previousButtonClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex-36));
        this.props.dispatch(actions.changeOffset(this.props.currentIndex-36));
    }
    
    render() {
        var previousButton = (this.props.currentIndex >= 36) ? (<button onClick={this.previousButtonClick.bind(this)}>Previous</button>) : (null); 
        var nextButton = ((this.props.currentPokemon.length > 35)) ? (<button onClick={this.nextButtonClick.bind(this)}>Next</button>) : (null);
        return(
            <div className='search-card'>
            <form onSubmit={this.formSubmitted.bind(this)}>
            <input type='text' value={this.props.inputValue} onChange={this.inputUpdated.bind(this)} />
            </form>
            <button onClick={this.viewAllClick.bind(this)}>View All</button>
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