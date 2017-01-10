const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');

class Pokemon extends React.Component {
    componentDidMount() {

    }
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
    }
    formSubmitted(event) {
        event.preventDefault();
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
        this.props.dispatch(actions.inputSubmit());
    }
    viewAllClick() {
        this.props.dispatch(actions.fetchAllPokemon());
    }
    
    render() {
        var newCards = this.props.currentCards.map(function(card, index) {
            return <li key={index}><img src={card.imageUrl} /></li>
        })
        var newPokemon = this.props.currentPokemon.map(function(pokemon, index) {
           return <li key={index}><img src={pokemon.sprites.front_default} /></li>
        });
        return(
            <div className='pokemon'>
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

var Container = connect(mapStateToProps)(Pokemon);

module.exports = Container;