const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const PokemonList = require('./pokemon-list')
const { browserHistory } = require('react-router');
const { Link } = require('react-router');
const { Button } = require('react-bootstrap');

class Search extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex));
    }
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
    }
    formSubmitted(event) {
        event.preventDefault();
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
        this.props.dispatch(actions.inputSubmit());
    }
    nextButtonClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex+36));
        this.props.dispatch(actions.changeOffset(this.props.currentIndex+36));
    }
    previousButtonClick() {
        this.props.dispatch(actions.fetchPokemon(this.props.currentIndex-36));
        this.props.dispatch(actions.changeOffset(this.props.currentIndex-36));
    }
    render() {
        var buttonStyle = {
            marginLeft: '20px',
            marginRight: '20px'
        }
        var previousButton = (this.props.currentIndex >= 36) ? (<Button style={buttonStyle} bsStyle="success" onClick={this.previousButtonClick.bind(this)}>Previous</Button>) : (<Button bsStyle="success" onClick={this.previousButtonClick.bind(this)} disabled>Previous</Button>); 
        var nextButton = ((this.props.currentPokemon.length > 35)) ? (<Button style={buttonStyle} bsStyle="success" onClick={this.nextButtonClick.bind(this)}>Next</Button>) : (<Button bsStyle="success" onClick={this.nextButtonClick.bind(this)} disabled>Next</Button>);
        return (
            <div className='search-card'>
                <div className='control-buttons'>
                    {previousButton}{nextButton}
                </div>
                <PokemonList />
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return({
        inputValue: state.inputValue,
        currentPokemon: state.currentPokemon,
        currentIndex: state.currentIndex
    })
}

var Container = connect(mapStateToProps)(Search);

module.exports = Container;