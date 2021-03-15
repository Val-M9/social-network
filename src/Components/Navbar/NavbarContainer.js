import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = ({ data }) => {
  let navItems = data.map((item) => (
    <Navbar key={item.id} name={item.name} path={item.path} />
  ));
  return <div>{navItems}</div>;
};

export default NavbarContainer;
