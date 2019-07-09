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
      <h1>
        <a
          href="./index.html"
          style={{ textDecoration: "none", color: "black" }}
        >
          Markdown Previewer
        </a>
      </h1>
      <NavButton
        name="order"
        img="fas fa-exchange-alt fa-2x"
        changeOrder={changeOrder}
      />
    </div>
  );
}

export default NavBar;
