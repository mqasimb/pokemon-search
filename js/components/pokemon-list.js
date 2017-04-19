const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Pokemon = require('./pokemon');
const { Link } = require('react-router');
const { Button, Thumbnail, Glyphicon, Modal } = require('react-bootstrap');

class PokemonList extends React.Component {
    render() {
        var imgNum = this.props.currentIndex + 1;
        var newPokemon = this.props.currentPokemon.map((pokemon, index) =>
            <Pokemon key={index} id={pokemon.id} src={'../../assets/sprites/pokemon/'+pokemon.img} name={pokemon.name.toUpperCase()} />
        )
        return (
            <div className='pokemon-list'>
                {newPokemon}
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return({
        currentPokemon: state.currentPokemon,
        currentIndex: state.currentIndex
    })
}

var Container = connect(mapStateToProps)(PokemonList);

module.exports = Container;