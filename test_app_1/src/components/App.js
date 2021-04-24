import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest, deleteUserRequest, usersError} from '../actions/users';
import UsersList from './UsersList';
import NewUser from './NewUser';
import {Alert} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props);
    // Fire the request. Because saga is watching for this to run it will also get fired
    this.props.getUsersRequest()
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({firstName, lastName})
  }

  handleDeleteUserClick = (userId) => {
    // Redux action
    this.props.deleteUserRequest(userId)
  }

  handleOnCloseAlert = () => {
    this.props.usersError({
      error: ''
    })
  }

  render(){
    const users = this.props.users
    return (

      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleOnCloseAlert}>
          {this.props.users.error}
        </Alert>
        <NewUser onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items} />
      </div>
    )
  }
}


export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
})(App);
