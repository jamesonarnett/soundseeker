import React, { useState } from "react";
import LoginBtn from "./LoginBtn";
import styles from "../styles/MainCard.module.scss";

const MainCard = () => {
  return (
    <section className={styles.cardBody}>
      <h1>soundSeeker</h1>

      <div>
        <h3>placeHolder</h3>
        <input
          type={"text"}
          placeholder={"Enter your Spotify username"}
          value={""}
          onChange={() => {}}
        />
      </div>
      <LoginBtn />
    </section>
  );
};

export default MainCard;
