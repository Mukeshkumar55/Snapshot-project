import React from "react";
import "./style.css";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name1: null };
  }
  func = (search) => {
    this.setState({ name1: search.target.value });
  };

  func1 = (get) => {
    this.props.searching(get);
  };
  render() {
    return (
      <div className="searchpanel">
        <input onChange={this.func} type="text" />

        <button
          className="button"
          onClick={() => {
            this.func1(this.state.name1);
          }}
        >
          click here
        </button>
      </div>
    );
  }
}
export default Search;
