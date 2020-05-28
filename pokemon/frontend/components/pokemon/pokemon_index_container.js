import {connect} from 'react-redux'
import {selectAllPokemon} from "../../reducers/selectors.js"
import {requestAllPokemon} from "../../actions/pokemon_actions.js"
import PokemonIndex from "./pokemon_index.jsx"

const mapStateToProps = (state) => {
  // piece of state that container subscribes to
    return {
        pokemon: selectAllPokemon(state)
    }
};

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => {
        return dispatch(requestAllPokemon());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndex);