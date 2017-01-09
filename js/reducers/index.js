const react = require('react');
const actions = require('../actions/index');

var initialState = {
        input: '',
        currentCards: []
    };

var searchReducer = function(state, action) {
    state = state || initialState;
    
    var newState = Object.assign({}, state);
    
    if(action.type === actions.FETCH_SEARCH_SUCCESS) {
        var filterCards = action.data.cards;
        newState.currentCards = filterCards.slice(0);
        return newState;
    }
    return state;
}

module.exports = searchReducer;