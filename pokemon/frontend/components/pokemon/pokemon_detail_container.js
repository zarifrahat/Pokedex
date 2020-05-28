import {connect} from 'react-redux'
import {selectAllPokemon} from "../../reducers/selectors.js"
import {requestSinglePokemon} from "../../actions/pokemon_actions.js"
import PokemonDetail from "./pokemon_detail.jsx"

const mapStateToProps = (state) => {
  // piece of state that container subscribes to
    return {
        pokemon: selectAllPokemon(state)
    }
};

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => {
        return dispatch(requestSinglePokemon(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);