import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>User</h1>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}
export default User;
