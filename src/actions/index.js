import axios from "axios";
import { URL } from "../constants";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getGifs = (searchText) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(`${URL}q=${searchText}`)
      .then((res) => {
        dispatch(fetchSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchFail(err.message));
        console.log(err);
      });
  };
};

export const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

export const fetchSuccess = (gifData) => {
  return {
    type: FETCH_SUCCESS,
    payload: gifData,
  };
};

export const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};
