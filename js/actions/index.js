var fetch = require('isomorphic-fetch');
var PokemonList = require('../../assets/poke').pokemonList;

const INPUT_CHANGED = 'INPUT_CHANGED';
function inputChanged(inputValue) {
    return {
        type: INPUT_CHANGED,
        inputValue: inputValue
    }
}

const INPUT_SUBMIT = 'INPUT_SUBMIT';
function inputSubmit() {
    return {
        type: INPUT_SUBMIT
    }
}

const CALL_LOADING = 'CALL_LOADING';
function callLoading() {
    return {
        type: CALL_LOADING
    }
}

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
function toggleFavorite(pokemonName, id) {
    return {
        type: TOGGLE_FAVORITE,
        pokemonName: pokemonName,
        id: id
    }
}

var FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
var fetchSearchSuccess = function(data) {
    return {
        type: FETCH_SEARCH_SUCCESS,
        data: data
    };
};

var FETCH_SEARCH_ERROR= 'FETCH_SEARCH_ERROR';
var fetchSearchError = function(error) {
    return {
        type: FETCH_SEARCH_ERROR,
        error: error
    };
};

function fetchSearchName(pokemonName) {
    return function(dispatch) {
        var url = 'https://api.pokemontcg.io/v1/cards?name='+pokemonName;
        return fetch(url).then(function(response) {
            if(response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                return dispatch(
                    fetchSearchSuccess(data)
                )
            })
            .catch(function(error) {
                return dispatch(
                    fetchSearchError(error)
                )
            })
        }
}

var FETCH_SINGLE_POKEMON_SUCCESS = 'FETCH_SINGLE_POKEMON_SUCCESS';
var fetchSinglePokemonSuccess = function(data) {
    return {
        type: FETCH_SINGLE_POKEMON_SUCCESS,
        data: data
    };
};

var FETCH_SINGLE_POKEMON_ERROR= 'FETCH_SINGLE_POKEMON_ERROR';
var fetchSinglePokemonError = function(error) {
    return {
        type: FETCH_SINGLE_POKEMON_ERROR,
        error: error
    };
};

function fetchSinglePokemon(pokemonName) {
    return function(dispatch) {
        return fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName+'/').then(function(response) {
            if(response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                return dispatch(
                    fetchSinglePokemonSuccess(data)
                )
            })
            .catch(function(error) {
                return dispatch(
                    fetchSinglePokemonError(error)
                )
            })
        }
}

const CHANGE_OFFSET = 'CHANGE_OFFSET';
function changeOffset(currentOffset) {
    return {
        type: CHANGE_OFFSET,
        currentOffset: currentOffset
    }
}

var FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
var fetchPokemonSuccess = function(data) {
    return {
        type: FETCH_POKEMON_SUCCESS,
        data: data
    };
};

var FETCH_POKEMON_ERROR= 'FETCH_POKEMON_ERROR';
var fetchPokemonError = function(error) {
    return {
        type: FETCH_POKEMON_ERROR,
        error: error
    };
};

function fetchPokemon(offset) {
    return function(dispatch) {
        return dispatch(fetchPokemonSuccess(PokemonList.slice(offset,offset+36)))
    }
}

var CLOSE_MODAL= 'CLOSE_MODAL';
var closeModal = function() {
    return {
        type: CLOSE_MODAL
    };
};

var SHOW_MODAL= 'SHOW_MODAL';
var showModal = function(clickedPokemon) {
    return {
        type: SHOW_MODAL,
        clickedPokemon: clickedPokemon
    };
};

exports.CLOSE_MODAL = CLOSE_MODAL;
exports.closeModal = closeModal;
exports.SHOW_MODAL = SHOW_MODAL;
exports.showModal = showModal;

exports.CHANGE_OFFSET = CHANGE_OFFSET;
exports.changeOffset = changeOffset;

exports.fetchPokemon = fetchPokemon;
exports.fetchPokemonSuccess = fetchPokemonSuccess;
exports.FETCH_POKEMON_SUCCESS = FETCH_POKEMON_SUCCESS;
exports.fetchPokemonError = fetchPokemonError;
exports.FETCH_POKEMON_ERROR = FETCH_POKEMON_ERROR;

exports.fetchSinglePokemon = fetchSinglePokemon;
exports.fetchSinglePokemonSuccess = fetchSinglePokemonSuccess;
exports.FETCH_SINGLE_POKEMON_SUCCESS = FETCH_SINGLE_POKEMON_SUCCESS;
exports.fetchSinglePokemonError = fetchSinglePokemonError;
exports.FETCH_SINGLE_POKEMON_ERROR = FETCH_SINGLE_POKEMON_ERROR;

exports.fetchSearchName = fetchSearchName;
exports.fetchSearchSuccess = fetchSearchSuccess;
exports.FETCH_SEARCH_SUCCESS = FETCH_SEARCH_SUCCESS;
exports.fetchSearchError = fetchSearchError;
exports.FETCH_SEARCH_ERROR = FETCH_SEARCH_ERROR;

exports.INPUT_SUBMIT = INPUT_SUBMIT;
exports.inputSubmit = inputSubmit;
exports.INPUT_CHANGED = INPUT_CHANGED;
exports.inputChanged = inputChanged;
exports.CALL_LOADING = CALL_LOADING;
exports.callLoading = callLoading;
exports.TOGGLE_FAVORITE = TOGGLE_FAVORITE;
exports.toggleFavorite = toggleFavorite;