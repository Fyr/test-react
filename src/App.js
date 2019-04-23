import React, { Component } from 'react';
import { User } from './components/User';
import { fetchDog, fetchCat } from './actions';

export class App extends Component {

  renderUser(i) {
    const user = this.state.users[i];
    return (
        <User id={user.id} name={user.username} />
    );
  }

  render() {
    const {users} = this.props;
    console.log('APP Props:', this.props);
    return (
        <div>
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
          <button onClick={() => this.props.fetchDog()}>Show Dog</button>
          <button onClick={() => this.props.fetchCat()}>Show Cat</button>
          {
           this.props.apiData.loading
           ? <p>Loading...</p>
           : this.props.apiData.error
              ? <p>Error, try again</p>
              : <p><img src={this.props.apiData.url} alt="pet"/></p>
           }
        </div>
    );
  }

}
