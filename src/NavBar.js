import React from "react";

import NavButton from "./NavButton";

function NavBar({ changeOrder }) {
  let styles = {
    padding: "0px 10px",
    backgroundColor: "lightgrey"
  };

  return (
    <div style={styles}>
      Nav Bar
      <NavButton name="orientation" img="fas fa-columns fa-5x" />
      <NavButton
        name="order"
        img="fas fa-exchange-alt fa-5x"
        changeOrder={changeOrder}
      />
    </div>
  );
}

export default NavBar;
