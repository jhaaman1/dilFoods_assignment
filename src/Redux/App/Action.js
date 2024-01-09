import axios from "axios";
import * as type from "./ActionType";

const isDataLoding = {
  type: type.GET_DATA_REQUEST,
};

const isDataLoadingSuccess = (payload) => {
  return {
    type: type.GET_DATA_SUCCESS,
    payload: payload,
  };
};

const isDataLoadingFailed = {
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

const removeCartItemRequest = {
  type: type.REMOVE_CART_ITEM_REQUEST,
};

const removeCartItemSuccess = () => {
  return {
    type: type.REMOVE_CART_ITEM_SUCCESS,
  };
};

const removeCartItemFailure = {
  type: type.REMOVE_CART_ITEM_FAILURE,
};

export const getData = (params) => (dispatch) => {
  dispatch(isDataLoding);
  return axios
    .get("http://localhost:8080/products", { params })
    .then(({ data }) => {
      return dispatch(isDataLoadingSuccess(data));
    })
    .catch((err) => {
      dispatch(isDataLoadingFailed);
    });
};

export const postToCart = (product) => (dispatch) => {
  dispatch(postCartRequest);
  const productWithQty = { ...product, qty: product.qty || 1 };
  return axios
    .post("http://localhost:8080/cart", productWithQty)
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
    .get("http://localhost:8080/cart", { params })
    .then(({ data }) => {
      console.log("data", data);
      dispatch(getCartSuccess(data));
    })
    .catch(() => {
      dispatch(getCartFailure);
    });
};

export const updateQuantity = (itemId, updatedItem) => (dispatch) => {
  return axios
    .patch(`http://localhost:8080/cart/${itemId}`, updatedItem)
    .then(() => {
      console.log("Data updated successfully!");
      dispatch(getCartData()); 
    })
    .catch((error) => {
      console.error("Error updating quantity:", error);
    });
};

export const removeCartItem = (itemId) => (dispatch) => {
  dispatch(removeCartItemRequest);
  return axios
    .delete(`http://localhost:8080/cart/${itemId}`)
    .then(() => {
      dispatch(removeCartItemSuccess());
      dispatch(getCartData()); 
    })
    .catch(() => {
      dispatch(removeCartItemFailure);
    });
};
