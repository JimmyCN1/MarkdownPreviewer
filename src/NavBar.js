import React from "react";

import NavButton from "./NavButton";

function NavBar({ changeOrder }) {
  let styles = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 10px",
    backgroundColor: "#FFC472"
  };

  return (
    <div style={styles}>
      <h1>Nav Bar</h1>
      {/* <NavButton name="orientation" img="fas fa-columns fa-5x" /> */}
      <NavButton
        name="order"
        img="fas fa-exchange-alt fa-5x"
        changeOrder={changeOrder}
      />
    </div>
  );
}

export default NavBar;
