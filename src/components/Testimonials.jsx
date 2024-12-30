import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Seamless experience and fast approval!",
      content:
        "Key2Loan made securing funding for my business a breeze. The application was straightforward, and I received approval quickly. With their low interest rates and excellent customer service, I could focus on growing my business instead of worrying about finances.",
      author: "~ Ankush",
    },
    {
      title: "Highly efficient and customer-friendly!",
      content:
        "The team at Key2Loan made the entire process stress-free. Their personalized service and attention to detail were remarkable. Highly recommended!",
      author: "~ Priya",
    },
    {
      title: "Transparent and reliable!",
      content:
        "I appreciated the transparency in their process. Key2Loan kept me informed every step of the way and delivered on their promises.",
      author: "~ Rohit",
    },
    {
      title: "Fast processing and excellent rates!",
      content:
        "Their interest rates are among the best in the market. The speed of processing was outstanding too!",
      author: "~ Sneha",
    },
    {
      title: "Exceptional service!",
      content:
        "The staff was friendly and professional. They helped me secure funding for my startup without any hassle.",
      author: "~ Akshay",
    },
    {
      title: "Simplified funding process!",
      content:
        "Key2Loan made it easy to secure a loan with their simplified process. I highly recommend them to any business owner.",
      author: "~ Karan",
    },
  ];

  return (
    <div
      style={{
        padding: "50px 40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "32px",
          fontWeight: "700",
          color: "#333",
        }}
      >
        What People Have to Say
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                fontSize: "20px",
                fontWeight: "600",
                color: "#0073e6",
              }}
            >
              {testimonial.title}
            </h3>
            <p
              style={{
                marginBottom: "15px",
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              {testimonial.content}
            </p>
            <p
              style={{
                fontStyle: "italic",
                color: "#333",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;