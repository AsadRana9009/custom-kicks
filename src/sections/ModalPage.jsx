/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { InitialModel } from "../components/Modals/InitialModel";
import { Button } from "../components";
import { Model3 } from "../components/Modals/Model3";
import { Model2 } from "../components/Modals/Model2";
import { Model1 } from "../components/Modals/Model1";

const ModalPage = () => {
    const [showModels, setShowModels] = useState(false);

    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.7)",
            }}
        >
            <div
                style={{
                    width: "90%",
                    maxWidth: "1200px",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    padding: "2rem",
                }}
            >
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
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", width: "100%" }}>
                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                                <h3 style={{ color: "white", marginBottom: "1rem" }}>Formal Shoes</h3>
                                <Canvas style={{ height: "40vh", width: "40vh", backgroundColor: "grey", borderRadius: "1rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                                    <ambientLight intensity={20.2} />
                                    <pointLight position={[2, 5, 2]} intensity={10} />
                                    {/* Adjust rotation to tilt the model */}
                                    <Model1 scale={0.012} position={[0, -0.4, 0]} rotation={[0.3, Math.PI / 2, 0]} />
                                    <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1} />
                                </Canvas>
                                <Button label="Select" />
                            </div>
                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                                <h3 style={{ color: "white", marginBottom: "1rem" }}>Sports Shoes</h3>
                                <Canvas style={{ height: "40vh", width: "40vh", backgroundColor: "grey", borderRadius: "1rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                                    <ambientLight intensity={1.2} />
                                    <pointLight position={[2, 5, 2]} intensity={10} />
                                    {/* Adjust rotation to tilt the model */}
                                    <Model2 scale={8.0} position={[0, 1, 0]} rotation={[0.3, 0, 0]} />
                                    <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1} />
                                </Canvas>
                                <Button label="Select" />
                            </div>
                            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                                <h3 style={{ color: "white", marginBottom: "1rem" }}>Casual Shoes</h3>
                                <Canvas style={{ height: "40vh", width: "40vh", backgroundColor: "grey", borderRadius: "1rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
                                    <ambientLight intensity={2.2} />
                                    <pointLight position={[2, 5, 2]} intensity={10} />
                                    {/* Adjust rotation to tilt the model */}
                                    <Model3 scale={0.016} position={[-1, -1, 1]} rotation={[0.4, 0 , 0]} />
                                    <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1} />
                                </Canvas>
                                <Button label="Select" />
                            </div>
                        </div>


                    </>
                )}
            </div>
        </div>
    );
};

export default ModalPage;
