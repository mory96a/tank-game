import { combineReducers } from "redux";
import setupGameReducer from "./Modules/setupGame";
import playersReducer from "./Modules/players";

const rootReducer = combineReducers({
    setupGame: setupGameReducer,
    players: playersReducer
});

export default rootReducer;