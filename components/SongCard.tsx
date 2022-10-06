import React from "react";
import styles from "../styles/SongCard.module.scss";
import { Song } from "../types";

const SongCard = ({ name, id }: Song) => {
  return (
    <div id={id} className={styles.songCard}>
      <h3>{name}</h3>
      <p></p>
    </div>
  );
};

export default SongCard;
