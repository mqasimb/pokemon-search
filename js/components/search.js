const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');

class Search extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.fetchAllPokemon());
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
           return <li key={index}><img src={'../../assets/sprites/pokemon/'+(index+1)+'.png'} />{pokemon.name.toUpperCase()}</li>
        });
        return(
            <div className='search-card'>
            <form onSubmit={this.formSubmitted.bind(this)}>
            <input type='text' value={this.props.inputValue} onChange={this.inputUpdated.bind(this)} />
            </form>
            <button onClick={this.viewAllClick.bind(this)}>View All</button>
            {newPokemon}
            {newCards}
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

var Container = connect(mapStateToProps)(Search);

module.exports = Container;