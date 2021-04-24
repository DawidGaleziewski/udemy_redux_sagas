import {takeEvery, takeLatest, call, take, fork, put} from 'redux-saga/effects';
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
        // We should always try catch in requests. Otherwise the error could bubble up to other sagas causing issues
    } catch(e){
        yield put(actions.usersError({
            error: 'An error occured when trying to get the user'
        }))
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
        yield put(actions.usersError({
            error: 'An error occured when trying to delete the user'
        }))
    }

}

function* deleteUser(userId){
    console.log('action is: ', userId)
    try {
        yield call(api.deleteUser, userId);
        //  after we deleted the users we want to get a list of users
        yield call(getUsers);
    } catch(e){
        yield put(actions.usersError({
            error: 'An error occured when trying to delete the user'
        }))
    }
}

// Watcher for users
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

// Benefot of this is untill this delete request resolves, the wile loop will ignore any other delete actions. Blocking it from beeing triggered multiple times.
// It will stop watching for those requests untill the call was resolved
function* watchDeleteUserRequest(){
    while(true){
        // We cannot pass a worker to take effect. It is lower level helper.
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call (deleteUser, {
            userId: action.payload.userId
        })
    }
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]

export default usersSagas;
