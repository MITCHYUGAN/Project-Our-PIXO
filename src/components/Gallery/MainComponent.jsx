import { useState } from "react";
import "./Gallery.css"
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import MarketplaceSection from "./MarketplaceSection";
import GalleryBanner from "./GalleryBanner";

function MainComponent() {
  // State to store the current selection
  const [selectedSection, setSelectedSection] = useState("client-gallery");

  // Function to handle changes in dropdown
  const handleSelectionChange = (event) => {
    setSelectedSection(event.target.value);
  };

  // Function to render the selected component
  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "client-gallery":
        return <GallerySection />;
      case "bookings":
        return <BookingSection />;
      case "marketplace":
        return <MarketplaceSection />;
      default:
        return <GallerySection />;
    }
  };

  return (
    <div className="showcase-wrapper">
      <div className="showcase-sections">
      <GalleryBanner />
      <div>
      <select value={selectedSection} onChange={handleSelectionChange}>
        <option value="client-gallery">Client Gallery</option>
        <option value="bookings">Bookings</option>
        <option value="marketplace">Marketplace</option>
      </select>

      {/* Render the selected section below the dropdown */}
      <div className="section-container">{renderSelectedSection()}</div>
      </div>
      </div>
    </div>
  );
}

export default MainComponent;
