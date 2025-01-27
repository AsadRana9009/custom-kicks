import { useState } from "react";
import { sneaker, casual, formal } from "../assets/images";
import { BsStars } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import { PulseLoader, BarLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import { BsQuestionLg } from "react-icons/bs";
import { HiSpeakerphone } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import { CgCloseR } from "react-icons/cg";
import { Navigate } from "react-router-dom";

const AIShoeModeling = () => {
  const [selectedStyle, setSelectedStyle] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [navigateToCustomize, setNavigateToCustomize] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState("");
  const [isStyleSelected, setIsStyleSelected] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const generateImages = async () => {
    if (!selectedStyle || !aiPrompt.trim()) {
      setError("Please select a style and provide a description.");
      toast.error("Please select a style and provide a description.");
      return;
    }

    setError("");
    setLoading(true);

    setGeneratedImages([]);

    const payload = {
      shoe_description: aiPrompt,
      shoe_type: selectedStyle,
    };

    try {
      const response = await fetch(
        "https://4256-2407-aa80-116-73cc-ec4f-995f-b2ea-60ce.ngrok-free.app/text_to_shoe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate images. Please try again later.");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.every((url) => typeof url === "string")) {
        setGeneratedImages(data);
        toast.success("Shoe designs generated successfully!");
      } else {
        throw new Error("Invalid response from API.");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleStyleSelect = (styleId) => {
    setSelectedStyle(styleId);
    setIsStyleSelected(true);
  };

  const handleGoWithThisDesign = () => {
    if (selectedImage) {
      setIsPopupVisible(false);
      setNavigateToCustomize(true);
    }
  };

  if (navigateToCustomize) {
    return <Navigate to="/ai-page/customize" state={{ image: selectedImage }} />;
  }

  const handleReselect = () => {
    setSelectedStyle("");
    setGeneratedImages([]);
    setIsStyleSelected(false);
    setAiPrompt("");
  };


  return (
    <div className="bg-[#1A1A1D] min-h-screen text-white flex flex-col items-center mt-10 padding-x py-16">
      {isPopupVisible && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleClosePopup}
        >
          <div
            className="relative bg-white p-8 rounded-lg max-w-3xl max-h-[80vh] w-full text-black overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
            >
              <CgCloseR />
            </button>
            <img
              src={selectedImage}
              alt="Selected Shoe"
              className="w-full max-h-[60vh] object-contain rounded-lg mb-4"
            />
            <button
              onClick={handleGoWithThisDesign}
              className="w-full py-2 bg-[#CD1818] text-white rounded-lg hover:bg-[#A31414] transition-all duration-300"
            >
              Go with this design
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
      {generatedImages.length === 0 && !isStyleSelected && (
        <>
          <h1 className="text-5xl font-bold mb-8 text-center text-[#CD1818]">
            Tell Us Your Taste
          </h1>
          <p className="text-lg text-center max-w-2xl mb-16">
            Select your preferred shoe style to start creating your custom shoe
            with AI-powered design tools.
          </p>
        </>
      )}

      {generatedImages.length === 0 && !isStyleSelected ? (
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {styles.map((style) => (
            <div
              key={style.id}
              className={`p-10 rounded-lg border-2 transition-all duration-300 cursor-pointer text-center ${selectedStyle === style.id
                ? "border-[#CD1818] bg-[#2A2A2D]"
                : "border-gray-600 hover:border-[#CD1818] hover:shadow-lg"
                }`}
              onClick={() => handleStyleSelect(style.id)}
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
        <div className="w-full max-w-2xl mb-16">
          <div className="flex flex-row justify-between items-center">
            <button
              onClick={handleReselect}
              disabled={loading}
              className="py-2 px-4 bg-[#CD1818] text-white rounded-lg hover:bg-[#A31414] transition-all duration-300"
            >
              Reselect Shoe Type
            </button>
            {isStyleSelected && generatedImages.length === 0 && loading && (
              <div className="flex items-center justify-center">
                <HiSpeakerphone className="text-3xl text-[#CD1818] mr-4" />
                <ReactTyped
                  strings={["Let us do some magic."]}
                  typeSpeed={50}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                >
                  <input
                    type="text"
                    className="text-white bg-transparent w-full resize-none"
                    style={{
                      border: 'none',
                      outline: 'none',
                      whiteSpace: 'normal',
                      minHeight: '50px',
                    }}
                  />
                </ReactTyped>
              </div>
            )}
          </div>
          {/* {generatedImages.length > 0 && ( */}
          <div className="grid sm:grid-cols-3 gap-8 mt-8 mb-8">
            {generatedImages.length === 0 ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="relative w-48 h-40 bg-[#2A2A2D] rounded-lg overflow-hidden border-4 border-[#CD1818] flex justify-center items-center transition-all duration-300"
                >
                  {loading ? (
                    <BarLoader color="#CD1818" size={40} />
                  ) : (
                    <BsQuestionLg size={34} className="text-[#CD1818]" />
                  )}
                </div>
              ))
            ) : (
              generatedImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-48 h-48 bg-[#2A2A2D] rounded-lg overflow-hidden border-4 border-[#CD1818] transition-all duration-300"
                  onClick={() => handleImageClick(img)}
                >
                  <img
                    src={img}
                    alt={`Generated Shoe ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-[#CD1818] text-2xl font-bold cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    Select
                  </div>
                </div>
              ))
            )}
          </div>
          {/* )} */}
          <h3 className="text-3xl text-center font-semibold mb-4">
            Ask AI to Generate Your Dream{" "}
            {styles.find((style) => style.id === selectedStyle)?.label}
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
            disabled={loading || aiPrompt.trim() === ""}
          >
            {loading ? (
              <PulseLoader color="#ffffff" size={10} />
            ) : (
              <>
                <BsStars className="mr-2" />
                Generate
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default AIShoeModeling;
