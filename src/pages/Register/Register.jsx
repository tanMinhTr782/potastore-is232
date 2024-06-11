import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

import styles from "./Register.module.css";
const Register = () => {
  const [error, setError] = useState(false);

  const onFinish = async (event) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      if (
        data.get("name") === "" ||
        data.get("email") === "" ||
        data.get("password") === "" ||
        data.get("repeat-password") === ""
      ) {
        setError(true);
      } else if (data.get("password") !== data.get("repeat-password")) {
        setError(true);
      } else {
        // Make a POST request to your registration API endpoint
        const response = await fetch("http://localhost:3001/sign-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
          }),
        });
        console.log({ response });
        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          // Registration successful, you can handle the response accordingly
          // console.log('Registration successful');
          window.location.href = "../SignIn";
        } else {
          // Registration failed, handle the error response
          const errorData = await response.json();
          // console.error('Registration failed:', errorData);
          setError(true);
        }
      }
    } catch (error) {
      // Handle network or other errors
      // console.error('Error during registration:', error);
    }
  };

  return (
    <div className={styles.right}>
      <div className={styles.centerRightContainer}>
        <div className={styles.heading}>
          <div className={styles.title}> Create An Account</div>
          <div className={styles.subtitle}>
            We sell fresh products with love
          </div>
        </div>
        <form className={styles.input} onSubmit={onFinish}>
          <div className={styles.text}>Name</div>
          <input
            className={styles.inputContainer}
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          ></input>

          <div className={styles.text}>Email</div>
          <input
            className={styles.inputContainer}
            name="email"
            type="email"
            id="email"
            placeholder="doe@example.com"
          ></input>

          <div className={styles.text}>Password</div>
          <input
            className={styles.inputContainer}
            name="password"
            id="password"
          ></input>

          <div className={styles.text}>Repeat Password</div>
          <input
            className={styles.inputContainer}
            name="repeat-password"
            id="repeat-password"
          ></input>

          <div className={styles.btn}>
            <button className={styles.createBtn} type="submit">
              {" "}
              Create Account
            </button>
          </div>
        </form>

        <div className={styles.input}>
          <div className={styles.remind}>
            Already have an account?
            <Link to="/SignIn" className={styles.link}>
              {" "}
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
