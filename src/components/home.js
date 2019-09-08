import React from "react";

class Home extends React.Component {
  state = {
    name: "",
    age: null,
    num1: null,
    num2: null
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleNameClick() {
    this.props.changeName(this.state.name);
    this.setState({
      name: ""
    });
  }
  handleAgeClick() {
    this.props.changeAge(this.state.age);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleAdd() {
    this.props.addNumber(this.state.num1);
    console.log("handleAdd clicked", this.state.num1);
  }
  handleSubtract() {
    this.props.subtractNumber(this.state.num2);
    console.log("subtract button clicked", this.state.num2);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              placeholder="Enter your name to change"
            />
            <button onClick={() => this.handleNameClick()}>Change Name</button>
          </div>
          <div>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={e => this.handleChange(e)}
              placeholder="Enter age to change"
            />
            <button onClick={() => this.handleAgeClick()}>Change Age</button>
          </div>
          <div>
            <input
              type="number"
              name="num1"
              value={this.state.num1}
              onChange={e => this.handleChange(e)}
            />
            <button onClick={() => this.handleAdd()}>Add</button>
          </div>
          <div>
            <input
              type="number"
              name="num2"
              value={this.state.num2}
              onChange={e => this.handleChange(e)}
            />
            <button onClick={() => this.handleSubtract()}>Subtract</button>
          </div>
          <div></div>
        </form>
        <hr />
      </div>
    );
  }
}
export default Home;
