const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Pokemon = require('./pokemon');

class PokemonList extends React.Component {
    render() {
        var imgNum = this.props.currentIndex + 1;
        var newPokemon = this.props.currentPokemon.map(function(pokemon, index) {
            return <Pokemon key={index} src={'../../assets/sprites/pokemon/'+pokemon.img} name={pokemon.name.toUpperCase()} />
        });
        return(
            <div className='pokemon-list'>
            {newPokemon}
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        inputValue: state.inputValue,
        currentCards: state.currentCards,
        nextPage: state.nextPage,
        currentPokemon: state.currentPokemon,
        currentIndex: state.currentIndex
    })
}

var Container = connect(mapStateToProps)(PokemonList);

module.exports = Container;