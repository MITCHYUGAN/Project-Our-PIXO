import { useState } from "react";
import "./Gallery.css"
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import MarketplaceSection from "./MarketplaceSection";
import GalleryBanner from "./GalleryBanner";
import GetStartedForFree from "../GetStartedForFree/GetStartedForFree";
import DropdownArrow from "./assets/down-arrow-icon.svg"

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
      <div className="sections-wrapper">
        <div className="select-option-wrapper">
      <select value={selectedSection} onChange={handleSelectionChange}>
        <option value="client-gallery">Client Gallery</option>
        <option value="bookings">Bookings</option>
        <option value="marketplace">Marketplace</option>
      </select>
      <img src={DropdownArrow} alt="select drop down arrow" />
        </div>

      {/* Render the selected section below the dropdown */}
      <div className="section-container">{renderSelectedSection()}</div>
      </div>
      <GetStartedForFree />
      </div>
    </div>
  );
}

export default MainComponent;
