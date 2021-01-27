import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
  let navItems = props.data.map((item) => (
    <Navbar key={item.id} name={item.name} path={item.path} />
  ));
  return <div>{navItems}</div>;
};

export default NavbarContainer;
