import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Food" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/meals/share">Share Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
