redux
react-redux
redux-saga

reactstrap

api used:
http://rem-rest-api.herokuapp.com/api/users

## Single saga steps:
- 1 create types 
```javascript
export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_user_success'
}
```

- 2 create action creators for fetch action and success

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

- 3 Create a reducer that will set the recived data

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