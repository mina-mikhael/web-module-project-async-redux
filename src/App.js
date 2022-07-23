import React, { useEffect } from "react";
import "./App.css";
import Gifs from "./components/Gifs";
import { connect } from "react-redux";
import { getGifs } from "./actions";
import Form from "./components/form";

function App({ loading, error, getGifs }) {
  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className="App">
      <h1>Get random Gifs</h1>
      <Form />
      {error && <h3>{` Error: ${error}`}</h3>}
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

export default connect(mapStateToProps, { getGifs })(App);
