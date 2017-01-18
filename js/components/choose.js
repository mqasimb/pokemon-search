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
            Pokemon Search
                <div className='choose-buttons'>
                    <Link to='/pokemon'><Button bsStyle='success' bsSize="large" className='col-lg-12'>Search Pokedex</Button></Link>
                    <Link to='/cards'><Button bsStyle='success' bsSize="large" className='col-md-6'>Search Cards</Button></Link>
                </div>
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