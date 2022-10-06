import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../styles/QuickSearch.module.scss";
import { Song } from "../types";
import { getToken, isLoggedIn } from "../utils";
import SongCard from "./SongCard";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistSearch, setPlaylistSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const spotify = require("spotify-web-api-js");
  const s = new spotify();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchTerm) {
      s.searchTracks(searchTerm).then((res: any) => {
        setSearchResults(res.tracks.items);
        console.log(searchResults);
      });
    } else if (playlistSearch) {
      s.searchPlaylists(playlistSearch).then((res: any) => {
        setSearchResults(res.playlists.items);
        console.log(searchResults);
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

      <div className={styles.searchResultsDiv}>
        <h3>Search Results</h3>
        {searchResults ? (
          searchResults.map((song: Song) => {
            return (
              <SongCard
                name={song.name}
                id={song.id}
                explicit={song.explicit}
                href={song.href}
                uri={song.uri}
                duration={song.duration}
                artist={song.artist}
                album={{
                  name: "",
                  total_tracks: 0,
                  release_date: "",
                  images: undefined,
                }}
              />
            );
          })
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
