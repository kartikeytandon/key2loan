import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/key2loan_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnerPopupOpen, setIsPartnerPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePartnerPopup = () => {
    setIsPartnerPopupOpen(!isPartnerPopupOpen);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
        }}
      >
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Key2Loan Logo"
            style={{
              height: "50px",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="#products" className="menu-link">
            Our Products
          </a>
          <a href="#whykey2" className="menu-link">
            Why Us?
          </a>
          <a href="https://wa.me/918077511218" target="_blank" rel="noreferrer">
            <FaWhatsapp size={25} color="green" style={{ cursor: "pointer" }} />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#products" className="menu-link" onClick={toggleMenu}>
            Our Products
          </a>
          <a href="#why-us" className="menu-link" onClick={toggleMenu}>
            Why Us?
          </a>
          <FaWhatsapp size={25} color="green" style={{ cursor: "pointer" }} />
        </div>
      )}

      {/* Bottom Section */}
      <div className="bottom-bar">
        <div onClick={togglePartnerPopup} style={{ cursor: "pointer" }}>
          Become our Partner
        </div>
        <div>+91 8077XXXXXX</div>
        <div>contact@key2loan.com</div>
      </div>

      {/* Partner Popup */}
      {isPartnerPopupOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
            width: "90%",
            maxWidth: "400px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
            Become Our Partner
          </h3>
          <form>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="text"
                placeholder="Your Phone Number"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <textarea
                placeholder="Message (Optional)"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  resize: "none",
                  height: "80px",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#0073e6",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Submit
            </button>
          </form>
          <button
            onClick={togglePartnerPopup}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "10px",
              backgroundColor: "#ddd",
              color: "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* CSS Styling */}
      <style>
        {`
          .desktop-menu {
            display: flex;
            gap: 25px;
            align-items: center;
          }

          .menu-link {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            font-size: 16px;
            transition: color 0.3s ease;
          }

          .menu-link:hover {
            color: #0073e6;
          }

          .mobile-menu-icon {
            display: none;
            cursor: pointer;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f9f9f9;
            padding: 15px 0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .bottom-bar {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-wrap: wrap;
            padding: 15px 20px;
            background-color: #0073e6;
            color: white;
            text-align: center;
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .mobile-menu-icon {
              display: block;
            }
          }

          @media (max-width: 550px) {
            .bottom-bar {
              flex-direction: column;
              gap: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;