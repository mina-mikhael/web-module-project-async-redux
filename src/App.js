import React, { useState } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import { connect } from "react-redux";

const initialSearch = "";
function App({ loading, error }) {
  const [search, setSearch] = useState(initialSearch);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <h1>Get random Gifs</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          placeholder="search gif by text"
          onChange={changeHandler}></input>
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

export default connect(mapStateToProps, {})(App);
