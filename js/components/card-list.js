const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const Card = require('./card');

class CardList extends React.Component {
    render() {
        var newCards = this.props.currentCards.map(function(card, index) {
            return <Card key={index} src={card.imageUrl} />
        });
        return(
            <div className='card-list'>
            {newCards}
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        currentCards: state.currentCards
    })
}

var Container = connect(mapStateToProps)(CardList);

module.exports = Container;