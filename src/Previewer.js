import React from "react";

import ReactHtmlParser from "react-html-parser";

function Previewer(props) {
  let divStyles = {
    display: "flex",
    flexDirection: "column"
  };

  const headerStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "grey"
  };

  return (
    <div style={divStyles}>
      <header style={headerStyle}>Previewer</header>
      <div> {ReactHtmlParser(props.preview)} </div>
    </div>
  );
}

export default Previewer;
