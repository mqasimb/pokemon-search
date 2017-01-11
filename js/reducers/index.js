const react = require('react');
const actions = require('../actions/index');

var initialState = {
        inputValue: '',
        currentCards: [],
        currentPokemon: [],
        currentIndex: 0,
        nextPage: null,
        previousPage: null
    };

var searchReducer = function(state, action) {
    state = state || initialState;
    
    var newState = Object.assign({}, state);
    
    if(action.type === actions.FETCH_SINGLE_POKEMON_SUCCESS) {
        var pokemonData = newState.currentPokemon.slice();
        pokemonData.push(action.data);
        newState.currentPokemon = pokemonData.forEach(function(item) {
            return {'img':item.sprites.front_default,'name':item.name, 'id':item.id}
        });
        return newState;
    }
    
    
    if(action.type === actions.FETCH_POKEMON_SUCCESS) {
        var pokemonData = action.data;
        newState.currentPokemon = pokemonData.slice();
        console.log(newState.currentPokemon);
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
    
    return state;
}

module.exports = searchReducer;