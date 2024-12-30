import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Set default chart data on page load
    setChartData({
      labels: ["Principal Amount", "Total Interest"],
      datasets: [
        {
          data: [50, 50], // Default values
          backgroundColor: ["#0073e6", "#ff6384"],
        },
      ],
    });
  }, []);

  const calculateEMI = (e) => {
    e.preventDefault();
    if (!loanAmount || !annualInterestRate || !loanTenure) return;

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(annualInterestRate) / 12 / 100;
    const months = parseInt(loanTenure, 10) * 12; // Convert years to months

    const emiValue =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    setEmi(emiValue.toFixed(2));

    // Calculate total interest and total amount
    const totalPayment = emiValue * months;
    const totalInterestValue = totalPayment - principal;

    setTotalPayable(totalPayment.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));

    // Update chart data
    setChartData({
      labels: ["Principal Amount", "Total Interest"],
      datasets: [
        {
          data: [principal, totalInterestValue],
          backgroundColor: ["#0073e6", "#ff6384"],
        },
      ],
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "40px auto",
        padding: "40px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "1200px",
        fontFamily: "Arial, sans-serif",
        gap: "20px",
      }}
    >
      {/* Header */}
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#0073e6" }}>
        Business Loan EMI Calculator
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* EMI Calculator Form */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <form onSubmit={calculateEMI}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="number"
                placeholder="Loan Amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  outline: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="number"
                placeholder="Annual Interest Rate (%)"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  outline: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="number"
                placeholder="Loan Tenure (Years)"
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  outline: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#0073e6",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#005bb5")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0073e6")}
            >
              Calculate EMI
            </button>
          </form>
        </div>

        {/* Pie Chart and Results Section */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {chartData ? (
              <Pie
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                  },
                }}
              />
            ) : (
              <span style={{ color: "#888", fontSize: "16px" }}>
                Loading chart...
              </span>
            )}
          </div>
          {emi && (
            <div
              style={{
                width: "100%",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                textAlign: "left",
                lineHeight: "1.8",
                color: "#333",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#0073e6" }}>
                EMI Details
              </h3>
              <p>
                <strong>Monthly EMI:</strong> ₹{emi}
              </p>
              <p>
                <strong>Total Amount Payable:</strong> ₹{totalPayable} (Principal
                + Interest)
              </p>
              <p>
                <strong>Principal Amount:</strong> ₹{loanAmount}
              </p>
              <p>
                <strong>Total Interest Payable:</strong> ₹{totalInterest}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;