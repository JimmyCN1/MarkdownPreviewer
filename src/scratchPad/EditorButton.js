import React from "react";

function EditorButton(props) {
  let styles = {
    border: "none"
  };

  let handleClick = e => {
    console.log(props.name);
    props.handleButton();
    // switch (props.name) {
    //   case "undo":
    //     break;
    //   case "redo":
    //     break;
    //   case "trash":
    //     break;
    // }
    // return "";
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
