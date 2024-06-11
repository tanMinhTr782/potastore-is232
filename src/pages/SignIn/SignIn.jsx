import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ArrowForward } from "@mui/icons-material";
const SignIn = () => {
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState("");

  const onFinish = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      // Make a POST request to your login API endpoint
      const response = await fetch("http://localhost:3001/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.get("email"),
          password: data.get("password"),
        }),
      });
      if (data.get("email") === "" || data.get("password") === "")
        setLoginErr("unfilled");
      // Check if the request was successful (status code 2xx)
      else if (response.ok) {
        // Login successful, you can handle the response accordingly
        const userData = await response.json();
        // console.log('Login successful. User data:', userData);
        localStorage.setItem("username", userData.info.name);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("accountId", userData.accountId);
        localStorage.setItem("accessToken", userData.accessToken);
        if (userData.role === "Customer") {
          window.location.href = "../";
        } else if (userData.role === "DataScientist") window.location.href = "../data-scientist";
        else window.location.href = "../shop";
      } else {
        // Login failed, handle the error response
        const errorData = await response.json();
        // console.error('Login failed:', errorData);
        setLoginErr("invalid");
      }
    } catch (error) {
      // Handle network or other errors
      // console.error('Error during login:', error);
      setLoginErr("invalid");
    }
  };

  return (
    <div className={styles.right}>
      <div className={styles.centerRightContainer}>
        <div className={styles.heading}>
          <div className={styles.title}> Sign In </div>
          <div className={styles.registerRemind}>
            Don't have an account?
            <Link to="/Register" className={styles.link}>
              {" "}
              Register here
            </Link>
          </div>
        </div>
        <form className={styles.input} onSubmit={onFinish}>
          <div className={styles.text}>Email</div>
          <input
            className={styles.inputContainer}
            name="email"
            type="email"
            id="email"
            placeholder="example@example.com"
          ></input>

          <div className={styles.text}>Password</div>
          <input
            className={styles.inputContainer}
            name="password"
            id="password"
          ></input>

          <div className={styles.btn}>
            <button className={styles.createBtn}>
              Sign In <ArrowForward className={styles.arrow} />{" "}
            </button>
          </div>
        </form>
        <div className={styles.input}>
          <div className={styles.remind}>
            <Link to="/ResetPassword" className={styles.link}>
              {" "}
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
