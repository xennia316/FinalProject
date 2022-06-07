import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import SideNav from "../sidenav/SideNav";
import styles from "./wishlist.module.css";
import image from "../../images/gradient.png";

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
        <section className={`d-flex ${styles.subb}`}>
          <img src={image} className={styles.image} alt="" />
          <section className={`d-flex ${styles.sub}`}>
            <section className={styles.sub1}>
              <section>
                <p>Name</p>
                <p>Location</p>
              </section>
              <section>
                <p>Price</p>
              </section>
            </section>
            <section className={`d-flex  flex-column`}>
              <section>
                <FontAwesomeIcon icon={faTrashCan} />
              </section>
              <section>
                <button className={`btn text-light btn-info`}>Book</button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default wishList;
