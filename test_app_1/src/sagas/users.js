import {takeEvery, takeLatest, call, fork, put} from 'redux-saga/effects';
// We want the types and the actions
import * as actions from '../actions/users';

import * as api from '../api/users';

// get users is refered to as a worker saga
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        // Rest of the code will run after this call has resulted
        console.log(result)
        yield put(actions.getUserSuccess({items: result.data.data}))
    } catch(e){
        
    }
}

// Action will be pased from the action to the worker saga
function* createUser(action){
    console.log('honk action', action)
    try {
        // if we want to pass arguments to this function we need to pass it as separate arguments
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
        // We can call a saga inside a saga
        yield call(getUsers);
    }catch(e){
        console.log('error')
    }

}

// Watcher for users
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
]

export default usersSagas;
