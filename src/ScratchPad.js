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
      text: ""
    };
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    const md = new MarkdownIt();
    const result = md.render(this.state.text);
    console.log(result);

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
        <Previewer preview={result} />
        {!this.props.editorFirst && editor}
      </SplitPane>
    );
  }
}

const charSet = [
  "###### ",
  "##### ",
  "#### ",
  "### ",
  "## ",
  "# ",
  "*",
  "_",
  "**",
  "__",
  "~~",
  "  ",
  "[",
  "]",
  "(",
  ")"
];

const texts = [
  "# Welcome to my React Markdown Previewer!",
  "## This is a sub-heading...",
  "### And here's some other cool stuff:"
];
function transform() {
  texts.forEach(text => {
    for (let i = 6, index = 0; i > 0; i--, index++) {
      if (text.includes(charSet[index])) {
        console.log(`<h${i}>${text.slice(i + 1)}</h${i}>`);
      }
    }
  });
}

// transform();

export default ScratchPad;
