import React from "react";
import styles from "../styles/login.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
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
                type={"text"}
                placeholder="Enter your name"
                name="name"
                required
              />
              <label for="password" className={`text-light ${styles.label}`}>
                <h6 className={styles.h6}>Password:</h6>{" "}
              </label>
              {/* <FontAwesomeIcon icon={faLock} className={styles.f} />{" "} */}
              <input
                className={styles.input}
                type={"password"}
                placeholder="Enter your password"
                name="password"
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
