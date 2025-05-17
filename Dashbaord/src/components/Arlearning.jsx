import React, { useState, useEffect } from "react";

// Import your 3D model and image files
import model1 from "../assets/tulsi_tree_on_a_cement_tub.glb";
import model2 from "../assets/mint_with_lebel.glb";
import model3 from "../assets/aloe_vera.glb";
import model4 from "../assets/3d-scan_ginger_root.glb";
import model5 from "../assets/turmeric.glb";
import model6 from "../assets/moringa.glb";
import model7 from "../assets/neemcompressed (1).glb";
import model8 from "../assets/lavender.glb";
import model9 from "../assets/ginseng.glb";
import model10 from "../assets/rosemary.glb";

import image1 from "../assets/Tusli.jpg";
import image2 from "../assets/Mint.jpg";
import image3 from "../assets/Alvera.jpg";
import image4 from "../assets/Ginger.jpg";
import image5 from "../assets/turmeric.jpg";
import image6 from "../assets/moringa.jpg";
import image7 from "../assets/neem.jpg";
import image8 from "../assets/Lavender.jpg";
import image9 from "../assets/ginseng.jpg";
import image10 from "../assets/Rosemary.jpg";

const Arlearning = () => {
  const scenarios = [
    { id: 1, title: "Tulsi", image: image1, model: model1, description: "Learn about Tulsi and its medicinal benefits.", category: "Tulsi", region: "Asia", medicinalUse: "Immunity Booster", type: "Herb" },
    { id: 2, title: "Mint", image: image2, model: model2, description: "Explore the uses and health benefits of Mint.", category: "Mint", region: "Europe", medicinalUse: "Digestive Aid", type: "Herb" },
    { id: 3, title: "Aloe Vera", image: image3, model: model3, description: "Understand the healing properties and uses of Aloe Vera.", category: "Aloe Vera", region: "Africa", medicinalUse: "Skin Care", type: "Succulent" },
    { id: 4, title: "Ginger", image: image4, model: model4, description: "Discover the medicinal properties and uses of Ginger.", category: "Ginger", region: "Asia", medicinalUse: "Anti-inflammatory", type: "Root" },
    { id: 5, title: "Turmeric", image: image5, model: model5, description: "Turmeric is known for its anti-inflammatory properties.", category: "Turmeric", region: "Asia", medicinalUse: "Anti-inflammatory", type: "Root" },
    { id: 6, title: "Moringa", image: image6, model: model6, description: "Moringa is known as a powerful antioxidant.", category: "Moringa", region: "Africa", medicinalUse: "Antioxidant", type: "Herb" },
    { id: 7, title: "Neem", image: image7, model: model7, description: "Neem is widely used for its antibacterial properties.", category: "Neem", region: "Asia", medicinalUse: "Antibacterial", type: "Tree" },
    { id: 8, title: "Lavender", image: image8, model: model8, description: "Lavender is known for its calming effects.", category: "Lavender", region: "Europe", medicinalUse: "Calming", type: "Herb" },
    { id: 9, title: "Ginseng", image: image9, model: model9, description: "Ginseng helps in boosting energy and reducing stress.", category: "Ginseng", region: "Asia", medicinalUse: "Energy Booster", type: "Root" },
    { id: 10, title: "Rosemary", image: image10, model: model10, description: "Rosemary is often used to improve memory.", category: "Rosemary", region: "Europe", medicinalUse: "Memory Booster", type: "Herb" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedMedicinalUse, setSelectedMedicinalUse] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [expandedScenario, setExpandedScenario] = useState(null);
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked(
      bookmarked.includes(id)
        ? bookmarked.filter((item) => item !== id)
        : [...bookmarked, id]
    );
  };

  const categories = [
    "All",
    "Tulsi",
    "Mint",
    "Aloe Vera",
    "Ginger",
    "Turmeric",
    "Moringa",
    "Neem",
    "Lavender",
    "Ginseng",
    "Rosemary",
  ];
  const regions = ["All", "Asia", "Europe", "Africa"];
  const medicinalUses = [
    "All",
    "Immunity Booster",
    "Digestive Aid",
    "Skin Care",
    "Anti-inflammatory",
    "Antioxidant",
    "Calming",
    "Energy Booster",
    "Memory Booster",
  ];
  const types = ["All", "Herb", "Succulent", "Root", "Tree"];

  const filteredScenarios = scenarios.filter(
    (scenario) =>
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || scenario.category === selectedCategory) &&
      (selectedRegion === "All" || scenario.region === selectedRegion) &&
      (selectedMedicinalUse === "All" || scenario.medicinalUse === selectedMedicinalUse) &&
      (selectedType === "All" || scenario.type === selectedType)
  );

  const toggleScenario = (id) => {
    setExpandedScenario(expandedScenario === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Medicinal Plants</h1>

      {/* Search and Filter Options */}
      <div className="flex flex-wrap justify-center mb-8 space-x-4 space-y-4">
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded w-full sm:w-64"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded w-full sm:w-64"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="px-4 py-2 border rounded w-full sm:w-64"
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <select
          value={selectedMedicinalUse}
          onChange={(e) => setSelectedMedicinalUse(e.target.value)}
          className="px-4 py-2 border rounded w-full sm:w-64"
        >
          {medicinalUses.map((use) => (
            <option key={use} value={use}>
              {use}
            </option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 border rounded w-full sm:w-64"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Bookmarked Plants Cart */}
      {bookmarked.length > 0 && (
        <div className="mb-8 p-4 bg-green-100 rounded-lg shadow-lg text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Bookmarked Plants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookmarked.map((id) => {
              const plant = scenarios.find((scenario) => scenario.id === id);
              return (
                <div key={plant.id} className="bg-green-200 p-4 rounded-lg shadow-lg text-center">
                  <h3 className="text-lg sm:text-xl font-bold">{plant.title}</h3>
                  <img
                    src={plant.image}
                    alt={plant.title}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm sm:text-base">{plant.description}</p>
                  <button
                    onClick={() => toggleBookmark(plant.id)}
                    className="mt-4 bg-red-500 text-white py-1 px-4 rounded text-sm sm:text-base"
                  >
                    Remove Bookmark
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Display Scenarios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario) => (
          <div key={scenario.id} className="bg-blue-100 border rounded-lg shadow-lg overflow-hidden text-center">
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleScenario(scenario.id)}
            >
              <h2 className="text-lg sm:text-xl font-bold text-black mb-2">
                {scenario.title}
              </h2>
              <img
                src={scenario.image}
                alt={scenario.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
            </div>
            {expandedScenario === scenario.id && (
              <div className="p-4 bg-blue-50">
                <model-viewer
                  src={scenario.model}
                  alt={`3D model of ${scenario.title}`}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  poster={scenario.image}
                  shadow-intensity="1"
                  auto-rotate
                  style={{ width: "100%", height: "200px", margin: "0 auto" }}
                >
                  <button slot="ar-button" className="ar-button">
                    View in AR
                  </button>
                </model-viewer>
                <p className="mt-4">{scenario.description}</p>
                <button
                  onClick={() => toggleBookmark(scenario.id)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  {bookmarked.includes(scenario.id) ? "Remove Bookmark" : "Bookmark"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arlearning;
