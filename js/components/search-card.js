const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const CardList = require('./card-list');

class SearchCard extends React.Component {
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
    }
    formSubmitted(event) {
        event.preventDefault();
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
        this.props.dispatch(actions.inputSubmit());
    }
    render() {
        return(
            <div className='search-card'>
            <form onSubmit={this.formSubmitted.bind(this)}>
            <input type='text' value={this.props.inputValue} onChange={this.inputUpdated.bind(this)} />
            <button>Search Cards</button>
            </form>
            <CardList />
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        inputValue: state.inputValue,
        currentCards: state.currentCards,
        nextPage: state.nextPage,
        currentPokemon: state.currentPokemon
    })
}

var Container = connect(mapStateToProps)(SearchCard);

module.exports = Container;