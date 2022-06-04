import React from "react";
// import { useState } from "react";

import styles from "./sideNav.module.css";

// import logo from "../../images/Flogo-side.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideNav = () => {
  // const [toggle, settoggle] = useState(false);

  // handleClick = () => {
  //   toggle(true);
  //   settoggle(false);
  // };

  return (
    <>
      <section className={styles.body}>
        {/* <img src={logo} className={styles.image} /> */}
        <section className={styles.top}>
          <p className={styles.first} title="Home">
            {" "}
            <Link to="/home">
              <FontAwesomeIcon icon={faHome} className={styles.link} />
            </Link>
          </p>
        </section>
        <section className={styles.middle}>
          <p className={styles.fourth} title="Wish list">
            {" "}
            <Link to="/wishlist" className={styles.link}>
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </Link>
          </p>
          <p className={styles.second} title="Cantact us">
            <Link to="/contactus" className={styles.link}>
              <FontAwesomeIcon icon={faAddressCard} />
            </Link>
          </p>
          <p className={styles.third} title="Settings">
            {" "}
            <FontAwesomeIcon icon={faGear} />
          </p>
        </section>
        <section className={styles.bottom}>
          <p className={`${styles.fifth} ${styles.near}`} title="Log Out">
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
