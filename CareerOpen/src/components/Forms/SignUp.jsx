import { useState } from "react";
import { Link } from "react-router-dom";
import './forms.css';
import logo from "../../assets/logo.svg";
import googleLogo from "../../assets/Google.svg";
import groupLogo from "../../assets/Group93105.svg";
import arrowLeft from "../../assets/arrow-left.svg";

function Group() {
  return <img src={groupLogo} className="image" alt="frame" />;
}

function Arrow() {
  return <img src={arrowLeft} className="image" alt="frame" />;
}

function Logo() {
  return <img src={logo} className="image" alt="frame" />;
}

function Google() {
  return <img src={googleLogo} className="image" alt="frame" />;
}

function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    let item = { email, password };
    console.warn(item);

    let result = await fetch("https://careeropen.onrender.com", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
  }

  return (
    <div>
      <div className="container">
        <div className="sign-up-side">
          <div className="back">
          <Link to={"../"} >
            <Arrow /> <span>Back</span>
            </Link>
          </div>
          <div className="step-img">
            <Group className="img" />
          </div>
          <div className="sign-up-side-text">
            <p>One-Stop Application Tracking Hub</p>
            <p>
              Keep tabs on every role you applied for, all in one convenient
              location
            </p>
          </div>
        </div>
        <div className="sign-up-form">
          <div className="sign-up-head">
            <div className="logo">
              <Logo />
            </div>
            <div className="sign-up">
              <p>Sign Up</p>
              <p>Activate Your Job Search Journey</p>
            </div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Google />
            </a>
          </div>

          <div className="or">
            <span>Or</span>
          </div>
          <div className="form">
            <form action="" method="get">
              <div className="name">
                <div className="name-1">
                  <label htmlFor="first-name">First Name</label>

                  <input
                    type="text"
                    name="first-name"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="first-name"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="name-2">
                  <label htmlFor="last-name">Last Name</label>

                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter your Last Name"
                  />
                </div>
              </div>
              <div className="email-address">
                <label htmlFor="email">Email Address</label>

                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="confirm-password">
                <label htmlFor="confirm-password">Confirm Password</label>

                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-btn">
                <button type="button" onClick={signUp} value="Sign Up">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="content-bottom">
            <p>
              Already have an account? <Link to={"../signin"}><span>Sign In</span></Link> 
            </p>
            <p>
              By clicking &quot;Sign Up&quot; above you agree to our{" "}
              <span>
                <a href="http://">Terms of Use and Privacy Policy</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
