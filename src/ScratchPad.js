import React from "react";
import "./split-pane.css";

import SplitPane from "react-split-pane";

import Editor from "./Editor";
import Previewer from "./Previewer";

function ScratchPad(props) {
  return (
    <SplitPane split="vertical" minSize={200} maxSize={-200} defaultSize="50%">
      <Editor />
      <Previewer />
    </SplitPane>
  );
}

export default ScratchPad;
