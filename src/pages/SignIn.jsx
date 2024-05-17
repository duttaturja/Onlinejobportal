import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const { role, setRole } = useState("");
  return (
    <div className="Signup_container">
      <div className="Signup_form">
        <div className="Signup_leftside">
          <h1>Welcome</h1>
          <h4>If you already have an account you can always log in</h4>
          <Link to="/login">
            <button type="button" className="Signup_white_btn">
              Log In
            </button>
          </Link>
        </div>
        <div className="Signup_rightside">
          <div className="Signup_form_container">
            <h1>Create an Account</h1>
            <div className="Signup_role_container">
              <div className="Signup_roles">
                <h3>Role: {role}</h3>

                <button
                  type="button"
                  className="Signup_role_items"
                  onClick={() => {
                    console.log("turja");
                    setRole("Job Seeker");
                  }}
                >
                  Job Seeker
                </button>
                <button
                  type="button"
                  className="Signup_role_items"
                  onClick={() => setRole("Employer")}
                >
                  Employer
                </button>
              </div>
            </div>
            <div className="Signup_mail_container">
              <label className="Signup_mail">
                Email:
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  name=""
                  id="Signup_email"
                />
              </label>
            </div>
            <br />
            <div className="Signup_pass_container">
              <label className="Signup_pass">
                Password:
                <input
                  type="password"
                  placeholder="Required atleast 8 letters"
                  name=""
                  id="Signup_password"
                />
              </label>
            </div>
            <div className="Signup_submit">
              <input type="submit" value="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
