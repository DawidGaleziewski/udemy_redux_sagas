import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getUsersRequest, createUserRequest} from '../actions/users';
import UsersList from './UsersList';
import NewUser from './NewUser';

class App extends Component {
  constructor(props){
    super(props);
    // Fire the request. Because saga is watching for this to run it will also get fired
    this.props.getUsersRequest()
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({firstName, lastName})
  }

  render(){
    const users = this.props.users
    return (

      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        <NewUser onSubmit={this.handleSubmit} />
        <UsersList users={users.items} />
      </div>
    )
  }
}


export default connect(({users}) => ({users}), {
  getUsersRequest,
  createUserRequest
})(App);
