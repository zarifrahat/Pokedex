import {entitiesReducer} from "./entities_reducer.js"
import { uiReducer } from "./ui_reducer.js"

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer
})