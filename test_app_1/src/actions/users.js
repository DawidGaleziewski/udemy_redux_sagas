export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_user_success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    USERS_ERROR: 'users/error'

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

export const deleteUserRequest = (userId) => ({
    type: Types.DELETE_USER_REQUEST,
    payload: {
        userId
    }
})

export const usersError = ({error}) => ({
    type: Types.USERS_ERROR,
    payload: {
        error
    }
})