import React from "react";

const features = [
  {
    icon: "🏠", // Replace with actual icons if needed
    title: "Door Step Service",
    description: "We come to you for documentation and verification",
  },
  {
    icon: "💲",
    title: "Lowest Interest Rate",
    description: "Competitive interest rates for all loan types",
  },
  {
    icon: "💳",
    title: "Zero Upfront Payment",
    description: "No hidden charges or upfront fees",
  },
  {
    icon: "🛡️",
    title: "No Hidden Charges",
    description: "Complete transparency in all our services",
  },
  {
    icon: "📄",
    title: "Least Documentation",
    description: "Minimal paperwork required",
  },
  {
    icon: "💻",
    title: "Digital Process",
    description: "Fast and efficient online application process",
  },
];

const WhyKey2Loan = () => {
  return (
    <div
      style={{
        padding: "60px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      id="whykey2"
    >
      <h2
        style={{
          marginBottom: "30px",
          fontSize: "32px",
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
        }}
      >
        Why Key2Loan?
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "15px",
              padding: "30px",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              backgroundColor: "#ffffff",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px", color: "#0073e6" }}>
              {feature.icon}
            </div>
            <h4
              style={{
                margin: "0 0 10px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {feature.title}
            </h4>
            <p style={{ margin: 0, color: "#555", fontSize: "16px" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyKey2Loan;