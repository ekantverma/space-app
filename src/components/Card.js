import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Component to load and display the 3D model
const Model = ({ modelPath }) => {
  const { scene, error } = useGLTF(modelPath);

  if (error) {
    console.error("Error loading model:", error);
    return null;
  }

  // Set a larger scale for the model
  // scene.scale.set(2.5, 2.5, 2.5); // Increase scale for a significantly larger model
  scene.scale.set(1.5, 1.5, 1.5); 
  scene.position.set(0, 0, 0); // Adjust if necessary


  return <primitive object={scene} />;
};

// Main Card component
const Card = ({ modelPath, planetName, description }) => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg overflow-hidden p-6 text-center w-full max-w-md mx-auto transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-bold text-white mb-4">{planetName}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="relative w-full h-72 mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('/space.jpg')" }} 
        ></div>
        <Canvas style={{ height: "100%", width: "100%" }} camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model modelPath={modelPath} />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="mt-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition duration-200">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Card; 
