import React from "react";

function Previewer(props) {
  let divStyles = {
    display: "flex",
    flexDirection: "column"
    // justifyContent: "center",
    // alignItems: "center",
    // padding: "10px"
  };

  const headerStyle = {
    width: "100%",
    // paddingLeft: "10px",
    padding: "10px",
    backgroundColor: "grey"
  };

  return (
    <div style={divStyles}>
      <header style={headerStyle}>Previewer</header>
      {props.text}
      {/* <h1>
        Nulla cillum ad velit adipisicing dolor adipisicing cillum sint. Aliqua
        velit ea non aliqua magna nulla id officia commodo exercitation
        deserunt. Cupidatat ea proident tempor pariatur esse ad eu. Aute
        pariatur consequat enim cupidatat officia.{" "}
      </h1>
      <h3>
        ### Ut pariatur sunt mollit ex velit aliqua magna velit nisi
        reprehenderit irure excepteur sit. Amet cupidatat elit aliquip excepteur
        deserunt sit consequat aliquip. Consectetur proident culpa nostrud id
        commodo incididunt culpa veniam ea enim culpa in. Nostrud aliqua do
        nulla dolor deserunt duis occaecat anim anim culpa reprehenderit
        occaecat ut sint. Ea ea duis sint reprehenderit adipisicing veniam esse
        aliqua culpa dolore. Lorem irure velit irure Lorem sunt consequat mollit
        consequat velit velit incididunt cupidatat aute qui. Commodo qui in ut
        esse excepteur. Magna nostrud sint qui voluptate aliquip deserunt sunt
        officia esse labore commodo proident. Laboris proident non adipisicing
        ullamco irure tempor eu adipisicing reprehenderit et culpa. Consectetur
        in sit nisi qui laborum Lorem consectetur voluptate incididunt quis
        velit enim occaecat id. Magna mollit excepteur voluptate sunt enim duis
        cupidatat est in fugiat eiusmod. Eu aliquip excepteur id ad quis
        adipisicing duis est. Culpa
      </h3> */}
    </div>
  );
}

export default Previewer;
