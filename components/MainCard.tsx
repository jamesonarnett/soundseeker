import React, { useState, useEffect } from "react";
import LoginBtn from "./LoginBtn";
import SearchInput from "./SearchInput";
import { isLoggedIn } from "../utils";
import styles from "../styles/MainCard.module.scss";

const MainCard = () => {
  useEffect(() => {}, []);
  return (
    <section className={styles.cardBody}>
      <h1>soundSeeker</h1>
      {isLoggedIn() ? (
        <div className={styles.loggedInDiv}>
          <SearchInput />
        </div>
      ) : (
        <div className={styles.loggedOutDiv}>
          <LoginBtn />
        </div>
      )}
    </section>
  );
};

export default MainCard;
