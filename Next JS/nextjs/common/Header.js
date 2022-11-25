import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className="row">
        <div className="col-2">
          <Link href="/">
            <Image src="/next-js.svg" width="100" height="100" />
          </Link>
        </div>
        <div className="col-9">
          <h1 className={[styles.heading, "text-center"].join(" ")}>
            Next JS Project
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
