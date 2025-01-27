/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { InitialModel } from "../components/Modals/InitialModel";
import { Button } from "../components";
import { Model3 } from "../components/Modals/Model3";
import { Model2 } from "../components/Modals/Model2";
import { Model1 } from "../components/Modals/Model1";
import { texture1, texture2, texture3 } from "../assets/images";

const textureOptions = [
    { label: "Leather", url: texture1 },
    { label: "Fabric", url: texture2 },
    { label: "Mesh", url: texture3 },
];

const ModalPage = () => {
    const [showModels, setShowModels] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);
    const [soleColor, setSoleColor] = useState("");
    const [bodyColor, setBodyColor] = useState("");
    const [lacesColor, setLacesColor] = useState("");
    const [extrasColor, setExtrasColor] = useState("");
    const [texture, setTexture] = useState(null);

    const handleSelectModel = (model) => {
        setSelectedModel(model);
    };

    const applyTexture = (textureUrl) => {
        setTexture(textureUrl);
    };

    const renderModel = (model) => {
        const commonProps = { soleColor, bodyColor, lacesColor, texture, extrasColor };

        switch (model) {
            case "Model1":
                return <Model1 {...commonProps} scale={0.012} position={[0, -0.4, 0]} rotation={[0.3, Math.PI / 2, 0]} />;
            case "Model2":
                return <Model2 {...commonProps} scale={8.0} position={[0, 1, 0]} rotation={[0.3, 0, 0]} />;
            case "Model3":
                return <Model3 {...commonProps} scale={0.016} position={[-1, -1, 1]} rotation={[0.4, 0, 0]} />;
            default:
                return <InitialModel {...commonProps} scale={0.6} position={[0, -1, 0]} rotation={[0.2, 0, 0]} />;
        }
    };

    const handleGoBack = () => {
        setSelectedModel(null);
        setSoleColor("");
        setBodyColor("");
        setLacesColor("");
        setExtrasColor("");
        setTexture(null);
    };

    return (
        <div
            className="min-h-screen mt-6 relative flex justify-center items-center"
            style={{
                background: "rgba(0, 0, 0, 0.7)",
            }}
        >
            <div>
                <header style={{ textAlign: "center", padding: "20px", color: "#333" }}>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>Design Your Dream Shoes</h1>
                    <p style={{ fontSize: "1.2rem", marginTop: "10px", color: "grey" }}>
                        Customize your shoes using our interactive 3D models and order your favorite designs!
                    </p>
                </header>
                {!showModels ? (
                    <div style={{ display: "flex", alignItems: "center", marginTop: "3rem" }}>
                        <div
                            style={{
                                height: "50vh",
                                width: "50vh",
                                backgroundColor: "#fff",
                                borderRadius: "1rem",
                                overflow: "hidden",
                                flexShrink: 0,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                            }}
                            className="glass-background"
                        >
                            <Canvas shadows style={{ height: "100%", width: "100%" }}>
                                <ambientLight intensity={2.2} />
                                <pointLight
                                    position={[2, 5, 2]}
                                    intensity={10}
                                    castShadow
                                    shadow-mapSize-width={1024}
                                    shadow-mapSize-height={1024}
                                />
                                <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]}>
                                    <circleGeometry args={[0.5, 80]} />
                                    <meshStandardMaterial color="black" opacity={0.2} transparent />
                                </mesh>
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    autoRotate
                                    autoRotateSpeed={1.5}
                                    minPolarAngle={Math.PI / 2.0}
                                    maxPolarAngle={Math.PI / 2.0}
                                />
                                <InitialModel scale={0.6} position={[0, -1, 0]} rotation={[0.2, 0, 0]} />
                            </Canvas>
                        </div>
                        <div style={{ marginLeft: "2rem", maxWidth: "600px" }}>
                            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color: "white" }}>
                                How It Works
                            </h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "grey", marginBottom: "1rem" }}>
                                Use our advanced 3D model viewer to customize your shoes. Rotate, zoom, and choose the
                                perfect design to match your style. Once you’re happy with the design, place your order,
                                and we’ll bring your dream shoes to life!
                            </p>
                            <Button label="Start Designing" onClick={() => setShowModels(!showModels)} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-center items-center bg-black relative overflow-hidden">
                            <AnimatePresence>
                                {!selectedModel ? (
                                    <motion.div
                                        className="flex gap-8"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {["Model1", "Model2", "Model3"].map((model) => (
                                            <div key={model} className="text-center">
                                                <Canvas style={{ height: "40vh", width: "40vh", backgroundColor: "grey", borderRadius: "1rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                                                    <ambientLight intensity={1.2} />
                                                    <pointLight position={[2, 5, 2]} intensity={10} />
                                                    {renderModel(model)}
                                                    <OrbitControls
                                                        enableZoom={true}
                                                        enablePan={false}
                                                        autoRotate
                                                        autoRotateSpeed={1}
                                                    />
                                                </Canvas>
                                                <div className="flex justify-center items-center mt-2 w-full">
                                                    <Button label="Select" fullWidth onClick={() => handleSelectModel(model)} />
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="flex gap-8 w-full px-12 min-h-[60vh]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="flex-1">
                                            <Canvas style={{ height: "60vh", width: "60vh", backgroundColor: "grey", borderRadius: "1rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                                                <ambientLight intensity={1.5} />
                                                <pointLight position={[2, 5, 2]} intensity={15} />
                                                {renderModel(selectedModel)}
                                                <OrbitControls
                                                    enableZoom={true}
                                                    enablePan={false}
                                                    autoRotate
                                                    autoRotateSpeed={1.5}
                                                />
                                            </Canvas>
                                        </div>
                                        <motion.div
                                            className="flex-1 justify-between h-full p-6 rounded-lg bg-gray-800 text-white shadow-lg"
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: 100, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <div className="flex-1 pl-6">
                                                <h2 className="text-2xl font-bold mb-4">Customize Your {selectedModel}</h2>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium">Sole Color:</label>
                                                    <input
                                                        type="color"
                                                        value={soleColor}
                                                        onChange={(e) => setSoleColor(e.target.value)}
                                                        className="w-16 h-8 border rounded"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium">Body Color:</label>
                                                    <input
                                                        type="color"
                                                        value={bodyColor}
                                                        onChange={(e) => setBodyColor(e.target.value)}
                                                        className="w-16 h-8 border rounded"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium">Laces Color:</label>
                                                    <input
                                                        type="color"
                                                        value={lacesColor}
                                                        onChange={(e) => setLacesColor(e.target.value)}
                                                        className="w-16 h-8 border rounded"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium">Extra Detailing:</label>
                                                    <input
                                                        type="color"
                                                        value={extrasColor}
                                                        onChange={(e) => setExtrasColor(e.target.value)}
                                                        className="w-16 h-8 border rounded"
                                                    />
                                                </div>
                                                <div className="mb-6">
                                                    <label className="block text-sm font-medium">Texture:</label>
                                                    <div>
                                                        <label>Textures:</label>
                                                        <div className="flex gap-2 mt-2">
                                                            {textureOptions.map((option) => (
                                                                <button
                                                                    key={option.name}
                                                                    onClick={() => applyTexture(option.url)}
                                                                    className={`p-2 border rounded ${texture === option.url ? "border-blue-500" : "border-gray-300"}`}
                                                                    style={{
                                                                        backgroundImage: `url(${option.url})`,
                                                                        backgroundSize: "cover",
                                                                        width: "50px",
                                                                        height: "50px",
                                                                    }}
                                                                    title={option.name}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-between items-center">
                                                <Button label="Go Back" onClick={handleGoBack} />
                                                <Button label="Checkout" onClick={handleGoBack} />
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <footer
                            style={{
                                marginTop: "2rem",
                                padding: "1rem",
                                textAlign: "center",
                                color: "white",
                                fontStyle: "italic",
                                fontSize: "1.1rem",
                                borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                        >
                            More shoe modals and customization options are coming soon!
                        </footer>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModalPage;
