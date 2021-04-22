export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_user_success',
    CREATE_USER_REQUEST: 'users/create_user_request'
}

// Actions
export const getUsersRequest = () => ({
    type: Types.GET_USERS_REQUEST,
})

// Action we will be calling when we fetch the data. Items will be passed from API
export const getUserSuccess = ({items}) => ({
    type: Types.GET_USER_SUCCESS,
    payload: {
        items
    }
})

export const createUserRequest = ({firstName, lastName}) => ({
    type: Types.CREATE_USER_REQUEST,
    payload:{
        firstName,
        lastName
    }
})