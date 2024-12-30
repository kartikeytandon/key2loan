import React, { useState } from "react";

// Reusable card component for credit products
const CreditProductCard = ({ title, onClick }) => {
  return (
    <div
      style={{
        flex: "1",
        margin: "10px",
        padding: "30px",
        border: "1px solid #e0e0e0",
        borderRadius: "15px",
        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        backgroundColor: "#ffffff",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div>{title}</div>
      <button
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#0073e6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
        onClick={onClick}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#0073e6")}
      >
        Know More
      </button>
    </div>
  );
};

// Popup modal component
const Popup = ({ title, content, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        zIndex: 1000,
        width: "80%",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>{title}</h3>
      <div style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>{content}</div>
      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0073e6",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </div>
  );
};

const AboutUs = () => {
  const [popupData, setPopupData] = useState(null);

  const handleCardClick = (type) => {
    if (type === "Unsecured") {
      setPopupData({
        title: "Unsecured Business Loans",
        content: (
          <div>
            <h4>Features & Benefits:</h4>
            <ul>
              <li>Zero Collateral Required: Acquire a business loan without collateral or security.</li>
              <li>Flexible Tenure: Tailored repayment terms for business needs.</li>
              <li>Quick Disbursement: Funds available within 7 business days.</li>
            </ul>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Turnover: Minimum 29K/Per day.</li>
              <li>Age: Borrower must be aged between 21-70.</li>
              <li>Credit Score: Up to 750.</li>
            </ul>
            <h4>Documents Required:</h4>
            <ul>
              <li>Aadhar Card</li>
              <li>Pan Card</li>
              <li>GST Certificate</li>
              <li>Income Proof</li>
              <li>Financial Details of the Company</li>
            </ul>
            <h4>FAQs:</h4>
            <ol>
              <li>
                <strong>What documents are needed to apply for a business loan?</strong>
                <p>Documents may include financial statements, tax returns, and business licenses.</p>
              </li>
              <li>
                <strong>What are business loans used for?</strong>
                <p>Business loans can be used for working capital, renovations, staffing, and more.</p>
              </li>
              <li>
                <strong>What is the purpose of the business loan?</strong>
                <p>A business loan gives you access to capital so you can invest it into your business.</p>
              </li>
            </ol>
          </div>
        ),
      });
    } else if (type === "Secured") {
      setPopupData({
        title: "Secured Business Loans",
        content: (
          <div>
            <h4>Features & Benefits:</h4>
            <ul>
              <li>Higher Loan Amount: Access to higher sums with collateral.</li>
              <li>Lower Interest Rate: Reduced rates compared to unsecured loans.</li>
              <li>Quick Disbursement: Funds available within 7 business days.</li>
            </ul>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Collateral Required: Fixed assets, including plots.</li>
              <li>Age: Borrower must be aged between 21-70.</li>
              <li>Credit Score: Up to 750.</li>
            </ul>
            <h4>Documents Required:</h4>
            <ul>
              <li>Aadhar Card</li>
              <li>Pan Card</li>
              <li>GST Certificate</li>
              <li>Income Proof</li>
              <li>Financial Details of the Company</li>
            </ul>
            <h4>FAQs:</h4>
            <ol>
              <li>
                <strong>What documents are needed to apply for a business loan?</strong>
                <p>Documents may include financial statements, tax returns, and business licenses.</p>
              </li>
              <li>
                <strong>What are business loans used for?</strong>
                <p>Business loans can be used for working capital, renovations, staffing, and more.</p>
              </li>
              <li>
                <strong>What is the purpose of the business loan?</strong>
                <p>A business loan gives you access to capital so you can invest it into your business.</p>
              </li>
            </ol>
          </div>
        ),
      });
    }
  };

  return (
    <div style={{ padding: "60px", backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}>
      {/* About Us Section */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#333", textAlign: "center" }}>
          About Us
        </h2>
        <p style={{ lineHeight: "1.8", marginTop: "20px", color: "#555", fontSize: "18px" }}>
          Key2Loan was established in 2024 with the goal of bridging the gap between lenders and
          borrowers. Its foundation is based on facilitating the financial needs of businesses and
          individuals by offering low-interest rates and a hassle-free process.
        </p>
        <p
          style={{
            marginTop: "20px",
            fontWeight: "bold",
            color: "#0073e6",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Discover flexible loan options tailored to your needs. Our expert team is here to guide
          you through the process, ensuring a seamless experience.
        </p>
      </section>

      {/* Credit Products Section */}
      <section id="products">
        <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#333", textAlign: "center" }}>
          Our Credit Products
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          <CreditProductCard
            title="Unsecured Business Loan"
            onClick={() => handleCardClick("Unsecured")}
          />
          <CreditProductCard
            title="Secured Business Loan"
            onClick={() => handleCardClick("Secured")}
          />
        </div>
      </section>

      {/* Popup Modal */}
      {popupData && (
        <Popup
          title={popupData.title}
          content={popupData.content}
          onClose={() => setPopupData(null)}
        />
      )}
    </div>
  );
};

export default AboutUs;