import { cartActionTypes } from "./cart.actionTypes";

const initialState = {
  hidden: true
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};

export default userReducer;
