import React, { Component } from 'react';

export class User extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.username}</td>
        <td>{this.props.count}</td>
        <td><button onClick={() => { this.props.handleClick(this.props.id); }}>Click</button></td>
      </tr>
    );
  }
}
