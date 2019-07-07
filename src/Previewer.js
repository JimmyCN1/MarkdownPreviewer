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
    maxWidth: "700px"
    // aligSelf: "center",
    // justifySelf: "center"
  };

  const headerStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "grey"
  };

  return (
    <div style={styles}>
      <header style={headerStyle}>Previewer</header>
      <div style={innerStyle}> {ReactHtmlParser(props.preview)} </div>
    </div>
  );
}

export default Previewer;
