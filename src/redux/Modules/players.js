import { attackRedux } from "../../utils/functions";

const CREATE_PLAYERS = 'tank-game/gameSetup/CREATE_PLAYERS';
const ATTACK_PLAYER = 'tank-game/gameSetup/ATTACK_PLAYER';

const initialState = {
    playerOne: {},
    playerTwo: {},
    turn: true
};

export const createPlayers = (players) => ({
    type: CREATE_PLAYERS,
    payload: players
});

export const attackPlayer = (attacked, coordinate, attacker) => ({
    type: ATTACK_PLAYER,
    payload: {
        attacked,
        coordinate,
        attacker
    }
});

const playersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case(CREATE_PLAYERS):
            return {
                ...state,
                playerOne: action.payload[0],
                playerTwo: action.payload[1]
            };
        case(ATTACK_PLAYER):
            const attacked = action.payload.attacked;
            const coordinate = action.payload.coordinate;
            const attacker = action.payload.attacker;
            state[attacker].attackedLocations.push([-coordinate[0] + 49, coordinate[1]]);
            return {
                [attacker]: {
                    ...state[attacker],
                    attackedLocations: state[attacker].attackedLocations
                },
                [attacked]: attackRedux(state[attacked], coordinate),
                turn: !state.turn
            };
        default:
            return state;
    }
};

export default playersReducer;