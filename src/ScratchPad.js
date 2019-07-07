import React from "react";
import "./split-pane.css";

import SplitPane from "react-split-pane";

import Editor from "./Editor";
import Previewer from "./Previewer";

class ScratchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <SplitPane
        split="vertical"
        minSize={200}
        maxSize={-200}
        defaultSize="50%"
      >
        {this.props.editorFirst && <Editor />}
        <Previewer />
        {!this.props.editorFirst && <Editor />}
      </SplitPane>
    );
  }
}

export default ScratchPad;
