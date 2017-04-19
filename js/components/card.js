const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');

class Card extends React.Component {
    render() {
        return (
            <div className='pokemon-card'>
                <img src={this.props.src} />
            </div>
        )
    }
}

module.exports = Card;