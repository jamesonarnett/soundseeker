import React from "react";
import LoginBtn from "./LoginBtn";
import styles from "../styles/MainCard.module.scss";

const MainCard = () => {
  return (
    <section className={styles.cardBody}>
      <h1>soundSeeker</h1>
      <LoginBtn />
    </section>
  );
};

export default MainCard;
