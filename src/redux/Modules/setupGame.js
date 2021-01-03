const CREATE_GAME = 'tank-game/gameSetup/CREATE_GAME';

export const createGame = (gameSetup) => ({
    type: CREATE_GAME,
    payload: gameSetup
});

const initialState = {
    setup: []
};

const setupGameReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case (CREATE_GAME):
            return {
                ...state,
                setup: action.payload
            }
        default :
            return state;
    }
};

export default setupGameReducer;