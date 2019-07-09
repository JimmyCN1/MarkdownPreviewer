import React from "react";

import ReactHtmlParser from "react-html-parser";

import DividerSign from "./DividerSign";

function Previewer({ preview, editorFirst }) {
  let styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 10px"
  };

  const headerStyle = {
    width: "90%",
    maxWidth: "700px",
    padding: "0px"
  };

  let innerStyle = {
    width: "95%",
    maxWidth: "700px",
    backgroundColor: "white"
  };

  return (
    <div style={styles}>
      <header style={headerStyle}>
        <h3>Previewer</h3>
      </header>

      <div style={innerStyle}> {ReactHtmlParser(preview)} </div>
      <DividerSign editorFirst={editorFirst} />
      {/* <div style={animatedStyle}>
        <Animated animationIn="pulse">
          <div
            className="btn btn-outline-dark"
            style={{
              border: "none",
              textAlign: "left",
              maxWidth: "100px",
              justifySelf: "left"
            }}
          >
            <i
              className="fas fa-arrow-left fa-2x"
              style={{ paddingTop: "5px" }}
            />
            <h5 style={{ textAlign: "left" }}>
              Drag this divider to adjust the view
            </h5>
          </div>
        </Animated>
      </div> */}
    </div>
  );
}

export default Previewer;
