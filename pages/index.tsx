import type { NextPage } from "next";
import { useEffect } from "react";
import { setToken } from "../utils";
import styles from "../styles/Index.module.scss";
import MainCard from "../components/MainCard";
import Head from "next/head";

const Home: NextPage = () => {
  const spotify = require("spotify-web-api-js");
  const s = new spotify();

  useEffect(() => {
    const url = window.location.href;
    setToken(url, s);
  }, []);
  return (
    <div className={styles.index}>
      <Head>
        <title>soundSeeker</title>
        <meta name="description" content="soundSeeker" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <MainCard />
    </div>
  );
};

export default Home;
