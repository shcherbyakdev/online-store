import { cartActionTypes } from "./cart.actionTypes";
import { addItemToCard, removeItemFromCart } from "./cart.utils";

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

    case cartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default userReducer;
