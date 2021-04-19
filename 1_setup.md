redux
react-redux
redux-saga

reactstrap

api used:
http://rem-rest-api.herokuapp.com/api/users

## Single saga steps:
- 1. create types 
```javascript
export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_user_success'
}
```

- 2. create action creators for fetch action and success

```javascript
export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST,
})

export const getUserSuccess = ({items}) => ({
    type: Types.GET_USER_SUCCESS,
    payload: {
        items
    }
})
```

- 3. Create a reducer that will set the recived data

```javascript
import {Types} from '../actions/users';

const INITIAL_STATE = {
    items: []
}

export default function users(state = INITIAL_STATE, action){
    switch(action.type){
        case Types.GET_USER_SUCCESS:{
            return {
                items: action.payload.items
            }
        }
    }
}
```

- 4. Watcher saga

Watchers sagas are a generator functions that watch for specific action type to be dispatched and then run a function called worker saha

```javascript
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
```

- 5. Worker saga
Worker saga is run when specific action was dispatched


- 6. Request for api

``` javascript
import axios from 'axios';
export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}

```

- 7. Run the request in the worker

```javascript
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        // Rest of the code will run after this call has resulted
        console.log(result)
    } catch(e){
        
    }
}
```

- 8. Fork the watcher so that it runs on its own thread
```javascript

const usersSagas = [
    fork(watchGetUsersRequest)
]

```

- 9. Add watcher forked thread to root saga

```javascript

export default function* rootSaga(){
    yield all([...UsersSagas])
}
```

- 10. Hook up saga middleware to redux

# Good practices
best is to align the sagas structure similar to redux actions.
i.e if we have user.js actions we can have a users.js saga

There are couple a ways to design how sagas react to dispatched actions.
Easiest helper is 'takeEvery'

- 'takeEvery' helper will take every action we dispatch.

Scenario when we have a deleteUser action.
With takeEvery if user click two times the next call may result in error.

We can block the saga during the request until this saga has completed. This is called a blocking saga pattern.

The point of sagas is to describe how the side effects are called

takeEvery helper is known as non-blocking saga