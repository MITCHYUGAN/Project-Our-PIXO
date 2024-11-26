import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Gallery.css";
import GalleryBanner from "./GalleryBanner";
import ClientGallery from "./ClientGallery";
import BookingSection from "./BookingSection";
import MarketplaceSection from "./MarketplaceSection";
import GetStartedForFree from "../../components/GetStartedForFree/GetStartedForFree";
import DropdownArrow from "./assets/down-arrow-icon.svg";
import Badge from "./Badge";

function MainComponent() {
  const [selectedSection, setSelectedSection] = useState("client-gallery");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Update selectedSection based on query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (section) {
      setSelectedSection(section);
    }

    // scroll to top of page
    window.scrollTo(0, 0);
  }, [location]);

  const handleSelectionChange = (value) => {
    setSelectedSection(value);
    setIsDropdownOpen(false);
  };

  const renderSelectedSection = () => {
    switch (selectedSection) {
      case "client-gallery":
        return <ClientGallery />;
      case "bookings":
        return <BookingSection />;
      case "marketplace":
        return <MarketplaceSection />;
      default:
        return <ClientGallery />;
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
            {/* Dropdown Button */}
            <button
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedSection === "client-gallery" ? (
                <div
                  className="select"
                  style={{ borderBottom: "2px solid #872032", lineHeight: "60px" }}
                >
                  Client Gallery
                </div>
              ) : selectedSection === "bookings" ? (
                <div className="select">
                  Bookings <Badge />
                  <div className="bottom-line"></div>
                </div>
              ) : (
                <div className="select">
                  Marketplace <br /> <Badge />
                  <div className="bottom-line"></div>
                </div>
              )}
              <img
                src={DropdownArrow}
                alt="dropdown arrow"
                className="dropdown-arrow-icon"
              />
            </button>

            {/* Dropdown Options */}
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
            <div className="line"></div>
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
