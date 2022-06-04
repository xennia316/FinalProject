import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WishCard from "../WishCard/WishCard";

import { HotelContext } from "../../HotelContext";

import styles from "./Book.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import User from "../../../../Models/User.model";
import axios from "axios";

const BookHotel = (param) => {
  const today = new Date();
  const numberOfDaysToAdd = 1;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split("T")[0];

  const navigate = useNavigate();
  const [booked, setBooked] = useState({
    dateIn: today,
    dateOut: today,
    guests: 0,
    roomsNeeded: 0,
    // userId: localStorage.getItem(User, "user.id"),
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setBooked({
      ...booked,
      [name]: value,
    });
  };
  const checkProperties = (user) => {
    if (
      booked.dateIn === null ||
      booked.dateOut === null ||
      booked.guests === 0 ||
      booked.roomsNeeded === 0
    ) {
      alert("Please fill all input fields!");
      setBooked({ email: "", password: "" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.prevenDefault();
    if (checkProperties(booked)) {
      let result = await axios
        .post("/api/book/book-hotel", booked)
        .then((data) => data);
      if (result.status === 200) {
        console.log(result);
        localStorage.setItem("BookeddHotel", JSON.stringify(result.data.data));
        navigate("/home");
      } else {
        alert("doesn't work!");
      }
    }
  };

  const { data, showModal, setShowModal } = useContext(HotelContext);

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
                onChange={handleChanges}
                id={styles.dateRequired}
                type="date"
                value={booked.dateIn}
                min={today}
                name="dateRequired"
              />
            </div>
            <div className={styles.flex}>
              <label className={styles.label}>Check out Date:</label>
              <input
                onChange={handleChanges}
                id={styles.dateRequired}
                type="date"
                value={booked.date}
                name="dateRequired"
                min={today}
              />
            </div>
          </div>
          <div className={styles.flexer}>
            <div className={styles.flex2}>
              <label className={styles.label}>Number of guests:</label>
              <input
                onChange={handleChanges}
                id={styles.dateRequired2}
                type="number"
                value={booked.guests}
                min="1"
                placeholder="Enter a number"
              />
            </div>
            <div className={`${styles.flex2}`}>
              <label className={styles.label}>Number of Rooms:</label>
              <input
                value={booked.roomsNeeded}
                onChange={handleChanges}
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
          <button
            onClick={handleSubmit}
            className={`btn btn-warning text-light`}
          >
            {" "}
            Submit
          </button>
        </div>
      </div>
    );
  }
};

export default BookHotel;
