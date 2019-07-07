import React from "react";
import "./App.css";

import NavBar from "./NavBar";
import ScratchPad from "./ScratchPad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: "verticle",
      editorFirst: true
    };
  }

  changeOrder = () => {
    console.log(`editorfirst: ${this.state.editorFirst}`);
    this.setState({ editorFirst: !this.state.editorFirst });
  };

  render() {
    const { orientation, editorFirst } = this.state;

    return (
      <div>
        <NavBar
          orientation={orientation}
          editorFirst={editorFirst}
          changeOrder={this.changeOrder}
        />
        <ScratchPad orientation={orientation} editorFirst={editorFirst} />
      </div>
    );
  }
}

// window.ReactSplit;
export default App;
