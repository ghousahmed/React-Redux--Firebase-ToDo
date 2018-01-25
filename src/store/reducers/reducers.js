import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
   userName: "",
   todo: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
        })
        case ActionTypes.TODO:
            return ({
                ...state,
                todo: state.todo.concat(action.payload)
        })
        case ActionTypes.DELETETODO:
        let ids = state.todo[action.payload].id
        state.todo.splice(action.payload,1)
        return({
            todo :  state.todo.concat()
    })      
      
        default:
            return state;
    }

}