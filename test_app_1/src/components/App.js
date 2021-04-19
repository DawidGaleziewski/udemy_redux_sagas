import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';

class App extends Component {
  constructor(props){
    super(props);
    // Fire the request. Because saga is watching for this to run it will also get fired
    this.props.getUsersRequest()
  }
  render(){
    return (
      <div>
        test
      </div>
    )
  }
}


export default connect(null, {
  getUsersRequest
})(App);
