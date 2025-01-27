import { Button } from "../components"; // Add icon for cart
import { useNavigate } from "react-router-dom";
import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { useCart } from "../context/CartContext";

const products = [
    { id: 1, name: "CK 1", price: 8999, image: shoe4 },
    { id: 2, name: "CK 2", price: 5999, image: shoe5 },
    { id: 3, name: "CK 3", price: 7999, image: shoe6 },
    { id: 4, name: "CK 4", price: 9999, image: shoe7 },
    { id: 5, name: "CK 5", price: 5999, image: shoe5 },
];

const ProductsPage = () => {
    const navigate = useNavigate();
    const { dispatch } = useCart();

    return (
        <div className="products-page-container p-8 mt-6">
            <section className="product-section" style={{ textAlign: "center", padding: "50px 0" }}>
                <div
                    className="section-header flex flex-col gap-4 justify-center items-center"
                    style={{ color: "white" }}
                >
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>2D Product Generation</h2>
                    <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.7)" }}>
                        Create your custom 2D designs with ease and precision.
                    </p>
                    <Button
                        label="Generate 2D Product"
                        onClick={() => navigate("/ai-page")}
                        style={{
                            marginTop: "20px",
                            background: "#00bcd4",
                            color: "#fff",
                            padding: "10px 30px",
                            fontSize: "1.2rem",
                            borderRadius: "25px",
                            cursor: "pointer",
                            boxShadow: "0px 10px 15px rgba(0, 188, 212, 0.2)",
                        }}
                    />
                </div>
            </section>

            <section className="product-section" style={{ textAlign: "center", padding: "50px 0", background: "#222" }}>
                <div
                    className="section-header flex flex-col gap-4 justify-center items-center"
                    style={{ color: "white" }}
                >
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>3D Product Customization</h2>
                    <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.7)" }}>
                        Dive into a world of 3D customization. Create your perfect design.
                    </p>
                    <Button
                        label="Customize in 3D"
                        onClick={() => navigate("/modal-page")}
                        style={{
                            marginTop: "20px",
                            background: "#8e24aa",
                            color: "#fff",
                            padding: "10px 30px",
                            fontSize: "1.2rem",
                            borderRadius: "25px",
                            cursor: "pointer",
                            boxShadow: "0px 10px 15px rgba(142, 36, 170, 0.2)",
                        }}
                    />
                </div>
            </section>

            {/* Products Gallery Section */}
            <section className="product-gallery" style={{ padding: "50px 20px", background: "#f4f4f4" }}>
                <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", marginBottom: "40px" }}>
                    Popular Products
                </h2>
                <div className="flex flex-row justify-between w-full items-center">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded shadow-sm p-4">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">Rs {product.price}</p>
                            <div className="flex justify-center items-center mt-2">
                                <Button
                                    label="Add to Cart"
                                    onClick={() =>
                                        dispatch({ type: "ADD_TO_CART", payload: { ...product } })
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
