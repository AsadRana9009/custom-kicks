// src/context/CartContext.js
import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // eslint-disable-next-line no-case-declarations
            const existingProduct = state.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                return state.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload);
        case "UPDATE_QUANTITY":
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
