import React from "react";

function NavButton(props) {
  let handleClick = () => {
    if (props.name === "orientation") {
    } else if (props.name === "order") {
      props.changeOrder();
    }
  };

  let styles = {
    border: "none"
  };

  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      name={props.orientation}
      style={styles}
      onClick={handleClick}
    >
      <i className={props.img} />
    </button>
  );
}

export default NavButton;
