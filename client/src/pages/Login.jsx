import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const checkProperties = (user) => {
    if (user.email === "" || user.password === "") {
      alert("Please fill all input fields!");
      setUser({ email: "", password: "" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkProperties(user)) {
      let result = await axios
        .post("/api/user/login", user)
        .then((data) => data);
      if (result.status === 200) {
        console.log(result);
        localStorage.setItem("loggedUser", JSON.stringify(result.data.data));
        navigate("/home");
      } else {
        alert("doesn't work!");
      }
    }
  };

  return (
    <section className={`container-fluid ${styles.body}`}>
      <section className={`container ${styles.main}`}>
        <section className={`${styles.left}`}>
          <section className={styles.leftBottom}>
            <image src="../images/logo.jpg" />
            <h3 className={styles.h3}>Sign In</h3>
            <form className={styles.form}>
              <label for="name" className={styles.label}>
                <h6 className={styles.h6}>Name:</h6>{" "}
              </label>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter your name"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <label for="password" className={`text-light ${styles.label}`}>
                <h6 className={styles.h6}>Password:</h6>{" "}
              </label>
              <input
                className={styles.input}
                type={"password"}
                placeholder="Enter your password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <div className={`d-flex flex-row mt-3`}>
                <span className={`m-2 pr-1 text-muted ${styles.span}`}>
                  <a href="#" className={styles.a}>
                    Forgot password?
                  </a>
                </span>{" "}
                <span className={`m-2 pr-1`}>
                  <a href="#" className={styles.a}>
                    SignUp instead?
                  </a>
                </span>
              </div>
              <button
                onClick={handleSubmit}
                type="button"
                className={`btn-secondary btn ${styles.button}`}
              >
                Sign In
              </button>
            </form>
          </section>
        </section>
        <section className={`${styles.right}`}>
          <h1 className={styles.h1}>Welcome Back</h1>
          <h2 className={styles.h2}>Please enter your details</h2>
        </section>
      </section>
    </section>
  );
};

export default Login;
