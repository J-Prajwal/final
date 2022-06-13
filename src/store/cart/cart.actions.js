// Cart Actions here

import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
} from "./cart.types";
import axios from "axios";

export const getCartItems = () => (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  return axios
    .get("http://localhost:8080/cartItems")
    .then((r) => {
      return dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: r.data });
    })
    .catch((err) =>
      dispatch({ type: GET_CART_ITEMS_ERROR, payload: err.data })
    );
};

export const addItemToCart = (cartData) => (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  axios
    .post("http://localhost:8080/cartItems", { ...cartData })
    .then((r) => {
      dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ITEM_TO_CART_ERROR, payload: err.data });
    });
};

export const removeItemFromCart = (cartId) => (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  return axios
    .delete(`http://localhost:8080/cartItems${cartId}`)
    .then((r) => {
      dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: { id: cartId } });
    })
    .catch((err) => {
      dispatch({ type: REMOVE_CART_ITEMS_ERROR, payload: err.data });
    });
};

export const updateCartItem = (cartId, update) => (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  return axios
    .patch(`http://localhost:8080/cartItems/${cartId}`, {...update})
    .then((r) => {
      dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_CART_ITEMS_ERROR, payload: err.data });
    });
};
