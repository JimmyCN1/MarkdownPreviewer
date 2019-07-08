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
      pastTextStates: [""],
      pastTextStatesIndex: 2
    };
  }

  handleChange = e => {
    console.log(1);
    this.setState({
      text: e.target.value,
      pastTextStates: [...this.state.pastTextStates, e.target.value],
      pastTextStatesIndex: 2
    });
    console.log(
      `${this.state.pastTextStatesIndex}: ${this.state.pastTextStates}`
    );
  };

  handleButton = e => {
    let { text, pastTextStates, pastTextStatesIndex } = this.state;
    console.log("handle button " + e);

    switch (e) {
      case "undo":
        this.setState({
          text: pastTextStates[pastTextStates.length - pastTextStatesIndex],
          pastTextStatesIndex:
            pastTextStates.length - pastTextStatesIndex >= 0 &&
            (pastTextStatesIndex += 1)
        });
        console.log(
          `past index: ${pastTextStatesIndex}, length: ${pastTextStates.length}`
        );
        console.log("memes");
        break;
      case "redo":
        this.setState({
          text: pastTextStates[pastTextStates.length - pastTextStatesIndex + 1],
          pastTextStatesIndex:
            pastTextStatesIndex < pastTextStates.length &&
            (pastTextStatesIndex -= 1)
        });
        console.log(
          `past index: ${pastTextStatesIndex}, length: ${pastTextStates.length}`
        );
        break;
      case "trash":
        this.setState({
          text: "",
          pastTextStates: [...this.state.pastTextStates, ""]
          // pastTextStatesIndex: (this.state.pastTextStatesIndex += 1)
        });
        break;
    }
    return "";
  };

  render() {
    const md = new MarkdownIt();
    var result = md.render(this.state.text);

    let { text } = this.state;

    let editor = (
      <Editor
        text={text}
        handleChange={this.handleChange}
        handleButton={this.handleButton}
      />
    );
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
