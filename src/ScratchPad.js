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

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    let { text } = this.state;

    let editor = <Editor text={text} handleChange={this.handleChange} />;
    return (
      <SplitPane
        split="vertical"
        minSize={200}
        maxSize={-200}
        defaultSize="50%"
      >
        {this.props.editorFirst && editor}
        <Previewer text={text} />
        {!this.props.editorFirst && editor}
      </SplitPane>
    );
  }
}

export default ScratchPad;
