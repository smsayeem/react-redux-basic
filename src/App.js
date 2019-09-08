import React from "react";
import "./App.css";
import Home from "./components/home";
import User from "./components/user";
import { connect } from "react-redux";
import { setAge, setName } from "./store/actions/userAction";
import { addNumber, subtractNumber } from "./store/actions/mathAction";
import Math from "./components/math";

class App extends React.Component {
  render() {
    console.log("App props", this.props);
    return (
      <div className="App">
        <Home
          changeName={this.props.setName}
          changeAge={this.props.setAge}
          addNumber={this.props.addNumber}
          subtractNumber={this.props.subtractNumber}
        />
        <User name={this.props.name} age={this.props.age} />
        <Math result={this.props.result} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.user.name,
    age: state.user.age,
    result: state.math.result
  };
};
// dispatch an actions I can execute and send to my reducers
// store.dispatch({ type: "SET_AGE", payload: 21 });
function mapDispatchToProps(dispatch) {
  return {
    // setName: name => dispatch({ type: "SET_NAME", payload: name }),
    setName: name => dispatch(setName(name)),
    // setAge: age => dispatch({ type: "SET_AGE", payload: age })
    setAge: age => dispatch(setAge(age)),
    addNumber: num => dispatch(addNumber(num)),
    subtractNumber: num => dispatch(subtractNumber(num))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
