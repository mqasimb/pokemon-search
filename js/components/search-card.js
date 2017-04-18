const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const CardList = require('./card-list');
const { browserHistory } = require('react-router');
const { Button, Col, Row } = require('react-bootstrap');

class SearchCard extends React.Component {
    inputUpdated(event) {
        this.props.dispatch(actions.inputChanged(event.target.value));
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
    }
    formSubmitted(event) {
        event.preventDefault();
        this.props.dispatch(actions.fetchSearchName(this.props.inputValue));
        this.props.dispatch(actions.inputSubmit());
    }
    render() {
        var formStyle = {
            width: '100%'
        }
        var inputStyle = {
            width: '50%',
            maxWidth: '600px',
            marginBottom: '15px'
        }
        var colStyle = {
            textAlign: 'center'
        }
        var buttonStyle = {
            marginBottom: '15px'    
        }
        return(
            <div className='search-card'>
            <Col style={colStyle} xs={12} sm={12} md={12} lg={12}>
            <form style={formStyle} onSubmit={this.formSubmitted.bind(this)}>
            <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
            <input style={inputStyle} type='text' value={this.props.inputValue} onChange={this.inputUpdated.bind(this)} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
            <Button style={buttonStyle} bsStyle="success">Search Cards</Button>
            </Col>
            </Row>
            </form>
            </Col>
            <CardList />
            </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        inputValue: state.inputValue,
        currentCards: state.currentCards,
        nextPage: state.nextPage,
        currentPokemon: state.currentPokemon
    })
}

var Container = connect(mapStateToProps)(SearchCard);

module.exports = Container;