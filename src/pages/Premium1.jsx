import React, { useState } from "react";
import "./Premium.css";

const plans = [
  {
    name: "Starter Plan",
    description: "Perfect for eco-conscious learners",
    features: [
      "Access to institute listings",
      "5 brochure downloads/day",
      "Monthly green career webinar",
    ],
    monthly: "₹499",
    yearly: "₹5,988",
    note: "Annual savings available 🌏",
  },
  {
    name: "Pro Plan",
    description: "Best for ambitious eco-friendly aspirants",
    features: [
      "Unlimited institute access",
      "20 brochure downloads/day",
      "2 expert sessions/month",
      "Special eco-career guides",
    ],
    monthly: "₹799",
    yearly: "₹9,588",
    note: "Save with yearly billing 🌏",
    recommended: true,
  },
  {
    name: "Enterprise Plan",
    description: "For green institutes & consultancies",
    features: [
      "Premium listing support",
      "Detailed eco-reports",
      "Personalized dashboard",
      "API access & green support",
    ],
    monthly: "₹1,999",
    yearly: "₹23,988",
    note: "Invest in sustainable education 🌏",
  },
];

export default function Premium() {
  const [billing, setBilling] = useState("monthly");
  const [modal, setModal] = useState({ open: false, plan: "", price: "" });

  const handleSubscribe = (plan, price) => {
    setModal({ open: true, plan, price });
  };

  return (
    <div className="premium-root">
      <h1 className="page-title">🌿 Premium Plans</h1>
      <p className="page-subtitle">
        Unlock eco-friendly premium features for your learning journey
      </p>

      {/* Billing Toggle */}
      <div className="billing-toggle">
        <button
          onClick={() => setBilling("monthly")}
          className={billing === "monthly" ? "active" : ""}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={billing === "yearly" ? "active" : ""}
        >
          Yearly Billing 💸 Save 20%
        </button>
      </div>

      {/* Pricing Table */}
      <div className="pricing-table">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pricing-plan ${
              plan.recommended ? "recommended" : ""
            }`}
          >
            {plan.recommended && <div className="badge">Recommended</div>}
            <div className="pricing-plan__header">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>

            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="price">
              {billing === "monthly" ? plan.monthly : plan.yearly}{" "}
              <span>{billing === "monthly" ? "/ month" : "/ year"}</span>
            </div>

            <button
              className="purchase-btn"
              onClick={() =>
                handleSubscribe(
                  plan.name,
                  billing === "monthly" ? plan.monthly : plan.yearly
                )
              }
            >
              Get Premium
            </button>

            <p className="note">{plan.note}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal.open && (
        <div
          className="modal"
          onClick={(e) =>
            e.target.className === "modal" &&
            setModal({ ...modal, open: false })
          }
        >
          <div className="modal-content">
            <h3>You selected: {modal.plan}</h3>
            <p>Plan Price: {modal.price}</p>
            <button
              className="close-btn"
              onClick={() => setModal({ ...modal, open: false })}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
