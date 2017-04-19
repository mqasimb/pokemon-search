const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const CardList = require('./card-list');
const PokemonDetails = require('./pokemon-details');
const { Button } = require('react-bootstrap');
const { Link, browserHistory } = require('react-router');

class DisplayCards extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchSinglePokemon(this.props.params.pokemonName));
        this.props.dispatch(actions.fetchSearchName(this.props.params.pokemonName))
    }
    render() {
         return (
            <div className='display-card-page'>
                <div className='display-card'>
                    <h1>{this.props.params.pokemonName.toUpperCase()}</h1>
                    <CardList />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return({
    })
}

var Container = connect(mapStateToProps)(DisplayCards);

module.exports = Container;