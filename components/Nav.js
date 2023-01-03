import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <Link href="/">
      <nav className={navStyles.nav}>Revenir à la page 1</nav>
    </Link>
  );
};

export default Nav;
