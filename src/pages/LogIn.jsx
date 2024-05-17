import React, { useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { role, setRole } = useState("");
  return (
    <div className="Login_container">
      <div className="Login_form">
        <div className="Login_leftside">
          <div className="Login_form_container">
            <h1>Log In</h1>
            <div className="Login_role_container">
              <div className="Login_roles">
                <h3>Role: {role}</h3>
                <button
                  type="button"
                  className="Login_role_items"
                  onClick={() => setRole("Job Seeker")}
                >
                  Job Seeker
                </button>
                <button
                  type="button"
                  className="Login_role_items"
                  onClick={() => setRole("Employer")}
                >
                  Employer
                </button>
              </div>
            </div>
            <div className="Login_mail_container">
              <label className="Login_mail">
                Email:
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  name=""
                  id="Login_email"
                />
              </label>
            </div>
            <br />
            <div className="Login_pass_container">
              <label className="Login_pass">
                Password:
                <input
                  type="password"
                  placeholder="Required atleast 8 letters"
                  name=""
                  id="Login_password"
                />
              </label>
            </div>
            <div className="Login_submit">
              <input type="submit" value="Log In" />
            </div>
          </div>
        </div>
        <div className="Login_rightside">
          <h1>Welcome Back</h1>
          <h4>If you don't have an account please sign up</h4>
          <Link to="/signin">
            <button type="button" className="Login_white_btn">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
