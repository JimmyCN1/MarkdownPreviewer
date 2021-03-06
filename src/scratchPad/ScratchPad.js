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
      undoing: false
    };
  }

  handleChange = e => {
    let { pastTextStates, currentIndex, undoing } = this.state;
    if (!undoing) {
      this.setState({
        text: e.target.value,
        pastTextStates: [...this.state.pastTextStates, e.target.value],
        currentIndex: (currentIndex += 1)
      });
    } else if (undoing) {
      let newIndex = currentIndex + 1;
      this.setState({
        text: e.target.value,
        pastTextStates: [...pastTextStates.slice(0, newIndex), e.target.value],
        currentIndex: newIndex,
        undoing: false
      });
    }
  };

  handleButton = e => {
    let { pastTextStates, currentIndex } = this.state;

    switch (e) {
      case "undo":
        if (currentIndex > 0) {
          this.setState({
            text: pastTextStates[currentIndex - 1],
            currentIndex: (currentIndex -= 1),
            undoing: true
          });
        }
        break;
      case "redo":
        if (currentIndex >= 0 && currentIndex < pastTextStates.length - 1) {
          this.setState({
            text: pastTextStates[currentIndex + 1],
            currentIndex: (currentIndex += 1),
            undoing: true
          });
        }
        break;
      case "trash":
        this.setState({
          text: "",
          pastTextStates: [...pastTextStates, ""],
          currentIndex: (currentIndex += 1)
        });
        break;
      default:
        break;
    }
    document.querySelector("textarea").focus();
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
        <Previewer preview={result} editorFirst={this.props.editorFirst} />
        {!this.props.editorFirst && editor}
      </SplitPane>
    );
  }
}

export default ScratchPad;
