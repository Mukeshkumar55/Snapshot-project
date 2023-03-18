import React from "react";
import Button from "./buttonpanel";
import Display from "./displaypanel";
import Search from "./searchpanel";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Picture" };
  }
  func = (displayName) => {
    this.setState({
      name: displayName,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">IMAGES</h1>
        <h1 className="heading">{this.state.name}</h1>
        <Search searching={this.func} />
        <Button funcSending={this.func} />
        <Display display={this.state.name} />
      </div>
    );
  }
}
export default App;
