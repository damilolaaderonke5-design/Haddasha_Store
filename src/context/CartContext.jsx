import {createContext, useContext, useEffect, useReducer} from "react";

const CartContext = createContext();

function cartReducer(state, action) {
switch (action.type) {
case "ADD_TO_CART": {
const existingItem = state.find(
(item) => item.id === action.payload.id
);


  if (existingItem) {
    return state.map((item) =>
      item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 }: item
    );
  }

  return [
    ...state,
    {
      ...action.payload,
      quantity: 1,
    },
  ];
}

case "INCREASE_QUANTITY":
  return state.map((item) =>
    item.id === action.payload
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

case "DECREASE_QUANTITY":
  return state
    .map((item) =>
      item.id === action.payload
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);

case "REMOVE_FROM_CART":
  return state.filter(
    (item) => item.id !== action.payload
  );

case "CLEAR_CART":
  return [];

default:
  return state;


}
}

function CartProvider({ children }) {
const [cart, dispatch] = useReducer(
cartReducer,
undefined,
() => {
try {
const savedCart = localStorage.getItem("shopease-cart");
const parsedCart = savedCart ? JSON.parse(savedCart) : [];


    return Array.isArray(parsedCart)
      ? parsedCart.filter(
          (item) =>
            item &&
            Number.isInteger(item.id) &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0
        )
      : [];
  } catch (error) {
    console.error("Unable to load saved cart:", error);
    return [];
  }
}

);

useEffect(() => {
try {
localStorage.setItem(
"Haddasha_Store-cart",
JSON.stringify(cart)
);
} catch (error) {
console.error("Unable to save cart:", error);
}
}, [cart]);

function addToCart(product) {
dispatch({
type: "ADD_TO_CART",
payload: product,
});
}

function increaseQuantity(productId) {
dispatch({
type: "INCREASE_QUANTITY",
payload: productId,
});
}

function decreaseQuantity(productId) {
dispatch({
type: "DECREASE_QUANTITY",
payload: productId,
});
}

function removeFromCart(productId) {
dispatch({
type: "REMOVE_FROM_CART",
payload: productId,
});
}

function clearCart() {
dispatch({ type: "CLEAR_CART" });
}

const cartCount = cart.reduce(
(total, item) => total + item.quantity,
0
);

const cartTotal = cart.reduce(
(total, item) => total + item.price * item.quantity,
0
);

return (
<CartContext.Provider
  value={{ cart, cartCount, cartTotal, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart,}}
>
{children}
</CartContext.Provider>
);
}

export function useCart() {
return useContext(CartContext);
}

export default CartProvider;
