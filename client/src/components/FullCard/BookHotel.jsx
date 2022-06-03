import React, { useContext, useEffect } from "react";
import WishCard from "../WishCard/WishCard";

import { HotelContext } from "../../HotelContext";

import styles from "./Book.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const BookHotel = (param) => {
  const { data, showModal, setShowModal } = useContext(HotelContext);

  const today = new Date();
  const numberOfDaysToAdd = 1;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0];

  if (!showModal) {
    console.log("Modal not ready");
    return null;
  } else {
    console.log(data);
    return (
      <div className={styles.modal}>
        <div className={styles.main}>
          <div className={`d-flex ${styles.wishCard}`}>
            <WishCard
              param={{
                name: data.name,
                location: data.location,
                image: data.image,
                price: data.price,
              }}
            />
            <button
              className={`btn btn-outline-warning ${styles.icon}`}
              onClick={() => setShowModal(false)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          <div className={styles.flexer}>
            <div className={styles.flex}>
              <label className={styles.label}>Check In date:</label>
              <input
                id={styles.dateRequired}
                type="date"
                min={today}
                name="dateRequired"
                defaultValue={defaultValue}
              />
            </div>
            <div className={styles.flex}>
              <label className={styles.label}>Check out Date:</label>
              <input
                id={styles.dateRequired}
                type="date"
                name="dateRequired"
                min={today}
                defaultValue={defaultValue}
              />
            </div>
          </div>
          <div className={styles.flexer}>
            <div className={styles.flex2}>
              <label className={styles.label}>Number of guests:</label>
              <input
                id={styles.dateRequired2}
                type="number"
                min="1"
                placeholder="Enter a number"
              />
            </div>
            <div className={`${styles.flex2}`}>
              <label className={styles.label}>Number of Rooms:</label>
              <input
                id={styles.dateRequired2}
                type="number"
                min="1"
                placeholder="Enter a number"
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <h4 className={styles.textBig}>Contact Details</h4>
            <h5 className={styles.text}>Contact Details</h5>
            <select className={styles.select}>
              <option className={styles.option}>Paypal</option>
              <option lassName={styles.option}>Momo</option>
              <option lassName={styles.option}>Orange Money</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
};

export default BookHotel;
