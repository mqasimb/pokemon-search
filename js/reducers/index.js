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

var searchReducer = function(state, action) {
    state = state || initialState;
    
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
        var pokemonData = action.data;
        newState.currentPokemon = pokemonData.slice();
        return newState;
    }
    
    if(action.type === actions.CHANGE_OFFSET) {
        newState.currentIndex = action.currentOffset;
        return newState;
    }
    
    if(action.type === actions.FETCH_SEARCH_SUCCESS) {
        var filterCards = action.data.cards;
        newState.currentCards = filterCards.slice();
        return newState;
    }
    
    if(action.type === actions.FETCH_ALL_POKEMON_SUCCESS) {
        var pokemon = action.data.results;
        var next = action.data.next;
        var previous = action.data.previous;
        newState.currentPokemon = pokemon.slice();
        newState.nextPage = next;
        newState.previousPage = previous;
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
        var favoritePokemon = newState.favoritePokemon;
        favoritePokemon[action.pokemonName] = (favoritePokemon[action.pokemonName]) ? (false) : (true);
        newState.favoritePokemon = Object.assign({}, favoritePokemon);
        return newState;
    }
    
    return state;
}

module.exports = searchReducer;