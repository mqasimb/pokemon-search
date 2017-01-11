const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
var router = require('react-router');
var Link = router.Link;

class Choose extends React.Component {
    render() {
        return(
            <div className='choose-feature'>
            <Link to='/pokemon'><button>View All Pokemon</button></Link>
            <Link to='/cards'><button>Search Cards</button></Link>
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