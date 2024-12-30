import React, { useState, useEffect } from "react";
import image1 from "../assets/image 1.png"; // Replace with your first image
import image2 from "../assets/image 2.png"; // Replace with your second image

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const slides = [
    {
      image: image1,
      title: "Looking for Business Loan?",
      description: "Empowering Your Business with the Right Financial Support",
      buttonText: "Apply Now",
    },
    {
      image: image2,
      title: "Lowest Interest Rate",
      description: "The Smarter Way to Borrow: Lowest Interest, Maximum Benefit.",
      buttonText: "Apply Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
            opacity: currentImage === index ? 1 : 0,
            zIndex: currentImage === index ? 1 : 0,
          }}
        >
          {/* Content Overlay */}
          {currentImage === index && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Optional background for text visibility
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
                {slide.title}
              </h2>
              <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                {slide.description}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#0073e6",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#005bb5")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#0073e6")
                }
              >
                {slide.buttonText}
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)} // Allow users to click to navigate
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: currentImage === index ? "#0073e6" : "#ddd",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          ></div>
        ))}
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="height: 400px"] {
              height: 300px; /* Adjust height for smaller screens */
            }
            div[style*="backgroundImage"] {
              backgroundSize: cover;
            }
            div[style*="gap: 8px"] div {
              width: 8px; /* Adjust dot size */
              height: 8px;
            }
            div[style*="padding: 20px"] {
              padding: 10px; /* Adjust overlay padding */
            }
            h2 {
              font-size: 20px; /* Adjust title font size */
            }
            p {
              font-size: 14px; /* Adjust description font size */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Slideshow;