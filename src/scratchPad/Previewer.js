import React from "react";

import ReactHtmlParser from "react-html-parser";

function Previewer(props) {
  let styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 10px"
  };

  let innerStyle = {
    width: "95%",
    maxWidth: "700px",
    backgroundColor: "white"
  };

  const headerStyle = {
    width: "90%",
    maxWidth: "700px",
    padding: "0px"
    // backgroundColor: "#EDE580"
  };

  return (
    <div style={styles}>
      <header style={headerStyle}>
        <h3 paddingLeft="10px">Previewer</h3>
      </header>
      <div style={innerStyle}> {ReactHtmlParser(props.preview)} </div>
    </div>
  );
}

export default Previewer;
