import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cart, dispatch } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="p-8 mt-20 bg-white">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center mb-4 p-4 border rounded shadow-sm"
                        >
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                            <h2 className="text-xl font-semibold">{item.name}</h2>
                            <p>Rs {item.price} </p>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                    dispatch({
                                        type: "UPDATE_QUANTITY",
                                        payload: { id: item.id, quantity: parseInt(e.target.value) },
                                    })
                                }
                                className="w-16 border rounded px-2"
                            />
                            <button
                                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                                className="bg-red-500 text-white px-4 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-6 text-right">
                        <h2 className="text-2xl font-bold">Total: Rs {calculateTotal()}/-</h2>
                        <button
                            className="bg-green-500 text-white px-6 py-2 rounded mt-4"
                            onClick={() => dispatch({ type: "CLEAR_CART" })}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
