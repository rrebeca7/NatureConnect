import React, { useState, useRef, useEffect } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1,
            minWidth: "160px",
          }}
        >
          <a href="#profile" style={menuItemStyle}>
            Profile
          </a>
          <a href="#settings" style={menuItemStyle}>
            Settings
          </a>
          <a href="#logout" style={menuItemStyle}>
            Logout
          </a>
        </div>
      )}
    </div>
  );
}

const menuItemStyle = {
  padding: "12px 16px",
  display: "block",
  color: "#333",
  textDecoration: "none",
};

export default Dropdown;
