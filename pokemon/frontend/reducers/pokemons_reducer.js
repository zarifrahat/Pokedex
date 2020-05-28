import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

export const pokemonReducer = (state = {}, action) => {
    switch (action.type){ 
        case RECEIVE_ALL_POKEMON:
            return Object.assign({},state,action.pokemon);
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, state, action.pokemon);
        default: 
            return state;
    } 
}
