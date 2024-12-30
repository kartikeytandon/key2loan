import React from "react";
import tataCapital from "../assets/tataCapital.png"; // Replace with actual path
import bajajFinserv from "../assets/bajajFinserv.png"; // Replace with actual path
import poonawallaFincorp from "../assets/poonawallaFincorp.png"; // Replace with actual path
import lntFinance from "../assets/lntFinance.png"; // Replace with actual path
import adityaBirlaCapital from "../assets/adityaBirlaCapital.png"; // Replace with actual path

const ChannelPartners = () => {
  const partners = [
    { name: "Tata Capital", logo: tataCapital },
    { name: "Bajaj Finserv", logo: bajajFinserv },
    { name: "Poonawalla Fincorp", logo: poonawallaFincorp },
    { name: "L&T Finance", logo: lntFinance },
    { name: "Aditya Birla Capital", logo: adityaBirlaCapital },
  ];

  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "30px",
          fontWeight: "700",
          color: "#333",
        }}
      >
        Our Channel Partners
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            style={{
              width: "160px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              padding: "10px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              style={{
                maxWidth: "100%",
                maxHeight: "80px",
                objectFit: "contain",
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.target.style.filter = "grayscale(100%)")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelPartners;