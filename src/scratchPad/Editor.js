import React from "react";

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
    // paddingLeft: "30px"
    // backgroundColor: "grey"
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
        <div>Options</div>
      </header>
      <textarea
        rows="71"
        style={textAreaStyles}
        value={props.text}
        onChange={props.handleChange}
        placeholder="Please type your markdown here..."
      />
    </div>
  );
}

export default Editor;
