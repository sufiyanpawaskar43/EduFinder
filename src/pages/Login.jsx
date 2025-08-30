import React, { useState } from "react";
import "./Login.css";

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="auth-container">
      <div className="form-box">
        {/* Toggle Switch */}
        <div className="form-toggle">
          <button
            className={activeForm === "login" ? "active" : ""}
            onClick={() => setActiveForm("login")}
          >
            Login
          </button>
          <button
            className={activeForm === "signup" ? "active" : ""}
            onClick={() => setActiveForm("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {activeForm === "login" && (
          <>
            <h2>Welcome Back</h2>
            <p>Log in to stay connected.</p>
            <form>
              <div className="input-field">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit" className="submit-btn">
                Log In
              </button>
            </form>
            <p className="switch-text">
              Don’t have an account?{" "}
              <span onClick={() => setActiveForm("signup")}>Sign Up</span>
            </p>
          </>
        )}

        {/* Signup Form */}
        {activeForm === "signup" && (
          <>
            <h2>Create Account</h2>
            <p>Join us by creating your account.</p>
            <form>
              <div className="input-field">
                <input type="text" required />
                <label>Full Name</label>
              </div>
              <div className="input-field">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Create Password</label>
              </div>
              <div className="checkbox-field">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span className="custom-checkbox"></span>
                  I agree to the <a href="#">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
            <p className="switch-text">
              Already have an account?{" "}
              <span onClick={() => setActiveForm("login")}>Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
