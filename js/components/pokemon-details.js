const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Pokemon = require('./pokemon');

class PokemonDetails extends React.Component {
    render() {
        var pokeImg = (this.props.linkedPokemon.id) ? (<div><img src={'../../assets/sprites/pokemon/'+this.props.linkedPokemon.id+'.png'}/><br/> '#'{this.props.linkedPokemon.id} {this.props.linkedPokemon.name.toUpperCase()}</div>) : (null);
        return(
            <div className='pokemon-list'>
            {pokeImg}
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
        currentIndex: state.currentIndex,
        linkedPokemon: state.linkedPokemon
    })
}

var Container = connect(mapStateToProps)(PokemonDetails);

module.exports = Container;