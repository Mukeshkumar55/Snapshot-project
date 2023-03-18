import React from "react";
class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  func = (displayName) => {
    this.props.funcSending(displayName);
  };
  render() {
    return (
      <div className="button-list">
        <button
          className="buttons"
          onClick={() => {
            this.func("Mountain");
          }}
        >
          Mountain
        </button>
        <button
          className="buttons"
          onClick={() => {
            this.func("Beach");
          }}
        >
          Beach
        </button>
        <button
          className="buttons"
          onClick={() => {
            this.func("Birds");
          }}
        >
          Birds
        </button>
        <button
          className="buttons"
          onClick={() => {
            this.func("Foods");
          }}
        >
          Foods
        </button>
      </div>
    );
  }
}
export default Button;
