import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {id: 1, username: 'User 1'},
        {id: 2, username: 'UseR 2'},
        {id: 3, username: 'User Longname 3'}
      ]
    };
  }

  render() {
    const UserList = this.state.users.map(user => <User id={user.id} name={user.username} />);
    return (
      <table border="1">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Username</th>
          </tr>
          {UserList}
        </tbody>
      </table>
    );
  }

  renderUser(i) {
    const user = this.state.users[i];
    return (
      <User id={user.id} name={user.username} />
    );
  }

}

class User extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}!</td>
      </tr>
    );
  }
}

export default App;
