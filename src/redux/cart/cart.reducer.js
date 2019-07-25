import { cartActionTypes } from "./cart.actionTypes";
import { addItemToCard } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCard(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default userReducer;
