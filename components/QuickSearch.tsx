import React, { useState } from "react";
import styles from "../styles/SearchInput.module.scss";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const formRequest = () => {
    // do something with the search term
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(searchTerm);
    searchTerm && setSearchTerm("");
  };

  return (
    <div className={styles.searchDiv}>
      <form onSubmit={onSubmit} className={styles.searchDiv}>
        <div>
          {/* <label>Search</label> */}
          <input
            type={"text"}
            className={styles.searchInput}
            placeholder={"Search by song artist or album"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.searchBtn} onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
