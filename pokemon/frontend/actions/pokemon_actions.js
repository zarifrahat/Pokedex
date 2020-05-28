import * as APIUtil from "../util/api_util.js";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON"


export const receiveAllPokemon = ((pokemon)  => {
    return { 
        type: RECEIVE_ALL_POKEMON,
        pokemon: pokemon
    }

});

export const receiveSinglePokemon = ((pokemon) => {
    return {
        type: RECEIVE_SINGLE_POKEMON,
        pokemon: pokemon
    }

});

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = () => (dispatch) => (
    APIUtil.fetchSinglePokemon(id)
        .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)

