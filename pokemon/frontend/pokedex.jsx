import React from "react";
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from "./util/api_util.js";
import { receiveAllPokemon } from "./actions/pokemon_actions.js";
import { requestAllPokemon } from "./actions/pokemon_actions.js";
import { configureStore} from "./store/store.js"
import { selectAllPokemon } from "./reducers/selectors.js";
import Root from "./components/root.jsx";
import { HashRouter, Route } from "react-router-dom";



document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');
    const store = configureStore()
    ReactDOM.render(<Root store={store}/>, root)

    window.fetchAllPokemon = fetchAllPokemon
    window.receiveAllPokemon = receiveAllPokemon
    window.requestAllPokemon = requestAllPokemon
    window.getState = store.getState 
    window.dispatch = store.dispatch
    window.selectAllPokemon = selectAllPokemon
  
})