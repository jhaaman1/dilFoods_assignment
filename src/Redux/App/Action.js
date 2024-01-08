import axios from "axios";
import * as type from "./ActionType";

const isDataLoding = {
  type: type.GET_DATA_REQUEST,
};

const isDataLodingSuccess = (payload) => {
  return {
    type: type.GET_DATA_SUCCESS,
    payload: payload,
  };
};

const isDataLodingFailed = {
  type: type.GET_DATA_FAILURE,
};

const postCartRequest = {
  type: type.POST_CART_REQUEST,
};

const postCartSuccess = (payload) => {
  return {
    type: type.POST_CART_SUCCESS,
    payload: payload,
  };
};

const postCartFailure = {
  type: type.POST_CART_FAILURE,
};

const getCartRequest = {
  type: type.GET_CART_REQUEST,
};

const getCartSuccess = (payload) => {
  return {
    type: type.GET_CART_SUCCESS,
    payload: payload,
  };
};

const getCartFailure = {
  type: type.GET_CART_FAILURE,
};

export const getData = (params) => (dispatch) => {
  dispatch(isDataLoding);
  return axios
    .get("http://localhost:8080/products", { params })
    .then(({ data }) => {
      return dispatch(isDataLodingSuccess(data));
    })
    .catch((err) => {
      dispatch(isDataLodingFailed);
    });
};

export const postToCart = (product) => (dispatch) => {
  dispatch(postCartRequest);
  return axios
    .post("http://localhost:8080/cart", product)
    .then(({ data }) => {
      dispatch(postCartSuccess(data));
    })
    .catch(() => {
      dispatch(postCartFailure);
    });
};

export const getCartData = (params) => (dispatch) => {
  dispatch(getCartRequest);
  return axios
    .get("http://localhost:8080/cart",{params})  
    .then(({ data }) => {
      console.log('data', data);
      dispatch(getCartSuccess(data));
    })
    .catch(() => {
      dispatch(getCartFailure);
    });
};
