import React from 'react'
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }

    render() {
        const pokemonItems = this.props.pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} />
        ));
        return (

            <section className="pokedex">
                <ol>{pokemonItems}</ol>
            </section>
  
        );


    }
}

export default PokemonIndex;
