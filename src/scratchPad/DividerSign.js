import React from "react";
import { Animated } from "react-animated-css";

function DividerSign({ editorFirst }) {
  const animatedStyle = editorFirst
    ? {
        alignSelf: "flex-start"
      }
    : { alignSelf: "flex-end" };

  let dividerSign;

  if (editorFirst) {
    dividerSign = (
      <div
        className="btn btn-outline-dark"
        style={{
          border: "none",
          textAlign: "left",
          maxWidth: "100px",
          justifySelf: "left"
        }}
      >
        <i className="fas fa-arrow-left fa-2x" style={{ paddingTop: "5px" }} />
        <h5 style={{ textAlign: "left" }}>
          Drag this divider to adjust the view
        </h5>
      </div>
    );
  } else {
    dividerSign = (
      <div
        className="btn btn-outline-dark"
        style={{
          border: "none",
          textAlign: "right",
          maxWidth: "100px",
          justifySelf: "right"
        }}
      >
        <i className="fas fa-arrow-right fa-2x" style={{ paddingTop: "5px" }} />
        <h5 style={{ textAlign: "right" }}>
          Drag this divider to adjust the view
        </h5>
      </div>
    );
  }

  return (
    <div style={animatedStyle}>
      <Animated animationIn="pulse">{dividerSign}</Animated>
    </div>
  );
}

export default DividerSign;
