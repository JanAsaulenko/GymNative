import { combineReducers } from "redux";

const initialState = {
    counter: 0
};


const counterReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "RETURNED_DATA": {
            console.log(action);
            return { ...state, ["data"]: action.payload }
        }

        case 'INCREASE_COUNTER_ASYNC': {
            return {
                ...state, counter: state.counter + action.payload
            }
        }
        case 'DECREASE_COUNTER': {
            return {
                ...state, counter: state.counter - action.payload
            }
        }
        case "INCRESE": {
            console.log('hmmm');
            return state
        }
        default: return state
    }

}



export const rootReducer = combineReducers({
    counter: counterReducer
})