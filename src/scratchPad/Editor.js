import React from "react";

import EditorButton from "./EditorButton";

function Editor(props) {
  let divStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: "700px",
    padding: "0px 10px"
  };

  const textAreaStyles = {
    rows: "200",
    width: "90%",
    maxWidth: "700px",
    height: "90%",
    autofocus: "autofocus",
    overflow: "auto",
    margin: "0px 10px"
  };

  return (
    <div style={divStyles}>
      <header style={headerStyle}>
        <h3>Editor</h3>
        <EditorButton
          name="undo"
          icon="fas fa-undo-alt"
          handleButton={props.handleButton}
        />
        <EditorButton
          name="redo"
          icon="fas fa-redo-alt"
          handleButton={props.handleButton}
        />
        <EditorButton
          name="trash"
          icon="far fa-trash-alt"
          handleButton={props.handleButton}
        />
      </header>
      <textarea
        rows="40"
        style={textAreaStyles}
        value={props.text}
        onChange={props.handleChange}
        placeholder="Please type your markdown here..."
        autoFocus
      />
    </div>
  );
}

export default Editor;
