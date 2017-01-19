const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Pokemon = require('./pokemon');
const router = require('react-router');
const Link = router.Link;
const Button = require('react-bootstrap/lib/Button');
const Thumbnail = require('react-bootstrap/lib/Thumbnail');
const Glyphicon = require('react-bootstrap/lib/Glyphicon');
const Modal = require('react-bootstrap/lib/Modal');

class PokemonList extends React.Component {
    render() {
        var imgNum = this.props.currentIndex + 1;
        var newPokemon = this.props.currentPokemon.map(function(pokemon, index) {
            return <Pokemon key={index} id={pokemon.id} src={'../../assets/sprites/pokemon/'+pokemon.img} name={pokemon.name.toUpperCase()} />
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