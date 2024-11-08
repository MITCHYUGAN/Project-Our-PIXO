import { useState, useRef, useEffect } from "react";
import "./Gallery.css";
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import MarketplaceSection from "./MarketplaceSection";
import GalleryBanner from "./GalleryBanner";
import GetStartedForFree from "../../components/GetStartedForFree/GetStartedForFree";
import DropdownArrow from "./assets/down-arrow-icon.svg";

function MainComponent() {
  const [selectedSection, setSelectedSection] = useState("client-gallery");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelectionChange = (value) => {
    setSelectedSection(value);
    setIsDropdownOpen(false);
  };

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

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="showcase-wrapper">
      <div className="showcase-sections">
        <GalleryBanner />
        <div className="sections-wrapper">
          <div className="select-option-wrapper" ref={dropdownRef}>
            <button
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedSection === "client-gallery"
                ? "Client Gallery"
                : selectedSection === "bookings"
                ? "Bookings"
                : "Marketplace"}
              <img
                src={DropdownArrow}
                alt="dropdown arrow"
                className="dropdown-arrow-icon"
              />
            </button>

            {/* Dropdown options */}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div
                  className="dropdown-option"
                  onClick={() => handleSelectionChange("client-gallery")}
                >
                  Client Gallery
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => handleSelectionChange("bookings")}
                >
                  Bookings
                </div>
                <div
                  className="dropdown-option"
                  onClick={() => handleSelectionChange("marketplace")}
                >
                  Marketplace
                </div>
              </div>
            )}
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
