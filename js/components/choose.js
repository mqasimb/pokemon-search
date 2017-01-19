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
                <img src='../../assets/titleimage.png' />
                <div className='choose-buttons'>
                    <Link to='/pokemon'><Button bsStyle='success' bsSize="large" className='home-buttons'>Search Pokedex</Button></Link>
                    <Link to='/cards'><Button bsStyle='success' bsSize="large" className='home-buttons'>Search Cards</Button></Link>
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