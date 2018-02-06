import ActionTypes from '../constant/constant';


import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA6CyN1vWvgd7S1kglpR-igoWYLrvu52rQ",
    authDomain: "todo-app-beb38.firebaseapp.com",
    databaseURL: "https://todo-app-beb38.firebaseio.com",
    projectId: "todo-app-beb38",
    storageBucket: "todo-app-beb38.appspot.com",
    messagingSenderId: "852705610353"
};
firebase.initializeApp(config);


export function changeUserName(get) {
    return dispatch => {
        let todo = {
            todo: get,
            flag: false

        }
        firebase.database().ref('/').child("name").push(todo)
    }
}

export function getData() {
    return dispatch => {
        firebase.database().ref('/').child("name").on("child_added", function (data) {
            var obj = data.val();
            obj.id = data.key;
            dispatch({ type: ActionTypes.TODO, payload: obj })
        })

    }
}

export function callDelete(id, ind) {
    return dispatch => {
        firebase.database().ref('/').child(`name/${id}`).remove();
        dispatch({ type: ActionTypes.DELETETODO, payload: ind })


    }
}

export function callEdit(val, ind) {
    return dispatch => {
        dispatch({ type: ActionTypes.TODOEDIT, payload: ind })

    }
}
export function cancel(ind) {
    return dispatch => {
        dispatch({ type: ActionTypes.CANCEL, payload: ind })

    }
}
export function update(id, ind, val) {
    return dispatch => {
        firebase.database().ref('/').child(`name/${id}`).set({ "flag": false, "todo": val })
        dispatch({ type: ActionTypes.UPDATE, payload: ind, updateVAl: val })

    }
}
export function deleteAll() {
    return dispatch => {
        firebase.database().ref('/').child('name').remove()
        dispatch({ type: ActionTypes.DELETEALL })

    }
}