var fetch = require('isomorphic-fetch');
var PokemonList = require('../../assets/poke').pokemonList;

export const INPUT_CHANGED = 'INPUT_CHANGED';
export function inputChanged(inputValue) {
    return {
        type: INPUT_CHANGED,
        inputValue: inputValue
    }
}

export const INPUT_SUBMIT = 'INPUT_SUBMIT';
export function inputSubmit() {
    return {
        type: INPUT_SUBMIT
    }
}

export const CALL_LOADING = 'CALL_LOADING';
export function callLoading() {
    return {
        type: CALL_LOADING
    }
}

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export function toggleFavorite(pokemonName, id) {
    return {
        type: TOGGLE_FAVORITE,
        pokemonName: pokemonName,
        id: id
    }
}

export var FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export var fetchSearchSuccess = function(data) {
    return {
        type: FETCH_SEARCH_SUCCESS,
        data: data
    };
};

export var FETCH_SEARCH_ERROR= 'FETCH_SEARCH_ERROR';
export var fetchSearchError = function(error) {
    return {
        type: FETCH_SEARCH_ERROR,
        error: error
    };
};

export function fetchSearchName(pokemonName) {
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
                console.log(data)
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

export var FETCH_SINGLE_POKEMON_SUCCESS = 'FETCH_SINGLE_POKEMON_SUCCESS';
export var fetchSinglePokemonSuccess = function(data) {
    return {
        type: FETCH_SINGLE_POKEMON_SUCCESS,
        data: data
    };
};

export var FETCH_SINGLE_POKEMON_ERROR= 'FETCH_SINGLE_POKEMON_ERROR';
export var fetchSinglePokemonError = function(error) {
    return {
        type: FETCH_SINGLE_POKEMON_ERROR,
        error: error
    };
};

export function fetchSinglePokemon(pokemonName) {
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

export const CHANGE_OFFSET = 'CHANGE_OFFSET';
export function changeOffset(currentOffset) {
    return {
        type: CHANGE_OFFSET,
        currentOffset: currentOffset
    }
}

export var FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export var fetchPokemonSuccess = function(data) {
    return {
        type: FETCH_POKEMON_SUCCESS,
        data: data
    };
};

export var FETCH_POKEMON_ERROR= 'FETCH_POKEMON_ERROR';
export var fetchPokemonError = function(error) {
    return {
        type: FETCH_POKEMON_ERROR,
        error: error
    };
};

export function fetchPokemon(offset) {
    return function(dispatch) {
        return dispatch(fetchPokemonSuccess(PokemonList.slice(offset,offset+36)))
    }
}

export var CLOSE_MODAL= 'CLOSE_MODAL';
export var closeModal = function() {
    return {
        type: CLOSE_MODAL
    };
};

export var SHOW_MODAL= 'SHOW_MODAL';
export var showModal = function(clickedPokemon) {
    return {
        type: SHOW_MODAL,
        clickedPokemon: clickedPokemon
    };
};