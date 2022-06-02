import React from "react";
import styles from "../styles/SignUp.module.css";
import logo from "../images/side-logo.png";

// Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const inputs = [
    {
      label: "Name:",
      type: "text",
      value: "name",
      name: "name",
      required: true,
      placeholder: "Please enter your name",
    },
    {
      label: "Email:",
      type: "email",
      value: "email",
      name: "email",
      required: true,
      placeholder: "Please enter your email",
    },
    {
      label: "Town:",
      type: "text",
      value: "town",
      name: "town",
      required: false,
      placeholder: "Where do you reside",
    },
    {
      label: "Password:",
      type: "password",
      value: "password",
      name: "password",
      required: true,
      placeholder: "Your password ...",
    },
  ];
  const ListInput = inputs.map((value, index) => {
    return (
      <>
        <label className={styles.label}>
          <p>{value.label}</p>
        </label>
        <input
          className={styles.input}
          type={value.type}
          placeholder={value.placeholder}
          name={value.name}
          value={value.value}
          required={value.required}
          key={index}
        />
      </>
    );
  });
  return (
    <>
      <section className={`container-fluid ${styles.body}`}>
        <section className={`container ${styles.main}`}>
          <section className={`${styles.left}`}>
            {" "}
            {/* <img src={logo} className={`${styles.image}`} /> */}
            <section className={styles.leftBottom}>
              <h3 className={styles.h3}>Sign Up</h3>
            </section>
            <form className={styles.forms}>{ListInput}</form>
            <div className={styles.lineBox}>
              <div className={styles.line}></div>
              <p className={styles.p}>OR</p>
              <FontAwesomeIcon icon="check-square" />
              <div className={styles.line}></div>
            </div>
            <section>
              <div className={`d-flex flex-column `}>
                <button
                  className={`btn btn-outline-muted btn-lg col-lg-12 p-2 col-md-8 col-sm-5 text-light  ${styles.sign}`}
                >
                  SignUp with google
                </button>
                <button
                  className={`btn btn-warning btn-lg mt-2 col-lg-12 p-2 col-md-8 col-sm-5 text-light ${styles.sign}`}
                >
                  SignUp
                </button>
                <a href="#" className={styles.a}>
                  Already have an account?
                </a>
              </div>
            </section>
          </section>
          <section className={`${styles.right}`}>
            <h1 className={styles.h1}>Welcome To Stay</h1>
            <h2 className={styles.h2}>Please enter your details</h2>
          </section>
        </section>
      </section>
    </>
  );
};

export default SignUp;
