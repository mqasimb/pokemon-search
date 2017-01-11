const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const CardList = require('./card-list');

class DisplayCards extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchSearchName(this.props.params.pokemonName))
    }
    render() {
        return(
            <div className='display-card'>
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

var Container = connect(mapStateToProps)(DisplayCards);

module.exports = Container;