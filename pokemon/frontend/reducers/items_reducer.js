import { RECEIVE_SINGLE_POKEMON} from '../actions/pokemon_actions';

export const itemsReducer = (state = {}, action) => {
    switch (action.type){ 
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign({}, state, action.pokemon.items);
        default: 
            return state;
    } 
}