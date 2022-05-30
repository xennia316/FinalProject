import React from "react";
import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <section className={`container-fluid ${styles.body}`}>
      <section className={`container ${styles.main}`}>
        <section className={`${styles.left}`}>
          <section className={`left-bottom`}>
            <h3>Sign In</h3>
            <form>
              <label for="name">
                <h6>Name:</h6>{" "}
              </label>
              <input
                type={"text"}
                placeholder="Enter your name"
                name="name"
                required
              />
              <label for="password" className={`text-light`}>
                <h6>Password:</h6>{" "}
              </label>
              <input
                type={"password"}
                placeholder="Enter your password"
                name="password"
                required
              />
              <div className={`d-flex flex-row mt-3`}>
                <span className={`m-2 pr-1 text-muted`}>
                  <a href="#">Forgot password?</a>
                </span>{" "}
                <span className={`m-2 pr-1`}>
                  <a href="#">SignUp instead?</a>
                </span>
              </div>

              <button type="button" class={`btn-outline-secondary btn p-2 m-5`}>
                <h5>Sign In</h5>
              </button>
            </form>
          </section>
        </section>
        <section className={`${styles.right}`}>
          <h1>Welcome Back</h1>
          <h2>Please enter your details</h2>
        </section>
      </section>
    </section>
  );
};

export default Login;
