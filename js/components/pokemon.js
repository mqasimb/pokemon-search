const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');

class Pokemon extends React.Component {
    render() {
        return(
            <div className='pokemon'>
            <img src={this.props.src}/>{this.props.name}
            </div>
            )
    }
}

module.exports = Pokemon;