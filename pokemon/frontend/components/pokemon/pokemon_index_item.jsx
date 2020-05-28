import React from 'react'
import { Link } from "react-router-dom";    

class PokemonIndexItem extends React.Component{

    render(){
        return(
            <Link to={"/pokemon/" + this.props.pokemon.id}>
                <li>  
                    <img src={this.props.pokemon.image_url} width="30px"/>
                    {this.props.pokemon.name}
                </li>
            </Link>
        )
    }
}


export default PokemonIndexItem;