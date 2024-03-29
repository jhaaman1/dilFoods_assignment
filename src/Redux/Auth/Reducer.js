import { getFromLS, saveToLS } from "../../Utils/Constant";
import * as ways from "./ActionType";

const initialState = {
  isAuth: getFromLS("token") ? true : false,
  isLoding: false,
  isError: false,
  user: {},
  token: getFromLS("token") || "",
};
function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ways.GET_AUTH_REQUEST:
      return { ...state, isLoding: true };
    case ways.GET_AUTH_SUCCESS:
      saveToLS("token", payload.id);
      saveToLS("user", payload.fullName);
      return {
        ...state,
        isLoding: false,
        isAuth: true,
        isError: false,
        user: payload,
        token: payload.id,
      };
    case ways.GET_AUTH_FAILURE:
      return {
        ...state,
        isError: true,
        token: "",
        isAuth: false,
        isLoding: false,
      };
    case ways.LOGOUT:
      saveToLS("token", false);
      return { ...state, isAuth: false, user: {} };
    case ways.CHECK_AUTH:
      return { ...state, isAuth: state.user.firstName ? true : false };
    default:
      return state;
  }
}

export { Reducer };
                                                                                                                    