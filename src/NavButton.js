import React from "react";

function NavButton(props) {
  let handleClick = () => {
    if (props.name === "orientation") {
    } else if (props.name === "order") {
      props.changeOrder();
    }
  };

  let styles = {
    borderColor: "lightgrey",
    backgroundColor: "lightgrey !important",
    color: ""
  };

  return (
    <button name={props.orientation} style={styles} onClick={handleClick}>
      <i className={props.img} />
    </button>
  );
}

export default NavButton;
