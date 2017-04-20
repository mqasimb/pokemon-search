const react = require('react');
const actions = require('../actions/index');

var initialState = {
        inputValue: '',
        currentCards: [],
        currentPokemon: [],
        currentIndex: 0,
        nextPage: null,
        previousPage: null,
        showModal: false,
        linkedPokemon: {},
        favoritePokemon: {}
    };

var searchReducer = function(state=initialState, action) {
    var newState = Object.assign({}, state);
    
    if(action.type === actions.FETCH_SINGLE_POKEMON_SUCCESS) {
        newState.linkedPokemon = Object.assign({}, action.data);
        return newState;
    }
    
    if(action.type === actions.SHOW_MODAL) {
        newState.showModal = true;
        newState.clickedPokemon = action.clickedPokemon;
        return newState;
    }
    
    if(action.type === actions.CLOSE_MODAL) {
        newState.showModal = false;
        newState.clickedPokemon = '';
        return newState;
    }
    
    if(action.type === actions.FETCH_POKEMON_SUCCESS) {
        newState.currentPokemon = action.data.slice();
        return newState;
    }
    
    if(action.type === actions.CHANGE_OFFSET) {
        newState.currentIndex = action.currentOffset;
        return newState;
    }
    
    if(action.type === actions.FETCH_SEARCH_SUCCESS) {
        if(newState.inputValue === '') {
            newState.currentCards = [].slice();
        }
        else {
            newState.currentCards = action.data.cards.slice();
        }
        return newState;
    }
    
    if(action.type === actions.FETCH_ALL_POKEMON_SUCCESS) {
        newState.currentPokemon = action.data.results.slice();
        newState.nextPage = action.data.next;
        newState.previousPage = action.data.previous;
        return newState;
    }
    
    if(action.type === actions.INPUT_CHANGED) {
        newState.inputValue = action.inputValue;
        return newState;
    }
    
    if(action.type === actions.INPUT_SUBMIT) {
        newState.inputValue = '';
        return newState;
    }
    
    if(action.type === actions.TOGGLE_FAVORITE) {
        newState.favoritePokemon = Object.assign({}, newState.favoritePokemon);
        if(typeof(newState.favoritePokemon[action.pokemonName]) != 'object') {
            newState.favoritePokemon[action.pokemonName] = {};
            newState.favoritePokemon[action.pokemonName].id = action.id;
        }
        newState.favoritePokemon[action.pokemonName].favorite = (newState.favoritePokemon[action.pokemonName].favorite) ? (false) : (true);
        return newState;
    }
    
    return state;
}

module.exports = searchReducer;