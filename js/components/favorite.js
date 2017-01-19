const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Pokemon = require('./pokemon')
const browserHistory = require('react-router').browserHistory;
var Button = require('react-bootstrap/lib/Button');


class FavoritePokemon extends React.Component {
    render() {
        var favoritePokeArray = [];
        for(var poke in this.props.favoritePokemon) {
            if(this.props.favoritePokemon[poke].favorite === true) {
                favoritePokeArray.push({name:poke, id:this.props.favoritePokemon[poke].id})
            }
        }
        console.log(favoritePokeArray);
        var favoriteList = favoritePokeArray.map(function(poke, index) {
            return <Pokemon key={index} id={poke.id} src={'../../assets/sprites/pokemon/'+poke.id+'.png'} name={poke.name.toUpperCase()} />
        })
        console.log(favoriteList);
        return(
        <div className='favorite-pokemon'>
        <Button bsStyle="success" onClick={browserHistory.goBack}>Go Back</Button>
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
        inputValue: state.inputValue,
        favoritePokemon: state.favoritePokemon
    })
}

var Container = connect(mapStateToProps)(FavoritePokemon);

module.exports = Container;