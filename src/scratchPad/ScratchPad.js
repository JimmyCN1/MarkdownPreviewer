import React from "react";
import "./split-pane.css";

import SplitPane from "react-split-pane";
import MarkdownIt from "markdown-it";

import Editor from "./Editor";
import Previewer from "./Previewer";

class ScratchPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      pastTextState: [""],
      pastTextStateIndex: -1
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value,
      pastTextState: [...this.state.pastTextState, e.target.value],
      pastTextStateIndex: (this.state.pastTextStateIndex += 1)
    });
    console.log(
      `${this.state.pastTextStateIndex}: ${this.state.pastTextState}`
    );
  };

  handleButton = e => {
    console.log("handle button");
  };

  render() {
    const md = new MarkdownIt();
    var result = md.render(this.state.text);

    let { text } = this.state;

    let editor = <Editor text={text} handleButton={this.handleButton} />;
    return (
      <SplitPane
        split="vertical"
        minSize={200}
        maxSize={-200}
        defaultSize="50%"
      >
        {this.props.editorFirst && editor}
        <Previewer preview={result} />
        {!this.props.editorFirst && editor}
      </SplitPane>
    );
  }
}

export default ScratchPad;
