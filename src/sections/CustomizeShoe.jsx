import { useLocation } from "react-router-dom";

const CustomizeShoe = () => {
  const location = useLocation();
  const { image } = location.state || {};

  return (
    <div className="min-h-screen bg-[#1A1A1D] mt-10 text-white flex flex-col md:flex-row items-center py-16 px-8">
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <img 
          src={image} 
          alt="Selected Shoe" 
          className="max-w-full max-h-96 rounded-lg shadow-lg border border-gray-700" 
        />
      </div>

      <div className="w-full md:w-1/2 bg-[#2A2A2D] p-8 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Customize Your Shoe</h2>
        <form className="flex-1 w-full p-6 space-y-6">

        <div>
          <label htmlFor="shoe-color" className="block mb-2 font-semibold">Shoe Color</label>
          <input
            id="shoe-color"
            type="text"
            placeholder="e.g., Red, Blue, Custom Gradient"
            className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#CD1818]"
          />
        </div>

        <div>
          <label htmlFor="sole-size" className="block mb-2 font-semibold">Sole Size (US)</label>
          <input
            id="sole-size"
            type="number"
            placeholder="Enter size (e.g., 8, 9, 10)"
            className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#CD1818]"
          />
        </div>

        <div>
          <label htmlFor="material-type" className="block mb-2 font-semibold">Material Type</label>
          <select
            id="material-type"
            className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#CD1818]"
          >
            <option value="">Select Material</option>
            <option value="leather">Leather</option>
            <option value="synthetic">Synthetic</option>
            <option value="canvas">Canvas</option>
            <option value="mesh">Mesh</option>
          </select>
        </div>

        <div>
          <label htmlFor="pattern-design" className="block mb-2 font-semibold">Pattern or Design</label>
          <textarea
            id="pattern-design"
            placeholder="e.g., Stripes, Dots, Custom Logo"
            className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#CD1818] resize-none"
          />
        </div>

        <div>
          <label htmlFor="additional-features" className="block mb-2 font-semibold">Additional Features</label>
          <textarea
            id="additional-features"
            placeholder="e.g., Waterproof, Lightweight, Extra Padding"
            className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#CD1818] resize-none"
          />
        </div>

        <div>
          <label htmlFor="reference-image" className="block mb-2 font-semibold">Upload Reference Image (Optional)</label>
          <input
            id="reference-image"
            type="file"
            className="w-full p-3 rounded bg-[#1A1A1D] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#CD1818]"
          />
        </div>

        <button
          className="w-full py-3 bg-[#CD1818] text-white rounded-lg hover:bg-[#A31414] transition-all duration-300 font-semibold"
        >
          Add to Cart
        </button>
      </form>
      </div>
    </div>
  );
};

export default CustomizeShoe;
