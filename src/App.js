import React from "react";
import "./App.css";

import NavBar from "./NavBar";
import ScratchPad from "./scratchPad/ScratchPad";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: "verticle",
      editorFirst: true
    };
  }

  changeOrder = () => {
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

export default App;
