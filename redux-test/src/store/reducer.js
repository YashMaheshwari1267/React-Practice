import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    result: []
}

const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.INCREMENT){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === actionTypes.DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === actionTypes.ADD_INCREMENT){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === actionTypes.SUB_DECREMENT){
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if(action.type === actionTypes.STORE_RESULT){
        return {
            ...state,
            result:  state.result.concat({id: new Date(), val: state.counter})
        }
    }
    if(action.type === actionTypes.DELETE_RESULT){
        const updatedArray = state.result.filter(result => result.id !== action.strElid)
        return {
            ...state,
            result: updatedArray
        }
    }
    return state;
};

export default reducer;