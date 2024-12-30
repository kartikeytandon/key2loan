import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0073e6",
        color: "white",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Container for horizontal layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Company Details */}
        <div style={{ flex: "1", minWidth: "250px", lineHeight: "1.8" }}>
          <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Company Details</h4>
          <p style={{ margin: "0" }}>Address: Key2Loan, XYZ Street, City Name</p>
          <p style={{ margin: "0" }}>Contact: +91 8077XXXXXX</p>
          <p style={{ margin: "0" }}>Email: contact@key2loan.com</p>
        </div>

        {/* Terms & Privacy Policy */}
        <div style={{ flex: "1", minWidth: "250px", textAlign: "center" }}>
          <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Legal</h4>
          <p style={{ margin: "10px 0" }}>
            <a
              href="#terms"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Terms & Conditions
            </a>
          </p>
          <p style={{ margin: "10px 0" }}>
            <a
              href="#privacy"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Single Tagline */}
        <div
          style={{
            flex: "1",
            minWidth: "250px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>Tagline</h4>
          <p
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              margin: "0",
              maxWidth: "300px",
              lineHeight: "1.8",
            }}
          >
            "The Key to Your Financial Freedom"
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div
        style={{
          fontSize: "14px",
          textAlign: "center",
          marginTop: "40px",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          paddingTop: "20px",
        }}
      >
        © {new Date().getFullYear()} Key2Loan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;