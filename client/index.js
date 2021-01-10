import React from "react";
import { render } from "react-dom";
import axios from "axios";
import UserList from "./components/UserList.jsx";

class App extends React.Component {
  state = { users: [] };

  componentDidMount = async () => {
    try {
      const { data } = await axios.get("/api/users");
      this.setState({ users: data });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <div>
        <h1>Wow, these users! AND TRAVIS!</h1>
        <UserList users={this.state.users} />)
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
