import React, { useState, useEffect } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import { connect } from "react-redux";
import { fetchStart, fetchSuccess, fetchFail } from "./actions";
import axios from "axios";
import { URL } from "./constants";

const initialSearch = "";
const initialSearchText = "coding";
function App({ loading, error, fetchStart, fetchSuccess, fetchFail }) {
  const [search, setSearch] = useState(initialSearch);
  const [searchText, setSearchText] = useState(initialSearchText);

  const submitHandler = (e) => {
    e.preventDefault();
    if (search) {
      setSearchText(search);
    }
    setSearch(initialSearch);
  };
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchStart();
    axios
      .get(`${URL}q=${searchText}`)
      .then((res) => {
        fetchSuccess(res.data.data);
      })
      .catch((err) => fetchFail(err.message));
  }, [searchText]);
  return (
    <div className="App">
      <h1>Get random Gifs</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          placeholder="search gif by text"
          onChange={changeHandler}
          value={search}></input>
        &nbsp;
        <button>Search</button>
      </form>
      {error && <h3>Error: {error}</h3>}
      <div>{loading ? <h3> Loading! ........ </h3> : <Gifs />}</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchStart, fetchSuccess, fetchFail })(App);
