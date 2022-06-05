import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SideNav from "../sidenav/SideNav";
import styles from "./wishlist.module.css";

const wishList = () => {
  return (
    <section className={`d-flex ${styles.all}`}>
      <section>
        <SideNav />
      </section>
      <section className={`${styles.top}`}>
        <section className={`d-flex justify-space-between ${styles.heading}`}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <h4>WishList</h4>
          <FontAwesomeIcon icon={faSearch} />
        </section>
        <section>
          <img />
        </section>
      </section>
    </section>
  );
};

export default wishList;
