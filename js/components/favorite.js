const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Pokemon = require('./pokemon')
const { browserHistory } = require('react-router');
const { Button } = require('react-bootstrap');


class FavoritePokemon extends React.Component {
    render() {
        var favoritePokeArray = [];
        for(var poke in this.props.favoritePokemon) {
            if(this.props.favoritePokemon[poke].favorite === true) {
                favoritePokeArray.push({name:poke, id:this.props.favoritePokemon[poke].id})
            }
        }
        var favoriteList = favoritePokeArray.map((poke, index) =>
            <Pokemon key={index} id={poke.id} src={'../../assets/sprites/pokemon/'+poke.id+'.png'} name={poke.name.toUpperCase()} />
        )
        return (
            <div className='favorite-pokemon'>
                <h1>Favorite Pokemon</h1>
                <div className='favorite-list'>
                    {(favoriteList.length > 0) ? (favoriteList) : (<p>Sorry, you haven't chosen any favorite Pokemon yet</p>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return({
        favoritePokemon: state.favoritePokemon
    })
}

var Container = connect(mapStateToProps)(FavoritePokemon);

module.exports = Container;