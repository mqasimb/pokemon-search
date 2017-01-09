const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');

class Search extends React.Component {
    componentDidMount() {
      this.props.dispatch(actions.fetchSearchName('charizard'));
    }
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
    }
    
    render() {
        var newCards = this.props.currentCards.map(function(card, index) {
            return <li key={index}><img src={card.imageUrl} /></li>
        })
        return(
            <div className='search-card'>
            <form>
            <input type='text' onChange={this.inputUpdated.bind(this)} />
            </form>
            {console.log(this.props.game)}
            {newCards}
            {console.log(newCards)} 
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        game: state,
        currentCards: state.currentCards
    })
}

var Container = connect(mapStateToProps)(Search);

module.exports = Container;