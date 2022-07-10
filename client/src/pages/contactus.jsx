import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../components/sidenav/SideNav";

const contactus = () => {
  // const navigate = useNavigate();

  const inputs = [
    {
      label: "Name:",
      type: "text",
      name: "name",
      required: true,
      placeholder: "Please enter your name",
    },
    {
      label: "Email:",
      type: "email",
      name: "email",
      required: true,
      placeholder: "Please enter your email",
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
    <div className={`container ${styles.main}`}>
      <SideNav />
      <section className={`${styles.left}`}>
        {" "}
        {/* <img src={logo} className={`${styles.image}`} /> */}
        <section className={styles.leftBottom}>
          <h3 className={styles.h3}>Say hello</h3>
        </section>
        <form className={styles.forms}>
          {ListInput}
          <textarea
            className={styles.textarea}
            placeholder="Enter you message here"
          />
        </form>
        <div className={styles.lineBox}>
          <div className={styles.line}></div>
          <FontAwesomeIcon icon="check-square" />
          <div className={styles.line}></div>
        </div>
        <section>
          <div className={`d-flex flex-column `}>
            <button
              className={`btn btn-outline-muted btn-lg col-lg-12 p-2 col-md-8 col-sm-5 text-light  ${styles.sign}`}
            >
              Send
            </button>

            <button
              className={`btn btn-warning btn-lg mt-2 col-lg-12 p-2 col-md-8 col-sm-5 text-light ${styles.sign}`}
            >
              Send Message
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default contactus;
