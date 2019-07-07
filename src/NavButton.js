import React from "react";

class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleClick = () => {
    if (this.props.name === "orientation") {
    } else if (this.props.name === "order") {
      this.props.changeOrder();
    }
  };

  styles = {
    border: "none"
  };

  render() {
    // this.state.hover && (this.styles.backgroundColor = "#FFD293");
    return (
      <button
        type="button"
        class="btn btn-outline-dark"
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
