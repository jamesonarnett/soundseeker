import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

import Btn from "../components/LoginBtn";

const Home: NextPage = () => {
  const spotify = require("spotify-web-api-js");
  const s = new spotify();
  useEffect(() => {
    if (window.location.href.includes("access_token")) {
      const hash = window.location.hash.substring(1);
      const params = hash.split("&");
      const token = params[0].split("=")[1];
      s.setAccessToken(token);
      console.log(token);
      console.log(s);
    }
  }, []);
  return (
    <div className={styles.index}>
      <h1>asd</h1>
      <Btn />
    </div>
  );
};

export default Home;
