import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../styles/QuickSearch.module.scss";
import { getToken, isLoggedIn } from "../utils";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistSearch, setPlaylistSearch] = useState("");

  const spotify = require("spotify-web-api-js");
  const s = new spotify();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchTerm) {
      s.searchTracks(searchTerm).then((res: any) => {
        console.log(res.tracks.items);
      });
    } else if (playlistSearch) {
      s.searchPlaylists(playlistSearch).then((res: any) => {
        console.log(res.playlists.items);
      });
    }

    searchTerm && setSearchTerm("");
    playlistSearch && setPlaylistSearch("");
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      s.setAccessToken(token);
    }
  }, [searchTerm, playlistSearch]);

  return (
    <div className={styles.searchDiv}>
      <form onSubmit={onSubmit} className={styles.searchDiv}>
        <div className={styles.singleInputDiv}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder={"Search by song artist or album"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {isLoggedIn() && (
          <div>
            <p> - or - </p>
            <div className={styles.singleInputDiv}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder={"Search your playlists"}
                value={playlistSearch}
                onChange={(e) => setPlaylistSearch(e.target.value)}
              />
            </div>
          </div>
        )}
        <button type="submit" className={styles.searchBtn} onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
