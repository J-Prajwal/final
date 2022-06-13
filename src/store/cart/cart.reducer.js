// Note: Do not update/change the initial state
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

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART_ERROR: {
      return { ...state, addCartItem: { loading: false, error: true } };
    }
    case ADD_ITEM_TO_CART_LOADING: {
      return { ...state, addCartItem: { loading: true, error: false } };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        data: [...state.data, payload],
        addCartItem: { loading: false },
      };
    }
    case GET_CART_ITEMS_ERROR: {
      return { ...state, getCartItems: { loading: false, error: true } };
    }
    case GET_CART_ITEMS_LOADING: {
      return { ...state, getCartItems: { loading: true, error: false } };
    }
    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        data: payload,
        getCartItems: { loading: false, error: false },
      };
    }
    case REMOVE_CART_ITEMS_ERROR: {
      return { ...state, removeCartItem: { loading: false, error: true } };
    }
    case REMOVE_CART_ITEMS_LOADING: {
      return { ...state, removeCartItem: { loading: true, error: false } };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      const newItem = state.data.filter((cI) => cI.id != payload.id);
      return {
        ...state,
        data: [newItem],
        removeCartItem: { loading: false, error: false },
      };
    }
    case UPDATE_CART_ITEMS_ERROR: {
      return { ...state, updateCartItem: { loading: false, error: true } };
    }
    case UPDATE_CART_ITEMS_LOADING: {
      return { ...state, updateCartItem: { loading: true, error: false } };
    }
    case UPDATE_CART_ITEMS_SUCCESS: {
      const newItem = state.data.map((cI) => {
        if (cI.id == payload.id) {
          return payload;
        } else {
          return cI;
        }
      });
      return {
        ...state,
        data: newItem,
        updateCartItem: { loading: false, error: false },
      };
    }
    default: {
      return state;      
    }
  }
};
