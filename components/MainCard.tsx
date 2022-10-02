import React, { useState, useEffect } from "react";
import LoginBtn from "./LoginBtn";
import { isLoggedIn } from "../utils";
import QSearch from "./QuickSearch";
import styles from "../styles/MainCard.module.scss";

const MainCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);
  return (
    <div className={styles.cardBody}>
      <h1>soundSeeker</h1>
      <div>
        <QSearch />
      </div>
      {isLoggedIn ? (
        //placeholder for logged in user
        <p></p>
      ) : (
        <div className={styles.loggedOutDiv}>
          <p>Log in to get started</p>
          <LoginBtn />
        </div>
      )}
    </div>
  );
};

export default MainCard;
