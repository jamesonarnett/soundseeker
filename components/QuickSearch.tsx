import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../styles/SearchInput.module.scss";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistSearch, setPlaylistSearch] = useState("");

  const formRequest = () => {
    // do something with the search term
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(playlistSearch);
    searchTerm && setSearchTerm("");
    playlistSearch && setPlaylistSearch("");
  };

  return (
    <div className={styles.searchDiv}>
      <form onSubmit={onSubmit} className={styles.searchDiv}>
        <div>
          <FiSearch className={styles.searchIcon} width="20px" height="20px" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder={"Search by song artist or album"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <p> - or - </p>
        <div>
          <FiSearch className={styles.searchIcon} width="20px" height="20px" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder={"Search your playlists"}
            value={playlistSearch}
            onChange={(e) => setPlaylistSearch(e.target.value)}
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
