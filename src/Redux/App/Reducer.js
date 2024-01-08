import * as ways from "./ActionType";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  cart: [],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_DATA_REQUEST:
      return { ...state, isLoding: true };

    case ways.GET_DATA_SUCCESS:
      return { ...state, isLoding: false, isError: false, data: payload };

    case ways.GET_DATA_FAILURE:
      return { ...state, isError: false, data: [], isLoding: false };

    case ways.POST_CART_REQUEST:
      return { ...state, isLoading: true };

    case ways.POST_CART_SUCCESS:
      return { ...state, isLoading: false, isError: false, cart: payload };

    case ways.POST_CART_FAILURE:
      return { ...state, isError: true, isLoading: false };

    case ways.GET_CART_REQUEST:
      return { ...state, isLoading: true };

    case ways.GET_CART_SUCCESS:
      return { ...state, isLoading: false, isError: false, cart: payload };

    case ways.GET_CART_FAILURE:
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
}

export { Reducer };
