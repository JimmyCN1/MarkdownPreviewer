import React from "react";

function EditorButton(props) {
  let styles = {
    border: "none"
  };

  return (
    <button type="button" class="btn btn-outline-dark" style={styles}>
      <i class={props.icon} />
    </button>
  );
}

export default EditorButton;
