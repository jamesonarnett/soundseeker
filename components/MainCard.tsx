import React, { useState, useEffect } from "react";
import LoginBtn from "./LoginBtn";
import QSearch from "./QuickSearch";
import styles from "../styles/MainCard.module.scss";

const MainCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);
  return (
    <section className={styles.cardBody}>
      <h1>soundSeeker</h1>
      {isLoggedIn ? (
        <div className={styles.loggedInDiv}>
          <QSearch />
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
