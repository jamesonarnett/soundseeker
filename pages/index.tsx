import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.index}>
      <h1>Hello World</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
