const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const CardList = require('./card-list');
const browserHistory = require('react-router').browserHistory;
var Button = require('react-bootstrap/lib/Button');

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
            <Button bsStyle="success" onClick={browserHistory.goBack}>Go Back</Button>
            <form onSubmit={this.formSubmitted.bind(this)}>
            <input type='text' value={this.props.inputValue} onChange={this.inputUpdated.bind(this)} />
            <Button bsStyle="success">Search Cards</Button>
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