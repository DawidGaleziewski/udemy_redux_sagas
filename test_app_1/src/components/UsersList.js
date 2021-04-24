import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';

const UsersList = ({users, onDeleteUser}) => {
    console.log('users is ', users)
    return <ListGroup>
        {users.sort((a,b) => {
            if(a.firstName > b.firstName){
                return 1;
            } else if(a.firstName < b.firstName){
                return -1
            } else if(a.lastName > b.flastName){
                return 1
            } else if(a.lastName < b.flastName){
                return -1
            } else {
                return 0
            }
        }).map((user) => <ListGroupItem key={user.id}>
            <section style={{display: 'flex'}}>
                <div style={{flexGrow:1, margin: 'auto 0'}}>
                        {user.firstName} {user.lastName}
                </div>
                <div>
                    <Button onClick={()=> onDeleteUser(user.id)} outline color="danger">
                        Delete
                    </Button>
                </div>
            </section>
        </ListGroupItem>)}
    </ListGroup>
}

export default UsersList