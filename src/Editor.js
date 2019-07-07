import React from "react";

function Editor(props) {
  // console.log(JSON.stringify(props));

  let divStyles = {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center"
    // padding: "10px 0px"
  };

  const headerStyle = {
    width: "100%",
    padding: "10px",
    paddingLeft: "30px",
    backgroundColor: "grey"
  };

  const textAreaStyles = {
    rows: "200",
    width: "90%",
    maxWidth: "700px",
    height: "90%",
    autofocus: "autofocus",
    overflow: "auto",
    margin: "10px"
  };

  return (
    <div style={divStyles}>
      <header style={headerStyle}>Editor</header>
      <textarea
        rows="74"
        style={textAreaStyles}
        value={props.text}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Editor;
