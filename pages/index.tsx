import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "../styles/Index.module.scss";
import MainCard from "../components/MainCard";
import Head from "next/head";

const Home: NextPage = () => {
  const spotify = require("spotify-web-api-js");
  const s = new spotify();

  useEffect(() => {
    if (window.location.href.includes("access_token")) {
      const hash = window.location.hash.substring(1);
      const params = hash.split("&");
      const token = params[0].split("=")[1];
      s.setAccessToken(token);
    }
  }, []);
  return (
    <div className={styles.index}>
      <Head>
        <title>soundSeeker</title>
      </Head>
      <MainCard />
    </div>
  );
};

export default Home;
