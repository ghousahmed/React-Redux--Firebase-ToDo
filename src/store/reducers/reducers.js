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
            state.todo.splice(action.payload, 1)
            return ({
                todo: state.todo.concat()
            })
        case ActionTypes.TODOEDIT:
            state.todo[action.payload].flag = "true"
            return ({
                todo: state.todo.concat()
            })

        case ActionTypes.CANCEL:
            state.todo[action.payload].flag = false
            return ({
                todo: state.todo.concat()
            })
        case ActionTypes.UPDATE:
            state.todo[action.payload].todo = action.updateVAl
            state.todo[action.payload].flag = false
            return ({
                todo: state.todo.concat()
            })
        case ActionTypes.DELETEALL:
            // state.todo = 
            return ({
                todo: []
            })

        default:
            return state;
    }

}