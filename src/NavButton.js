import React from "react";

class NavButton extends React.Component {
  constructor(props) {
    super(props);
  }

  styles = {
    borderColor: "lightgrey",
    backgroundColor: "lightgrey !important",
    color: ""
  };

  handleClick = event => {
    if (this.props.name === "orientation") {
    } else if (this.props.name === "order") {
      this.props.changeOrder();
    }
  };

  render() {
    return (
      <button
        name={this.props.orientation}
        style={this.styles}
        onClick={this.handleClick}
      >
        <i className={this.props.img} />
      </button>
    );
  }
}

export default NavButton;
