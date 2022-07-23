import React, { useState } from "react";
import { connect } from "react-redux";
import { getGifs } from "../actions";

const initialSearch = "";

const Form = ({ getGifs }) => {
  const [searchText, setSearchText] = useState(initialSearch);

  const submitHandler = (e) => {
    e.preventDefault();
    getGifs(searchText);
    setSearchText(initialSearch);
  };
  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          placeholder="search gif by text"
          onChange={changeHandler}
          value={searchText}
        />
        &nbsp;
        <button>Search</button>
      </form>
    </div>
  );
};

export default connect(null, { getGifs })(Form);
