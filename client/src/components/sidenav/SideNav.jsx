import React from "react";

import styles from "./sideNav.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { faListDots } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <>
      <section className={styles.body}>
        <section className={styles.top}>
          <p className={styles.first}>
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </p>

          <span className={styles.span}>Home</span>
        </section>
        <section className={styles.middle}>
          <p className={styles.second}>
            <FontAwesomeIcon icon={faSearch} />
            <span className={styles.span}> Search by name</span>
          </p>
          <p className={styles.third}>
            {" "}
            <FontAwesomeIcon icon={faSearchLocation} />
            <span className={styles.span}>Search by town</span>
          </p>
          <p className={styles.fourth}>
            {" "}
            <FontAwesomeIcon icon={faStarAndCrescent} />
            <span className={styles.span}>WishList</span>
          </p>
        </section>
        <section className={styles.bottom}>
          <p className={styles.five} title="Options">
            {" "}
            <FontAwesomeIcon icon={faListDots} />
          </p>
          <span className={styles.span}>Options</span>
        </section>
      </section>
    </>
  );
};

export default SideNav;
