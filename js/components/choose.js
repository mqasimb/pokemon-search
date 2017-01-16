const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
var router = require('react-router');
var Link = router.Link;
var Button = require('react-bootstrap/lib/Button');

class Choose extends React.Component {
    render() {
        return(
            <div className='choose-feature'>
            <Link to='/pokemon'><Button bsStyle='success' bsSize="large">View All Pokemon</Button></Link>
            <Link to='/cards'><Button bsStyle='success' bsSize="large">Search Cards</Button></Link>
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        inputValue: state.inputValue,
    })
}

var Container = connect(mapStateToProps)(Choose);

module.exports = Container;