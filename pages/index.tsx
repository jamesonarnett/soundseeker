import type { NextPage } from "next";
import axios from "axios";
import { BASE_URL } from "../utils";
import styles from "../styles/Home.module.scss";

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <div className={styles.index}>
      <h1>asd</h1>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${BASE_URL}/api`);
  return {
    props: {
      data: res.data,
    },
  };
};

export default Home;
