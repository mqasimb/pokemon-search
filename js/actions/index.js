var fetch = require('isomorphic-fetch');

const INPUT_CHANGED = 'INPUT_CHANGED';
function inputChanged(input) {
    return {
        type: INPUT_CHANGED,
        input: input
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
    console.log(data.cards);
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
                console.log(response);
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

exports.fetchSearchName = fetchSearchName;
exports.fetchSearchSuccess = fetchSearchSuccess;
exports.FETCH_SEARCH_SUCCESS = FETCH_SEARCH_SUCCESS;
exports.fetchSearchError = fetchSearchError;
exports.FETCH_SEARCH_ERROR = FETCH_SEARCH_ERROR;

exports.INPUT_CHANGED = INPUT_CHANGED;
exports.inputChanged = inputChanged;
exports.CALL_LOADING = CALL_LOADING;
exports.callLoading = callLoading;
exports.TOGGLE_FAVORITE = TOGGLE_FAVORITE;
exports.toggleFavorite = toggleFavorite;