import { useState } from "react";
import { sneaker, casual, formal } from "../assets/images";
import {
  sneaker1,
  sneaker2,
  sneaker3,
  sneaker4,
  sneaker5,
  sneaker6,
} from "../assets/images";

import { BsStars } from "react-icons/bs";

const AIShoeModeling = () => {
  const [selectedStyle, setSelectedStyle] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = [
    {
      id: "sneaker",
      label: "Sneaker",
      description: "Trendy and sporty.",
      image: sneaker,
    },
    {
      id: "casual",
      label: "Casual",
      description: "Relaxed and versatile.",
      image: casual,
    },
    {
      id: "formal",
      label: "Formal",
      description: "Elegant and professional.",
      image: formal,
    },
  ];

  const generateImages = () => {
    // Use imported sneaker images as mock AI-generated images
    const mockImages = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5, sneaker6];
    setGeneratedImages(mockImages);
  };

  return (
    <div className="bg-[#1A1A1D] min-h-screen text-white flex flex-col items-center mt-10 padding-x py-16">
      {/* Title and Description (hidden after generation) */}
      {generatedImages.length === 0 && (
        <>
          <h1 className="text-5xl font-bold mb-8 text-center text-[#CD1818]">
            Tell Us Your Taste
          </h1>
          <p className="text-lg text-center max-w-2xl mb-16">
            Select your preferred shoe style to start creating your custom shoe with AI-powered design tools.
          </p>
        </>
      )}

      {/* Style Selection Cards */}
      {generatedImages.length === 0 ? (
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {styles.map((style) => (
            <div
              key={style.id}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer text-center ${selectedStyle === style.id
                  ? "border-[#CD1818] bg-[#2A2A2D]"
                  : "border-gray-600 hover:border-[#CD1818] hover:shadow-lg"
                }`}
              onClick={() => setSelectedStyle(style.id)}
            >
              <img
                src={style.image}
                alt={`${style.label} Image`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mb-4">{style.label}</h2>
              <p className="text-gray-300">{style.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // Display generated images after clicking "Generate"
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {generatedImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-40 bg-[#2A2A2D] rounded-lg overflow-hidden border-4 border-[#CD1818] transition-all duration-300"
              onClick={() => setSelectedImage(img)} // Select image on click
            >
              <img
                src={img}
                alt={`Generated Shoe ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Hover text to select image */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[#CD1818] text-2xl font-bold cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                Select
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      {selectedStyle && (
        <div className="w-full max-w-2xl mb-16">
          <h3 className="text-3xl font-semibold mb-4">
            Ask AI to Generate Your Dream {styles.find((style) => style.id === selectedStyle)?.label}
          </h3>
          <textarea
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            placeholder="Describe your ideal shoe design..."
            className="w-full h-32 p-4 bg-[#2A2A2D] text-white rounded-lg outline-none border-2 border-gray-600 focus:border-[#CD1818] placeholder-gray-400 resize-none"
          />
          <button
            onClick={generateImages}
            className="mt-4 w-full py-3 bg-[#CD1818] text-white rounded-lg hover:bg-[#A31414] transition-all duration-300 flex items-center justify-center"
          >
            <BsStars className="mr-2" />
            Generate
          </button>
        </div>
      )}
    </div>
  );
};

export default AIShoeModeling;
