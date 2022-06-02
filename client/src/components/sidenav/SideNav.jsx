import React from "react";

import styles from "./sideNav.module.css";

// import logo from "../../images/Flogo-side.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <>
      <section className={styles.body}>
        {/* <img src={logo} className={styles.image} /> */}
        <section className={styles.top}>
          <p className={styles.first} title="Home">
            {" "}
            <FontAwesomeIcon icon={faHome} />
          </p>
        </section>
        <section className={styles.middle}>
          <p className={styles.fourth} title="Wish list">
            {" "}
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </p>
          <p className={styles.second} title="Cantact us">
            <FontAwesomeIcon icon={faAddressCard} />
          </p>
          <p className={styles.third} title="Settings">
            {" "}
            <FontAwesomeIcon icon={faGear} />
          </p>
        </section>
        <section className={styles.bottom}>
          <p className={styles.fifth} title="Log Out">
            {" "}
            <FontAwesomeIcon icon={faDoorOpen} />
          </p>
          <p className={styles.fifth} title="Options">
            {" "}
            <FontAwesomeIcon icon={faEllipsis} />
          </p>
        </section>
      </section>
    </>
  );
};

export default SideNav;
