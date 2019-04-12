import React, { Component } from 'react';
import { User } from './components/User';

export class App extends Component {

  renderUser(i) {
    const user = this.state.users[i];
    return (
        <User id={user.id} name={user.username} />
    );
  }

  render() {
    const {users} = this.props;
    return (
      <table border="1">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Click count</th>
            <th>Action</th>
          </tr>
          {
            users && users.map(user =>
              <User key={user.id} {...user} handleClick={this.props.handleClick} />
            )
          }
        </tbody>
      </table>
    );
  }

}
