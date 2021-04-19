import {takeEvery, call, fork} from 'redux-saga/effects';
// We want the types and the actions
import * as actions from '../actions/users';

import * as api from '../api/users';

// get users is refered to as a worker saga
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        // Rest of the code will run after this call has resulted
        console.log(result)
    } catch(e){
        
    }
}

// Watcher for users
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
]

export default usersSagas;
