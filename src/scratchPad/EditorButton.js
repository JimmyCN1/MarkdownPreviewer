import React from "react";

function EditorButton(props) {
  let styles = {
    border: "none"
  };

  let handleClick = e => {
    // console.log(props.name);
    props.handleButton(props.name);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      style={styles}
      onClick={handleClick}
    >
      <i className={props.icon} />
    </button>
  );
}

export default EditorButton;
