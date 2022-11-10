import React, { Component } from 'react'
import './UsersList.css'

class UsersList extends Component {
    state = {  } 
    render() { 
        const users = this.props.users.map(user => (
            <li key={user.login.uuid}>
                <img src={user.picture.large} alt={user.name.last} />
                <h4>{user.name.title} {user.name.first} {user.name.last}</h4>
            </li>
        ))
        return (
            <ul className="users">
                {users}
            </ul>
        );
    }
}
 
export default UsersList;