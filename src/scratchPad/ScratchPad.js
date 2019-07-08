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
      currentIndex: 0,
      pastTextStatesIndex: 2
    };
  }

  handleChange = e => {
    let currentIndex = this.state.pastTextStates.length - 1;
    this.setState({
      text: e.target.value,
      pastTextStates: [
        ...this.state.pastTextStates.slice(0, currentIndex + 1),
        e.target.value
      ],
      currentIndex: currentIndex,
      pastTextStatesIndex: 2
    });
    console.log(
      `current index: ${this.state.currentIndex} past index: ${
        this.state.pastTextStatesIndex
      } states: ${this.state.pastTextStates}`
    );
  };

  handleButton = e => {
    let {
      text,
      pastTextStates,
      currentIndex,
      pastTextStatesIndex
    } = this.state;
    console.log("handle button " + e);

    switch (e) {
      case "undo":
        console.log(
          `current index: ${currentIndex}, length: ${pastTextStates.length}`
        );
        if (currentIndex >= 0) {
          this.setState({
            text: pastTextStates[currentIndex],
            currentIndex: (currentIndex -= 1),
            pastTextStatesIndex:
              pastTextStates.length - pastTextStatesIndex >= 0 &&
              (pastTextStatesIndex += 1)
          });
        } else {
          this.setState({
            text: text
          });
        }
        break;
      case "redo":
        console.log(
          `current index: ${currentIndex}, length: ${pastTextStates.length}`
        );
        if (currentIndex < pastTextStates.length - 2) {
          this.setState({
            text:
              pastTextStates[pastTextStates.length - pastTextStatesIndex + 2],
            currentIndex: (currentIndex += 1),
            pastTextStatesIndex: (pastTextStatesIndex -= 1)
          });
        } else {
          this.setState({
            text: text
          });
        }
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
