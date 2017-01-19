var fetch = require('isomorphic-fetch');

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
function toggleFavorite() {
    return {
        type: TOGGLE_FAVORITE
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

var FETCH_ALL_POKEMON_SUCCESS = 'FETCH_ALL_POKEMON_SUCCESS';
var fetchAllPokemonSuccess = function(data) {
    return {
        type: FETCH_ALL_POKEMON_SUCCESS,
        data: data
    };
};

var FETCH_ALL_POKEMON_ERROR= 'FETCH_ALL_POKEMON_ERROR';
var fetchAllPokemonError = function(error) {
    return {
        type: FETCH_ALL_POKEMON_ERROR,
        error: error
    };
};

function fetchAllPokemon() {
    return function(dispatch) {
        var url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';
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
                        fetchAllPokemonSuccess(data)
                )
            })
            .catch(function(error) {
                return dispatch(
                    fetchAllPokemonError(error)
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

function fetchSinglePokemon(url) {
    return function(dispatch) {
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
                console.log(data.name)
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

exports.fetchSinglePokemon = fetchSinglePokemon;
exports.fetchSinglePokemonSuccess = fetchSinglePokemonSuccess;
exports.FETCH_SINGLE_POKEMON_SUCCESS = FETCH_SINGLE_POKEMON_SUCCESS;
exports.fetchSinglePokemonError = fetchSinglePokemonError;
exports.FETCH_SINGLE_POKEMON_ERROR = FETCH_SINGLE_POKEMON_ERROR;

exports.fetchAllPokemon = fetchAllPokemon;
exports.fetchAllPokemonSuccess = fetchAllPokemonSuccess;
exports.FETCH_ALL_POKEMON_SUCCESS = FETCH_ALL_POKEMON_SUCCESS;
exports.fetchAllPokemonError = fetchAllPokemonError;
exports.FETCH_ALL_POKEMON_ERROR = FETCH_ALL_POKEMON_ERROR;

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