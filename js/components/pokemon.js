const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const router = require('react-router');
const Link = router.Link;

class Pokemon extends React.Component {
    render() {
        return(
            <div className='pokemon'>
            <Link to={'/cards/'+this.props.name.toLowerCase()}><img src={this.props.src}/>#{this.props.id} {this.props.name}</Link>
            </div>
            )
    }
}

module.exports = Pokemon;